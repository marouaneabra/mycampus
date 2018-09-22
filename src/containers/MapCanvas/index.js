/*
  Primary container for displaying the Google map and handling API interaction for the demo
  Written by Ezra
  Last Updated by Ezra
*/

import React from 'react';
import {Marker, GoogleApiWrapper, Map} from 'google-maps-react';

// Styling
import styledMapCanvas from './styledMapCanvas.js';

export class MapCanvas extends React.Component {    
    render() {
        return (
                <Map google={this.props.google} zoom={14} style={styledMapCanvas}/>        );
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyCg5aEuumskDfhrqRKzpnVimX4KfrVo9io') // Who cares about security during a demo am I right? 
})(MapCanvas);
