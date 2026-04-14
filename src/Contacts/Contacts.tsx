import {
    ContactsSection,
    ContactsTitle,
    FormWrapper,
    FormRow,
    FormLabel,
    Input,
    Textarea,
    ContactsButton
} from "./Contacts.styles";

export default function Contacts(): JSX.Element {
    return (
        <ContactsSection>
            <ContactsTitle>Contact me</ContactsTitle>

            <FormWrapper>
                <FormRow>
                    <FormLabel>Email</FormLabel>
                    <Input type="text" />
                </FormRow>

                <FormRow>
                    <FormLabel>Subject</FormLabel>
                    <Input type="text" />
                </FormRow>

                <FormRow>
                    <FormLabel>Content</FormLabel>
                    <Textarea />
                </FormRow>

                <ContactsButton>Send</ContactsButton>
            </FormWrapper>
        </ContactsSection>
    );
}