import React from 'react'
import Emoji from '../Emoji/Emoji'
import { Section, SectionTitle, SectionContent } from './../../globalStyle'
import { OthProject, OthProjectName, ProjectTag } from './style'

const OtherProjects = () => {
    return (
        <Section>
            <SectionTitle>
                Other Projects
            </SectionTitle>
            <SectionContent>
                <OthProject>
                    <OthProjectName>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            Google <Emoji symbol="👉" />
                        </a>
                    </OthProjectName>
                    <p>
                        A minimal, dark theme for Sublime Text, Atom, VS Code, and more published to Package Control, Atom Package Manager, Visual Studio Marketplace, and NPM.
                    </p>
                    <div>
                        <ProjectTag>JavaScript</ProjectTag>
                        <ProjectTag>React</ProjectTag>
                        <ProjectTag>React Router</ProjectTag>
                    </div>
                </OthProject>
                <OthProject>
                    <OthProjectName>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            Google <Emoji symbol="👉" />
                        </a>
                    </OthProjectName>
                    <p>
                        A minimal, dark theme for Sublime Text, Atom, VS Code, and more published to Package Control, Atom Package Manager, Visual Studio Marketplace, and NPM.
                    </p>
                    <div>
                        <ProjectTag>JavaScript</ProjectTag>
                        <ProjectTag>React</ProjectTag>
                        <ProjectTag>React Router</ProjectTag>
                    </div>
                </OthProject>
                <OthProject>
                    <OthProjectName>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            Google <Emoji symbol="👉" />
                        </a>
                    </OthProjectName>
                    <p>
                        A minimal, dark theme for Sublime Text, Atom, VS Code, and more published to Package Control, Atom Package Manager, Visual Studio Marketplace, and NPM.
                    </p>
                    <div>
                        <ProjectTag>JavaScript</ProjectTag>
                        <ProjectTag>React</ProjectTag>
                        <ProjectTag>React Router</ProjectTag>
                    </div>
                </OthProject>
            </SectionContent>
        </Section>
    )
}

export default OtherProjects
