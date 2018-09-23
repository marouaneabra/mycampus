import React from "react";

import Wrapper from "./styleAddTitleEl";
import XMark from "../XMark"

const AddTitleEl = props => {
  return (
      // TODO ML Implement add texts update the title of json
    <Wrapper>
        <XMark />
      <form>
        Title: <input id="title" type="text" name="title" value="" onChange={props.changeTitle(this.value)} />
        <br />
      </form>
    </Wrapper>
  );
};

export default AddTitleEl;
