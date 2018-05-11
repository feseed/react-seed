import React, { Component } from 'react'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

import Layout from './layout/Layout'
import NotFound from './pages/NotFound'

import './App.css'

class App extends Component {
	render () {
		return (
			<Router>
				<Switch>
					<Route exact path="/" render={() => <Redirect to="/page/home" />} />
					<Route path='/page' component={Layout} />
					<Route path='/404' component={NotFound} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		)
	}
}

export default App
