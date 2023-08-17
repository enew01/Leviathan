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
  background: ${colors.sororitasRed}; 
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
background: ${colors.sororitasRed};
background: ${colors.sororitasGradient};
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

export default function sororitas({ armyData }) {
    const { data } = armyData;
    const [showTransition, setShowTransition] = useState(false);
    const router = useRouter();

    const handleButtonClick = (link) => {
        setShowTransition(true);
        setTimeout(() => {
            router.push(link);
        }, 500);
    };

    const characterUnits = [""];
    const battlelineUnits = [""];
    const otherUnits = [""];

    const phaseData = [
        {
            title: "Faction Rules",
            stepsContent: [
                {
                    title: "Acts of Faith", text: <ul>If your Army Faction is <b>Adepta Sororitas</b>, each unit from your army with this ability can perform one Act of Faith per phase. This is done using Miracle dice</ul>
                },
                { title: "Gaining of Miracle Dice", text: <ul>If your Army Faction is <b>Adepta Sororitas</b>, you gain 1 Miracle dice:<li>-At the start of each turn.</li><li>-Each time an Adepta Sororitas unit from your army is destroyed.</li>Each time you gain a Miracle dice, roll one D6. The number you roll is the value of that Miracle dice. This value cannot be changed or re-rolled, unless a rule specifically states otherwise. Keep your Miracle dice to one side – this is your Miracle dice pool. </ul> },
                {
                    title: "Performing an Act of Faith", text: <ul>Before making a dice roll for a model or unit from your
                        army with the Acts of Faith ability, if you have one
                        or more dice in your Miracle dice pool, that unit can
                        perform an Act of Faith. If it does, select one of the
                        dice from your Miracle dice pool to substitute that
                        dice roll (if a roll involves more than one dice, e.g. a
                        Charge roll or Battle-shock test, only a single dice can
                        be substituted). The dice that is being substituted is
                        not rolled; instead the value of the selected Miracle
                        dice is used as if it had been rolled (this counts as
                        an unmodified dice roll of that value for all rules
                        purposes). Each Miracle dice can only be selected for
                        substitution once. Once all Miracle dice substitutions
                        have been made, remove the chosen Miracle dice
                        from your Miracle dice pool, and roll all remaining,
                        unsubstituted dice that are a part of the dice roll. You
                        can use Miracle dice when a unit performs an Act of
                        Faith for any of the following types of dice roll:
                        <li>-Advance roll</li>
                        <li>-Battle-shock test</li>
                        <li>-Charge roll</li>
                        <li>-Damage roll</li>
                        <li>-Hit roll</li>
                        <li>-Saving throw</li>
                        <li>-Wound roll</li>
                    </ul>
                },
            ]
        },
        {
            title: "Detachment Rules",
            stepsContent: [
                {
                    title: "The Blood of Martyrs", text: <ul>Each time an <b>Adepta Sororitas</b> model from your
                        army makes an attack, add 1 to the Hit roll if that
                        model’s unit is below its Starting Strength, and add 1
                        to the Wound roll, as well, if that model’s unit is Below
                        Half-strength. For the purposes of this ability, if a
                        unit has a Starting Strength of 1, it is considered to
                        be below its Starting Strength while it has lost one or
                        more wounds.</ul>
                }
            ]
        }
    ]; const StratArray = [
        {
            title: 'DIVINE INTERVENTION',
            cost: 1,
            type: 'Epic Deed',
            time: "Any Phase",
            text: (
                <ul>Select one <b>Adepta Sororitas Character</b> unit from your army that was just destroyed.Discard 1-3 Miracle dice. At the
                    end of the phase, set the last destroyed model from your unit back up on the battlefield, as close as possible to
                    where it was destroyed and not within Engagement Range of any enemy models. That model is set back up with a number
                    of wounds remaining equal to the number of Miracle dice you discarded. You cannot select <b>Saint Celestine</b> as the target of this Stratagem. You cannot select the same <b>Character</b> as the target of this Stratagem more than once per battle. </ul>
            ),
        },
        {
            title: 'LIGHT OF THE EMPEROR',
            cost: 1,
            type: 'Battle Tactic',
            time: "Command Phase",
            text: (
                <ul>Select one <b>Adepta Sororitas</b> unit from your army that is below its Starting Strength. Until the end of the turn, your unit can ignore any or all modifiers to its characteristics and/or to any roll or test made for it (excluding modifiers to saving throws).
                </ul>
            ),
        },
        {
            title: 'HOLY RAGE',
            cost: 1,
            type: 'Strategic Ploy',
            time: "Fight Phase",
            text: (
                <ul>
                    Select One <b>Adepta Sororitas</b> unit from your army that has not been selected to fight this phase. Until the end of the phase, each time a model in your unit makes a melee attack, add 1 to the Wound roll.
                </ul>
            ),
        },
        {
            title: 'SPIRIT OF THE MARTYR',
            cost: 2,
            type: 'Strategic Ploy',
            time: "Fight Phase, just after an enemy unit has selected its targets.",
            text: (
                <ul>
                    Select One <b>Adepta Sororitas</b> unit from your army that was selected as the
                    target of one or more of the attacking
                    unit’s attacks. Until the end of the phase, each
                    time a model in your unit is destroyed, if
                    that model has not fought this phase, do
                    not remove it from play. The destroyed
                    model can fight after the attacking
                    model’s unit has finished making attacks,
                    and is then removed from play.
                </ul>
            ),
        },
        {
            title: 'SUFFERING & SACRIFICE',
            cost: 1,
            type: 'Strategic Ploy',
            time: "Start of the Fight Phase",
            text: (
                <ul>
                    Select One <b>Adepta Sororitas</b> unit from your army that was selected as the
                    target of one or more of the attacking
                    unit’s attacks. Until the end of the phase, each
                    time a model in your unit is destroyed, if
                    that model has not fought this phase, do
                    not remove it from play. The destroyed
                    model can fight after the attacking
                    model’s unit has finished making attacks,
                    and is then removed from play.
                </ul>
            ),
        },
        {
            title: 'REJOICE THE FALLEN',
            cost: 1,
            type: 'Strategic Ploy',
            time: "Your opponent’s Shooting phase, just after an enemy unit has resolved its attacks.",
            text: (
                <ul>
                    Select One <b>Adepta Sororitas</b> unit from your army that that had one or more of
                    its models destroyed as a result of the
                    attacking unit’s attacks.Your unit can shoot as if it were
                    your Shooting phase, but it must target
                    only that enemy unit when doing so, and
                    can only do so if that enemy unit is an
                    eligible target.
                </ul>
            ),
        },
    ];
    const enhancements = [
        {
            title: 'SAINTLY EXAMPLE',
            text: <ul><b>Adepta Sororitas</b> model only. When the bearer is
                destroyed, you gain an additional D3 Miracle dice.
            </ul>,
        },
        {
            title: 'BLADE OF SAINT ELLYNOR',
            text: <ul><b>Adepta Sororitas</b> model only. Add 1 to the
                Attacks, Strength and Damage characteristics of
                the bearer’s melee weapons. If the bearer has lost
                one or more wounds, add 2 to the Attacks, Strength
                and Damage characteristics of the bearer’s melee
                weapons instead.
            </ul>,
        },
        {
            title: 'LITANIES OF FAITH',
            text: <ul><b>Adepta Sororitas</b> model only. At the end of your
                Command phase, if the bearer is on the battlefield,
                you can re-roll one Miracle dice from your Miracle dice
                pool and return it to your Miracle dice pool with the
                new result you rolled. When doing so, if the bearer has
                lost one or more wounds or is leading a unit that is
                Below Half-strength, you can re-roll up to three Miracle
                dice in this way instead.
            </ul>,
        },
        {
            title: 'MANTLE OF OPHELIA',
            text: <ul><b>Canoness</b> or <b>Palatine</b> model only. Each time an
                attack is allocated to the bearer, change the Damage
                characteristic of that attack to 1.
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
                        link="/Icons/adepta_sororitas.svg"
                        alt="Astartes logo" />
                    <FactionLine
                        title="The Sisters of Battle" />
                </Transition>
            </AnimatePresence>
            <HeaderNav
                Color="sororitas-red"
                link="/adepta_sororitas/"
                CardTitle="/Icons/adepta_sororitas.svg"
                CardReverseTitle="/Icons/guardians-of-the-covenant.svg"
            />
            <Stratagems
                Color="sororitas-red"
                link="/adepta_sororitas/"
                CardTitle="/Icons/adepta_sororitas.svg"
                CardReverseTitle="/Icons/guardians-of-the-covenant.svg"
                StratArray={StratArray}
            >
            </Stratagems>
            <PageBackground>
                <Title
                    Color="faction"
                    title="Adepta Sororitas">
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
sororitas.displayName = 'Sororitas';

export async function getStaticProps() {
    const res = await fetch(process.env.APP_URL + "api/army-data?name=adepta_sororitas");
    const data = await res.json();

    return {
        props: {
            armyData: data,
        },
        revalidate: 60
    }
}