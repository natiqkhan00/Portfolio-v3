import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import { Background, Experience, FeaturedProjects, Footer, Intro, OtherProjects, Skills } from './components'
import GlobalStyle from './globalStyle'

const App = () => {

    const [darkMode, setDarkMode] = useState(false)

    console.log("Is Darkmode", darkMode);

    return (
        <ThemeProvider theme={{ ...theme, darkMode }}>
            <GlobalStyle />
            <Intro darkMode={darkMode} setDarkMode={setDarkMode} />
            <Background />
            <Skills />
            <Experience />
            <FeaturedProjects />
            <OtherProjects />
            <Footer />
        </ThemeProvider >
    )
}

export default App
