import React from 'react'
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";
import Emoji from '../Emoji/Emoji';
import Switch from '../Switch/Switch';
import { IntroContact, IntroHeader, IntroTagLine, IntroTitle, SwitchWrapper, Toggler, ContactLink } from './style'

const Intro = () => {
    return (
        <>
            <SwitchWrapper>
                <TiWeatherSunny size={21} />
                <Toggler>
                    <Switch />
                </Toggler>
                <TiWeatherNight size={21} />
            </SwitchWrapper>

            <IntroHeader>
                <IntroTitle>
                    Hello there! <Emoji symbol="👋" />
                </IntroTitle>
                <IntroTagLine>
                    I'm Natiq Mumtaz, a design-minded front-end software engineer focused on building beautiful interfaces & experiences
                </IntroTagLine>
                <IntroContact>
                    Get in Touch <Emoji symbol="➡" /> <ContactLink href="mailto:natiq.mumtaz@swisscom.com" target="_blank" rel="noreferrer">natiq.mumtaz@swisscom.com</ContactLink>
                </IntroContact>
            </IntroHeader>
        </>
    )
}

export default Intro
