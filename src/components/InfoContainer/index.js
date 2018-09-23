import React from "react";
import PlusButton from "../PlusButton";
import TitlePane from "../TitlePane";
import InfoPane from "../InfoPane";

// Styling
import Wrapper from "./Wrapper.js";

const InfoContainer = props => {
  // alert(`in info container, props.title is ${props.post.title}`)

  return (
    <Wrapper>
      <TitlePane title={props.post.title}/>
      <InfoPane post={props.post}/>
      <PlusButton />
    </Wrapper>
  );
};

export default InfoContainer;
