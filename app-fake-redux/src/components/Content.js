import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from '../react-redux'

import ThemeSwitch from './ThemeSwitch'

class Content extends Component {
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
			<div className="App" style={{color: this.props.themeColor}} >
				<p className="App-intro">
					这里是内容！
				</p>
				<ThemeSwitch />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		themeColor: state.themeColor,
	}
}

Content = connect(mapStateToProps)(Content)

export default Content