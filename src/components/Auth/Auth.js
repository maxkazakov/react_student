import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import App from "components/App"
import { getUserInfo } from "api"
import { getUserInfoRequest } from "actions/authActions"
import { connect } from "react-redux"

class Auth extends Component {
	componentWillMount() {
		const { getUserInfoRequest } = this.props
		getUserInfoRequest()
		// getUserInfo()
		// 	.then(res => {
		// 		console.log(res.data)
		// 	})
		// 	.catch(err => {
		// 		console.log(err)
		// 	})
	}

	render() {
		return <div />
	}
}

export default connect(null, { getUserInfoRequest })(Auth)
