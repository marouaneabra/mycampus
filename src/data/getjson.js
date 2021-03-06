const low = require('lowdb')
    const FileSync = require('lowdb/adapters/FileSync')

    const adapter = new FileSync('db.json')
    const db = low(adapter)

    // Set some defaults (required if your JSON file is empty)
    //    db.defaults({ events: [], user: {}, count: 0 })
    //.write()
const request = require('request');

const categories = ["Art", "Music", "Sports", "Outdoors", "Academics", "Career", "Community Service", "Religion and Spirituality", "Health", "Master Classes", "Recitals"];

request('https://calendar.oberlin.edu/api/2/events', { json: true }, (err, res, body) => {
	if (err) { return console.log(err); }
	const newState = {}
	db.setState(newState)
	db.defaults({ posts: [], user: {}, count: 0 })
	.write()
	for (var i =0; i < body.events.length; i++){
	    var randomNum = Math.floor(Math.random()*10);
	    console.log(body.events[i].event["title"]);
	    var anEvent = body.events[i];
	    // Add an event
	    db.get('posts')
	    .push({id: i+1,
 title: anEvent.event["title"],
 description: anEvent.event['description'],
 url: anEvent.event['url'],
 category: categories[randomNum], 
latitude: anEvent.event["geo"]["latitude"],
longitude: anEvent.event["geo"]["longitude"],
 start: anEvent.event["event_instances"][0].event_instance["start"],
 end: anEvent.event["event_instances"][0].event_instance["end"] })  
	    .write()
/*
	    // Set a user using Lodash shorthand syntax
	    db.set('user.name', 'typicode')
	    .write()*/
  
	    // Increment count
	    db.update('count', n => n + 1)
	    .write()
    }
	//console.log(body.events[0].event["title"]);
	//console.log(body.explanation);
    });
