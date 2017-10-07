import React, { Component } from 'react';
import './Home.css'

class Votes extends Component {
	// renders an up and downvote button, and displays the number of votes sds s

	render () {
		return (
			<div className="votes">
				<img className="button" src="./icon_up.png" alt="" onClick={() => this.props.updateVotes(this.props.topic.id,1)}/>
				<br/>{this.props.topic.votes}<br/>
				<img className="button" src="./icon_down.png" alt="" onClick={() => this.props.updateVotes(this.props.topic.id,0)}/>
			</div>
		)
	}
}

class DisplayTopic extends Component {
	// displays the topic name, author, and datetime posted

	render () {
		return ( 
			<div>
				<Votes topic={this.props.topic} updateVotes={this.props.updateVotes}/>
				<div className="title">
					{this.props.topic.title}
				</div>
				<div className="info">
					submitted on {this.props.topic.datetime.toLocaleString() + ' '} by {' ' + this.props.topic.author}
				</div>
			</div>
		);
	}
}

class Home extends Component {
	// renders all of the topics according to the order passed down from the app

	render () {
		return (
			<div className="home">
			{this.props.topicList.map ((topic) => {
				return <DisplayTopic key={topic.id} topic={topic} updateVotes={this.props.updateVotes}/>
			})}
			</div>
		)
	}

}

export default Home;
