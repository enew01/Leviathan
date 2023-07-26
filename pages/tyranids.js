import React from "react";
import styled from "styled-components"
import Title from "../Components/title"
import ArmyList from "../Components/Army Lists/tyranidarmylist"
import { AnimatePresence, motion } from "framer-motion";
import Aperture from "@/Components/aperture";
import FactionLine from "@/Components/faction_line";
import CustomButton from "../Components/button"
import { useState } from "react";
import { useRouter } from "next/router";
import HeaderNav from "@/Components/header_nav";
import img from '../public/tyranid_background.jpg';
import { fonts, colors } from "@/styles/variables";
import WarhammerCard from "@/Components/Cards/card_list";


const Main = styled.section`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
overflow: hidden;
background-image: url(${img.src});
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
  background: ${colors.tyranidPurple}; 
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
background: ${colors.tyranidPurple};
background: ${colors.tyranidGradient};
opacity: 0.8;
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
scroll-behavior: smooth!important;
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
    top: calc(50% - 150px);
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

const CardWrap = styled.section`
display: block;
position:relative;
margin-bottom: 48px;
`;

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

const ListStyles = styled.section`
}
`;



export default function tyranids({ armyData }) {
  const { data } = armyData;
  const [showTransition, setShowTransition] = useState(false);
  const router = useRouter();

  const handleButtonClick = (link) => {
    setShowTransition(true);
    setTimeout(() => {
      router.push(link);
    }, 500);
  };
  const characterUnits = ["Neurotyrant"];
  const battlelineUnits = ["Termagant"];
  const otherUnits = ["Neurogaunt", "Barbgaunt", "Zoanthrope", "Von Ryan Leapers", "Screamer Killer", "Psychophage", "Tyrannofex"];


  return (
    <Main>
      <Overlay />
      <AnimatePresence>
        <Transition
          initial={{ opacity: 1, height: "100%" }}
          animate={{ opacity: 1, height: 0 }}
          transition={{ duration: 0.5, delay: 2.15 }}>
          <Aperture
            link="/Icons/Tyranid_Icon.svg"
            alt="Tyranid logo" />
          <FactionLine
            title="The Great Devourer" />
        </Transition>
      </AnimatePresence>
      <HeaderNav
        Color="tyranid-purple"
        link="/tyranids/"
        CardTitle="/Icons/Tyranid_Icon.svg"
        CardReverseTitle="/Icons/guardians-of-the-covenant.svg"
      />
      <PageBackground>
        <Title
          Color="faction"
          title="Tyranids">
        </Title>
        <CardWrap>
          <CardHeader>
            <h2 id="character">character</h2>
          </CardHeader>
          <ListStyles>
            {data.filter(d => d.type === "character").filter(d => characterUnits.includes(d.name)).map(data => {
              return <WarhammerCard data={data} />

            })}
          </ListStyles>
        </CardWrap>
        <CardWrap>
          <CardHeader>
            <h2 id="battleline">battleline</h2>
          </CardHeader>
          <ListStyles>
            {data.filter(d => d.type === "battleline").filter(d => battlelineUnits.includes(d.name)).map(data => {
              return <WarhammerCard data={data} />

            })}
          </ListStyles>
        </CardWrap>
        <CardWrap>
          <CardHeader>
            <h2 id="other">other</h2>
          </CardHeader>
          <ListStyles>
            {data.filter(d => d.type === "other").filter(d => otherUnits.includes(d.name)).map(data => {
              return <WarhammerCard data={data} />

            })}
          </ListStyles>
        </CardWrap>
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
tyranids.displayName = 'Tyranids';

export async function getStaticProps() {
  const res = await fetch(process.env.APP_URL + "api/army-data?name=tyranids");
  const data = await res.json();

  return {
    props: {
      armyData: data,
    },
    revalidate: 60
  }
}