import './App.css'
import Preview from "./Сomponents/Preview/Preview.tsx";
import Header from "./Сomponents/Header/Header.tsx";
import Description from "./Сomponents/Description/Description.tsx";
import Skills from "./Сomponents/Skills/Skills.tsx";
import {GlobalStyle} from "./styles/GlobalStyles.ts";
import Footer from "./Сomponents/Footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header/>
            <Preview/>
            <Skills/>
            <Description/>
            <Footer/>
        </div>
    )
}

export default App




