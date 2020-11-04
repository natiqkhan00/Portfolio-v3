import styled from 'styled-components'
import theme from '../../theme'


export const Container = styled.footer`
    padding: 50px 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const CopyRight = styled.div`
    font-weight: 700;
    width: 200px;
`

export const SocialLinks = styled.div`

    a {
        position: relative;
        display: inline-block;
        color: ${() => theme.colors.primary};
        text-transform: uppercase;
        font-weight: 600;
        margin: 0 15px;
        outline: 0;

        &:hover {
            box-shadow: inset 0 -2px 0 ${() => theme.colors.primary};
        }
    }
`