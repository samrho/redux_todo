import React, { Component } from "react";

class Counter extends Component {
	state = {
		count: 0,
	};
	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};
	decrement = () => {
		this.setState({ count: this.state.count - 1 });
	};
	render() {
		return (
			<div>
				<h2>Counter example</h2>
				<h3>current value: {this.state.count}</h3>
				<button onClick={this.increment}>+</button>
				<button onClick={this.decrement}>-</button>
			</div>
		);
	}
}

export default Counter;
