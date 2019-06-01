import React, { Component, Fragment } from 'react';
import Block from './Block.component';

export default class Board extends Component {
	constructor(props){
		super(props);

		this.clickHandler=this.clickHandler.bind(this);
	}

	clickHandler(){

	}

	render() {
		return (
			<Fragment>
				<Block onclick={this.clickHandler} color={'yellow'} size={20}/>
			</Fragment>
		);
	}
}