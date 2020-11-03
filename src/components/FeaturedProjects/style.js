import styled from 'styled-components'

export const Project = styled.div`
    display: flex;
    margin-bottom: 100px;
    margin-left: -5%;
    width: 125%;
`

export const ProjectImage = styled.figure`
    max-width: 700px;
    overflow: visible;
    margin: 0;

    a {
        display: block;
    }

    img {
        width: 100%;
        max-width: 100%;
        vertical-align: bottom;
    }
`

export const Caption = styled.figcaption`
    width: 125px;
    flex-shrink: 0;
    margin-left: 30px;

    p {
        font-size: .85rem;
        line-height: 1.3;
    }
`

export const ProjectName = styled.div`
    margin-bottom: 10px;

    a {
        font-weight: 700;
    }
`