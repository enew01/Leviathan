import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import Aperture from "@/Components/aperture";
import { useRouter } from "next/router";
import { fonts, colors } from "@/styles/variables"
import ScoreCounter from "@/Components/counter";
import PhaseWrap from "@/Components/Phases/phase_wrap";
import KeywordButton from "@/Components/Keywords/keyword_button";
import KeywordDef from "@/Components/Keywords/keyword_def";


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
const Keywords = styled.section`
width: 100%;
height: auto;
position:relative;
margin-bottom: 150px;
.keyword-buttons {
    display: flex;
    flex-wrap: wrap;
    position: relative;
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
font-family: ${fonts.goldman};
font-size: 36px;
text-transform: uppercase;
border-style: none none solid none;
border-width: 3px;
border-color: ${colors.white};
color: ${colors.white};
margin-bottom: 25px;
`;

export default function GameTracker() {
    const [showTransition, setShowTransition] = useState(false);
    const router = useRouter();


    const [roundCount, setCount] = useState(1);

    const addRound = () => {
        setCount(roundCount + 1);
    };

    const keywords = [
        {
            title: 'Big Guns Never Tire',
            text: <ul><b>Monsters</b> and <b>Vehicles</b> can shoot, and be shot at, even while they are within Engagement Range of enemy units.
                <li>Each time a ranged attack is made by or against such a unit, subtract 1 from that attack’s Hit roll (unless shooting with a Pistol).</li></ul>,
        },
        {
            title: 'Critical Hit',
            text: <ul>Unmodified Hit roll of 6. Always successful</ul>,
        },
        {
            title: 'Critical Wound',
            text: <ul>Unmodified Wound roll of 6. Always successful<li>An unmodified Wound roll of 1 always fails.</li><li>A Wound roll can never be modified by more than -1 or +1.</li></ul>,
        },
        {
            title: 'Deadly Demise (X)',
            text: <ul>When this model is destroyed, roll one D6. On a 6, each unit within 6" suffers ‘x’ mortal wounds. </ul>,
        },
        {
            title: 'Deep Strike',
            text: <ul>Units can be set upin Reserves instead of on the Battlefield. Units can be set up in your Reinforcements Step, must be set up more than 9" horizontally from all enemy models.</ul>,
        },
        {
            title: 'Desperate Escape',
            text: <ul>Models making a Fall Back move through an enemy unit must make a desperate escape roll.<li>Roll one D6 for each model. On a 1-2, on model from that unit is destroyed</li><li>A Battle-shocked unit that is falling back must make a Desperate Escape Test for every model.</li></ul>,
        },
        {
            title: 'Disembark',
            text: <ul><li>Units that start your Movement phase embarked within a Transport can disembark this phase, provided their Transport has not Advanced or Fallen Back.</li>
                <li>If a unit disembarks before its Transport moves, it can act normally.</li>
                <li>If a unit disembarks after its Transport moves, it cannot move or charge this turn, but can otherwise act normally.</li>
                <li>Disembarking units must be set up wholly within 3" of their Transport and not within Engagement Range of any enemy models (or the unit cannot disembark).</li>
                <li>Units that disembark this turn cannot Remain Stationary.</li>
            </ul>,
        },
        {
            title: 'Embark',
            text: <ul><li>A unit can embark within a friendly Transport if all of its models end a Normal, Advance or Fall Back move within 3" of that Transport.</li><li>A unit cannot embark and disembark in the same phase.</li></ul>,
        },
        {
            title: 'Engagement Range',
            text: <ul> Within 1" horizontally and 5" vertically.<li>Models cannot be set up or end a Normal, Advance or Fall Back move within Engagement Range of any enemy models.</li></ul>,
        },
        {
            title: 'Feel No Pain (X)',
            text: <ul>Each time this model would lose a wound, roll one D6: if the result equals or exceeds ‘x’, that wound is not lost.</ul>,
        },
        {
            title: 'Firing Deck (X)',
            text: <ul>Each time this Transport shoots, select one weapon from up to ‘x’ models embarked within it; this Transport counts as being equipped with those weapons as well.</ul>,
        },
        {
            title: 'Hover',
            text: <ul>When declaring Battle Formations, Aircraft with Hover must declare if they are in Hover Mode. Units in Hover Mode have their Movement set to 20", lose the Aircraft keyword and all associated Aircraft rules and cannot start in reserve, but can be placed in Strategic Reserves as per normal rules.</ul>,
        },
        {
            title: 'Leader',
            text: <ul>Before the battle, units with the Leader ability can be attached to one of their bodyguard units to form an Attached Unit. Attached Units cannot have more than one leader. Attacks cannot be allocated to character models in Attached Units.</ul>,
        },
        {
            title: 'Lone Operative',
            text: <ul>Unless part of an Attached unit, this unit can only be selected as the target of a ranged attack if the attacking model is within 12". </ul>,
        },
        {
            title: 'Rapid Deployment',
            text: <ul>Units can disembark from a model that has Advanced. Units that do so cannot declare a Charge and count as having made a Normal Move that turn. </ul>,
        },
        {
            title: 'Saving Throw',
            text: <ul>Roll one D6 and modify by the attack’s AP. If the result is less than the Save of the model being rolled for, the saving throw is failed and that model suffers damage. Otherwise, that attack is saved.
                <li>An unmodified saving throw of 1 always fails</li>
                <li>A saving throw can never be improved by more than +1.</li>
                <li><b>Invulnerable Save:</b> Never modified by an attack’s AP. </li>
                <li>The controlling player can choose to use either a model’s invulnerable save or its Save characteristic.</li>
            </ul>,
        },
        {
            title: 'Scouts (X)',
            text: <ul>Units can make a normal move up to 'x' before the first turn begins. If embarked in a dedicated transport the transport can make this normal move instead. Must end this move more than 9" from all enemy models.</ul>,
        },
        {
            title: 'Stealth',
            text: <ul>If every model in a unit has this ability, then each time a ranged attack is made against it, subtract 1 from that attack’s Hit roll.</ul>,
        },
        {
            title: 'Unit Coherency',
            text: <ul>Within 2" horizontally and 5" vertically of: <li>One other model from the same unit (in units of 2-6 models).</li><li>Two other models from the same unit (in units of 7+ models).</li>At the end of every turn, if a unit is not in Unit Coherency, the controlling player must remove models until that unit is in Unit Coherency again.</ul>
        },
    ];
    const weaponKeywords = [
        {
            title: 'Anti-[Keyword] X',
            text: <ul>An unmodified Wound roll of ‘x+’ against a target with the matching keyword scores a Critical Wound.</ul>
        },
        {
            title: 'Assault',
            text: <ul>Can be shot even if the bearer’s unit Advanced.</ul>
        },
        {
            title: 'Assault Ramp',
            text: <ul>Units can declare Charge the same turn they Disembark</ul>
        },
        {
            title: 'Blast',
            text: <ul>
                <li>Add 1 to the Attacks characteristic for every five models in the target unit (rounding down).</li>
                <li>Can never be used against a target that is within Engagement Range of any units from the attacking model’s army (including its own).</li>
            </ul>
        },
        {
            title: 'Devastating Wounds',
            text: <ul>A Critical Wound inflicts mortal wounds equal to the weapon’s Damage characteristic, instead of any normal damage.</ul>
        },
        {
            title: 'Extra Attacks',
            text: <ul>The bearer can attack with this weapon in addition to any other weapons it can make attacks with.</ul>
        },
        {
            title: 'Hazardous',
            text: <ul>After a unit shoots or fights, roll one Hazardous test (one D6) for each Hazardous weapon used. For each 1, one model equipped with a Hazardous weapon is destroyed (Characters, Monsters and Vehicles suffer 3 mortal wounds instead). </ul>
        },
        {
            title: 'Heavy',
            text: <ul>Add 1 to Hit rolls if the bearer’s unit Remained Stationary this turn.</ul>
        },
        {
            title: 'Ignores Cover',
            text: <ul>Each time an attack is made with such a weapon, the target cannot have the Benefit of Cover against that attack.</ul>
        },
        {
            title: 'Indirect Fire',
            text: <ul><li>Can target and make attacks against units that are not visible to the attacking unit.</li>
                <li>If no models are visible in a target unit when it is selected, then when making an attack against that target with an Indirect Fire weapon, subtract 1 from that attack’s Hit roll and the target has the Benefit of Cover against that attack.</li>
            </ul>
        },
        {
            title: 'Lance',
            text: <ul>Each time an attack is made with such a weapon, if the bearer made a Charge move this turn, add 1 to that attack’s Wound roll.</ul>
        },
        {
            title: 'Lethal Hits',
            text: <ul>Each time an attack is made with such a weapon, a Critical Hit automatically wounds the target.</ul>
        },
        {
            title: 'Melta (X)',
            text: <ul>Increase the Damage by ‘x’ when targeting units within half range. </ul>
        },
        {
            title: 'Precision',
            text: <ul>When targeting an Attached unit, the attacking model’s player can have the attack allocated to a Character model in that unit visible to the bearer. </ul>
        },
        {
            title: 'Pistol',
            text: <ul><li>Can be shot even if the bearer’s unit is within Engagement Range of enemy units, but must target one of those enemy units.</li><li>Cannot be shot alongside any other non-Pistol weapon (except by a Monster or Vehicle).</li></ul>
        },
        {
            title: 'Rapid Fire (X)',
            text: <ul>Increase the Attack characteristic by ‘x’ when targeting units within half range.</ul>
        },
        {
            title: 'Sustained Hits (X)',
            text: <ul>Each Critical Hit scores ‘x’ additional hits on the target.</ul>
        },
        {
            title: 'Torrent',
            text: <ul>Each time an attack is made with such a weapon, that attack automatically hits the target.</ul>
        },
        {
            title: 'Twin-Linked',
            text: <ul> Each time an attack is made with such a weapon, you can re-roll that attack’s Wound roll.</ul>
        },
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);
    const [expandedWeaponIndex, setExpandedWeaponIndex] = useState(null);

    const contentRefs = keywords.map(() => React.createRef());
    const contentWeaponRefs = weaponKeywords.map(() => React.createRef());

    const toggleExpansion = (index) => {
        if (expandedIndex === index) {
            setExpandedIndex(null);
        } else {
            setExpandedIndex(index);
        }
    };
    const toggleWeaponExpansion = (weaponIndex) => {
        if (expandedWeaponIndex === weaponIndex) {
            setExpandedWeaponIndex(null);
        } else {
            setExpandedWeaponIndex(weaponIndex);
        }
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
                <Keywords>
                    <SectionTitle>Keywords</SectionTitle>
                    <div className="keyword-buttons">
                        {keywords.map((keyword, index) => (
                            <KeywordButton
                                key={index}
                                title={keyword.title}
                                onClick={() => toggleExpansion(index)}
                            />
                        ))}
                    </div>
                    <div className="keyword-definitions">
                        {keywords.map((keyword, index) => (
                            <KeywordDef
                                key={index}
                                text={keyword.text}
                                expanded={expandedIndex === index}
                                contentRef={contentRefs[index]}
                            />
                        ))}
                    </div>
                </Keywords>
                <Keywords>
                    <SectionTitle>Weapon Keywords</SectionTitle>
                    <div className="keyword-buttons" >
                        {weaponKeywords.map((keyword, weaponIndex) => (
                            <KeywordButton
                                key={weaponIndex}
                                title={keyword.title}
                                onClick={() => toggleWeaponExpansion(weaponIndex)}
                            />
                        ))}
                    </div>
                    <div className="keyword-definitions">
                        {weaponKeywords.map((keyword, weaponIndex) => (
                            <KeywordDef
                                key={weaponIndex}
                                text={keyword.text}
                                expanded={expandedWeaponIndex === weaponIndex}
                                contentRef={contentWeaponRefs[weaponIndex]}
                            />
                        ))}
                    </div>
                </Keywords>
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






