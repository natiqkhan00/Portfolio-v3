import React from 'react'

import { Section, SectionTitle, SectionContent } from '../../globalStyle'
import { Caption, Project, ProjectImage, ProjectName } from './style'
import data from './featuredProjects.json'

const FeaturedProjects = () => {
    return (
        <Section>
            <SectionTitle>
                Featured Projects
            </SectionTitle>
            <SectionContent>
                {data.map((project, i) => (
                    <Project key={i}>
                        <ProjectImage>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <img src={project.image} alt={project.title} />
                            </a>
                        </ProjectImage>
                        <Caption>
                            <ProjectName>
                                <a href={project.link}  target="_blank" rel="noreferrer">{project.name}</a>
                            </ProjectName>
                            <p>{project.description}</p>
                        </Caption>
                    </Project>
                ))}
            </SectionContent>
        </Section>
    )
}

export default FeaturedProjects
