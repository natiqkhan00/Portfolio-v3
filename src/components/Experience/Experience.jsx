import React from 'react'
import { Section, SectionContent, SectionTitle } from '../../globalStyle'
import { Jobs, Job, CompanyAndTime, Company, Time, Position } from './style'

const Experience = () => {
    return (
        <Section>
            <SectionTitle>
                Experience
            </SectionTitle>
            <SectionContent>
                <Jobs>
                    <Job>
                        <CompanyAndTime>
                            <Company>Upstatement</Company>
                            <Time>May 2018 - Present</Time>
                        </CompanyAndTime>
                        <Position>Engineer</Position>
                    </Job>
                    <Job>
                        <CompanyAndTime>
                            <Company>Upstatement</Company>
                            <Time>May 2018 - Present</Time>
                        </CompanyAndTime>
                        <Position>Engineer</Position>
                    </Job>
                    <Job>
                        <CompanyAndTime>
                            <Company>Upstatement</Company>
                            <Time>May 2018 - Present</Time>
                        </CompanyAndTime>
                        <Position>Engineer</Position>
                    </Job>
                    <Job>
                        <CompanyAndTime>
                            <Company>Upstatement</Company>
                            <Time>May 2018 - Present</Time>
                        </CompanyAndTime>
                        <Position>Engineer</Position>
                    </Job>
                </Jobs>
            </SectionContent>
        </Section>
    )
}

export default Experience
