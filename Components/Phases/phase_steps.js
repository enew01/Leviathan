import React from "react";
import { useState } from 'react';
import styled from "styled-components"
import { colors, fonts } from "@/styles/variables";


const PhaseContent = styled.section`
.link-wrap {
    width: 200px;
    height: 100%;
    text-align: center;
    position: relative;
    .local-link {
        display: block;
        text-align: center;
        text-transform: uppercase;
        color: ${colors.darkGray};
        font-family: ${fonts.tech};
        margin: auto;
    }
    &:hover {
        background-color: ${colors.darkGray};
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