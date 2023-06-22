
import React from "react";
import { Component, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

const CardWrap = styled.section`
width: 1000px;
height: 532px;
display: block;
position: relative;
margin-bottom: 48px;
perspective: 1000px; 
`;

const InnerCover = styled.section`
    width: 100%;
    height: 532px;
    position: absolute;
    top: 0;
    z-index: 3;
    .left-tap {
        position: absolute;
        width: 50%;
        height: 100%;
        left: 0;
    }
    .right-tap {
        position: absolute;
        width: 50%;
        height: 100%;
        right: 0;
    }
`;
const CardReverseStyle = styled.section`
width: 1000px;
overflow:hidden;
height: 532px;
display: block;
position:absolute;
margin: 0 auto;
top: 0;
transition: transform 1.2s;
transform-style: preserve-3d;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
transform: rotateY(180deg);
.inner-cover {
    width: 100%;
    height: 532px;
    position: absolute;
    top: 0;
    z-index: 3;
    .left-tap {
        position: absolute;
        width: 50%;
        height: 100%;
        left: 0;
    }
    .right-tap {
        position: absolute;
        width: 50%;
        height: 100%;
        right: 0;
    }
}
img {
    position: absolute;
    margin: 0 auto;
    border-radius: 20px;
    margin-bottom: 48px;
    display:block;
    z-index: 2;
    width: 100%;
    height: 100%;
}

&.front {
    transform: rotateY(0deg);
}
&.back-right {
    transform: rotateY(180deg);
}
&.back-left {
    transform: rotateY(-180deg);
}

`;
const CardStyle = styled.section`
width: 1000px;
height: 532px;
display: block;
position:absolute;
margin: 0 auto;
top: 0;
transition: transform 1.2s;
transform-style: preserve-3d;
overflow: hidden;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
transform: rotateY(0deg);
.inner-cover {
    width: 100%;
    height: 532px;
    position: absolute;
    top: 0;
    z-index: 3;
    .left-tap {
        position: absolute;
        width: 50%;
        height: 100%;
        left: 0;
    }
    .right-tap {
        position: absolute;
        width: 50%;
        height: 100%;
        right: 0;
    }
}
img {
    position: absolute;
    margin: 0 auto;
    border-radius: 20px;
    margin-bottom: 48px;
    display:block;
    z-index: 2;
    width: 100%;
    height: 100%;
}

&.front {
    transform: rotateY(0deg);
}
&.back-right {
    transform: rotateY(180deg);
}
&.back-left {
    transform: rotateY(-180deg);
}

`;

const WarhammerCard = (props) => {
    const [rotation, setRotation] = useState(0);
    const [reverseRotation, setReverseRotation] = useState(180);

    const handleRotate = (degrees) => {
        const newRotation = rotation + degrees;
        setRotation(newRotation);
    };

    const handleReverseRotate = (degrees) => {
        const newReverseRotation = reverseRotation + degrees;
        setReverseRotation(newReverseRotation);
    };

    const handleAddRotation = () => {
        handleRotate(180);
        handleReverseRotate(180);
    };

    const handleSubtractRotation = () => {
        handleRotate(-180);
        handleReverseRotate(-180);
    };

    const { cardTitle } = props;
    let imageSrc = "";
    let reverseimageSrc = "";
    let altText = "";

    ////////////////////////
    //ADEPTUS ASTARTES CARDS
    ////////////////////////
    if (cardTitle === "Terminator Captain") {
        imageSrc = "/cards/space_marines/Captain_Terminator(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Captain_Terminator(Back).jpg";
        altText = "Terminator Captain";
    } else if (cardTitle === "Primaris Captain") {
        imageSrc = "/cards/space_marines/Captain_Primaris(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Captain_Primaris(Back).jpg";
        altText = "Primaris Captain";
    } else if (cardTitle === "Gravis Captain") {
        imageSrc = "/cards/space_marines/Captain_Gravis(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Captain_Gravis(Back).jpg";
        altText = "Gravis Captain";
    } else if (cardTitle === "Bladeguard Ancient") {
        imageSrc = "/cards/space_marines/Ancient_Bladeguard(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Ancient_Bladeguard(Back).jpg";
        altText = "Bladeguard Ancient";
    } else if (cardTitle === "Chaplain on Bike") {
        imageSrc = "/cards/space_marines/Chaplain_Bike(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Chaplain_Bike(Back).jpg";
        altText = "Chaplain on Bike";
    } else if (cardTitle === "Redemptor Dreadnought") {
        imageSrc = "/cards/space_marines/Dreadnought_Redemptor(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Dreadnought_Redemptor(Back).jpg";
        altText = "Redemptor Dreadnought";
    } else if (cardTitle === "Heavy Intercessor Squad") {
        imageSrc = "/cards/space_marines/Heavy_Intercessor(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Heavy_Intercessor(Back).jpg";
        altText = "Heavy Intercessor Squad";
    } else if (cardTitle === "Infernus Squad") {
        imageSrc = "/cards/space_marines/Infernus_Squad(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Infernus_Squad(Back).jpg";
        altText = "Infernus Squad";
    } else if (cardTitle === "Hellblaster Squad") {
        imageSrc = "/cards/space_marines/Hellblaster_Squad(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Hellblaster_Squad(Back).jpg";
        altText = "Hellblaster Squad";
    } else if (cardTitle === "Repulsor") {
        imageSrc = "/cards/space_marines/Repulsor(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Repulsor(Back).jpg";
        altText = "Repulsor";
    } else if (cardTitle === "Techmarine") {
        imageSrc = "/cards/space_marines/Techmarine(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Techmarine(Back).jpg";
        altText = "Techmarine";
    } else if (cardTitle === "Bladeguard Veteran") {
        imageSrc = "/cards/space_marines/Veteran_Bladeguard(Front).jpg";
        reverseimageSrc = "/cards/space_marines/Veteran_Bladeguard(Back).jpg";
        altText = "Bladeguard Veteran";
    }
    ////////////////////////
    //TYRANID CARDS
    ////////////////////////
    else if (cardTitle === "Hive Tyrant") {
        imageSrc = "/cards/tyranids/Hive_Tyrant(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Hive_Tyrant(Back).jpg";
        altText = "Hive Tyrant";
    } else if (cardTitle === "Winged Tyrant") {
        imageSrc = "/cards/tyranids/Winged_Hive_Tyrant(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Winged_Hive_Tyrant(Back).jpg";
        altText = "Winged Hive Tyrant";
    } else if (cardTitle === "Neurotyrant") {
        imageSrc = "/cards/tyranids/Neurotyrant(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Neurotyrant(Back).jpg";
        altText = "Neurotyrant";
    } else if (cardTitle === "Winged Prime") {
        imageSrc = "/cards/tyranids/Winged_Prime(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Winged_Prime(Back).jpg";
        altText = "Winged Prime";
    } else if (cardTitle === "Barbgaunt") {
        imageSrc = "/cards/tyranids/Barbgaunts(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Barbgaunts(Back).jpg";
        altText = "Barbgaunt";
    } else if (cardTitle === "Termagant") {
        imageSrc = "/cards/tyranids/Termagant_(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Termagant_(Back).jpg";
        altText = "Termagant";
    } else if (cardTitle === "Ripper Swarms") {
        imageSrc = "/cards/tyranids/Ripper_Swarms(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Ripper_Swarms(Back).jpg";
        altText = "Ripper Swarms";
    } else if (cardTitle === "Carnifex") {
        imageSrc = "/cards/tyranids/Carnifex(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Carnifex(Back).jpg";
        altText = "Carnifex";
    } else if (cardTitle === "Tyrannofex") {
        imageSrc = "/cards/tyranids/Tyrannofex(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Tyrannofex(Back).jpg";
        altText = "Tyrannofex";
    } else if (cardTitle === "Zoanthrope") {
        imageSrc = "/cards/tyranids/Zoanthrope(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Zoanthrope(Back).jpg";
        altText = "Zoanthrope";
    } else if (cardTitle === "Screamer Killer") {
        imageSrc = "/cards/tyranids/Screamer_Killer(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Screamer_Killer(Back).jpg";
        altText = "Screamer Killer";
    } else if (cardTitle === "Hive Crone") {
        imageSrc = "/cards/tyranids/Hive_Crone(Front).jpg";
        reverseimageSrc = "/cards/tyranids/Hive_Crone(Back).jpg";
        altText = "Hive Crone";
    }


    return (
        <CardWrap>
            <InnerCover className="inner-cover">
                <div className="left-tap" onClick={handleSubtractRotation}></div>
                <div className="right-tap" onClick={handleAddRotation}></div>
            </InnerCover>
            <CardReverseStyle style={{ transform: `rotateY(${reverseRotation}deg)` }}>
                <Image className="" src={reverseimageSrc} alt={altText} width="1300" height="731" />
            </CardReverseStyle>
            <CardStyle style={{ transform: `rotateY(${rotation}deg)` }}>
                <Image className="" src={imageSrc} alt={altText} width="1300" height="731" />
            </CardStyle>
        </CardWrap>
    );
};

export default WarhammerCard;