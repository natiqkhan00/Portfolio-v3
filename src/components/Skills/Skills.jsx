import React from 'react'
import { Section, SectionContent, SectionTitle } from '../../globalStyle'
import { SkillsBox, List, SkillItem, SkillLabel } from './style'


const Skills = () => {
    return (
        <Section>
            <SectionTitle>
                Skills
            </SectionTitle>
            <SectionContent>
                <SkillsBox>
                    <div>
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
                    </div>
                    <div>
                        <SkillLabel>
                            Frameworks
                        </SkillLabel>
                        <List>
                            <SkillItem>Ember & Glimmer</SkillItem>
                            <SkillItem>React</SkillItem>
                            <SkillItem>Node</SkillItem>
                            <SkillItem>Wordpress</SkillItem>
                        </List>
                    </div>
                    <div>
                        <SkillLabel>
                            Tools
                        </SkillLabel>
                        <List>
                            <SkillItem>Bash</SkillItem>
                            <SkillItem>Git & Github</SkillItem>
                            <SkillItem>Chrome DevTools</SkillItem>
                            <SkillItem>Postman</SkillItem>
                        </List>
                    </div>
                    <div>
                        <SkillLabel>
                            Design
                        </SkillLabel>
                        <List>
                            <SkillItem>Sketch</SkillItem>
                            <SkillItem>InDesign</SkillItem>
                            <SkillItem>Adobe Xd</SkillItem>
                            <SkillItem>Photoshop</SkillItem>
                        </List>
                    </div>
                </SkillsBox>
            </SectionContent>
        </Section>
    )
}

export default Skills
