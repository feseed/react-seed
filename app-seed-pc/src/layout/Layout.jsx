import React, { Component } from 'react'
import { Layout } from 'antd'

import RouterDom from '../routes'
import MainContent from './components/MainContent'
import Sidebar from './components/Sidebar'

class CLayout extends Component {
	render () {
		return (
			<Layout style={{ minHeight: '100vh' }}>
				<Sidebar/>
				<MainContent>
					<RouterDom/>
				</MainContent>
			</Layout>
			
		)
	}
}

export default CLayout