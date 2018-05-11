import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from '../react-redux'

import logo from '../logo.svg';
import '../App.css'

class Header extends Component {
	static contextTypes = {
		store: PropTypes.object
	}

	// connect 相关逻辑抽离

	/* constructor () {
		super()
		this.state = {
			themeColor: '',
		}
	}
	
	componentWillMount () {
		const { store } = this.context
		this._updateThemeColor()
		store.subscribe(() => this._updateThemeColor())
	}
	
	_updateThemeColor () {
		const { store } = this.context
		const state = store.getState()
		this.setState({ themeColor: state.themeColor })
	} */

	render () {
		return (
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h1 className="App-title" style={{color: this.props.themeColor}} >React Seed</h1>
			</header>
		)
	}
}
const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor,
	}
}

Header = connect(mapStateToProps)(Header)

export default Header
