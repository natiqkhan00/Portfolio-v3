import styled from 'styled-components'
import theme from '../../theme'

export const SwitchWrapper = styled.div`
    display: flex;
    position: absolute;
    top: 20px;
    right: 30px;
`

export const Toggler = styled.div`
    margin: 2px 5px;
`

export const IntroHeader = styled.header`
    padding: 120px 100px;
    height: 77vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 1440px;
    margin: 0 auto;
`
export const IntroTitle = styled.h1`
    font-weight: 300;
    font-size: 2.5rem;
`

export const IntroTagLine = styled.h2`
    font-weight: 300;
    max-width: 700px;
`

export const IntroContact = styled.h3`
    font-size: 1.25rem;
    font-weight: 400;
`

export const ContactLink = styled.a`
    transition: all .3s ease-in-out;
    font-weight: 400;
    text-decoration: none;
    display: inline-block;
    padding: 2px 3px;
    text-decoration: none;
    box-shadow: inset 0 -3px 0 ${() => theme.colors.primary};
    color: ${props => props.theme.darkMode ? theme.colors.light : theme.colors.dark};

    &:hover {
        box-shadow: inset 0 -30px 0 ${() => theme.colors.primary};
        color: ${props => props.theme.darkMode ? theme.colors.light : theme.colors.dark};
    }
`