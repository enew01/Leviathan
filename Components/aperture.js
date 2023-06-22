import React from "react";
import Image from "next/image";
import styled from "styled-components"


const ApertureStyles = styled.section`
.logo {
    z-index:2;
}


.aperture {
    position:absolute;
      background-color: #FFF;
      width: 500px;
      height: 500px;
      border: 5px solid #FFF;
      border-radius: 50%;
      overflow: hidden;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    z-index:1;
  }
  
  .ring {
    position:absolute;
      width: 330px;
      height: 330px;
      border: 15px solid #FFF;
      border-radius: 50%;
      overflow: hidden;
  }
  
  .diaphragm {
      width: 100%;
      height: 100%;
      -webkit-transition: all .25s ease-in-out;
      transition: all .25s ease-in-out;
      animation-name: gyre;
      animation-duration: 0.55s;
  }
  
  .diaphragm div {
      position: absolute;
      top: 50%;
      left: 50%;
      background-color: #000;
      width: 100%;
      height: 45%;
  }
  
  .diaphragm div:nth-child(1) {
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
  }
  
  .diaphragm div:nth-child(2) {
      -webkit-transform: translate(-50%, -50%) rotate(60deg);
      transform: translate(-50%, -50%) rotate(60deg);
  }
  
  .diaphragm div:nth-child(3) {
      -webkit-transform: translate(-50%, -50%) rotate(-60deg);
      transform: translate(-50%, -50%) rotate(-60deg);
  }
  
  .diaphragm div:before,
  .diaphragm div:after {
      content: '';
      position: absolute;
      background-color: #000;
      width: 2px;
      height: 300%;
      display: block;
  }
  
  .diaphragm div:before {
      top: 0px;
      left: 0px;
  }
  
  .diaphragm div:after {
      bottom: 0px;
      right: 0px;
  }
  
  .instruction:hover{
      cursor:pointer;
  }
  
  
@keyframes gyre {
    from {
        transform: rotate(35deg) scale(0);
        -webkit-transition: all .35s cubic-bezier(0.175, 0.885, 0.320, 1.275); 
        transition: all .35s cubic-bezier(0.175, 0.885, 0.320, 1.275); 
    }
    to {
        -webkit-transition: all .25s ease-in-out;
        transition: all .25s ease-in-out;}
  }

  
`;

const Aperture = ({
    alt = "",
    link = "/",
}) => {

    return (
        <ApertureStyles>
            <Image className="logo" src={link} alt={alt} width="400" height="400" />
            <div class="aperture">
                <div class="diaphragm">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </ApertureStyles>
    );
};
export default Aperture;