type ProjectCardProps = {
    image: string;
    title: string;
    description: string;
    techStack?: string;
    liveUrl: string;
    codeUrl: string;
    liveLabel?: string;
    codeLabel?: string;
    codeNote?: string;
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
                         techStack,
                         liveUrl,
                         codeUrl,
                         liveLabel = "Live Preview",
                         codeLabel = "View Code",
                         codeNote
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
                {techStack && <CardText style={{ marginTop: "16px" }}>Tech stack: {techStack}</CardText>}

                <CardLinks>
                    <CardLink href={liveUrl} target="_blank" rel="noopener noreferrer">
                        <Icon id="linkSvg" width={20} height={20} viewBox="0 0 16 16" iconColor="#ff9200" iconHover="none"/>
                        {liveLabel}
                    </CardLink>

                    <CardLink href={codeUrl} target="_blank" rel="noopener noreferrer" title={codeNote}>
                        <Icon id="githubSvg" width={20} height={20} viewBox="0 0 16 16" iconColor="#ff9200" iconHover="none"/>
                        {codeLabel}
                    </CardLink>
                </CardLinks>
            </CardBody>
        </CardSection>
    );
};
