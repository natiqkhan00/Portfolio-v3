import React from 'react'

import Emoji from '../Emoji/Emoji'
import { Section, SectionTitle, SectionContent } from './../../globalStyle'
import { OthProject, OthProjectName, ProjectTag } from './style'
import data from './otherProjects.json'

const OtherProjects = () => {
    return (
        <Section>
            <SectionTitle>
                Other Projects
            </SectionTitle>
            <SectionContent>
                {data.map((project, i) => 
                    <OthProject key={i}>
                        <OthProjectName>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                {project.name} <Emoji symbol={project.emoji} />
                            </a>
                        </OthProjectName>
                        <p>{project.description}</p>
                        <div>
                            {project.tags.map((tag, j) =>
                                <ProjectTag key={j}>{tag}</ProjectTag>
                            )}
                        </div>
                    </OthProject>
                )}
            </SectionContent>
        </Section>
    )
}

export default OtherProjects
