import React from 'react'

import { Section, SectionContent, SectionTitle } from '../../globalStyle'
import { Jobs, Job, CompanyAndTime, Company, Time, Position } from './style'
import data from './data.json'

const Experience = () => {
    return (
        <Section>
            <SectionTitle>
                Experience
            </SectionTitle>
            <SectionContent>
                <Jobs>
                    {data.map((job, i) => (
                        <Job key={i}>
                            <CompanyAndTime>
                                <Company>{job.company}</Company>
                                <Time>{job.time}</Time>
                            </CompanyAndTime>
                            <Position>{job.position}</Position>
                        </Job>
                    ))}
                </Jobs>
            </SectionContent>
        </Section>
    )
}

export default Experience
