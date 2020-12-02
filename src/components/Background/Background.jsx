import React from 'react'

import { Section, SectionTitle } from '../../globalStyle'
import { BgSectionContent } from './style'
import data from './data.json'

const Background = () => {
    return (
        <Section>
            <SectionTitle>
                Background
            </SectionTitle>
            <BgSectionContent>
                {data.map((p, i) => <p key={i}>{p}</p>)}
            </BgSectionContent>
        </Section>
    )
}

export default Background
