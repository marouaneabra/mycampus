import {Marker} from 'google-maps-react';
import React from 'react';

export default const MCMarker = (props) => {
    return (
            <Marker
        name={props.name}
        position={props.position}
        icon={{
            url: "../../images/icon.png"  
        }} />
    );
}
