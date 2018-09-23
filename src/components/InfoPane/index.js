import React from 'react';
import ReactHTMLParser from 'react-html-parser';

import Wrapper from './styleInfoPane';

const InfoPane = props => {
    // alert(`in title pane, props.title is ${props.title}`)

    return (
        <Wrapper>
            <span>Description: {ReactHTMLParser(props.post.description)}</span> <br /> <br />
            <span>Start: {new Date(props.post.start).toTimeString()}</span> <br />
        </Wrapper>
    )
}

export default InfoPane;
