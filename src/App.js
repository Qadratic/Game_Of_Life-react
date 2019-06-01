import React, { Component } from 'react';
import Board from './components/Board.component';

class App extends Component {
	render() {
		return (
			<div>
				<Board rows={20} columns={40}/>
			</div>
		);
	}
}

export default App;
