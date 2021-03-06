import React, { Component } from 'react';
import './About.css'


class About extends Component {
	render () {
		return (
			<div className="about">
				<div className="header">
					Not reddit, for cats.
				</div>
				<div className="body">
					<p>This was built over a weekend for a take-home interview assignment. This is my first time using javascript (and React). It was fun.</p>
					<p>This simple app was compiled using create-react-app to generate the skeleton code. The pages were written by myself.</p>
					<p>The app loads a few dummy topics when started, these can be found in the dummyTopics.js file in /src.</p>
					<p>Hope you like it and thanks again!</p>
					<p> -- Kai</p>

				</div>
				<img className="cat" src='cat_using_computer.jpg' alt="cutecat"/>
			</div>
		)
	}

}

export default About;
