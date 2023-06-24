import { Inter } from 'next/font/google'
import CustomButton from "../Components/button"
import Rings from "../Components/rings"
import Title from "../Components/title"
import styled from "styled-components"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import Aperture from "@/Components/aperture";
import FactionLine from "@/Components/faction_line";
import { colors } from '@/styles/variables'


const Main = styled.section`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 6rem;
min-height: 100vh;
overflow: hidden;
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

const PageBackground = styled.section`
position: relative;
display: block;
width: 100vw;
padding:70px 0px;
max-width: 1440px;
margin: 0 auto;
.home-button {
    margin-bottom: 75px;
}
`;

const ButtonList = styled.section`
gap: 35px;
display:flex;
flex-direction: column;
align-items: center;
text-align: center;
width: var(--max-width);
max-width: 100%;
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
`;

export default function Home() {
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
    <Overlay />
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
      <Title title="Leviathan: Warhammer Armor Repository" />
      <ButtonList>
        <CustomButton
          link="/adeptus-astartes/"
          type="primary"
          fill="filled"
          text="Adeptus Astartes"
          onClick={handleButtonClick}
        />
        <CustomButton
          link="/tyranids/"
          type="primary"
          fill="filled"
          text="Tyranids"
          onClick={handleButtonClick}
        />
      </ButtonList>
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
      <Rings />
    </Main>
  );
}







