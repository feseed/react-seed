import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumb } from 'antd'

class CurrentBreadcrumb extends Component {

	_createBreadcrumbItem () {
		return this.props.currentPaths.map(item => {
			return (
				<Breadcrumb.Item key={item.path}>
					{item.title}
					{/* <Link to={item.path}>{item.title}</Link> */}
				</Breadcrumb.Item>
			)
		})
	}

	render () {
		return (
			<Breadcrumb style={{ margin: '16px 0' }}>
				{ this._createBreadcrumbItem.call(this) }
			</Breadcrumb>
		)
	}
}

export default CurrentBreadcrumb
