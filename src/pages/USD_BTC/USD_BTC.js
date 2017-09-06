import React, { Component } from "react"
import Chart from "components/Chart"
import BuzyIndicator from "components/BuzyIndicator"
import { getCandlesRequest } from "actions/apiActions"
import { connect } from "react-redux"
import { getCandles, getIsLoading, getIsLoaded } from "reducers/candles.js"

const BTC_USD = "BTCUSD"

class USD_BTC extends Component {
	componentDidMount() {
		this.props.getCandlesRequest(BTC_USD)
	}

	// componentShoukd
	render() {
		const { isLoaded, isLoading, data } = this.props
		console.log(this.props)
		if (isLoaded) return <Chart data={data} />
		return <BuzyIndicator />
	}
}

const mapStateToProps = state => ({
	data: getCandles(state, BTC_USD),
	isLoading: getIsLoading(state),
	isLoaded: getIsLoaded(state)
})

export default connect(mapStateToProps, { getCandlesRequest })(USD_BTC)
