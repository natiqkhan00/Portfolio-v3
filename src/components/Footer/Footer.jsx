import React from 'react'
import { Container, CopyRight, SocialLinks } from './style'

const Footer = () => {
    return (
        <Container>
            <CopyRight>
                <span>Developed & Designed by Natiq Mumtaz ✌️ 2020</span>
            </CopyRight>
            <SocialLinks>
                <a href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer">Email</a>
                <a href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer">Google</a>
                <a href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer">Facebook</a>
                <a href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer">Linkedin</a>
                <a href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer">Youtube</a>
            </SocialLinks>
        </Container>
    )
}

export default Footer
