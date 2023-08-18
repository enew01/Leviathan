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
  background: ${colors.hereticRed}; 
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
background: ${colors.hereticRed};
background: ${colors.hereticGradient};
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
      width: 20%;
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

export default function heretic({ armyData }) {
    const { data } = armyData;
    const [showTransition, setShowTransition] = useState(false);
    const router = useRouter();

    const handleButtonClick = (link) => {
        setShowTransition(true);
        setTimeout(() => {
            router.push(link);
        }, 500);
    };

    const characterUnits = ["Apothecary Primaris"];
    const battlelineUnits = ["Assault Intercessor"];
    const otherUnits = ["Aggressor Squad"];

    const phaseData = [
        {
            title: "Faction Rules",
            stepsContent: [
                {
                    title: "Dark Pacts",
                    text: <ul>
                        If your Army Faction is <b>Heretic Astartes</b>, each time a
                        unit with this ability is selected to shoot or fight, it can
                        make a Dark Pact. If it does, select one of the following
                        abilities for that unit’s weapons to gain until the end
                        of the phase:
                        <li><b>-[LETHAL HITS]</b></li>
                        <li><b>-[SUSTAINED HITS 1]</b></li>
                        Each time a unit makes a Dark Pact, after it has
                        resolved its attacks, it must take a Leadership test; if
                        that test is failed, that unit suffers D3 mortal wounds.
                    </ul>
                },
                {
                    title: "The Lost and the Damned",
                    text: <ul>
                        If your Army Faction is <b>Heretic Astartes</b>,
                        you can include any of the following
                        units in your army, and when you do so
                        their Faction keywords are replaced with
                        <b>Heretic Astartes</b>:
                        <li><b>-Khorne Berzerkers</b></li>
                        <li><b>-Rubric Marines</b></li>
                        <li><b>-Plague Marines</b></li>
                        The combined points value of such units you
                        can include in your army depends on the
                        battle size, as follows:
                        <li><b>-Incursion:</b>Up to 250 pts</li>
                        <li><b>-Strike Force:</b>Up to 500 pts</li>
                        <li><b>-Onslaught:</b>Up to 750 pts</li>
                    </ul>
                },
            ]
        },
        {
            title: "Detachment Rules",
            stepsContent: [
                {
                    title: "Marks of Chaos", text: <ul>When mustering your army, each time you select a <b>Heretic Astartes</b> unit
                        to include in your army, if that unit is not an <b>Epic Hero</b> and does not already
                        have one or more of the keywords listed below, you must select one of the
                        keywords listed below for that unit to gain (note which units gain which
                        keywords in this way on your Army Roster). Each time a unit with one of
                        these keywords makes a Dark Pact, it gains the associated ability below until
                        the end of the phase.
                    </ul>
                },
                {
                    title: "Blood Fury (Khorne)",
                    text: <ul>
                        In the Fight phase, if this unit’s weapons
                        gained the <b>[LETHAL HITS]</b> ability this phase as the
                        result of a Dark Pact, each time a model in this unit
                        makes an attack, an unmodified Hit roll of 5+ scores
                        a Critical Hit.
                    </ul>
                },
                {
                    title: "Warpfire (Tzeentch)",
                    text: <ul>
                        In the Shooting phase, if this unit’s
                        weapons gained the <b>[LETHAL HITS]</b> ability this phase
                        as the result of a Dark Pact, each time a model in this
                        unit makes an attack, an unmodified Hit roll of 5+
                        scores a Critical Hit.
                    </ul>
                },
                {
                    title: "Spreading Sickness (Nurgle)",
                    text: <ul>
                        In the Shooting phase, if this
                        unit’s weapons gained the <b>[SUSTAINED HITS 1]</b> ability
                        this phase as the result of a Dark Pact, each time a
                        model in this unit makes an attack, an unmodified
                        Hit roll of 5+ scores a Critical Hit.
                    </ul>
                },
                {
                    title: "Excessive Cruelty (Slaanesh)",
                    text: <ul>
                        In the Fight phase, if this unit’s
                        weapons gained the <b>[SUSTAINED HITS 1]</b> ability this
                        phase as the result of a Dark Pact, each time a model
                        in this unit makes an attack, an unmodified Hit roll of
                        5+ scores a Critical Hit.
                    </ul>
                },
                {
                    title: "Glory to Chaos (Chaos Undivided)",
                    text: <ul>
                        Each time a model in this unit makes an attack, re-roll a Hit roll of 1.
                    </ul>
                },
            ]
        }
    ]; const StratArray = [
        {
            title: 'INFERNAL RITES',
            cost: 2,
            type: 'Battle Tactic',
            time: "Your opponent’s Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
            text: (
                <ul>
                    Select one One <b>Heretic Astartes</b> unit
                    from your army that was selected as the
                    target of one or more of the attacking
                    unit’s attacks. Until the end of the phase, each
                    time an attack targets your unit, worsen
                    the Armour Penetration characteristic of
                    that attack by 1.
                </ul>
            ),
        },
        {
            title: 'PROFANE ZEAL',
            cost: 1,
            type: 'Battle Tactic',
            time: "Your Shooting phase or the Fight phase.",
            text: (
                <ul>
                    Select one One <b>Heretic Astartes</b> unit from
                    your army that has not been selected to
                    shoot or fight this phase. Until the end of the phase, each
                    time a model in your unit makes an
                    attack, re-roll a Hit roll of 1 and re-roll a
                    Wound roll of 1. If your unit is a Chaos
                    Undivided unit, you can instead re-roll
                    the Hit roll and you can re-roll the Wound
                    roll for that attack.
                </ul>
            ),
        },
        {
            title: 'ETERNAL HATE',
            cost: 1,
            type: 'Strategic Ploy',
            time: "Fight phase, just after an enemy unit has selected its targets.",
            text: (
                <ul>
                    Select one One <b>Heretic Astartes</b> unit from
                    your army that was selected as the target of
                    one or more of the attacking unit’s attacks. Until the end of the phase, each
                    time a model in your unit is destroyed, if that
                    model has not fought this phase, roll one
                    D6, adding 1 to the result if it is a <b>Khorne</b>
                    unit: on a 4+, do not remove it from play. That
                    destroyed model can fight after the attacking
                    model’s unit has finished making its attacks,
                    and is then removed from play.
                </ul>
            ),
        },
        {
            title: 'SKINSHIFT',
            cost: 1,
            type: 'Epic Deed',
            time: "Your Command phase.",
            text: (
                <ul>
                    Select one One <b>Heretic Astartes</b>  unit from
                    your army. One model in your unit regains
                    up to 3 lost wounds. In addition, if your
                    unit is a <b>Tzeentch</b> unit below its Starting
                    Strength, one destroyed model (excluding
                    Character models) is returned to your
                    unit with its full wounds remaining
                </ul>
            ),
        },
        {
            title: 'UNNATURAL SWIFTNESS',
            cost: 1,
            type: 'Strategic Ploy',
            time: "Your Movement phase.",
            text: (
                <ul>
                    Select one One <b>Heretic Astartes</b> unit from
                    your army. Until the end of the turn, your unit
                    is eligible to shoot and declare a charge in
                    a turn in which it Fell Back. In addition, if
                    your unit is a <b>Slaanesh</b> unit, until the end
                    of the turn, your unit is eligible to shoot
                    and declare a charge in a turn in which
                    it Advanced
                </ul>
            ),
        },
        {
            title: 'DARK OBSCURATION',
            cost: 1,
            type: 'Strategic Ploy',
            time: "Your opponent’s Shooting phase, just after an enemy unit has selected its targets.",
            text: (
                <ul>
                    Select one One <b>Heretic Astartes</b> unit
                    from your army that was selected as the
                    target of one or more of the attacking
                    unit’s attacks. Until the end of the phase, your
                    unit has the Stealth ability. In addition, if
                    your unit is a <b>Nurgle</b> unit, until the end of
                    the phase, your unit can only be selected
                    as the target of a ranged attack if the
                    attacking model is within 12".
                </ul>
            ),
        },
    ];
    const enhancements = [
        {
            title: 'BURNING BLOOD',
            text: <ul>
                <b>Heretic Astartes Khorne</b> model only. Add 1 to the
                Attacks and Strength characteristics of the bearer’s
                melee weapons. Each time the bearer’s unit makes
                a Dark Pact, until the end of the phase, add D3 to the
                Attacks and Strength characteristics of the bearer’s
                melee weapons instead.
            </ul>,
        },
        {
            title: 'EYE OF TZEENTCH',
            text: <ul>
                <b>Heretic Astartes Tzeentch</b> model only. Each time
                the bearer’s unit makes a Dark Pact, take a Leadership
                test for the bearer: if that test is passed, you gain 1CP.
            </ul>,
        },
        {
            title: 'ORBS OF UNLIFE',
            text: <ul>
                <b>Heretic Astartes Nurgle</b> model only. At the end
                of the Fight phase, roll one D6 for every enemy unit
                within 6" of the bearer, adding 1 to the result if the
                bearer’s unit made a Dark Pact that phase: on a 4+,
                that enemy unit suffers D3 mortal wounds.

            </ul>,
        },
        {
            title: 'INTOXICATING ELIXIR',
            text: <ul>
                <b>Heretic Astartes Slaanesh</b> model only. The bearer
                has the Feel No Pain 5+ ability. Each time the bearer
                shoots or fights, if the bearer’s unit made a Dark
                Pact this phase, after the bearer has resolved those
                attacks, select one enemy unit that was hit by one or
                more of those attacks; that enemy unit must take a
                Battle-shock test.
            </ul>,
        },
        {
            title: 'LIBER HERETICUS',
            text: <ul>
                <b>Heretic Astartes Chaos Undivided</b> model only.
                Each time the bearer’s unit makes a Dark Pact, that
                unit’s weapons gain the [LETHAL HITS] and [SUSTAINED
                HITS 1] ability until the end of the phase, instead of
                just gaining one of those abilities.
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
                        link="/Icons/heretic-astartes.svg"
                        alt="Astartes logo" />
                    <FactionLine
                        title="Death to the False Emperor" />
                </Transition>
            </AnimatePresence>
            <HeaderNav
                Color="heretic-red"
                link="/heretic_astartes/"
                CardTitle="/Icons/heretic-astartes.svg"
                CardReverseTitle="/Icons/guardians-of-the-covenant.svg"
            />
            <Stratagems
                Color="heretic-red"
                link="/heretic_astartes/"
                CardTitle="/Icons/heretic-astartes.svg"
                CardReverseTitle="/Icons/guardians-of-the-covenant.svg"
                StratArray={StratArray}
            >
            </Stratagems>
            <PageBackground>
                <Title
                    Color="faction"
                    title="Heretic Astartes">
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
heretic.displayName = 'Heretic Astartes';

export async function getStaticProps() {
    const res = await fetch(process.env.APP_URL + "api/army-data?name=heretic_astartes");
    const data = await res.json();

    return {
        props: {
            armyData: data,
        },
        revalidate: 60
    }
}