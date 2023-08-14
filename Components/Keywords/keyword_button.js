import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components"
import { colors, fonts } from "@/styles/variables";


const KeyButton = styled.section`
position: relative;
height: 70px;
width: 20%;
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
`;

function KeywordButton({ title, onClick }) {
    return (
        <KeyButton className="keyword-button" onClick={onClick}>
            {title}
        </KeyButton>
    );
}

export default KeywordButton;
