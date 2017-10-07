import React, { Component } from 'react';
import './App.css';
import {dummyTopics} from './dummyTopics.js';
import Home from './Home.js'
import Submit from './Submit.js'

class App extends Component {
  constructor(props) {
	super(props);

	this.state = {
	  // state holds the entire list of all topics, and the view to be rendered
	  // 0 - index page | 1 - submit topic | 2 - about
	  topicList : this.sortTopics(dummyTopics),
	  currentView : 0,
	  maxId : 5
	}

	this.sortTopics = this.sortTopics.bind(this);
	this.addTopic = this.addTopic.bind(this);
	this.updateVotes = this.updateVotes.bind(this);
	this.setView = this.setView.bind(this);
  }

  sortTopics ( topicList ) {
  	topicList.sort( function(a,b) {
  		return b.votes - a.votes;
  	})

  	return topicList;
  }

  addTopic( title , author ) {
	var votes = 0;
	var datetime = new Date();

	var topic = [{
		  title : title,
		  author : author,
		  datetime : datetime,
		  id : this.state.maxId,
		  votes : votes
		}]
	console.log("*** IN ADDTOPIC");
	console.log(this.sortTopics(this.state.topicList.concat(topic)))
	this.setState( {
	  topicList : this.sortTopics(this.state.topicList.concat(topic)),
	  maxId : this.state.maxId + 1
	});
  }

  updateVotes ( id, direction ) {
	var topicList = this.state.topicList;
	var index = topicList.findIndex ( (a)=> {return a.id === id})
	topicList[index].votes = direction ? (topicList[index].votes + 1) : (topicList[index].votes - 1);

	this.setState ( {
	  topicList : this.sortTopics(topicList)
	});
  }

  setView ( pg ) {
	this.setState ({ currentView : pg });
  }

  render () {
	console.log(this.state.topicList);
	return (
		<div>
			<Home topicList={this.state.topicList} updateVotes={this.updateVotes} />
			<Submit addTopic={this.addTopic} />
		</div>
	);
  }
  
}

export default App;
