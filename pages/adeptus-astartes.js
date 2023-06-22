import React from "react";
import styled from "styled-components"
import Title from "../Components/title"
import ArmyList from "../Components/Army Lists/spacemarinearmylist"
import { AnimatePresence, motion } from "framer-motion";
import Aperture from "@/Components/aperture";
import FactionLine from "@/Components/faction_line";
import CustomButton from "../Components/button"
import { useState } from "react";
import { useRouter } from "next/router";
import HeaderNav from "@/Components/header_nav";



const Main = styled.section`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
overflow: hidden;
`;

const PageBackground = styled.section`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
padding: 6rem;
min-height: 100vh;
overflow-Y: scroll;
z-index: 3;
.home-button {
    margin-bottom: 75px;
}
`;

const Transition = styled(motion.section)`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100%;
  margin: 0 auto;
  background-color: #000;
  z-index: 8;
  overflow: hidden;
  top:0;
  img {
    position: absolute;
    display: block;
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(4deg) brightness(106%) contrast(101%);
    top: calc(50% - 200px);
    right: 0;
    left: 0;
    margin: auto;
  }
`;

const DoorTransition = styled(motion.section)`
  position: absolute;
  display: block;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  z-index: 8;
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
  height: 500px;
  width: 500px;
  display: block;
  margin: auto;
  right: 0;
  left: 0;
  top:-250px;
  border-radius: 500px;
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
  height: 500px;
  width: 500px;
  display: block;
  margin: auto;
  right: 0;
  left: 0;
  bottom:-250px;
  border-radius: 500px;
  background-color: #FFF;
}
`;
export default function spacemarines() {
    const [showTransition, setShowTransition] = useState(false);
    const router = useRouter();

    const handleButtonClick = (link) => {
        setShowTransition(true);
        setTimeout(() => {
            router.push(link);
        }, 500);
    };
    return (
        <Main>
            <AnimatePresence>
                <Transition
                    initial={{ opacity: 1, height: "100%" }}
                    animate={{ opacity: 1, height: 0 }}
                    transition={{ duration: 0.5, delay: 2.15 }}>
                    <Aperture
                        link="/Icons/adeptus-astartes.svg"
                        alt="Astartes logo" />
                    <FactionLine
                        title="The Angels of Death" />
                </Transition>
            </AnimatePresence>
            <HeaderNav
                link="/adeptus-astartes/"
                CardTitle="/Icons/adeptus-astartes.svg"
                CardReverseTitle="/Icons/guardians-of-the-covenant.svg"
            />
            <PageBackground>
                <Title
                    title="Adeptus Astartes">
                </Title>
                <ArmyList type="HQ" />
                <ArmyList type="Troops" />
                <ArmyList type="Elites" />
                <ArmyList type="FastAttack" />
                <ArmyList type="HeavySupport" />
                <ArmyList type="Flyer" />
                <ArmyList type="Transport" />
                <CustomButton
                    link="/"
                    type="primary"
                    fill="filled"
                    className="home-button"
                    text="Return"
                    onClick={handleButtonClick}
                />
            </PageBackground>
            <AnimatePresence>
                {showTransition && (
                    <DoorTransition>
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
                    </DoorTransition>
                )}
            </AnimatePresence>
        </Main>
    );
};