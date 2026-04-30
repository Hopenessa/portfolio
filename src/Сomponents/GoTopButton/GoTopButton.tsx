import { useEffect, useState } from "react";
import {
    GoTopButtonWrapper
} from "./GoTopButton.styles.ts";

import { Icon } from "../sprites/Icon.tsx";

export default function GoTopButton(): JSX.Element {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (!isVisible) return <></>;

    return (
        <GoTopButtonWrapper onClick={scrollToTop}>
            <Icon
                id="arrowUpSvg"
                width={28}
                height={28}
                viewBox="0 0 16 16"
                iconColor="#ffffff"
                iconHover="none"
            />
        </GoTopButtonWrapper>
    );
}