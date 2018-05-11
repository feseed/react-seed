import React from 'react'
import { Layout } from 'antd'
import SideItem from './SideItem'
// 侧边栏数据
import SideMenus from '../../routes/sideMenus'

const { Sider } = Layout


class Sidebar extends React.Component {
	state = {
		mode: 'inline',
		theme: 'dark',
		collapsed: false,
		defaultSelectes: ['1'],
	}
	onCollapse (collapsed) {
		this.setState({ collapsed })
	}

	render() {
		return (
			<Sider
				collapsible
				collapsed={this.state.collapsed}
				onCollapse={this.onCollapse}
			>
				<SideItem menus={SideMenus}/>
			</Sider>
		)
	}
}

export default Sidebar
