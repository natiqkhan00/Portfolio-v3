import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {

    }

    body {
        margin: 0;
        padding: 0;
        background-color: #fff;
        color: #444452;
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
    color: #007bff;
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
