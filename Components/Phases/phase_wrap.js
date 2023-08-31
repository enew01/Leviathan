import React from 'react';
import PhaseButton from './phase_button';
import styled from "styled-components";
import { colors, fonts, media } from "@/styles/variables";


const PhaseWrapper = styled.section`
    display: flex;
    flex-direction: row;
    @media ${media.mobile} {
        flex-direction: column;
    }
`;

const PhaseWrap = ({ phaseData }) => {
    return (
        <PhaseWrapper>
            {phaseData.map((phase, phaseIndex) => (
                <PhaseButton
                    key={phaseIndex}
                    phase={phase}
                />
            ))}
        </PhaseWrapper>
    );
};

export default PhaseWrap;