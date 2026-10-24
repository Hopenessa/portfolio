import {ProjectSection, ProjectsGrid, ProjectsTitle} from "./Projects.styles.ts";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import { Card } from "../Shared/Card/Card.tsx";
import Image from "../../assets/images/CardImage.webp"
import GoldenMustangImage from "../../assets/images/GoldenMustangStudio.webp";
import { Fade } from "react-awesome-reveal";

const projects = [
    {
        image: GoldenMustangImage,
        title: "Golden Mustang Studio",
        description: "A tattoo artist’s portfolio designed and built from scratch, with custom image editing and background replacement to match the visual style. Features a responsive layout, an interactive gallery, subtle animations, and optimized images.",
        techStack: "React, TypeScript, styled-components, Vite.",
        liveUrl: "https://hopenessa.github.io/Portfolio_Grace_Darling/",
        codeUrl: "https://github.com/Hopenessa/Portfolio_Grace_Darling"
    },
    {
        image: Image,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        liveUrl: "#",
        codeUrl: "#"
    },
    {
        image: Image,
        title: "Project Tile goes here",
        description: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        liveUrl: "#",
        codeUrl: "#"
    },

];



export default function Projects(): JSX.Element {
    return (
        <ProjectSection id = "projects">
            <Container>
                <FlexWrapper $direction="column">
                    <ProjectsTitle>Projects</ProjectsTitle>
                    <ProjectsGrid>
                        <Fade cascade
                              damping={0.2}
                              duration={700}
                              triggerOnce>
                        {projects.map((project, i) => (
                            <Card key={i} {...project} />
                        ))}
                        </Fade>
                    </ProjectsGrid>
                </FlexWrapper>
            </Container>
        </ProjectSection>
    );
}
