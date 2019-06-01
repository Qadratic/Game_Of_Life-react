import React, { Component } from 'react';
import Board from './components/Board.component';

class App extends Component {
	render() {
		return (
			<div>
				<Board rows={10} columns={10}/>
			</div>
		);
	}
}

export default App;
