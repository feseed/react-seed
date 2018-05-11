const sideMenus = [
	{
		path: '/page/nav', title: '导航', icon: 'appstore'
	},
	{
		path: '/page/home', title: '页面', icon: 'heart',
		children: [
			{ path: '/page/home', title: 'home 页', icon: '' },
			{ path: '/page/about', title: 'about 页', icon: '' },
			{ path: '/404', title: '404', icon: '' },
		],
	},
	
]

export default sideMenus
