import React, { Component } from "react"
import Chart from "components/Chart"
import BuzyIndicator from "components/BuzyIndicator"
import { getCandlesRequest } from "actions/apiActions"
import { connect } from "react-redux"
import { getCandles, getIsLoading, getIsLoaded } from "reducers/candles.js"

const ETH_USD = "ETHUSD"

class USD_BTC extends Component {
    componentDidMount() {
        const { isLoaded } = this.props
        if (!isLoaded) {
            this.props.getCandlesRequest(ETH_USD)
        }
    }

    render() {
        const { isLoaded, isLoading, data } = this.props
        if (isLoaded) return <Chart data={data} />
        return <BuzyIndicator />
    }
}

const mapStateToProps = state => ({
    data: getCandles(state, ETH_USD),
    isLoading: getIsLoading(state, ETH_USD),
    isLoaded: getIsLoaded(state, ETH_USD)
})

export default connect(mapStateToProps, { getCandlesRequest })(USD_BTC)
