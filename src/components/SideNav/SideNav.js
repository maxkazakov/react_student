import React from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

export default () =>
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1">
            <NavLink to="/btc">
                <Icon type="pie-chart" />
                <span>Bitcoin</span>
            </NavLink>
        </Menu.Item>

        <Menu.Item key="2">
            <NavLink to="/eth">
                <Icon type="pie-chart" />
                <span>Ethirium</span>
            </NavLink>
        </Menu.Item>

        <Menu.Item key="3">
            <NavLink to="/profile">
                <Icon type="pie-chart" />
                <span>Profile</span>
            </NavLink>
        </Menu.Item>
    </Menu>;
