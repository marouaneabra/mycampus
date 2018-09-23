/*
  Primary container for displaying the Google map and handling API interaction for the demo
  Written by Ezra
  Last Updated by Ezra
*/

import React from 'react';
import GoogleMapReact from 'google-map-react';

// Styling
import styledMapCanvas from './styledMapCanvas.js';
import mapStyle from './mapStyle.js'

class MapCanvas extends React.Component {

    render() {
        return (
                <div style={styledMapCanvas}>
                <GoogleMapReact 
            bootstrapURLKeys={{ key: 'AIzaSyCg5aEuumskDfhrqRKzpnVimX4KfrVo9io', language: 'en' }}
            center={{lat: 41.2926,lng: -82.2183}}
            zoom={16}
            options={{styles: mapStyle}}
                ></GoogleMapReact>
                </div>
        );
    }
}

export default MapCanvas;
