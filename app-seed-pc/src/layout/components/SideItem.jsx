import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu

class SideItem extends Component {
	state = {
	}

	_renderMenuItem (menuItem) {
		return (
			<Menu.Item
				key={menuItem.path}
			>
				<Link to={menuItem.path}>
					<Icon type={menuItem.icon} />
					<span>{menuItem.title}</span>
				</Link>
			</Menu.Item>
		)
	}

	_renderSubMenu (subMenu) {
		return (
			<SubMenu
				key={subMenu.path}
				title={
					<span>
						<Icon type={subMenu.icon} />
						<span>{subMenu.title}</span>
					</span>
				}
			>

				{
					subMenu.children &&
					subMenu.children.map(childMenu => this._renderMenuItem(childMenu))
				}

			</SubMenu>
		)
	}

	// 判断 侧边导航是否渲染 2 级导航
	render () {
		return (
			<Menu {...this.props} >
				{
					this.props.menus && this.props.menus.map(item => {
						return item.children && item.children.length ? this._renderSubMenu(item) : this._renderMenuItem(item)
					})
				}
			</Menu>
		)
	}
}

export default SideItem
