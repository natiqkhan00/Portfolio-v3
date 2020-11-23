import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import ScrollAnimation from 'react-animate-on-scroll';

import theme from './theme'
import { Background, Experience, FeaturedProjects, Footer, Intro, OtherProjects, Skills } from './components'
import GlobalStyle from './globalStyle'

const App = () => {

    const d = new Date()
    const night = d.getHours() >= 19 || d.getHours() <= 7 // between 7pm to 7am
    const [darkMode, setDarkMode] = useState(night)

    return (
        <ThemeProvider theme={{ ...theme, darkMode }}>
            <GlobalStyle />
            <Intro darkMode={darkMode} setDarkMode={setDarkMode} />
            <ScrollAnimation animateIn="fadeIn">
                <Background />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
                <Skills />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
                <Experience />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
                <FeaturedProjects />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeIn">
                <OtherProjects />
            </ScrollAnimation>
            <Footer />
        </ThemeProvider >
    )
}

export default App
