import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
// 侧边栏数据
import SideMenus from '../../routes/sideMenus'
import CurrentBreadcrumb from './CurrentBreadcrumb';

const { Header, Content, Footer } = Layout

class MainContent extends Component {
	// 组件静态变量
	staticVars = {
		// 当前导航 url
		currentUrl: '',
		// 面包屑导航
		currentPaths: [],
		allSideMenuPaths: [],
	}
	
	componentDidMount () {
		this.staticVars.allSideMenuPaths = this._initAllSideMenuPaths(SideMenus)	
	}
	// 路由改变调用该钩子函数
	componentWillReceiveProps (nextProps) {
		let { pathname } = nextProps.location
		this.staticVars.currentUrl = pathname
		this.staticVars.currentPaths = this._getCurrentSideMenuPath()

		// console.log('will: ', this.staticVars.currentPaths)
	}

	// 获取侧边栏路由所有组合情况
	 _initAllSideMenuPaths (sideMenus) {
		let resultList = []
		parseTree([], sideMenus)
		function parseTree (source, children) {
			if (!children) {
				resultList.push(source)
				return
			}
			children.forEach(e => {
				// 返回一维数组
				// var flag = source ? '||' : '';
				// var strPath = source + flag + e.name;
				// parseTree(strPath, e.children);
				// 返回二维数组
				var nameArr = source.concat([{
					path: e.path,
					title: e.title,
				}])
				parseTree(nameArr, e.children)
			})
		}
		return resultList
	}

	_getCurrentSideMenuPath () {
		// console.log('this.staticVars.allSideMenuPaths: ', this.staticVars.allSideMenuPaths)
		// console.log('this.staticVars.currentUrl: ', this.staticVars.currentUrl)
		return this.staticVars.allSideMenuPaths.filter((item, index) => {
			let currentBreadcrumbs
			for (let i=0; i<item.length; i++) {
				if (item[i].path === this.staticVars.currentUrl) {
					currentBreadcrumbs = item
					break
				}
			}
			return currentBreadcrumbs
		})[0]
	}

	render () {
		return (
			<Layout>
				<Header style={{ background: '#fff', padding: 0 }} />
				<Content style={{ margin: '0 16px' }}>
					{/* 面包屑 */}
					<CurrentBreadcrumb currentPaths={this.staticVars.currentPaths} />
					<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
						{this.props.children}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
					Ant Design ©2018 Created by Ant UED
				</Footer>
			</Layout>
		)
	}
}

export default withRouter(MainContent)
