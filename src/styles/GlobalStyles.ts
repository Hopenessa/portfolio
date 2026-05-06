import { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: border-box; //чтобы все padding и border оставались внутри ширины контейнера, а не добавлялись к нему
    }

    html {
        font-size: 100%; //берет размер шрифта из системы
    }
    

    body {
        margin: 0; //убираем отступы которые может добавить браузер по умолчанию
        padding: 0;
        background: #07070f;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
    }

    a {
        text-decoration: none;  //убираем подчеркивание ссылок по умолчанию
        color: inherit; //ссылка теперь берет цвет родителя, а не дефолтно синяя
    }
    
    h1, h2, h3, h4, h5, h6, p, span {
        margin: 0;
        padding: 0;
    }

    button {
        font-family: inherit; //берет шрифт из body
    }

    &::placeholder {
        font-family: Montserrat, sans-serif;
        font-size: 1rem;
        color: rgba(255, 255, 255, 0.5);
    }
`;