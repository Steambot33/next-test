import React from "react";
// import { Button } from "components/pure/Button";
import styled from "styled-components";
import style from "./button.module.css";

export const Button = ({
  css = "",
  pure = false,
  className = "",
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      // css={css}
      className={(!pure ? style.default + " " : "") + className}
    >
      {children}
    </button>
  );
};

const StyledComponent = component =>
  styled(component)`
    ${props => props.css}
  `;

export default StyledComponent(Button);
