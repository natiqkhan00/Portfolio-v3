import React from 'react'

import { Section, SectionContent, SectionTitle } from '../../globalStyle'
import { SkillsBox, List, SkillItem, SkillLabel, SkillCategory } from './style'
import data from './skills.json'


const Skills = () => {
    return (
        <Section>
            <SectionTitle>
                Skills
            </SectionTitle>
            <SectionContent>
                <SkillsBox>
                    {data.map((skill, i) => 
                        <SkillCategory key={i}>
                            <SkillLabel>
                                {skill.skillLabel}
                            </SkillLabel>
                            {skill.lists.map((list, j) => 
                                <List key={j}>
                                    <SkillItem>{list}</SkillItem>
                                </List>    
                            )}
                        </SkillCategory>    
                    )}
                </SkillsBox>
            </SectionContent>
        </Section>
    )
}

export default Skills
