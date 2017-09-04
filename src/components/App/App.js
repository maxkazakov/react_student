import React, { Component } from "react"
import { Layout } from "antd"
import styled from "styled-components"
import "antd/dist/antd.css"
import { Switch, Route, Redirect, withRouter } from "react-router-dom"
import USD_BTC from "pages/USD_BTC"
import USD_ETH from "pages/USD_ETH"
import SideNav from "components/SideNav"
import { connect } from "react-redux"
import { changeCollapse } from "actions/siderActions"
import Profile from "pages/profile"

const { Content, Footer, Sider } = Layout
const StyledLayout = styled(Layout)`height: 100%;`
const StyledContent = styled(Content)`
    margin: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const StyledFooter = styled(Footer)`textAlign: center;`

class App extends Component {
    render() {
        const { collapsed, onCollapse } = this.props

        return (
            <StyledLayout>
                <Sider
                    collapsible
                    collapsed={collapsed}
                    onCollapse={onCollapse}
                >
                    <Switch>
                        <Route
                            path="/btc"
                            render={props => (
                                <SideNav location={props.location.pathname} />
                            )}
                        />
                        <Route
                            path="/eth"
                            render={props => (
                                <SideNav location={props.location.pathname} />
                            )}
                        />
                        <Route
                            path="/profile"
                            render={props => (
                                <SideNav location={props.location.pathname} />
                            )}
                        />
                    </Switch>
                </Sider>

                <Layout>
                    <StyledContent>
                        <Switch>
                            <Route path="/btc" component={USD_BTC} />
                            <Route path="/eth" component={USD_ETH} />
                            <Route path="/profile" component={Profile} />
                            <Redirect from="/" to="/btc" exact />
                        </Switch>
                    </StyledContent>
                    <StyledFooter>Smena school © 2017</StyledFooter>
                </Layout>
            </StyledLayout>
        )
    }
}

const mapStateToProps = state => ({
    collapsed: state.sider.collapsed
})

const mapDispatchToProps = dispatch => ({
    onCollapse: value => dispatch(changeCollapse(value))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
