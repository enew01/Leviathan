import React from "react";
import styled from "styled-components"
import WarhammerCard from "../Cards/card_list";
import { fonts, colors } from "@/styles/variables"

const CardHeader = styled.section`
display: block;
margin-bottom: 32px;
border-style: none none solid none;
border-color: ${colors.darkGray};
border-width: 2px;


H2 {
    font-family: ${fonts.tech};
    text-transform: uppercase;
    font-size: 32px;
    text-align: left;
    color: ${colors.darkGray};
}
`;

const CardWrap = styled.section`
display: block;
position:relative;
margin-bottom: 48px;
`;

const ListStyles = styled.section`
}
`;

const ArmyList = ({
    type = "primary"
}) => {
    if (type === "HQ") {
        return (
            <CardWrap>
                <CardHeader>
                    <h2 id="HQ-Units">HQ Units</h2>
                </CardHeader>
                <ListStyles>
                    <WarhammerCard cardTitle="Primaris Captain" />
                    <WarhammerCard cardTitle="Terminator Captain" />
                    <WarhammerCard cardTitle="Chaplain on Bike" />
                </ListStyles>
            </CardWrap>
        );
    }
    else if (type === "Troops") {
        return (
            <CardWrap>
                <CardHeader>
                    <h2 id="Troops">Troops</h2>
                </CardHeader>
                <ListStyles>
                    <WarhammerCard cardTitle="Heavy Intercessor Squad" />
                </ListStyles>
            </CardWrap>
        );
    }
    else if (type === "Elites") {
        return (
            <CardWrap>
                <CardHeader>
                    <h2 id="Elites">Elites</h2>
                </CardHeader>
                <ListStyles>
                    <WarhammerCard cardTitle="Bladeguard Ancient" />
                    <WarhammerCard cardTitle="Bladeguard Veteran" />
                </ListStyles>
            </CardWrap>
        );
    }
    else if (type === "FastAttack") {
        return (
            <CardWrap>
                <CardHeader>
                    <h2 id="Fast-Attack">Fast Attack</h2>
                </CardHeader>
                <ListStyles>
                </ListStyles>
            </CardWrap>
        );
    }
    else if (type === "HeavySupport") {
        return (
            <CardWrap>
                <CardHeader>
                    <h2 id="Heavy-Support">Heavy Support</h2>
                </CardHeader>
                <ListStyles>
                    <WarhammerCard cardTitle="Redemptor Dreadnought" />
                    <WarhammerCard cardTitle="Hellblaster Squad" />
                </ListStyles>
            </CardWrap>
        );
    }
    else if (type === "Flyer") {
        return (
            <CardWrap>
                <CardHeader>
                    <h2 id="Flyer">Flyer</h2>
                </CardHeader>
                <ListStyles>
                </ListStyles>
            </CardWrap>
        );
    }
    else if (type === "Transport") {
        return (
            <CardWrap>
                <CardHeader>
                    <h2 id="Transport">Transport</h2>
                </CardHeader>
                <ListStyles>
                    <WarhammerCard cardTitle="Repulsor" />
                </ListStyles>
            </CardWrap>
        );
    }
};
export default ArmyList;

