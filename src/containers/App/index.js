// This is the primary application container

import React from 'react';

import MapCanvas from '../MapCanvas';
import MCMarker from '../../components/MCMarker';

import initState from './initState.js';

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

    componentDidMount() {
        const newPost = {
                "id": 11,
                "title": "Oberlin College Women's Tennis vs Intercollegiate Tennis Association Regional Championship",
                "description": "Oberlin College Women's Tennis vs Intercollegiate Tennis Association Regional Championship\n https://goyeo.com/calendar.aspx?id=4976",
                "url": "https://goyeo.com/calendar.aspx?id=4976",
                "category": "Sports and Wellness",
                "latitude": "34.0522",
                "longitude": "-118.2437",
                "start": "2018-09-23T00:00:00-04:00",
                "end": null
        }

        this.addPost(newPost)

        console.log(this.state.posts)
    }

    // Add post to state
    addPost(post) {
        this.state.posts.push(post)
        
        this.setState((state) => {
            posts: state.posts
        })

        this.render()
    }

    // Respond to Click for a pin
    onClick(index) {
        console.log(index); // TODO: Implement this
    }

    render() {

        let markers = [];
        this.state.posts.forEach(function(post) {
            markers.push( <MCMarker key={post.id} lat={post.latitude} lng={post.longitude} post={post} onClick={() => {console.log('sh')}} />) //TODO: Handle onClick
        })

        console.log(markers)
        
        return (
                <MapCanvas posts={this.state.posts}>
                {markers}
                </MapCanvas>
        );
    }
}
