import React from "react";
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion";
import Aperture from "@/Components/aperture";
import FactionLine from "@/Components/faction_line";
import CustomButton from "../Components/button"
import { useState } from "react";
import { useRouter } from "next/router";
import HeaderNav from "@/Components/header_nav";
import img from '../public/astartes_background.jpg';
import { fonts, colors } from "@/styles/variables"
import ScoreCounter from "@/Components/counter";
import PhaseWrap from "@/Components/Phases/phase_wrap";


const Main = styled.section`
width: 100%;
margin: 0 auto;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
overflow: hidden;
background-size: cover;


/* width */
::-webkit-scrollbar {
  width: 60px;
}

/* Track */
::-webkit-scrollbar-track {
  background: ${colors.darkGray}; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${colors.buttonBG}; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #FFF; 
  cursor:pointer;
}
`;

const Overlay = styled.section`
position: absolute;
height: 100%;
width: 100%;
top: 0;
display: block;
background-color: ${colors.darkGray};
opacity: 0.8;
`;

const LogoTransition = styled(motion.section)`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  background-color: #000;
  z-index: 10;
  overflow: hidden;
  top: 0;
  img {
    position: absolute;
    display: block;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(4deg) brightness(106%) contrast(101%);
    top: calc(50% - 125px);
    right: 0;
    left: 0;
    margin: auto;
    height: 250px;
    width: 250px;
  }
`;
const Transition = styled(motion.section)`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  z-index: 10;
  top:0;
`;

const TDoorUp = styled(motion.section)`
position: absolute;
display: block;
width: 100vw;
height: 0;
margin: 0 auto;
background-color: #000;
z-index: 8;
bottom:0;
overflow:hidden;
.halfcircle {
  position: absolute;
  height: 350px;
  width: 350px;
  display: block;
  margin: auto;
  right: 0;
  left: 0;
  top:-175px;
  border-radius: 350px;
  background-color: #FFF;
}
`;

