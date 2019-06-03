import React, { Component } from 'react';
import Board from './components/Board.component';
import Rules from './components/Rules.component';

class App extends Component {
	render() {
		return (
			<div>
				<Board rows={50} columns={80} />
				<Rules />
			</div>
		);
	}
}

export default App;
