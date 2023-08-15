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
`;

function KeywordButton({ title, onClick }) {
    return (
        <KeyButton className="keyword-button" onClick={onClick}>
            <div className="button-title">{title}</div>
        </KeyButton>
    );
}

export default KeywordButton;
