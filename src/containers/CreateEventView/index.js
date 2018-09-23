import React from "react";
import AddTitleEl from "../components/AddTitleEl";
import XMark from "../components/XMark";
import SaveButton from "../components/SaveButton";

// Styling
import Wrapper from "./styleCreateEventView";

class CreateEventView extends React.Component {
  constructor(props) {
    // TODO ML Implement change of state when field info are changed
    this.state = null
  }

  render() {
    return (
      <Wrapper>
        <AddTitleEl newPost={this.state.newPost}/>
        <XMark />
        <SaveButton />
      </Wrapper>
    );
  }
}

export default CreateEventView;
