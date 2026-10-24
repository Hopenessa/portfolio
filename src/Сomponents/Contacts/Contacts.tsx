import emailjs from '@emailjs/browser';
import {
    ContactsSection,
    ContactsLinks,
    ContactsItem,
    ContactsLink, FormGroup
} from "./Contacts.styles.ts";

import {Icon} from "../sprites/Icon.tsx";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import {ContactsTitle, FormWrapper, FormLabel, Input, Textarea} from "./Contacts.styles.ts";
import {Button} from "../Shared/Button.ts";
import React, {ElementRef, useRef} from "react";
import {Slide} from "react-awesome-reveal";

const icons = [
    {
        id: "githubSvg",
        url: "https://github.com/Hopenessa"
    },
    {
        id: "telegramSvg",
        url: "https://t.me/persik_redhead"
    },
    {
        id: "whatsappSvg",
        url: "https://wa.me/89957875078"
    }
];


export default function Contacts(): JSX.Element {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_wsckydz', 'template_l29kb6x', form.current, {
                publicKey: '8SZ6d6Z1Pek5Buu5Q',
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    form.current?.reset();
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
            );
    }
    return (
        <ContactsSection id="contacts">
            <Container>
                <Slide triggerOnce={true} direction={"up"}>
                    <FlexWrapper $direction="column">
                        <ContactsTitle>Contact me</ContactsTitle>
                        <FormWrapper ref={form} onSubmit={sendEmail}>
                            <FormGroup>
                                <FormLabel>Email :</FormLabel>
                                <Input placeholder="example@gmail.com" name={'email'}/>
                            </FormGroup>

                            <FormGroup>
                                <FormLabel>Name :</FormLabel>
                                <Input placeholder="Mr. Example" name={'name'}/>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel>Message :</FormLabel>
                                <Textarea placeholder="Let’s work together!" name={'message'}/>
                            </FormGroup>
                            <Button type="submit">Send message</Button>
                        </FormWrapper>

                        <ContactsLinks>
                            {icons.map(({id, url}) => (
                                <ContactsItem key={id}>
                                    <ContactsLink href={url} target="_blank" rel="noopener noreferrer">
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
                </Slide>
            </Container>
        </ContactsSection>
    );
}


