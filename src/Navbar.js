import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
	// 
	render () {
		return (
			<div className="navbar">
				<h1 className="sitename">notreddit</h1>
				<h2 className="navlink" onClick={() => this.props.setView(0)}>home</h2>
				<h2 className="navlink" onClick={() => this.props.setView(1)}>submit a post</h2>
				<h2 className="navlink" onClick={() => this.props.setView(2)}>about</h2>
			</div>
		)
	}

}

export default Navbar;
