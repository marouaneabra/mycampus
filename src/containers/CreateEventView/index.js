import React from "react";
import AddTitleEl from "../AddTitleEl";
import SaveButton from "../../components/SaveButton";

// Styling
import Wrapper from "./styleCreateEventView";

class CreateEventView extends React.Component {
  constructor(props) {
    super(props);
    // this.addPost = props.addPost;
    this.addPost = (post) => {console.log('hi')};

    this.state = {
      newPost: {},
    };
  }

  updatePost(entry) {
    this.setState((state) => {
      newPost: Object.assign(state.newPost, entry)
    });
  }

  render() {
    return (
      <Wrapper>
        {/* <AddTitleEl updatePost={this.state.updatePost} /> */}
        <SaveButton
          newPost={this.newPost}
          addPost={post => this.addPost(post)}
        />
      </Wrapper>
    );
  }
}

export default CreateEventView;
