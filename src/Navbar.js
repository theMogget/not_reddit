import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {

	render () {
		return (
			<div className="navbar">
			<h1 className="sitename">notreddit</h1>
			<div className="navlink" onClick={() => this.props.setView(0)}>home</div>
			<div className="navlink" onClick={() => this.props.setView(1)}>submit a post</div>
			<div className="navlink" onClick={() => this.props.setView(2)}>about</div>
			</div>
		)
	}

}

export default Navbar;
