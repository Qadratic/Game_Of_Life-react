import React,{Component} from 'react';

export default class Block extends Component{
	// constructor(props){
	// 	super(props);

	// }
	style={
		width:this.props.size,
		height:this.props.size,
		border:0,
		background:this.props.color,
	};
	render(){
		return (
			<button onClick={this.props.onclick} style={this.style}></button>
		);
	}
}