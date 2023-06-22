import React from "react";
import Link from "next/link";
import styled from "styled-components"
import { fonts, colors } from "@/styles/variables"

const Buttons = styled.section`
  text-transform: uppercase;
  display: flex;
  font-size: 0.85rem;
  width: 400px;
  height: 50px;
  max-width: var(--max-width);
  z-index: 2;
  font-family: var(--font-mono);
  align-items: center;
  justify-content: center;
  background-color: ${colors.buttonBG};
  border-radius: 3px;
  filter: ${colors.gradBottom};

&:hover {
    background: ${colors.buttonHoverBG};
}

a {
  display: flex;
  width: 390px;
  height: 38px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.bordCol};
  font-family: ${fonts.goldman};
}
`;

const CustomButton = ({
    type = "primary",
    fill = "filled",
    text = "",
    link = "/",
    className = "",
    target,
    description = "description",
    onClick,
}) => {
    const handleClick = (event) => {
        event.preventDefault();
        onClick(link);
    };

    if (type === "primary") {
        if (fill === "filled") {
            return (
                <Buttons className={className}>
                    <Link href={link} target={target} onClick={handleClick}>
                        {text}
                    </Link>
                </Buttons>
            );
        }
    }
};
export default CustomButton;

