import emailjs from '@emailjs/browser';
import {
    FooterSection,
    FooterLinks,
    FooterItem,
    FooterLink, FormGroup
} from "./Footer.styles.ts";

import {Icon} from "../sprites/Icon.tsx";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import {FooterTitle, FormWrapper, FormLabel, Input, Textarea} from "./Footer.styles.ts";
import {Button} from "../Shared/Button.ts";
import {ElementRef, useRef} from "react";

const icons = [
    {
        id: "githubSvg",
        url: "https://github.com/Hopenesa"
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


export default function Footer(): JSX.Element {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if (!form.current) return

        emailjs
            .sendForm('service_wsckydz', 'template_l29kb6x', form.current, {
                publicKey: '8SZ6d6Z1Pek5Buu5Q',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    }
        return (
            <FooterSection id="contacts">
                <Container>
                    <FlexWrapper $direction="column">
                        <FooterTitle>Contact me</FooterTitle>
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

                        <FooterLinks>
                            {icons.map(({id, url}) => (
                                <FooterItem key={id}>
                                    <FooterLink href={url} target="_blank" rel="noopener noreferrer">
                                        <Icon
                                            id={id}
                                            width={40}
                                            height={40}
                                            viewBox="0 0 16 16"
                                            iconHover="visible"
                                            iconColor="#FFFFFF5F"
                                        />
                                    </FooterLink>
                                </FooterItem>
                            ))}
                        </FooterLinks>
                    </FlexWrapper>
                </Container>
            </FooterSection>
        );
    }


