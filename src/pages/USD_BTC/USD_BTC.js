import React, { Component } from "react";
import { getCandles } from "api";
import Chart from "components/Chart";

class USD_BTC extends Component {
    state = {
        isLoading: true,
        data: []
    };

    componentDidMount() {
        getCandles().then(data => {
            this.setState({
                isLoading: false,
                data: data
                    .map(([date, open, close, high, low, volume]) => ({
                        date,
                        open,
                        close,
                        high,
                        low,
                        volume
                    }))
                    .reverse()
            });
        });
    }
    render() {
        const { isLoading, data } = this.state;

        if (isLoading) return <p>Loading...</p>;

        return <Chart data={data} />;
    }
}

export default USD_BTC;
