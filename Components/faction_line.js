import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import styled from "styled-components"
import { fonts, colors } from "@/styles/variables"


const LineStyles = styled.section`
position:absolute;
display: block;
right: 0;
left: 0;
margin: auto;
bottom: 80px;
text-align: center;
.faction-title {
    font-family: ${fonts.orbitron};
    position:relative;
    display: inline-block;
    font-weight:500;
    text-transform: uppercase;
    font-size: 54px;
    line-height: 54px;
    text-align: center;
    color: ${colors.white};
}
.black-cover,
.white-cover {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: #000;
    animation-name: lineDraw;
    animation-duration: .75s;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
}
.black-cover {
    background-color: #000;
}
.white-cover {
    background-color: #FFF;
    animation-delay: 0.85s;
}


@keyframes lineDraw {
    from {
        width: 100%;
    }
    to {
        width: 0%;
    }
  }
`;

const FactionLine = ({
    title = ""
}) => {

    return (
        <LineStyles>
            <div className="faction-title">{title}
                <div className="white-cover"></div>
                <div className="black-cover"></div>
            </div>
        </LineStyles>
    );
};
export default FactionLine;