import './App.css'
import Preview from "./Сomponents/Preview/Preview.tsx";
import Header from "./Сomponents/Header/Header.tsx";
import Description from "./Сomponents/Description/Description.tsx";
import Skills from "./Сomponents/Sckills/Skills.tsx";
import Contacts from "./Сomponents/Contacts/Contacts.tsx";
import {GlobalStyle} from "./styles/GlobalStyles.ts";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Header/>
            <Preview/>
            <Description/>
            <Skills/>
            <Contacts/>
        </div>
    )
}

export default App




