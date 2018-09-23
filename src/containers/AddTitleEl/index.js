import React from "react";

import Wrapper from "./styleAddTitleEl";
import XMark from "../../components/XMark";

class AddTitleEl extends React.Component{
  constructor(props) {
    super(props);
    this.updatePost = props.updatePost;
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.updatePost('title', this.state.value);
  }

  render() {
    return (
      // TODO ML Implement add texts update the title of json
      <Wrapper>
        <XMark />
        <form>
          Title:{" "}
          <input
            id="title"
            type="text"
            name="title"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <br />
        </form>
      </Wrapper>
    );
  }
}

export default AddTitleEl;
