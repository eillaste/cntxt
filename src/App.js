import React, { Component } from 'react';
import './App.css';
import Child from './Child';
import { ColorContext } from './Context';
import { NumberContext } from './Context2';

class App extends Component {
	state = {
		color: 'blue',
		message: ', mate'
	};

	stuff = {
		number: 6,
		func: () => {
			this.stuff.number = this.stuff.number + 1;
			this.forceUpdate();
		}
	};

	render() {
		return (
			<ColorContext.Provider value={this.state}>
				<NumberContext.Provider value={this.stuff}>
					<div className="App">
						I'm the Parent
						<Child />
					</div>
				</NumberContext.Provider>
			</ColorContext.Provider>
		);
	}
}

export default App;
