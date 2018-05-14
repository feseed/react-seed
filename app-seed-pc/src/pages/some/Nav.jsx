import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Nav extends Component {
	render () {
		return (
			<div>
				<Link to="/404">go 404</Link>
				<br/>
				<Link to="/page/ui/home">go Home</Link>
			</div>
		)
	}
}

export default Nav
