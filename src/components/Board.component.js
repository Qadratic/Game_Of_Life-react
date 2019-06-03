import React, { Component, Fragment } from 'react';
import Block from './Block.component';
import './board-css.css';

export default class Board extends Component {
	constructor(props) {
		super(props);

		let arr = Array(props.rows).fill(0).map(x => Array(props.columns).fill(0));
		this.state = {
			arr: arr
		};

		this.clickHandler = this.clickHandler.bind(this);
		this.renderNextPattern = this.renderNextPattern.bind(this);
		this.autoPlayPattern = this.autoPlayPattern.bind(this);
		this.stopPlayPattern = this.stopPlayPattern.bind(this);
	}

	clickHandler(i, j) {
		//console.log(this.countSurroundBlocks(i, j));
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
			<Block clickHandler={() => { this.clickHandler(i, j) }} size={10} color={color} />
		);
	}

	getValueOfBlock(i, j) {
		if (i < 0 || i >= this.props.rows) {
			return 0;
		}
		if (j < 0 || j >= this.props.columns) {
			return 0;
		}
		return this.state.arr[i][j];
	}
	countSurroundBlocks(i, j) {
		let count = 0;
		count += this.getValueOfBlock(i - 1, j - 1);
		count += this.getValueOfBlock(i - 1, j);
		count += this.getValueOfBlock(i - 1, j + 1);
		count += this.getValueOfBlock(i, j - 1);
		count += this.getValueOfBlock(i, j + 1);
		count += this.getValueOfBlock(i + 1, j - 1);
		count += this.getValueOfBlock(i + 1, j);
		count += this.getValueOfBlock(i + 1, j + 1);

		return count;
	}
	renderNextPattern() {
		let newarr = Array(this.props.rows).fill(0).map(x => Array(this.props.columns).fill(0));
		for (let i = 0; i < this.props.rows; i++) {
			for (let j = 0; j < this.props.columns; j++) {
				let surround = this.countSurroundBlocks(i, j);
				if (surround <= 1) {
					newarr[i][j]=0;
				}else if (surround >= 4) {
					newarr[i][j]=0;
				}else if(surround===3){
					newarr[i][j]=1;
				}
				else if (surround === 2 && this.state.arr[i][j]===1) {
					newarr[i][j]=1;
				}else{
					newarr[i][j]=0;
				}
			}
		}
		//console.log(newarr);
		this.setState({
			arr:newarr
		});
	}
	interval;
	autoPlayPattern(){
		this.interval=setInterval(()=>{
			this.renderNextPattern();
		},200);
	}
	stopPlayPattern(){
		clearInterval(this.interval);
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
			<Fragment>
				<table>
					<tbody>
						{column}
					</tbody>
				</table>
				<button type='button' onMouseDown={this.renderNextPattern}>NEXT</button>
				<button type='button' onMouseDown={this.autoPlayPattern}>START</button>
				<button type='button' onMouseDown={this.stopPlayPattern}>STOP</button>
			</Fragment>
		);
	}
}