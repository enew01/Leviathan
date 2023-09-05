import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components"
import { fonts, colors, media } from "@/styles/variables"
import { color } from "framer-motion";

const Counter = styled.section`
  display: Block;
  width: 250px;
  height: 400px;
  @media ${media.mobile} {
      order: 2;
  }
  .counter-title {
    font-family: ${fonts.goldman};
    font-size: 36px;
    color: ${colors.white};
    text-align: center;
    margin-bottom: 5px;
  }
  .number-display {
    width: 100%;
    height: 250px;
    background-color:${colors.white};
    border: 1px solid ${colors.bordCol};
    font-family: ${fonts.goldman};
    color: ${colors.darkGray};
    font-size: 136px;
    text-align: center;
    line-height: 250px;
  }
  .button-wrap {
    width: 100%;
    height: 55px;
    display: flex;
    flex-direction: row;
    .count-button {
        width: 50%;
        background-color: ${colors.buttonBG};
        font-family: ${fonts.goldman};
        font-size: 46px;
        border-radius: 3px;
        border: 1px solid ${colors.bordCol};
        color: ${colors.darkGray};
        text-align: center;
        line-height: 55px;
        &:hover {
            background: ${colors.buttonHoverBG};
            cursor: pointer;
        }
    }
  }

`;

const ScoreCounter = ({ text = "" }) => {
  const [count, setCount] = useState(0);

  const minusClick = () => {
    setCount(count - 1);
  };

  const plusClick = () => {
    setCount(count + 1);
  };
  return (
    <Counter>
      <div className="counter-title">{text}</div>
      <div className="number-display">{count}</div>
      <div className="button-wrap">
        <div className="count-button minus" onClick={minusClick}>-</div>
        <div className="count-button plus" onClick={plusClick}>+</div>
      </div>
    </Counter>
  );
};
export default ScoreCounter;

