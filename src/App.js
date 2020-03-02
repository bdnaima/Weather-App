import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';
import axios from 'axios'

class App extends React.Component {
	state = {
		errorMessage: false,
		report: null,
		weatherCity: "",
		weatherInfo: "",
		weatherHumidity: ""
	}

	weatherCheck = (userInput) => {
		const URL = 'http://api.openweathermap.org/data/2.5'
		const KEY = 'a9f6719e37f20890ebff5d91724dec1f'

		axios.get(`${URL}/weather?q=London&units=metric&appid=${KEY}`)
		.then(response => {
			console.log(response.data)
			this.setState({
				report: userInput,
				weatherCity: response.data.name,
				weatherTemp: response.data.main.temp,
				weatherHumidity: response.data.main.humidity
			})
		})
		.catch(err => {
			console.log(err)
		})

	}

	render() {
		return (
			<div id="app">
				<div className="container my-5">
					<h1 className="text-center mb-5">
						<span role="img" aria-label="Weather?">🌦❔</span>
					</h1>


					<SearchCity onSearch={this.weatherCheck}/>

					{
						this.state.report
						? (
							<WeatherReport
							city="London"
							temp="8.18"
							humidity="57"
							/>
						)
						: ''
					}
				</div>
				<p> The temperature in {this.state.weatherCity} is {this.state.weatherTemp} &deg; and {this.state.weatherHumidity}%</p>
			</div>
		)
	}
}

export default App;
