import React, { Component } from 'react';
import './Submit.css'

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
		this.setState({authorValue : e.target.value});
	}
	
	handleTitleChange(e) {
		this.setState({titleValue : e.target.value});
	}

	render () {
		return (
			<form className='submit' onSubmit={(e) => {
				if (this.state.titleValue === '' || this.state.authorValue === '') {
					alert("Please make sure you enter both a title and author!")
					e.preventDefault()
				} else {
					e.preventDefault()
					alert("Submitted! Sending you back home...")
					this.props.addTopic( this.state.titleValue, this.state.authorValue.toUpperCase() + ' CAT' )
					this.props.setView( 0 )
				}
			}}>
				<label className="label">
					Topic
					<br/>
					<input className="topic" type="text" value={this.state.titleValue} onChange={this.handleTitleChange}/>
					<br/>
				</label>
				<label className="label">
					Author
					<br/>
					<input type="text" value={this.state.authorValue} onChange={this.handleAuthorChange}/>
					<br/>
				</label>
				<input className="button" type="submit" value="Submit!" />
			</form>
		)
	}
	
}


class Submit extends Component {

	render () {
		return (
			<div>
				<TopicForm addTopic={this.props.addTopic} setView={this.props.setView}/>
			</div>
		)
	}

}

export default Submit;
