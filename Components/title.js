import React from "react";
import styled from "styled-components"
import { fonts, colors } from "@/styles/variables"


const TitleStyle = styled.section`
font-family: ${fonts.goldman};
text-transform: uppercase;
margin-bottom: 54px;
font-size: 54px;
text-align: center;
color: ${colors.darkGray};

`;
function Title(props) {
    let title = props.title;
    return (
        <TitleStyle>
            <h1>{props.title}</h1>
        </TitleStyle>
    )
};

export default Title;