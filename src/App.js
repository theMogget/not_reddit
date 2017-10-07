import React, { Component } from 'react';
import './App.css';
import {dummyTopics} from './dummyTopics.js';
import Home from './Home.js'
import Submit from './Submit.js'
import Navbar from './Navbar.js'

class App extends Component {
	// app is the overall controller

	constructor(props) {
	// state holds the entire list of all topics, and the view to be rendered
	// 0 - index page | 1 - submit topic | 2 - about
	// initialised with a bunch of dummy topics

		super(props);

		this.state = {
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
		// returns sorted list of topics, according to number of votes

		topicList.sort( function(a,b) {
			return b.votes - a.votes;
		} )
		return topicList;
	}

	addTopic( title , author ) {
		// sets topicList state to include the newly created topic
		// initialises based on two input parameters
		// sorts the list before setting state

		var votes = 0;
		var datetime = new Date();

		var topic = [{
			title : title,
			author : author,
			datetime : datetime,
			id : this.state.maxId,
			votes : votes
		}]
		
		this.setState( {
			topicList : this.sortTopics(this.state.topicList.concat(topic)),
			maxId : this.state.maxId + 1
		});
	}

	updateVotes ( id, direction ) {
		// changes the number of votes of a given topic, adding or subtracting 1 depending on direction
		// sorts the list after and then sets the state

		var topicList = this.state.topicList;
		var index = topicList.findIndex ( (a)=> {return a.id === id})
		
		topicList[index].votes = direction ? (topicList[index].votes + 1) : (topicList[index].votes - 1);

		this.setState ( {
		topicList : this.sortTopics(topicList)
		});
	}

	setView ( pg ) {
		// updates which view should be displayed
		this.setState ({ currentView : pg });
	}

	render () {
		// depending on the state.currentView, renders the navbar and associated page
		// passes down the necessary props to each component
		
		switch (this.state.currentView) {
			case 0:
				return (
					<div>
						<Navbar setView={this.setView}/>
						<Home topicList={this.state.topicList} updateVotes={this.updateVotes} />
					</div>
				);

			case 1:
				return (
					<div>
						<Navbar setView={this.setView}/>
						<Submit addTopic={this.addTopic} />
					</div>
				);

			case 2:
				return (
					<div>
						<Navbar setView={this.setView}/>
						about
					</div>
				);

			default:
				return (
					<div>
						<Navbar setView={this.setView}/>
						<Home topicList={this.state.topicList} updateVotes={this.updateVotes} />
					</div>
				);
		}
	}
}

export default App;
