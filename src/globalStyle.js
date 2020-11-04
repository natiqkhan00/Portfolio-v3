import styled, { createGlobalStyle } from "styled-components"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        padding: 0;
        background-color: ${props => props.theme.darkMode ? theme.colors.darkBackground : theme.colors.whitish};
        color: ${props => props.theme.darkMode ? theme.colors.light : theme.colors.dark};
        font-family: Apercu,"Source Sans Pro",system,system-ui,-apple-system,BlinkMacSystemFont,Roboto,Helvetica,Arial,sans-serif;
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

    ::-moz-selection { /* Code for Firefox */
        background: #ffdc00;
    }

        ::selection {
        background: #ffdc00;
    }
`

export const Section = styled.div`
    display: flex;
    justify-content: center;
    padding: 100px 170px;
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
`

export const SectionContent = styled.div`
    font-weight: 300;
    font-size: 1rem;
    width: 100%;
    max-width: 650px;
`

export default GlobalStyle
