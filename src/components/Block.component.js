import React from 'react';
import './block-css.css';

export default function Block(props) {
	var block_style = {
		height: props.size,
		width: props.size,
		background: props.color,
	};
	console.log(props.color);
	return (
		<div onClick={()=>{props.clickHandler();}} style={block_style} className='block'></div>
	);
}