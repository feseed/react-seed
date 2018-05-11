import React from 'react'
import {
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

const mainRoutes = [
	{ path: '/nav', component: 'Nav' },
	{ path: '/home', component: 'Home' },
]

function parseRouter (routes = []) {
	return routes.map((item, index) => {
			return (
				<Route
					path={`/page${item.path}`}
					exact
					component={require(`../pages/${item.component}`).default}
					key={item.component}
				/>
			)
		})
}

const RouterDom = () => {
	return (
		<Switch>
				{ parseRouter(mainRoutes) }
				<Route render={() => <Redirect to="/404" />} />,
		</Switch>
	)
}

export default RouterDom
