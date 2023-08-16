import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components"
import { colors, fonts } from "@/styles/variables";


const KeyButton = styled.section`
position: relative;
height: 70px;
width: auto;
padding: 0 35px;
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
    .button-title {
        position: relative;
        display: block;
        z-index: 5;
    }
    &.clicked {
        background-color: ${colors.white};
        color: ${colors.darkGray};
    }
`;

function KeywordButton({ title, onClick, activeButton, setActiveButton }) {
    const isClicked = activeButton === title;

    const handleClick = () => {
        if (isClicked) {
            setActiveButton(null);
        } else {
            setActiveButton(title);
        }

        if (onClick) {
            onClick();
        }
    };

    return (
        <KeyButton
            className={`keyword-button ${isClicked ? 'clicked' : ''}`}
            onClick={handleClick}
        >
            <div className="button-title">{title}</div>
        </KeyButton>
    );
}

export default KeywordButton;

