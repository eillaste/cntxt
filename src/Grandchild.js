import React, { Component } from 'react';
import { ColorContext } from './Context';
import { NumberContext } from './Context2';

class Grandchild extends Component {
	render() {
		return (
			<div>
				<ColorContext.Consumer>
					{(context) => (
						<NumberContext.Consumer>
							{(context2) => (
								<div>
									<h1>{context2.number + 5}</h1>
									<p style={{ color: context.color }}>I'm a grandchild{context.message}</p>
									<button onClick={context2.func}>button</button>
								</div>
							)}
						</NumberContext.Consumer>
					)}
				</ColorContext.Consumer>
			</div>
		);
	}
}

export default Grandchild;
