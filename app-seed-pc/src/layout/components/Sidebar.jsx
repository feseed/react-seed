import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import SideItem from './SideItem'
// 侧边栏数据
import SideMenus from '../../routes/sideMenus'

const { Sider } = Layout


class Sidebar extends Component {
	state = {
		mode: 'inline',
		theme: 'dark',
		collapsed: false,
		defaultSelectes: ['0'],
		openKey: '',
		selectedKey: '',
	}
	// componentDidMount () {
	// 	console.log('did======')
	// 	this._setMenuOpen(this.props)
	// }
	componentWillReceiveProps(nextProps) {
		// this.onCollapse(nextProps.collapsed)
		this._setMenuOpen(nextProps)
	}
	_setMenuOpen (props) {
		const { pathname } = props.location
		this.setState({
			openKey: pathname.substr(0, pathname.lastIndexOf('/')),
			selectedKey: pathname,
		})
	}
	onCollapse (collapsed) {
		this.setState({ collapsed })
	}
	menuClick (e) {
		this.setState({
			selectedKey: e.key,
		})
		// console.log('menuClick: ', e)
	}
	// 点击父级，展开相应导航
	openMenu (v) {
		// console.log(v)
		this.setState({
			openKey: v[v.length - 1],
		})
	}
	render() {
		return (
			<Sider
				collapsible
				collapsed={this.state.collapsed}
				onCollapse={this.onCollapse.bind(this)}
			>
				<SideItem
					theme={this.state.theme}
					menus={SideMenus}
					onClick={this.menuClick.bind(this)}
					selectedKeys={[this.state.selectedKey]}
					openKeys={[this.state.openKey]}
					mode={this.state.mode}
					onOpenChange={this.openMenu.bind(this)}
				/>
			</Sider>
		)
	}
}

export default withRouter(Sidebar)
