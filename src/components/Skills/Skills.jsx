import React from 'react'
import { Section, SectionContent, SectionTitle } from '../../globalStyle'
import { SkillsBox, List, SkillItem, SkillLabel, SkillCategory } from './style'


const Skills = () => {
    return (
        <Section>
            <SectionTitle>
                Skills
            </SectionTitle>
            <SectionContent>
                <SkillsBox>
                    <SkillCategory>
                        <SkillLabel>
                            Languages
                        </SkillLabel>
                        <List>
                            <SkillItem>Javscript (ES6)</SkillItem>
                            <SkillItem>TypeScript</SkillItem>
                            <SkillItem>HTML</SkillItem>
                            <SkillItem>CSS/Sass</SkillItem>
                            <SkillItem>Python</SkillItem>
                            <SkillItem>SQL</SkillItem>
                        </List>
                    </SkillCategory>
                    <SkillCategory>
                        <SkillLabel>
                            Frameworks
                        </SkillLabel>
                        <List>
                            <SkillItem>Ember & Glimmer</SkillItem>
                            <SkillItem>React</SkillItem>
                            <SkillItem>Node</SkillItem>
                            <SkillItem>Wordpress</SkillItem>
                        </List>
                    </SkillCategory>
                    <SkillCategory>
                        <SkillLabel>
                            Tools
                        </SkillLabel>
                        <List>
                            <SkillItem>Bash</SkillItem>
                            <SkillItem>Git & Github</SkillItem>
                            <SkillItem>Chrome DevTools</SkillItem>
                            <SkillItem>Postman</SkillItem>
                        </List>
                    </SkillCategory>
                    <SkillCategory>
                        <SkillLabel>
                            Design
                        </SkillLabel>
                        <List>
                            <SkillItem>Sketch</SkillItem>
                            <SkillItem>InDesign</SkillItem>
                            <SkillItem>Adobe Xd</SkillItem>
                            <SkillItem>Photoshop</SkillItem>
                        </List>
                    </SkillCategory>
                </SkillsBox>
            </SectionContent>
        </Section>
    )
}

export default Skills
