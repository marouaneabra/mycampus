import React from 'react';

import Wrapper from './styleSaveButton';

/**
 * 
 * @param {*} props contains props.addPost(): adding posts to db
 *                  contains also props.newPost: an object with the info fields. Do props.addPost(props.newPost)
 *  */
const SaveButton = props => {
    return (
        // TODO ML Implement switching windows when router is implemented
        <Wrapper onClick={props.addPost(props.newPost)}>Save</Wrapper>
    )
}

export default SaveButton;
