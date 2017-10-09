import React from "react"
import { Menu, Icon } from "antd"
import { NavLink } from "react-router-dom"

const menu = [
	{
		key: "/btc",
		navigate_to: "/btc",
		icon: "pie-chart",
		caption: "Bitcoint"
	},
	{
		key: "/eth",
		navigate_to: "/eth",
		icon: "area-chart",
		caption: "Ethirium"
	},
	{
		key: "/profile",
		navigate_to: "/profile",
		icon: "user",
		caption: "Profile"
	}
]

export default props => {
	const { location } = props
	return (
		<Menu theme="dark" defaultSelectedKeys={[location]} mode="inline">
			{menu.map(item => (
				<Menu.Item key={item.key}>
					<NavLink to={item.navigate_to}>
						<Icon type={item.icon} />
						<span>{item.caption}</span>
					</NavLink>
				</Menu.Item>
			))}
		</Menu>
	)
}
