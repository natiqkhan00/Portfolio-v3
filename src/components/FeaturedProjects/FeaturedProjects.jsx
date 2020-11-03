import React from 'react'
import { Section, SectionTitle, SectionContent } from '../../globalStyle'
import { Caption, Project, ProjectImage, ProjectName } from './style'

const FeaturedProjects = () => {
    return (
        <Section>
            <SectionTitle>
                Featured Projects
            </SectionTitle>
            <SectionContent>
                <Project>
                    <ProjectImage>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            <img src="https://bchiang7.github.io/img/featured/blistabloc/blistabloc.png" alt="Google" />
                        </a>
                    </ProjectImage>
                    <Caption>
                        <ProjectName>
                            <a href="https://www.google.com" target="_blank" rel="noreferrer">Google</a>
                        </ProjectName>
                        <p>Custom wordpress theme built with Timber and Woocommerce for blistabloc, the only reactive shoe insert that prevents blisters from forming.</p>
                    </Caption>
                </Project>
                <Project>
                    <ProjectImage>
                        <a href="https://www.google.com" target="_blank" rel="noreferrer">
                            <img src="https://bchiang7.github.io/img/featured/blistabloc/blistabloc.png" alt="Google" />
                        </a>
                    </ProjectImage>
                    <Caption>
                        <ProjectName>
                            <a href="https://www.google.com" target="_blank" rel="noreferrer">Google</a>
                        </ProjectName>
                        <p>Custom wordpress theme built with Timber and Woocommerce for blistabloc, the only reactive shoe insert that prevents blisters from forming.</p>
                    </Caption>
                </Project>
            </SectionContent>
        </Section>
    )
}

export default FeaturedProjects
