import React from "react";
import { useState } from 'react';
import styled from "styled-components"
import { colors, fonts } from "@/styles/variables";
import PhaseSteps from "./phase_steps";


const PhaseTrack = styled.section`
position: relative;
display: block;
max-height: 700px;
height: auto;
width: 20%;
z-index: 4;
top: 0px;
scroll-behavior: smooth;
.wide-button {
    position: relative;
    height: auto;
    max-height: 70px;
    width: 100%;
    display: block;
    top: -70px;
    z-index: 9;
    overflow:hidden;
    border-radius: 10px;
    transition: max-height 1s ease;
    left: 0;
    background-color: ${colors.white};
    .outer-link-wrap {
        position: relative;
        width: 100%;
        height: auto;
        padding: 70px 0 0 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
}
.open-button {
    position: absolute;
    height: 70px;
    width: 100%;
    top: -70px;
    border-radius: 10px;
    background-color: ${colors.darkGray};
    z-index: 9;
    left: 0;
    cursor: pointer;
    color: ${colors.white};
    font-family: ${fonts.tech};
    text-align: center;
    line-height: 70px;
    font-size: 24px;
    img {
        position: absolute;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(4deg) brightness(106%) contrast(101%);
        top: 75px;
        margin: auto;
        right: 0;
        left: 0;
    }
}
.expanded {
    height: auto;
    max-height: 400px;
  }
  

`;

const PhaseButton = ({ phase }) => {
    const [expanded, setExpanded] = useState(false);
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
        setFlipped(!flipped);
    };

    return (
        <PhaseTrack>
            <div className={`wide-button ${expanded ? 'expanded' : ''}`}>
                <div className="outer-link-wrap">
                    {phase.stepsContent.map((stepContent, stepIndex) => (
                        <PhaseSteps
                            key={stepIndex}
                            title={stepContent.title}
                            text={stepContent.text}
                        />
                    ))}
                </div>
            </div>
            <div className="open-button" onClick={handleClick}>{phase.title}</div>
        </PhaseTrack>
    );
};

export default PhaseButton;