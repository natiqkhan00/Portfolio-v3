import React from 'react'
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";

import Emoji from '../Emoji/Emoji';
import Switch from '../Switch/Switch';
import { IntroContact, IntroHeader, IntroTagLine, IntroTitle, SwitchWrapper, Toggler, ContactLink } from './style'
import data from './data.json'

const Intro = ({ darkMode, setDarkMode }) => {
    return (
        <>
            <SwitchWrapper>
                <TiWeatherSunny size={21} />
                <Toggler>
                    <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
                </Toggler>
                <TiWeatherNight size={21} />
            </SwitchWrapper>

            <IntroHeader>
                <IntroTitle>
                    {data.title} <Emoji symbol={data.emojiTitle} />
                </IntroTitle>
                <IntroTagLine>
                    {data.subtitle} <Emoji symbol="🧑‍💻" />
                </IntroTagLine>
                <IntroContact>
                    {data.linkMsg} <Emoji symbol={data.emojiEmail} /> 
                    <ContactLink href={`mailto:${data.email}`} target="_blank" rel="noreferrer">
                        {data.email}
                    </ContactLink>
                </IntroContact>
            </IntroHeader>
        </>
    )
}

export default Intro
