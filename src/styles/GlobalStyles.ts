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
        background: #0d0e1b;
        color: #fff;
        font-family: 'Montserrat', sans-serif;
    }

    a {
        text-decoration: none;  //убираем подчеркивание ссылок по умолчанию
        color: inherit; //ссылка теперь берет цвет родителя, а не дефолтно синяя
    }

    button {
        font-family: inherit; //берет шрифт из body
    }
    
`;