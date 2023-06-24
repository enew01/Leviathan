import React from "react";
import styled from "styled-components"
import { colors } from "@/styles/variables";


const RingStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 0;
  position: absolute;
  top: 0;

.outerring {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1300px;
  height: 1300px;
  top:-140px;
  border-radius: 2005px;
  border: ${colors.white} solid 2px;
  -webkit-animation: spin-right 45s linear infinite;
  animation: spin-right 45s linear infinite;
}
.innerring {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 1000px;
  top:00px;
  border-radius: 2005px;
  border: ${colors.white} solid 1px;
  -webkit-animation: spin-right 30s linear infinite;
  animation: spin-right 30s linear infinite;
}
.innerring2 {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1000px;
  height: 1000px;
  top:00px;
  border-radius: 2005px;
  border: ${colors.white} solid 1px;
  -webkit-animation: spin-right 30s linear infinite;
  animation: spin-right 30s linear infinite;
}
.outerringcircle {
  position: absolute;
  height: 50px;
  width: 50px;
  display: block;
  border-radius: 25px;
  background-color:${colors.white};
  top: -25px;
}
.innerringcircle {
  position: absolute;
  height: 28px;
  width: 28px;
  display: block;
  border-radius: 25px;
  background-color:${colors.white};
  top: -14px;
}
.innerringorbitcircle {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 220px;
  width: 220px;
  display: block;
  border-style: solid;
  border-radius: 225px;
  border-width: 1px;
  border-color:${colors.white};
  bottom: -110px;
  -webkit-animation: nested-spin-right 10s linear infinite;
  animation: nested-spin-right 10s linear infinite;
}
.centercircle {
  position: absolute;
  height: 18px;
  width: 18px;
  display: block;
  background-color:${colors.white};
  top: 0;
  left:0;
  bottom: 0;
  right: 0;
  margin: auto;
  border-radius: 10px;
}
.lunarorbitcircle {
  position: absolute;
  height: 18px;
  width: 18px;
  display: block;
  background-color:${colors.white};
  top: 54px;
  border-radius: 10px;
}
@keyframes spin-right {
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes nested-spin-right {
  100% {
    -webkit-transform: rotate(-360deg);
    -moz-transform: rotate(-360deg);
    -ms-transform: rotate(-360deg);
    -o-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}

`;

function Rings() {
  return (
    <RingStyle>
      <div className="outerring">
        <div className="outerringcircle"></div>
      </div >
      <div className="innerring">
        <div className="innerringcircle"></div>
      </div>
      <div className="innerring2">
        <div className="innerringorbitcircle">
          <div className="centercircle"></div>
          <div className="lunarorbitcircle"></div>
        </div>
      </div>
    </RingStyle>
  )
};

export default Rings;