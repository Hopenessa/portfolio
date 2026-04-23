import {useState} from "react";
import {
    HeaderNav,
    HeaderWrapper,
    HeaderNavItem,
    HeaderNavList,
} from "./Header.styles.ts";
import {Container} from "../Shared/Container.ts";
import {FlexWrapper} from "../Shared/FlexWrapper.ts";


const items = ["HOME", "ABOUT ME", "SKILLS", "CONTACTS"];

export default function Header(): JSX.Element {
    const [active, setActive] = useState("HOME");

    return (
        <HeaderWrapper>
            <Container>
                <FlexWrapper $direction="row">
                    <HeaderNav>
                        <HeaderNavList>
                            {items.map((item) => (
                                <li key={item}>
                                    <HeaderNavItem
                                        $active={active === item}
                                        onClick={() => setActive(item)}
                                    >
                                        {item}
                                    </HeaderNavItem>
                                </li>
                            ))}
                        </HeaderNavList>
                    </HeaderNav>
                </FlexWrapper>
            </Container>
        </HeaderWrapper>
    );
}