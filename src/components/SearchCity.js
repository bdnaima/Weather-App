import React from 'react';
// import axios from 'axios'

class SearchCity extends React.Component {

	userInput = "";

	handleChange = (e) => {
		console.log(e.target.value)
		this.userInput = e.target.value;
	}
	handleClick = (e) => {
		e.preventDefault();
		console.log(e.target)

		const { onSearch } = this.props;
		onSearch(this.userInput);

	}

	render() {
		return (
			<div id="SearchCity" className="mb-5">
				<form>
					<div className="input-group">
						<input
						onChange={this.handleChange}
						type="text"
						className="form-control form-control-lg"
						id="city" />

						<div className="input-group-append">
							<button className="btn btn-success btn-lg" onClick={this.handleClick}>Search</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SearchCity;
