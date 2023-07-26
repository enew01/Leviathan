import React from "react";
import { useState } from 'react';
import styled from "styled-components"
import { colors, fonts } from "@/styles/variables";
import Image from "next/image";


const Header = styled.section`
position: absolute;
display: block;
height: 70px;
width: 1129px;
z-index: 4;
top: 0px;
scroll-behavior: smooth;
.wide-button {
    position: absolute;
    height: 140px;
    width: 140px;
    display: block;
    top: -70px;
    z-index: 9;
    overflow:hidden;
    border-radius: 100px;
    transition: width 0.5s ease;
    left: 0;
    .outer-link-wrap {
        position: absolute;
        width: 1129px;
        height: 100%;
        padding: 0 140px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        .link-wrap {
            width: 160px;
            text-align: center;
            position: relative;
            .local-link {
                display: block;
                position: absolute;
                text-align: center;
                text-transform: uppercase;
                color: ${colors.white};
                font-family: ${fonts.tech};
                top: 95px;
                right: 0;
                left: 0;
                margin: auto;
            }
            &:hover {
                background-color: ${colors.darkGray};
            }
        }
    }
    &.tyranid-purple {
        background-color: ${colors.tyranidPurple};
    }
    &.astartes-blue {
        background-color: ${colors.astartesBlue};
    }
}
.open-button {
    position: absolute;
    height: 140px;
    width: 140px;
    top: -70px;
    border-radius: 100px;
    background-color: ${colors.darkGray};
    z-index: 9;
    left: 0;
    cursor: pointer;
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
        transition: width 0.5s ease;
    }
    .reverseicon-,
    .fronticon-flipped {
        width: 0px;
        transition: width 0.5s ease;
    }
}
.expanded {
    width: 1129px;
  }
  

`;


const HeaderNav = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
        setFlipped(!flipped);
    };

    const { Color, CardTitle, CardReverseTitle } = props;

    return (
        <Header >
            <div className={`wide-button ${expanded ? 'expanded' : ''} ${Color}`} >
                <div className="outer-link-wrap">
                    <a href="#character" className="link-wrap">
                        <div className="local-link">Character</div>
                    </a>
                    <a href="#battleline" className="link-wrap">
                        <div className="local-link">Battleline</div>
                    </a>
                    <a href="#other" className="link-wrap">
                        <div className="local-link">Other</div>
                    </a>
                </div>
            </div>
            <div className="open-button" onClick={handleClick}>
                <Image className={`fronticon-${flipped ? 'flipped' : ''}`} src={CardTitle} alt="icon" width="50" height="50" />
                <Image className={`reverseicon-${flipped ? 'flipped' : ''}`} src={CardReverseTitle} alt="icon" width="50" height="50" />
            </div>
        </Header>
    );
};

export default HeaderNav;