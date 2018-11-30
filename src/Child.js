import React, { Component } from 'react';
import Grandchild from './Grandchild';
import { NumberContext } from './Context2';

class Child extends Component {
	render() {
		return (
			<div>
				<NumberContext.Consumer>
					{(cont) => (
						<div>
							<p>I'm a child, and I'm {cont.number} years old</p>
						</div>
					)}
				</NumberContext.Consumer>
				<Grandchild />
			</div>
		);
	}
}

export default Child;
