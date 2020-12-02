import React from 'react'
import { AiOutlineMail, AiOutlineGithub, AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";

import { Container, CopyRight, SocialLinks } from './style'
import data from './data.json'

const Components = {
    AiOutlineMail,
    AiOutlineGithub,
    AiFillFacebook,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterSquare,
};

const Footer = () => {
    return (
        <Container>
            <CopyRight>
                <span>{data.copyright}</span>
            </CopyRight>
            <SocialLinks>
                {data.links.map((link, i) =>
                    <a key={i} href={link.link} target="_blank" rel="noreferrer">
                        {React.createElement(Components[link.component])}
                    </a>
                )}
            </SocialLinks>
        </Container>
    )
}

export default Footer
