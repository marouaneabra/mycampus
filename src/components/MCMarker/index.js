import React from 'react';

import Wrapper from './styleMarker.js';

const MCMarker = (props) => {
    let now = new Date().getHours();
    let then = new Date(props.post.start).getHours();

    return (
            <Wrapper>{then - now}</Wrapper>
    );
}

export default MCMarker;
