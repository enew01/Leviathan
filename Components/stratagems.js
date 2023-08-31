import React from "react";
import { useState } from 'react';
import styled from "styled-components"
import { colors, fonts, media } from "@/styles/variables";
import Image from "next/image";

const Header = styled.section`
position: absolute;
display: block;
height: 70px;
width: 400px;
z-index: 4;
top: 0px;
scroll-behavior: smooth;
left:0;
@media ${media.mobile} {
    width: 100%;
}
.wide-button {
    position: absolute;
    height: 140px;
    width: 400px;
    display: block;
    top: -70px;
    z-index: 9;
    overflow:hidden;
    border-radius: 20px;
    transition: height 0.5s ease;
    left: 0;
    @media ${media.mobile} {
        width: 100%;
    }
    ::-webkit-scrollbar {
      width: 25px;
      @media ${media.mobile} {
          display: none;
      }
    }
    
    ::-webkit-scrollbar-track {
      background: ${colors.darkGray}; 
    }
     
    &.tyranid-purple {
        ::-webkit-scrollbar-bar {
        background: ${colors.tyranidPurple}; 
        }
    }
    &.astartes-blue {
        ::-webkit-scrollbar-bar {
        background: ${colors.astartesBlue}; 
        }
    }
    &.sororitas-red {
        ::-webkit-scrollbar-bar {
            background: ${colors.sororitasRed}; 
        }
    }
    &.heretic-red {
        ::-webkit-scrollbar-bar {
            background: ${colors.hereticRed}; 
        }
    }
    &.angels-red {
        ::-webkit-scrollbar-bar {
            background: ${colors.angelsRed}; 
        }
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: #FFF; 
      cursor:pointer;
    }
    .outer-link-wrap {
        position: absolute;
        width: 400px;
        height: 100%;
        padding-top: 175px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        overflow-y:scroll;
        @media ${media.mobile} {
            width: 100%;
        }
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
    &.sororitas-red {
        background-color: ${colors.sororitasRed};
    }
    &.heretic-red {
        background-color: ${colors.hereticRed};
    }
    &.angels-red {
        background-color: ${colors.angelsRed};
    }
}
.open-button {
    position: absolute;
    height: 175px;
    width: 400px;
    top: -70px;
    border-radius: 50px;
    background-color: ${colors.darkGray};
    z-index: 9;
    left: 0;
    cursor: pointer;
    @media ${media.mobile} {
        width: 100%;
    }
    img {
        position: absolute;
        filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(4deg) brightness(106%) contrast(101%);
        top: 75px;
        right: 0;
        left: 0;
        margin: auto
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
    .button-title {
        text-transform: uppercase;
        color: ${colors.white};
        font-family: ${fonts.goldman};
        font-size: 24px;
        display: block;
        position: relative;
        margin-top: 135px;
        text-align: center;
    }
}
.expanded {
    height: calc(100vh + 68px);
  }
`;

const StratagemWrapper = styled.section`
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    border-style: solid;
    border-width: 2px;
    border-color: ${colors.darkGray};
    border-radius: 15px;
    padding: 10px;
    font-family: ${fonts.tech};
    .strat-title {
        font-family: ${fonts.goldman};
        font-size: 20px;
        &.tyranid-purple {
            color: ${colors.tyranidPurple};
        }
        &.astartes-blue {
            color: ${colors.astartesBlue};
        }
        &.sororitas-red {
            color: ${colors.sororitasRed};
        }
        &.heretic-red {
            color: ${colors.hereticRed};
        }
        &.angels-red {
            color: ${colors.angelsRed};
        }
    }
    .strat-type {
        font-style: italic;
    }
    .strat-time {
        padding: 3px;
        border-style: solid none solid none;
        border-width: 1px;
        margin-bottom: 5px;
        &.tyranid-purple {
            border-color: ${colors.tyranidPurple};
        }
        &.astartes-blue {
            border-color: ${colors.astartesBlue};
        }
        &.sororitas-red {
            border-color: ${colors.sororitasRed};
        }
        &.heretic-red {
            border-color: ${colors.hereticRed};
        }
        &.angels-red {
            border-color: ${colors.angelsRed};
        }
    }
`;


const Stratagems = (props) => {
    const [expanded, setExpanded] = useState(false);
    const [flipped, setFlipped] = useState(false);

    const handleClick = () => {
        setExpanded(!expanded);
        setFlipped(!flipped);
    };

    const { Color, CardTitle, CardReverseTitle, StratArray } = props;

    return (
        <Header className={props.Color}>
            <div className={`wide-button ${expanded ? 'expanded' : ''} ${Color}`}>
                <div className="outer-link-wrap">
                    {StratArray.map((entry, index) => (
                        <StratagemWrapper key={index}>
                            <div className={props.Color + " strat-title"}>{entry.title} - {entry.cost}CP</div>
                            <div className="strat-type">{entry.type + " Stratagem"}</div>
                            <div className={props.Color + " strat-time"}><b>When: </b>{entry.time}</div>
                            <div className="strat-content">{entry.text}</div>
                        </StratagemWrapper>
                    ))}
                </div>
            </div>
            <div className="open-button" onClick={handleClick}>
                <Image className={`fronticon-${flipped ? 'flipped' : ''}`} src={CardTitle} alt="icon" width="50" height="50" />
                <Image className={`reverseicon-${flipped ? 'flipped' : ''}`} src={CardReverseTitle} alt="icon" width="50" height="50" />
                <div className="button-title">Stratagems</div>
            </div>
        </Header>
    );
};

export default Stratagems;