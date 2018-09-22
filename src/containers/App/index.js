// This is the primary application container

import React from 'react';

import MapCanvas from '../MapCanvas';

export default class App extends React.Component {
    render() {
        return (
            <MapCanvas />
        );
    }
}