const TDoorDown = styled(motion.section)`
position: absolute;
display: block;
width: 100vw;
height: 0;
margin: 0 auto;
background-color: #000;
z-index: 8;
overflow:hidden;
top:0;
.halfcircle {
  position: absolute;
  height: 350px;
  width: 350px;
  display: block;
  margin: auto;
  right: 0;
  left: 0;
  bottom:-175px;
  border-radius: 350px;
  background-color: #FFF;
}
`
const PointTrackers = styled.section`
width: 100%;
margin: 40px auto;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const RoundCounter = styled.section`
display: Block;
width: 300px;
height: auto;
.round-count-wrap {
    height: 300px;
    width: 100%;
    border-radius: 150px;
    background-color: ${colors.darkGray};
    font-family: ${fonts.goldman};
    font-size: 150px;
    border: 1px solid ${colors.bordCol};
    color: ${colors.white};
    text-align: center;
    line-height: 120px;
    span {
        font-size: 36px;
        line-height: 30px;
    }
}
.round-button {
    display: block;
    width: 300px;
    height: 50px;
    font-family: ${fonts.goldman};
    font-size: 24px;
    border: 1px solid ${colors.bordCol};
    color: ${colors.darkGray};
    background-color: ${colors.buttonBG};
    text-align: center;
    line-height: 50px;
    margin-top: 10px;
    &:hover {
        background: ${colors.buttonHoverBG};
        cursor: pointer;
    }

}
`
const PageBackground = styled.section`
width: 100%;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
padding: 6rem;
min-height: 100vh;
overflow-Y: scroll;
z-index: 3;
scroll-behavior: smooth!important;
.home-button {
    margin-bottom: 75px;
}
`
const Phases = styled.section`
margin-top: 25px;
display: block;
width: 100%;
height: auto;
position:relative;
`;

export default function GameTracker() {
    const [showTransition, setShowTransition] = useState(false);
    const router = useRouter();

    const handleButtonClick = (link) => {
        setShowTransition(true);
        setTimeout(() => {
            router.push(link);
        }, 500);
    };

    const [roundCount, setCount] = useState(1);

    const addRound = () => {
        setCount(roundCount + 1);
    };

    const phaseData = [
        {
            title: "Command Phase",
            stepsContent: [
                { title: "Command", text: <ul><li>-Both Players gain 1 Command Point.</li><li>-Resolve any special rules that take place in the Command Phase</li></ul> },
                { title: "Battleshock", text: <ul><li>-Take a Battle-shock test for every unit Below Half Strength. <br />(Below half wounds for single model units)</li></ul> },
            ]
        },
        {
            title: "Movement Phase",
            stepsContent: [
                { title: "Move Units", text: <ul><li>-Units may make a Normal Move, Advance, or Remain Stationary</li><li>-Units in Engagement Range of enemy models can only Fall Back or Remain Stationary</li></ul> },
                { title: "Reinforcements", text: <ul><li>-Set up any units in Reserve on the Battlefield, one at a time. Movement phase ends when Reinforcements are deployed.</li></ul> },
            ]
        },
        {
            title: "Shooting Phase",
            stepsContent: [
                { title: "Select Unit", text: <ul><li>-Select a Unit that has not Advanced or Fallen Back this turn.</li></ul> },
                { title: "Select Target", text: <ul><li>-Select targets for all a units Ranged weapons before it shoots.</li><li>-At least one model must be visible and within range.</li><li>-Models with multiple ranged weapons can shoot them at different targets.</li><li>-Models in the same unit can shoot at the same or different targets.</li></ul> },
                { title: "Make Ranged Attack", text: <ul><li>-Resolve all attacks against one unit before resolving those against any other unit.</li><li>-Resolve all of a weapon's attacks before resolving attacks with another profile.</li></ul> },
                { title: "Repeat for Next Unit", text: <ul></ul> },
            ]
        },
        {
            title: "Charge Phase",
            stepsContent: [
                { title: "Select Unit", text: <ul><li>-Select a Unit that has not Advanced, Fallen Back, or is an Aircraft.</li></ul> },
                { title: "Select Targets", text: <ul><li>-Select one or more units to charge.</li> <li>-Target does not need to be visible</li><li>-The Charge must be able to end in engagement range and not in engagement range of any un-charged unit.</li> </ul> },
                { title: "Charge", text: <ul><li>-Make Charge Roll (2d6)</li><li>-If the above conditions are met the charge is successful.</li><li>-If the charge fails no units move.</li></ul> },
            ]
        },
        {
            title: "Fight Phase",
            stepsContent: [
                { title: "Fight First", text: <ul><li>-Units with the Fight First ability fight, including those who charged.</li></ul> },
                { title: "Pile In", text: <ul><li>-Move a Unit not in bast-to-base contact with an enemy up to 3".</li><li>-This Unit must still be in engagement range and maintain unit coherency.</li><li>-Must End the Pile-In closer to the closest enemy unit than thye started.</li></ul> },
                { title: "Attack", text: <ul><li>-A model can fight if it is in engagement range with an enemy unit. </li><li>-A model can fight if it is in base-to-base contact with a model from its unit that is in base-to-base contact.</li><li>-Rules for attack resolution are the same as ranged weapons.</li><li>-All attacks declared are resolved even if no longer in engagement range.</li></ul> },
                { title: "Consolidate", text: <ul><li>-A Consolidation move can be made to move a model not in base-to-base contact with an enemy up to 3"</li><li>-A unit must be able to end a Consolidation move in engagement range of an enemy unit or within range of an objective marker if no enemy is avaailable.</li><li>-If no enemy or objective marker is within range no Consolidation move can be made.</li></ul> },
            ]
        }
    ];
    return (
        <Main>
            <AnimatePresence>
                <LogoTransition
                    initial={{ opacity: 1, height: "100%" }}
                    animate={{ opacity: 1, height: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}>
                    <Aperture
                        link="/Icons/guardians-of-the-covenant.svg"
                        alt="Warhammer logo" />
                </LogoTransition>
            </AnimatePresence>
            <PageBackground>
                <PointTrackers>
                    <ScoreCounter
                        text="Player 1"
                    />
                    <RoundCounter>
                        <div className="round-count-wrap"><span>ROUND</span><br></br>{roundCount}</div>
                        <div className="round-button" onClick={addRound}>NEXT ROUND</div>
                    </RoundCounter>
                    <ScoreCounter
                        text="Player 2"
                    />
                </PointTrackers>
                <Phases>
                    <PhaseWrap phaseData={phaseData} />
                </Phases>
            </PageBackground>
            <AnimatePresence>
                {showTransition && (
                    <Transition>
                        <TDoorUp
                            initial={{ height: 0 }}
                            animate={{ height: "50%" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }}>
                            <div className="halfcircle"></div>
                        </TDoorUp>
                        <TDoorDown
                            initial={{ height: 0 }}
                            animate={{ height: "50%" }}
                            exit={{ height: 0 }}
                            transition={{ duration: 0.3 }} >
                            <div className="halfcircle"></div>
                        </TDoorDown>
                    </Transition>
                )}
            </AnimatePresence>
        </Main>
    );
}






