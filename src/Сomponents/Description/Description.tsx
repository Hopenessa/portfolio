import {
    DescriptionSection,
    DescriptionTitle,
    DescriptionText
} from "./Description.styles.ts";
import {Frame} from "../sprites/Frame.tsx";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";

export default function Description(): JSX.Element {
    return (
        <DescriptionSection>
                <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={false} flippedHorizontal={true} Top="-1px"/>
            <Container>

                <FlexWrapper $direction="column">
            <DescriptionTitle>About me</DescriptionTitle>
            <DescriptionText>
                The long barrow was built on land previously inhabited in the Mesolithic period.
                It consisted of a sub-rectangular earthen tumulus, estimated to have been
                15 metres (50 feet) in length, with a chamber built from sarsen megaliths
                on its eastern end. Both inhumed and cremated human remains were placed
                within this chamber during the Neolithic period, representing at least
                nine or ten individuals.
            </DescriptionText>

                </FlexWrapper>
                    <Frame id="Frame" viewBox="0 0 1894 74" svgColor="#07070f" isLookUp={true} flippedHorizontal={false} Bottom="-1px"/>
            </Container>

        </DescriptionSection>
    );
}