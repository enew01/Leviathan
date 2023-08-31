import React from "react";
import styled from "styled-components"
import Title from "../Components/title"
import { AnimatePresence, motion } from "framer-motion";
import Aperture from "@/Components/aperture";
import FactionLine from "@/Components/faction_line";
import CustomButton from "../Components/button"
import { useState } from "react";
import { useRouter } from "next/router";
import HeaderNav from "@/Components/header_nav";
import img from '../public/astartes_background.jpg';
import { fonts, colors, media } from "@/styles/variables";
import WarhammerCard from "@/Components/Cards/card_list";
import PhaseWrap from "@/Components/Phases/phase_wrap";
import Stratagems from "@/Components/stratagems";
import KeywordButton from "@/Components/Keywords/keyword_button";
import KeywordDef from "@/Components/Keywords/keyword_def";


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
@media ${media.mobile} {
    width: 100%;
    padding: 0;
}


::-webkit-scrollbar {
  width: 60px;
  @media ${media.mobile} {
      display: none;
  }
}

::-webkit-scrollbar-track {
  background: ${colors.darkGray}; 
}
 
::-webkit-scrollbar-thumb {
  background: ${colors.tyranidPurple}; 
}

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
@media ${media.mobile} {
    width: 100%;
    padding: .5rem;
}
.faction-title {
  margin-top: 100px;
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
`
const Phases = styled.section`
margin-top: 25px;
display: block;
width: 100%;
height: auto;
position:relative;
`;
const Keywords = styled.section`
width: 100%;
height: auto;
position:relative;
margin-bottom: 50px;
.keyword-buttons {
    display: flex;
    flex-wrap: wrap;
    position: relative;
    @media ${media.mobile} {
        flex-direction: column;
    }
    .keyword-button {
      width: 25%;
      border-radius: 10px 10px 0 0;
      @media ${media.mobile} {
          width: auto;
      }
    }
}

.keyword-definitions {
    position: relative;
    margin-bottom: 50px;
    .keyword-definition {
        overflow: hidden;
        transition: height 0.3s ease-in-out;
        background-color: ${colors.white};
        z-index: 8;
      }
} `

const SectionTitle = styled.section`
font-family: ${fonts.tech};
font-size: 32px;
text-transform: uppercase;
border-style: none none solid none;
border-width: 3px;
border-color: ${colors.darkGray};
color: ${colors.darkGray};
margin-bottom: 25px;
font-weight: 700;
`;

const ListStyles = styled.section``;




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
  const otherUnits = ["Neurogaunts", "Barbgaunts", "Zoanthropes", "VonRyan Leapers", "Screamer Killer", "Psychophage", "Tyrannofex"];


  const phaseData = [
    {
      title: "Faction Rules",
      stepsContent: [
        {
          title: "Synapse", text: <ul>If your Army Faction is <b>Tyranids</b>, while a <b>Tyranids</b> unit from your army is within 6" of one or more <b>Synapse</b> models from your army, that unit is said to be within Synapse Range of your army. Each time a <b>Tyranids</b> unit from your army takes a Battle-shock test, if it is within Synapse Range of your army, take that test on 3D6 instead of 2D6.</ul>
        },
        { title: "Shadow in the Warp", text: <ul>If your Army Faction is <b>Tyranids</b>, once per battle, in either player’s Command phase, if one or more units from your army with this ability are on the battlefield, you can unleash the Shadow in the Warp. When you do, each enemy unit on the battlefield must take a Battle-shock test.</ul> },
      ]
    },
    {
      title: "Detachment Rules",
      stepsContent: [
        {
          title: "Hyper-Adaptations", text: <ul>At the start of the first battle round, select one of the following Hyper-adaptations to be active for <b>Tyranids</b> units from your army until the end of the battle: </ul>
        },
        { title: "Swarming Instincts", text: <ul>Each time a <b>Tyranids</b> model with this Hyper-adaptation makes an attack that targets an enemy <b>Infantry</b> or <b>Swarm</b> unit, that attack has the <b>[SUSTAINED HITS 1]</b> ability.</ul> },
        { title: "Hyper-Aggression", text: <ul>Each time a <b>Tyranids</b> model with this Hyper-adaptation makes an attack that targets an enemy <b>Monster</b> or <b>Vehicle unit</b>, that attack has the <b>[LETHAL HITS]</b> ability.</ul> },
        { title: "Hive Predators", text: <ul>Each time a <b>Tyranids</b> model with this Hyper-adaptation makes an attack that targets an enemy <b>Character</b> unit, if a Critical Hit is scored, that attack has the <b>[PRECISION]</b> ability.</ul> },
      ]
    }
  ]; const StratArray = [
    {
      title: 'RAPID REGENERATION',
      cost: 1,
      type: 'Battle Tactic',
      time: "Opponent's Shooting or Fight Phase",
      text: (
        <ul>
          Until the end of the phase, one <b>Tyranids</b> unit that was selected as the target of an attacking unit have the <b>Feel No Pain (6)</b> ability. <b>Feel No Pain (5)</b> if they are within synapse range.
        </ul>
      ),
    },
    {
      title: 'ADRENAL SURGE',
      cost: 2,
      type: 'Battle Tactic',
      time: "Fight Phase",
      text: (
        <ul>
          Until the end of the phase, up to two <b>Tyranids</b> units within Synapse Range of your army and are eligible to fight score critical hits on an unmodified hit roll of 5+.
        </ul>
      ),
    },
    {
      title: 'DEATH FRENZY',
      cost: 1,
      type: 'Strategic Ploy',
      time: "Fight Phase after an enemy unit has selected its targets",
      text: (
        <ul>
          Select one <b>Tyranid</b> unit that has been selected as the target of an opponent's unit's attack. Until end of phase when a model in that unit is destroyed, if it had not fought roll a D6. On a 4+ do not remove the model. Instead that model can fight after the attacking model's unit has finished making attacks. It is then removed from play.
        </ul>
      ),
    },
    {
      title: 'OVERRUN',
      cost: 1,
      type: 'Strategic Ploy',
      time: "Fight Phase, just before a unit from your army consolidates.",
      text: (
        <ul>
          Until the end of the phase, each time a model in that unit makes a consolidation move it can move up to 6", if it is within synapse range and not within engagement range of enemy units it can instead make a Normal move up to 6" .
        </ul>
      ),
    },
    {
      title: 'SYNAPTIC INSIGHT',
      cost: 1,
      type: 'Strategic Ploy',
      time: "Your Command Phase",
      text: (
        <ul>
          Select either two <b>Tyranid</b> units in Synapse Range or else a single unit. Those units can have an additional Hyper-adaptation in addition to any active (It cannot be the same one selected at the first battle round).
        </ul>
      ),
    },
    {
      title: 'ENDLESS SWARM',
      cost: 1,
      type: 'Strategic Ploy',
      time: "Your Command Phase",
      text: (
        <ul>
          Select up to two <b>Endless Multitude</b> units within Synapse range or one other unit. Return up to D3+3 models to the selected units.
        </ul>
      ),
    },
  ];
  const enhancements = [
    {
      title: 'ALIEN CUNNING',
      text: <ul>Tyranids model only. After both players have
        deployed their armies, select up to three Tyranids
        units from your army and redeploy them. When doing
        so, you can set those units up in Strategic Reserves if
        you wish, regardless of how many units are already in
        Strategic Reserves.</ul>,
    },
    {
      title: 'PERFECTLY ADAPTED',
      text: <ul>Tyranids model only. Once per turn, you can re-roll
        one Hit roll, one Wound roll, one Damage roll, one
        Advance roll, one Charge roll or one saving throw
        made for the bearer.</ul>,
    },
    {
      title: 'SYNAPTIC LINCHPIN',
      text: <ul>Tyranids model only. While a friendly Tyranids unit
        is within 9" of the bearer, that unit is within Synapse
        Range of your army.</ul>,
    },
    {
      title: 'ADAPTIVE BIOLOGY',
      text: <ul>Tyranids model only. The bearer has the Feel No Pain
        5+ ability. At the start of any turn, if the bearer has
        fewer than its starting number of wounds remaining,
        until the end of the battle, it has the Feel No Pain 4+
        ability instead.</ul>,
    },
  ];
  const [activeButton, setActiveButton] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const contentRefs = enhancements.map(() => React.createRef());

  const toggleExpansion = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

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
      <Stratagems
        Color="tyranid-purple"
        link="/tyranids/"
        CardTitle="/Icons/Tyranid_Icon.svg"
        CardReverseTitle="/Icons/guardians-of-the-covenant.svg"
        StratArray={StratArray}
      >
      </Stratagems>
      <PageBackground>
        <Title
          Color="faction"
          title="Tyranids">
        </Title>
        <Phases>
          <PhaseWrap phaseData={phaseData} />
        </Phases>
        <Keywords>
          <SectionTitle>enhancements</SectionTitle>
          <div className="keyword-buttons">
            {enhancements.map((keyword, index) => (
              <KeywordButton
                key={index}
                title={keyword.title}
                onClick={() => toggleExpansion(index)}
                activeButton={activeButton}
                setActiveButton={setActiveButton}
              />
            ))}
          </div>
          <div className="keyword-definitions">
            {enhancements.map((keyword, index) => (
              <KeywordDef
                key={index}
                text={keyword.text}
                expanded={expandedIndex === index}
                contentRef={contentRefs[index]}
              />
            ))}
          </div>
        </Keywords>
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