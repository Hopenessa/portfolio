import {
    ContactsSection,
    ContactsTitle,
    FormWrapper,
    FormLabel,
    Input,
    Textarea
} from "./Contacts.styles.ts";
import {Button} from "../Shared/Button.ts";

export default function Contacts(): JSX.Element {
    return (
        <ContactsSection>
            <ContactsTitle>Contact me</ContactsTitle>

            <FormWrapper>
                <FormLabel>Email :</FormLabel>
                <Input $row={1} />

                <FormLabel>Subject :</FormLabel>
                <Input $row={2} />

                <FormLabel>Content :</FormLabel>
                <Textarea />
            </FormWrapper>
            <Button>Send</Button>
        </ContactsSection>
    );
}