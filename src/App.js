import React, { Component } from 'react';
import Board from './components/Board.component';

class App extends Component {
	render() {
		return (
			<div>
				<Board rows={50} columns={80}/>
			</div>
		);
	}
}

export default App;
