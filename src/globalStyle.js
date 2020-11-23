import styled, { createGlobalStyle } from "styled-components"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;500;700&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira Sans', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: ${props => props.theme.darkMode ? theme.colors.darkBackground : theme.colors.whitish};
        color: ${props => props.theme.darkMode ? theme.colors.light : theme.colors.dark};
        line-height: 1.5;
        width: 100%;
        box-sizing: inherit;
    }

    a {
        transition: all .2s ease-in-out;
        text-decoration: none;
        font-weight: 700;
        color: inherit;
    }

    ::selection {
        background: ${theme.colors.selection};
        color: ${props => props.theme.darkMode && theme.colors.selectionTextDark};
    }
`

export const Section = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 170px;

    @media (max-width: 480px) {
        padding: 20px 15px;
    }

    @media (max-width: 768px) {
        display: block;
    }

    @media (max-width: 1024px) {
        padding: 25px;
    }
`

export const SectionTitle = styled.div`
    flex-shrink: 0;
    width: 200px;
    margin-right: 70px;
    color: ${() => theme.colors.primary};
    text-transform: uppercase;
    text-align: right;
    font-weight: 700;
    letter-spacing: 2px;

    @media (max-width: 768px) {
        text-align: left;
        width: auto;
    }

    @media (max-width: 1024px) {
        margin-right: 30px;
    }
`

export const SectionContent = styled.div`
    font-weight: 300;
    font-size: 1rem;
    width: 100%;
    max-width: 650px;

    @media (max-width: 480px) {
        padding-left: 20px;
    }

    @media (max-width: 768px) {
        padding-top: 20px;
    }
`

export default GlobalStyle
