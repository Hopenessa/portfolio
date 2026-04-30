import './App.css'
import Preview from "./Сomponents/Preview/Preview.tsx";
import Header from "./Сomponents/Header/DesktopMenu/Header.tsx";
import Description from "./Сomponents/Description/Description.tsx";
import Skills from "./Сomponents/Skills/Skills.tsx";
import {GlobalStyle} from "./styles/GlobalStyles.ts";
import Footer from "./Сomponents/Footer/Footer.tsx";
import Projects from "./Сomponents/Projects/Projects.tsx";
import BurgerHeader from "./Сomponents/Header/MobileMenu/BurgerHeader.tsx";
import GoTopButton from "./Сomponents/GoTopButton/GoTopButton.tsx";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header/>
            <BurgerHeader/>
            <Preview/>
            <Projects/>
            <Skills/>
            <Description/>
            <Footer/>
            <GoTopButton/>
        </div>
    )
}

export default App




