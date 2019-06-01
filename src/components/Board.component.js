import React, { Component } from 'react';
import Block from './Block.component';
import './board-css.css';

export default class Board extends Component {
	constructor(props) {
		super(props);

		var arr = [];
		for (let i = 0; i < props.rows; i++) {
			let arr2 = [];
			for (let j = 0; j < props.columns; j++) {
				arr2.push(0);
			}
			arr.push(arr2);
		}

		this.state = {
			arr: arr
		};

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler() {
		let newarr = this.state.arr;
		//console.log(this.state.arr);
		newarr[5][5] = 1;
		//console.log(newarr);
		this.setState({
			arr: newarr
		});
	}
	
	render() {

		var count1=0;
		console.log(this.state.arr[5][5] === 1 ? 'yellow' : 'grey');
		var column = this.state.arr.map(array =>
			<tr key={count1++}>{array.map(value =>
				<td key={count1++}><Block clickHandler={this.clickHandler} size={20} color={value === 1 ? 'yellow' : 'grey'} /></td>
			)}</tr>
		);
		console.log(count1);
		return (
			<table>
				<tbody>
					{column}
				</tbody>
			</table>
		);
	}
}