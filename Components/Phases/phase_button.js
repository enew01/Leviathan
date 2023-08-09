import React from "react";
import { useState } from 'react';
import styled from "styled-components"
import { colors, fonts } from "@/styles/variables";
import PhaseSteps from "./phase_steps";


const PhaseTrack = styled.section`
position: relative;
display: block;
height: 370px;
width: 200px;
z-index: 4;
top: 0px;
scroll-behavior: smooth;
.wide-button {
    position: absolute;
    height: 70px;
    width: 200px;
    display: block;
    top: -70px;
    z-index: 9;
    overflow:hidden;
    border-radius: 10px;
    transition: height 0.5s ease;
    left: 0;
    background-color: ${colors.white};
    .outer-link-wrap {
        position: absolute;
        width: 200px;
        height: 100%;
        padding: 70px 0 0 0;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
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
    }
}
.open-button {
    position: absolute;
    height: 70px;
    width: 200px;
    top: -70px;
    border-radius: 10px;
    background-color: ${colors.darkGray};
    z-index: 9;
    left: 0;
    cursor: pointer;
    color: ${colors.white};
    font-family: ${fonts.tech};
    img {
        position: absolute;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(4deg) brightness(106%) contrast(101%);
        top: 75px;
        margin: auto;
        right: 0;
        left: 0;
    }
    .fronticon-,
    .reverseicon-flipped {
        width: 70px;
        transition: height 0.5s ease;
    }
    .reverseicon-,
    .fronticon-flipped {
        width: 0px;
        transition: height 0.5s ease;
    }
}
.expanded {
    height: 370px;
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