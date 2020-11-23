import React from 'react'
import { Section, SectionTitle } from '../../globalStyle'
import { BgSectionContent } from './style'

const Background = () => {
    return (
        <Section>
            <SectionTitle>
                About
            </SectionTitle>
            <BgSectionContent>
                <p>
                    I'm currently an Engineer at Upstatement building things for the web with some awesome people. I recently graduated from Northeastern University after completing three awesome six-month co-ops at MullenLowe U.S., Starry, and Apple Music.
                </p>
                <p>
                    As a software engineer, I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable and efficient under the hood while providing engaging, pixel-perfect user experiences.
                </p>
                <p>
                    When I'm not in front of a computer screen, I'm probably snowboarding, cruising around on my penny board, or crossing off another item on my bucket list.
                </p>
            </BgSectionContent>
        </Section>
    )
}

export default Background
