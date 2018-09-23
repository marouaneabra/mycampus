import React from 'react';

import Wrapper from './styleTitlePane';

const TitlePane = props => {
    // alert(`in title pane, props.title is ${props.title}`)
    return (
        <Wrapper>{props.title}</Wrapper>
    )
}

export default TitlePane;
