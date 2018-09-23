import React from "react";
import PlusButton from "../PlusButton";
import TitlePane from "../TitlePane";

// Styling
import Wrapper from "./Wrapper.js";

const InfoContainer = props => {
  return (
    <Wrapper>
      <TitlePane />
      <PlusButton />
    </Wrapper>
  );
};

export default InfoContainer;
