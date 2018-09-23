// This is the primary application container

import React from 'react';

import MapCanvas from '../MapCanvas';
import InfoContainer from '../InfoContainer';

export default class App extends React.Component {
    render() {
        return (
            <div>
            <MapCanvas />
            <InfoContainer />
            </div>
        );
    }
}
