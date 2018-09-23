import React from 'react';

// Styling
import Wrapper from './Wrapper.js'

import low from 'lowdb';
import LocalStorage from 'lowdb/adapters/LocalStorage';

// const low = require('lowdb')
//     const FileSync = require('lowdb/adapters/FileSync')

    // const adapter = new FileSync('db.json')
    // const db = low(adapter)

    // Set some defaults (required if your JSON file is empty)
    //    db.defaults({ events: [], user: {}, count: 0 })
    //.write()
// const request = require('request');

// db.defaults({ posts: [], user: {}, count: 0 })
// 	.write()

const adapter = new LocalStorage('./db.json');
const db = low(adapter);

// const express = require('express')
// const bodyParser = require('body-parser')
// const low = require('lowdb')
// const FileAsync = require('lowdb/adapters/FileAsync')

const result = db.get('posts').find({id:'myass'}).value();
class InfoContainer extends React.Component {

    render() {
        console.log(result)
        
        return (
            // <div style={{display: 'inline-block', position: absolute,
            // left: 0,
            // top: 0,
            // width: 30vw,
            // height: 100vh}}></div>
                <Wrapper>
                    TEST
                    {/* <PlusButton/> */}
                </Wrapper>
        );
    }
}

export default InfoContainer;