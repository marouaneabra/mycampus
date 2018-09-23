// This is the primary application container

import React from "react";

import MapCanvas from "../MapCanvas";
import InfoContainer from "../../components/InfoContainer";
import MCMarker from "../../components/MCMarker";

import initState from "./initState.js";

export default class App extends React.Component {
  contructor(props) {
    //super(props);
    this.onClick = this.onClick.bind(this); // Called whenever a pin is selected
    this.addPost = this.addPost.bind(this); // Called to add a constructed post to the db
    this.state = null;
  }

  componentWillMount() {
    this.setState(initState);
  }

  // Add post to state
  addPost(post) {
    this.state.posts.push(post);

    this.setState(state => {
      posts: state;
    });
  }

  // Respond to Click for a pin
  onClick(index) {
    console.log(index); // TODO: Implement this
  }

  render() {
    let markers = [];
    this.state.posts.forEach(function(post) {
      markers.push(
        <MCMarker
          lat={post.latitude}
          lng={post.longitude}
          post={post}
          onClick={() => {
            console.log("sh");
          }}
        />
      );
    });

    return (
      <div>
        <InfoContainer />
        <MapCanvas>{markers}</MapCanvas>
      </div>
    );
  }
}
