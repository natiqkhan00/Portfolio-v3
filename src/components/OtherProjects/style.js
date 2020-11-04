import styled from 'styled-components'
import theme from '../../theme'

export const OthProject = styled.div`
    max-width: 600px;
    margin-bottom: 50px;

    p {
        font-size: .9rem;
        margin-bottom: 20px;
    }
`

export const OthProjectName = styled.div`
    margin-bottom: 10px;

    a {
        transition: all .2s ease-in-out;
        font-weight: 700;
        display: inline-block;
        background-color: transparent;
        white-space: nowrap;
    }
`

export const ProjectTag = styled.div`
    ::first-of-type {
        margin-left: 0;
    }

    display: inline-block;
    margin: 3px 3px 3px 0;
    margin-left: 0px;
    font-family: Inconsolata, monospace;
    font-size: .75rem;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 3px;
    color: ${() => theme.colors.primary};
    border: 1px solid ${() => theme.colors.primary};
    background: 0 0;
`