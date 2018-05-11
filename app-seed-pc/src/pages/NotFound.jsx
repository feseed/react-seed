import React, { Component } from 'react'
import img from '../images/component/404.png';

class NotFound extends Component {
	render() {
		return (
			<div className="center" style={{height: '100vh', lineHeight: '100vh', textAlign: 'center', background: '#ececec', overflow: 'hidden'}}>
				<img src={img} alt="404" />
			</div>
		)
	}
}

export default NotFound