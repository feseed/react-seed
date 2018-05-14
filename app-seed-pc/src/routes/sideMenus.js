// path 是唯一值，与 /src/routes/index.jsx 下的 path 值对应
const sideMenus = [
	{
		path: '/page/some/nav', title: '导航', icon: 'appstore'
	},
	{
		path: '/page/ui', title: 'UI 页', icon: 'heart',
		children: [
			{ path: '/page/ui/home', title: 'home 页', icon: '' },
			{ path: '/page/ui/about', title: 'about 页', icon: '' },
			{ path: '/404', title: '404', icon: '' },
		],
	},
	
]

export default sideMenus
