import React, { Component } from "react"
import { Input } from "antd"
import {
	changeEmail,
	changeFirstname,
	changeLastname
} from "actions/profileActions"
import { withRouter } from "react-router-dom"
import { getEmail, getFirstname, getLastname } from "reducers/profile"

import { connect } from "react-redux"

class Profile extends Component {
	componentDidMount() {
		console.log("Profile did mount")
	}

	render() {
		const { email, firstname, lastname } = this.props
		const {
			onEmailChange,
			onFirstnameChange,
			onLastnameChange
		} = this.props
		return (
			<div>
				<Input
					placeholder="email"
					value={email}
					onChange={e => onEmailChange(e.target.value)}
				/>
				<Input
					placeholder="first name"
					value={firstname}
					onChange={e => onFirstnameChange(e.target.value)}
				/>
				<Input
					placeholder="last name"
					value={lastname}
					onChange={e => onLastnameChange(e.target.value)}
				/>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	email: getEmail(state),
	firstname: getFirstname(state),
	lastname: getLastname(state)
})

const mapDispatchToProps = dispatch => ({
	onEmailChange: value => dispatch(changeEmail(value)),
	onFirstnameChange: value => dispatch(changeFirstname(value)),
	onLastnameChange: value => dispatch(changeLastname(value))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile))
