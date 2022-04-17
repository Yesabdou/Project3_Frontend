import React, { useState } from "react";
import styled from "styled-components";
const Button = styled.button`
  /* Same as above */
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ["Affichage par liste", "Affichage par carte"];

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <ButtonGroup className="toggleGroup">
      {types.map((type) => (
        <ButtonToggle
          className="toggleButton"
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}
export default ToggleGroup;
