import styled from 'styled-components'
import theme from '../../theme'

export const SkillsBox = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 630px) {
        flex-wrap: wrap;
    }
`

export const SkillCategory = styled.div`
    @media (max-width: 630px) {
        width: 47%;
        margin-right: 5px;
        margin-bottom: 25px;
    }
`

export const SkillLabel = styled.div`
    font-weight: 700;
    color: ${props => props.theme.darkMode ? theme.colors.light : theme.colors.darkgrey};
    text-transform: uppercase;
`

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

export const SkillItem = styled.li`
    margin: 3px 0;
    font-size: .9rem;
`

