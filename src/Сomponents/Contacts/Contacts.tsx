import emailjs from '@emailjs/browser';
import {
    ContactsSection,
    ContactsLinks,
    ContactsItem,
    ContactsLink, FormGroup, ContactsIntro, FormStatus
} from "./Contacts.styles.ts";

import {Icon} from "../sprites/Icon.tsx";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import {ContactsTitle, FormWrapper, FormLabel, Input, Textarea} from "./Contacts.styles.ts";
import {Button} from "../Shared/Button.ts";
import React, {ElementRef, useRef, useState} from "react";
import {useTypingPlaceholders} from "./useTypingPlaceholders.ts";

const icons = [
    {
        id: "telegramSvg",
        label: "Telegram",
        url: "https://t.me/persik_redhead"
    },
    {
        id: "whatsappSvg",
        label: "WhatsApp",
        url: "https://wa.me/79957875078"
    },
    {
        id: "githubSvg",
        label: "GitHub",
        url: "https://github.com/Hopenessa"
    }
];


export default function Contacts(): JSX.Element {
    const form = useRef<ElementRef<'form'>>(null);
    const {placeholders, finishField} = useTypingPlaceholders(form);
    const sending = useRef(false);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current || sending.current) return;

        const message = form.current.elements.namedItem('message') as HTMLTextAreaElement;
        message.setCustomValidity(message.value.trim() ? '' : 'Please enter a message.');
        if (!form.current.reportValidity()) return;

        sending.current = true;
        setStatus('sending');

        emailjs
            .sendForm('service_wsckydz', 'template_l29kb6x', form.current, {
                publicKey: '8SZ6d6Z1Pek5Buu5Q',
            })
            .then(
                () => {
                    setStatus('success');
                    form.current?.reset();
                },
                () => {
                    setStatus('error');
                }
            ).finally(() => {
                sending.current = false;
            });
    }
    return (
        <ContactsSection id="contacts">
            <Container>
                    <FlexWrapper $direction="column">
                        <ContactsTitle>Contact me</ContactsTitle>
                        <ContactsIntro>Have a project in mind? I’d love to hear about it. Use the form below or message me on Telegram or WhatsApp — whichever works best for you.</ContactsIntro>
                        <FormWrapper ref={form} onSubmit={sendEmail} aria-busy={status === 'sending'}>
                            <FormGroup>
                                <FormLabel htmlFor="contact-email">Email (required)</FormLabel>
                                <Input id="contact-email" type="email" autoComplete="email" placeholder={placeholders.email} onFocus={() => finishField('email')} onInput={() => finishField('email')} name="email" required readOnly={status === 'sending'}/>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel htmlFor="contact-name">Name (optional)</FormLabel>
                                <Input id="contact-name" autoComplete="name" placeholder={placeholders.name} onFocus={() => finishField('name')} onInput={() => finishField('name')} name="name" readOnly={status === 'sending'}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel htmlFor="contact-message">Message (required)</FormLabel>
                                <Textarea id="contact-message" placeholder={placeholders.message} onFocus={() => finishField('message')} onInput={() => finishField('message')} name="message" required readOnly={status === 'sending'} onChange={(event) => event.currentTarget.setCustomValidity('')}/>
                            </FormGroup>
                            <Button type="submit" disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending…' : 'Send message'}
                            </Button>
                            <FormStatus role="status" aria-live="polite" aria-atomic="true" $isError={status === 'error'}>
                                {status === 'success' && 'Message sent successfully. Thank you for getting in touch!'}
                                {status === 'error' && 'Something went wrong. Please try again or contact me via Telegram or WhatsApp.'}
                            </FormStatus>
                        </FormWrapper>

                        <ContactsLinks>
                            {icons.map(({id, url, label}) => (
                                <ContactsItem key={id}>
                                    <ContactsLink href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                                        <Icon
                                            id={id}
                                            width={40}
                                            height={40}
                                            viewBox="0 0 16 16"
                                            iconHover="visible"
                                            iconColor="#FFFFFF5F"
                                        />
                                    </ContactsLink>
                                </ContactsItem>
                            ))}
                        </ContactsLinks>
                    </FlexWrapper>
            </Container>
        </ContactsSection>
    );
}


