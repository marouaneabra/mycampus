import React from 'react';

import Wrapper from './styleMarker.js';

const MCMarker = (props) => {
    let now = new Date().getHours();
    let then = new Date(props.post.start).getHours();

    return (
            <Wrapper onClick={() => props.onClick(props.post.id)}>{then - now}</Wrapper>
    );
}

export default MCMarker;
