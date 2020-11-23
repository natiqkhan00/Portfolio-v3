import React from 'react'
import { AiOutlineMail, AiOutlineGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

import { Container, CopyRight, SocialLinks } from './style'
import Emoji from '../Emoji/Emoji'



const Footer = () => {
    return (
        <Container>
            <CopyRight>
                <span>Developed & Designed by Natiq Mumtaz ✌️ 2020</span>
            </CopyRight>
            <SocialLinks>
                <a href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer"><AiOutlineMail /></a>
                <a href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer"><AiOutlineGithub /></a>
                <a href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer"><AiFillFacebook /></a>
                <a href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer"><AiFillInstagram /></a>
                <a href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer"><AiFillLinkedin /></a>
                <a href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer"><AiFillTwitterSquare /></a>
            </SocialLinks>
        </Container>
    )
}

export default Footer
