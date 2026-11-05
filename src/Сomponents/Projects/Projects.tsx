import {ProjectSection, ProjectsGrid, ProjectsTitle} from "./Projects.styles.ts";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";
import {Card} from "../Shared/Card/Card.tsx";
import FilmTheatreImage from "../../assets/images/FilmTheatrePortfolio.webp";
import GoldenMustangImage from "../../assets/images/GoldenMustangStudio.webp";
import WoodlandKreaturesImage from "../../assets/images/WoodlandKreatures.webp";
import {Fade} from "react-awesome-reveal";

const projects = [
    {
        image: GoldenMustangImage,
        title: "Golden Mustang Studio",
        description: "A custom tattoo artist’s portfolio, designed and built from scratch with a complete appointment management system. Features a responsive layout, an interactive gallery, session booking, consultation requests, and live availability. Includes a secure admin dashboard and a Telegram bot for booking notifications, confirmations, rescheduling, and reminders.",
        liveUrl: "https://goldenmustangstudio.com/",
        codeUrl: "https://github.com/Hopenessa/tattoo-studio-fullstack-demo",
        liveLabel: "Live Website",
        codeLabel: "View Demo Code",
        codeNote: "Links to the demo repository."
    },
    {
        image: WoodlandKreaturesImage,
        title: "Woodland Kreatures",
        description: "A portfolio website for an art doll creator, designed and built from scratch around an enchanted woodland theme. Features a custom background created specifically for the project, softly twinkling fireflies, an automatic gallery, and an image viewer with keyboard navigation. Includes a responsive layout and mobile navigation.",
        techStack: "React, TypeScript, styled-components, Vite.",
        liveUrl: "https://hopenessa.github.io/Woodland_Kreatures/",
        codeUrl: "https://github.com/Hopenessa/Woodland_Kreatures"
    },
    {
        image: FilmTheatreImage,
        title: "Film & Theatre Portfolio",
        description: "A portfolio for a film and theatre director and writer, designed and built from scratch with a cinematic graphite-and-gold palette. Features a responsive layout, an interactive film showcase, and a PDF script reader with fullscreen viewing, zoom, and reading adjustments. Includes subtle animations, keyboard navigation, screen reader support, and SEO metadata.",
        techStack: "React, TypeScript, styled-components, Vite, PDF.js.",
        liveUrl: "https://hopenessa.github.io/grace_films_portfolio/",
        codeUrl: "https://github.com/Hopenessa/grace_films_portfolio"
    },

];


export default function Projects(): JSX.Element {
    return (
        <ProjectSection id="projects">
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
