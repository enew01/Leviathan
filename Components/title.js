import React from "react";
import styled from "styled-components"
import { fonts, colors } from "@/styles/variables"


const TitleStyle = styled.section`
font-family: ${fonts.goldman};
text-transform: uppercase;
margin-bottom: 54px;
font-size: 54px;
text-align: center;
color: ${colors.white};
z-index: 9;

&.faction {
    color: ${colors.darkGray};
}

`;
function Title(props) {
    let title = props.title;
    let Color = props.Color;
    return (
        <TitleStyle className={props.Color}>
            <h1>{props.title}</h1>
        </TitleStyle>
    )
};

export default Title;