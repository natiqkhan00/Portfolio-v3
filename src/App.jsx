import React from 'react'
import { Background, Experience, FeaturedProjects, Intro, OtherProjects, Skills } from './components'
import GlobalStyle from './globalStyle'

const App = () => {
    return (
        <>
            <GlobalStyle />
            <Intro />
            <Background />
            <Skills />
            <Experience />
            <FeaturedProjects />
            <OtherProjects />
        </>
    )
}

export default App
