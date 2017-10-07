import React, { Component } from 'react';

class TopicForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			titleValue : '',
			authorValue : '' }
		
		this.handleAuthorChange = this.handleAuthorChange.bind(this);
		this.handleTitleChange = this.handleTitleChange.bind(this);
	}

	handleAuthorChange(e) {
		this.setState({authorValue : e.target.value.toUpperCase()});
	}
	
	handleTitleChange(e) {
		this.setState({titleValue : e.target.value});
	}

	render () {
		return (
			<form onSubmit={(e) => {
				e.preventDefault()
				this.props.addTopic( this.state.titleValue, this.state.authorValue
			)}}>
				<label>
					Title:
					<input type="text" value={this.state.titleValue} onChange={this.handleTitleChange}/>
				</label>
				<label>
					Author:
					<input type="text" value={this.state.authorValue} onChange={this.handleAuthorChange}/>
				</label>
				<input type="submit" value="Submit!!!! yeah go!!" />
			</form>
		)
	}
	
}


class Submit extends Component {

	render () {
		return (
			<div>
				<TopicForm addTopic={this.props.addTopic} />
			</div>
		)
	}

}

export default Submit;
