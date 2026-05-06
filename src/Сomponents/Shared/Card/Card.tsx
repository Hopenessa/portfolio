type ProjectCardProps = {
    image: string;
    title: string;
    description: string;
    liveUrl: string;
    codeUrl: string;
};

import {
    CardSection,
    CardImage,
    CardBody,
    CardTitle,
    CardText,
    CardLinks,
    CardLink,
    ImageLink
} from "./Card.styles.ts";

import {Icon} from "../../sprites/Icon.tsx";

export const Card = ({
                         image,
                         title,
                         description,
                         liveUrl,
                         codeUrl
                     }: ProjectCardProps): JSX.Element => {
    return (
        <CardSection>
            <ImageLink  href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer">
            <CardImage src={image} alt={title}/>

            </ImageLink>

            <CardBody>
                <CardTitle>{title}</CardTitle>

                <CardText>{description}</CardText>

                <CardLinks>
                    <CardLink href={liveUrl}>
                        <Icon id="linkSvg" width={20} height={20} viewBox="0 0 16 16" iconColor="#ff9200" iconHover="none"/>
                        Live Preview
                    </CardLink>

                    <CardLink href={codeUrl}>
                        <Icon id="githubSvg" width={20} height={20} viewBox="0 0 16 16" iconColor="#ff9200" iconHover="none"/>
                        View Code
                    </CardLink>
                </CardLinks>
            </CardBody>
        </CardSection>
    );
};