import React from 'react'
import {
	Switch,
	Route,
	Redirect,
} from 'react-router-dom'

/**
 * path 为 pages 文件夹下的路径，用户访问页面 URL
 * component 为 各页面组件的路径，import 组件使用
 */
const mainRoutes = [
	{ path: '/some/nav', component: '/some/Nav' },
	{ path: '/ui/home', component: '/ui/Home' },
	{ path: '/ui/about', component: '/ui/About' },
]

// 解析路由
function parseRouter (routes = []) {
	return routes.map((item, index) => {
			return (
				<Route
					path={`/page${item.path}`}
					exact
					component={require(`../pages${item.component}`).default}
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
