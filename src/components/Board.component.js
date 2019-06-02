import React, { Component } from 'react';
import Block from './Block.component';
import './board-css.css';

export default class Board extends Component {
	constructor(props) {
		super(props);

		// var arr = [];
		// for (let i = 0; i < props.rows; i++) {
		// 	let arr2 = [];
		// 	for (let j = 0; j < props.columns; j++) {
		// 		arr2.push(0);
		// 	}
		// 	arr.push(arr2);
		// }
		let arr = Array(props.rows).fill(0).map(x => Array(props.columns).fill(0));

		//console.log(arr);

		this.state = {
			arr: arr
		};

		this.clickHandler = this.clickHandler.bind(this);
	}

	clickHandler(i, j) {
		console.log(this.state.arr[1][1]);
		//console.log(i,j);
		let newarr = this.state.arr;
		//console.log(this.state.arr);
		newarr[i][j] = newarr[i][j] === 1 ? 0 : 1;
		//console.log(newarr);
		this.setState({
			arr: newarr
		});
	}

	renderBlock(color, i, j) {
		j %= this.props.columns;
		//console.log(i,j);
		return (
			<Block clickHandler={() => { this.clickHandler(i, j) }} size={20} color={color} />
		);
	}

	renderNextPattern(){
		let newarr = Array(this.props.rows).fill(0).map(x => Array(this.props.columns).fill(0));
		
	}

	render() {

		var count1 = 0, count2 = 0;
		var column = this.state.arr.map(array =>
			<tr key={count1++}>{array.map(value =>
				<td key={count2++}>{this.renderBlock(value === 1 ? 'yellow' : 'grey', count1 - 1, count2 - 1)}</td>
			)}</tr>
		);
		//console.log(count1,count2);
		return (
			<table>
				<tbody>
					{column}
				</tbody>
			</table>
		);
	}
}