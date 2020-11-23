import styled from 'styled-components'
import theme from '../../theme'


export const Container = styled.footer`
    padding: 50px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 480px) {
        padding: 50px 30px;
    }

    @media (max-width: 630px) {
        display: block;
    }
`

export const CopyRight = styled.div`
    font-weight: 700;
    width: 200px;

    @media (max-width: 630px) {
        width: auto;
        text-align: center;
        margin-bottom: 25px;
    }
`

export const SocialLinks = styled.div`

    a {
        position: relative;
        display: inline-block;
        color: ${() => theme.colors.primary};
        text-transform: uppercase;
        font-weight: 600;
        margin: 0 10px;
        outline: 0;
        font-size: 20px;

        &:hover {
            box-shadow: inset 0 -2px 0 ${() => theme.colors.primary};
        }
    }

    @media (max-width: 630px) {
        display: flex;
        justify-content: center;
    }
`