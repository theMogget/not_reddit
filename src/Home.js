import React, { Component } from 'react';

class Votes extends Component {
	render () {
		return (
			<div>
			<button onClick={() => this.props.updateVotes(this.props.topic.id,1)}>up</button><br/>
			{this.props.topic.votes}<br/>
			<button onClick={() => this.props.updateVotes(this.props.topic.id,0)}>down</button>
			</div>
		)
	}
}

class DisplayTopic extends Component {
	render () {
		return ( 
			<div>
				<Votes topic={this.props.topic} updateVotes={this.props.updateVotes}/>
				<h1>{this.props.topic.title}</h1>
				<h2>
				{this.props.topic.author + '   '}
				{this.props.topic.datetime.toLocaleString()}
				</h2>
			</div>
		);
	}
}

class Home extends Component {

	render () {
		return (
			<div>
			{this.props.topicList.map ((topic) => {
				return <DisplayTopic key={topic.id} topic={topic} updateVotes={this.props.updateVotes}/>
			})}
			</div>
		)
	}

}

export default Home;
