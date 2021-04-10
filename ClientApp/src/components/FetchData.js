import React, { Component } from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;
    constructor(props) {
        super(props);
        this.state = { forecasts: [], loaded: false };
    }

    componentDidMount() {
        this.fetchForecastData();
    }

    displeyData(forecasts) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {

        let content = this.state.loading ? <p><em>Loading...</em></p> : this.displeyData(this.state.forecasts);

        return (
            <div>
                <h1 id="tabelLabel" >Weather forecast</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {content}
            </div>
        );
    }

    async fetchForecastData() {
        await fetch('weatherforecast')
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('this is console.log', result);
                    this.setState({
                        loaded: true,
                        forecasts: result
                    })
                }
            )
    }
}
