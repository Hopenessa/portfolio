import { useState } from "react";
import {
    HeaderNav,
    HeaderWrapper,
    HeaderNavItem
} from "./Header.styles";

const items = ["HOME", "ABOUT ME", "SKILLS", "PROJECTS", "CONTACTS"];

export default function Header(): JSX.Element {
    const [active, setActive] = useState("HOME");

    return (
        <HeaderWrapper>
            <HeaderNav>
                {items.map((item) => (
                    <HeaderNavItem
                        key={item}
                        $active={active === item}
                        onClick={() => setActive(item)}
                    >
                        {item}
                    </HeaderNavItem>
                ))}
            </HeaderNav>
        </HeaderWrapper>
    );
}