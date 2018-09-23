// This is the primary application container

import React from "react";

import MapCanvas from "../MapCanvas";
import InfoContainer from "../../components/InfoContainer";
import CreateEventView from "../CreateEventView";
import MCMarker from "../../components/MCMarker";

import initState from "./initState.js";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    //this.onClick = this.onClick.bind(this); // Called whenever a pin is selected
    this.addPost = this.addPost.bind(this); // Called to add a constructed post to the db
    this.state = {};
  }

  componentWillMount() {
    this.setState(initState);
  }

  componentDidUpdate() {
    console.log("updated");
  }

  // Add post to state
  addPost(post) {
    this.state.posts.push(post);

    this.setState((state, props) => {
      posts: state.posts;
    });

    this.forceUpdate();
  }

  // Respond to Click for a pin
  onClick(id) {
    this.setState({selected: id}); // TODO: Implement this
  }

  render() {
    let markers = [];
    this.state.posts.forEach((post) => {
      markers.push(
        <MCMarker
          key={post.id}
          lat={post.latitude}
          lng={post.longitude}
          post={post}
          onClick={this.onClick}
        />
      ); //TODO: Handle onClick
    });
    // console.log(markers);

    const currentPost = this.state.posts[this.state.selected];

    return (
      <div>
       {/* <CreateEventView 
        addPost={post => this.addPost(post)} /> */}
        <InfoContainer post={currentPost}/>
        <MapCanvas posts={this.state.posts.length} zoom={18}>
          {markers}
        </MapCanvas>
      </div>
    );
  }
}
