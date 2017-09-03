import React, { Component } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import "antd/dist/antd.css";
import { Switch, Route, Redirect } from "react-router-dom";
import USD_BTC from "pages/USD_BTC";
import USD_ETH from "pages/USD_ETH";
import SideNav from "components/SideNav";
import { connect } from "react-redux";
import { changeCollapse } from "actions/siderActions";

const { Content, Footer, Sider } = Layout;
const StyledLayout = styled(Layout)`height: 100%;`;
const StyledFooter = styled(Footer)`textAlign: center;`;

class App extends Component {
    render() {
        const { collapsed, onCollapse } = this.props;

        return (
            <StyledLayout>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={onCollapse}
                >
                    <SideNav />
                </Sider>

                <Layout>
                    <Content style={{ margin: "0 16px" }}>
                        <Switch>
                            <Route path="/btc" component={USD_BTC} />
                            <Route path="/eth" component={USD_ETH} />
                            <Redirect from="/" to="/btc" exact />
                        </Switch>
                    </Content>
                    <StyledFooter>Smena school © 2017</StyledFooter>
                </Layout>
            </StyledLayout>
        );
    }
}

const mapStateToProps = state => ({
    collapsed: state.sider.collapsed
});

const mapDispatchToProps = dispatch => ({
    onCollapse: value => dispatch(changeCollapse(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
