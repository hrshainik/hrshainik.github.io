import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins', sans-serif;
    src: url(${"https://fonts.googleapis.com/css2?family=Hachi+Maru+Pop&family=Poppins:wght@400;500;600;700&display=swap"}) format('woff2'),
  }

  :root {
    --primary: #E2C792;
    --bgOne: #0F0F10;
    --bgTwo: #161717;
    --white: #fff;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ::selection {
    color: white;
    background-color: var(--primary);
  }

  html {
    font-size: 10px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--bgOne);
    color: var(--white);
    display: flex;
    justify-content: center;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      width: 1em;
    }

    ::-webkit-scrollbar-track {
      background-color: #606060;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--primary);
    }
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;
