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
import { fonts, colors } from "@/styles/variables";
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


::-webkit-scrollbar {
  width: 60px;
}

::-webkit-scrollbar-track {
  background: ${colors.darkGray}; 
}
 
::-webkit-scrollbar-thumb {
  background: ${colors.angelsRed}; 
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
background: ${colors.angelsRed};
background: ${colors.angelsGradient};
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
    .keyword-button {
        width: 25%;
      border-radius: 10px 10px 0 0;
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

export default function angels({ armyData }) {
    const { data } = armyData;
    const [showTransition, setShowTransition] = useState(false);
    const router = useRouter();

    const handleButtonClick = (link) => {
        setShowTransition(true);
        setTimeout(() => {
            router.push(link);
        }, 500);
    };

    const characterUnits = ["Captain Gravis", "Lieutenant"];
    const battlelineUnits = ["Intercessor", "Tactical Squad"];
    const otherUnits = ["Aggressor Squad", "Eradicator Squad", "Outrider Squad", "Dreadnought Librarian"];

    const phaseData = [
        {
            title: "Faction Rules",
            stepsContent: [
                {
                    title: "Oath of Moment", text: <ul>If your Army Faction is <b>Adeptus Astartes</b>, at the start of your Command Phase, select one unit from your opponent's army. Until the start of your next Command Phase, each time a model from your army with htis ability makes an attack that targets that enemy unit, you can re-roll the Hit and the WOund roll</ul>
                },
                { title: "Space Marine Chapters", text: <ul>If an <b>Adeptus Astartes</b> unit has a second Faction keyword on its datasheet, that Faction keyword is the name of that unit’s Chapter.</ul> },
            ]
        },
        {
            title: "Detachment Rules",
            stepsContent: [
                {
                    title: "Combat Doctrines", text: <ul>At the start of your Command phase, you can select one of the Combat Doctrines listed below. Until the start of your next Command phase, that Combat Doctrine is active and its effects apply to all Adeptus Astartes units from your army with this ability. You can only select each Combat Doctrine once per battle.</ul>
                },
                { title: "Devastator Doctrine", text: <ul>This unit is eligible to shoot in a turn in which it Advanced.</ul> },
                { title: "Tactical Doctrine", text: <ul>This unit is eligible to shoot and declare a charge in a turn in which it Fell Back.</ul> },
                { title: "Assault Doctrine", text: <ul>This unit is eligible to declare a charge in a turn in which it Advanced.</ul> },
            ]
        }
    ]; const StratArray = [
        {
            title: 'ONLY IN DEATH DOES DUTY END',
            cost: 2,
            type: 'Epic Deed',
            time: "Fight phase, just after an enemy unit has selected its targets.",
            text: (
                <ul>
                    Select one <b>Adeptus Astartes</b> unit from your army, when that unit is selected as the target of one or more of the attacking unit’s attacks, until the end of that phase, every time a model in that unit is destroyed, if it has not fought this do not remove it from play.The destroyed model can fight after the attacking model’s unit has finished making its attacks, and is then removed from play.
                </ul>
            ),
        },
        {
            title: 'ARMOUR OF CONTEMPT',
            cost: 1,
            type: 'Battle Tactic',
            time: "Opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
            text: (
                <ul>
                    Select one <b>Adeptus Astartes</b> unit from your army, when that unit is selected as the target of one or more of the attacking unit’s attacks, until the end of that phase, each time a target attacks your unit, worsen the AP characteristic of that attack by 1.
                </ul>
            ),
        },
        {
            title: 'HONOUR THE CHAPTER',
            cost: 1,
            type: 'Battle Tactic',
            time: "Fight Phase",
            text: (
                <ul>
                    Select one <b>Adeptus Astartes</b> Unit, until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If your unit is under the effects of the Assault Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.
                </ul>
            ),
        },
        {
            title: 'ADAPTIVE STRATEGY',
            cost: 1,
            type: 'Strategic Ploy',
            time: "Your Command Phase",
            text: (
                <ul>
                    Select one <b>Adeptus Astartes</b> unit, Select the Devastator Doctrine, Tactical Doctrine or Assault Doctrine. Until the start of your next Command phase, that Combat Doctrine is active for that unit instead of any other Combat Doctrine that is active for your army, even if you have already selected that doctrine this battle.
                </ul>
            ),
        },
        {
            title: 'STORM OF FIRE',
            cost: 1,
            type: 'Battle Tactic',
            time: "Your Shooting Phase",
            text: (
                <ul>
                    Select one <b>Adeptus Astartes</b> unit, Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability. If your unit is under the effects of the Devastator Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.
                </ul>
            ),
        },
        {
            title: 'SQUAD TACTICS',
            cost: 1,
            type: 'Strategic Ploy',
            time: "Your opponent’s Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
            text: (
                <ul>
                    Select one <b>Adeptus Astartes Infantry</b> or <b>Mounted</b> unit that is within 9" of the enemy unit that just ended the move. Your unit can make a Normal move of up to D6", or a Normal move of up to 6" instead if it is under the effects of the Tactical Doctrine. You cannot select a unit that is within Engagement Range of one or more enemy units
                </ul>
            ),
        },
    ];
    const enhancements = [
        {
            title: 'ARTIFICER ARMOUR',
            text: <ul><b>Adeptus Astartes</b> model only. The bearer has a Save
                characteristic of 2+ and the Feel No Pain 5+ ability.
            </ul>,
        },
        {
            title: 'THE HONOUR VEHEMENT',
            text: <ul><b>Adeptus Astartes</b> model only. Add 1 to the Attacks
                and Strength characteristics of the bearer’s melee
                weapons. While the bearer is under the effects
                of the Assault Doctrine, add 2 to the Attacks and
                Strength characteristics of the bearer’s melee
                weapons instead.
            </ul>,
        },
        {
            title: 'ADEPT OF THE CODEX',
            text: <ul><b>Captain</b> model only. At the start of your Command
                phase, if the bearer is on the battlefield, instead of
                selecting a Combat Doctrine to be active for your
                army, you can select the Tactical Doctrine. If you do,
                until the start of your next Command phase, that
                doctrine is active for the bearer’s unit only, even if you
                have already selected that doctrine to be active for
                your army this battle.
            </ul>,
        },
        {
            title: 'BOLTER DISCIPLINE',
            text: <ul><b>Adeptus Astartes</b> model only. While the bearer is
                leading a unit, ranged weapons equipped by models
                in that unit have the [SUSTAINED HITS 1] ability. In
                addition, while the bearer’s unit is under the effects of
                the Devastator Doctrine, each time a model in that unit
                makes a ranged attack, a successful unmodified Hit
                roll of 5+ scores a Critical Hit.
            </ul>,
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
                        link="/Icons/blood-angels.svg"
                        alt="Astartes logo" />
                    <FactionLine
                        title="By the Blood of Sanguinius" />
                </Transition>
            </AnimatePresence>
            <HeaderNav
                Color="angels-red"
                link="/angels-astartes/"
                CardTitle="/Icons/blood-angels.svg"
                CardReverseTitle="/Icons/guardians-of-the-covenant.svg"
            />
            <Stratagems
                Color="angels-red"
                link="/angels-astartes/"
                CardTitle="/Icons/blood-angels.svg"
                CardReverseTitle="/Icons/guardians-of-the-covenant.svg"
                StratArray={StratArray}
            >
            </Stratagems>
            <PageBackground>
                <Title
                    Color="faction"
                    title="Blood Angels">
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
                            console.log(data);
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
                            console.log(data);
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
                            console.log(data);

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
angels.displayName = 'Angels';

export async function getStaticProps() {
    const res = await fetch(process.env.APP_URL + "api/army-data?name=space_marines");
    const data = await res.json();

    return {
        props: {
            armyData: data,
        },
        revalidate: 60
    }
}