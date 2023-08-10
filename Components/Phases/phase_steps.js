import React from "react";
import { useState } from 'react';
import styled from "styled-components"
import { colors, fonts } from "@/styles/variables";


const PhaseContent = styled.section`
padding: 15px 10px;
.phase-title {
    font-family: ${fonts.orbitron};
    font-size: 20px;
    font-weight: 700;
    color: ${colors.red};
}
.phase-content {
    font-family: ${fonts.tech};
    font-size: 20px;
    color: ${colors.darkGray};
    li {
        padding-top: 10px;
    }
}
`;


const PhaseSteps = ({ title, text }) => {
    return (
        <PhaseContent>
            <div className="phase-title">{title}</div>
            <div className="phase-content">{text}</div>
        </PhaseContent>
    );
};

export default PhaseSteps;