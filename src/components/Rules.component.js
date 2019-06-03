import React, { Fragment } from 'react';

export default function (props) {
	return (
		<Fragment>
			<h2>The Rules</h2>
			For a space that is 'populated':
			<ul>
				<li>Each cell with one or no neighbors dies, as if by solitude.</li>
				<li>Each cell with four or more neighbors dies, as if by overpopulation.</li>
				<li>Each cell with two or three neighbors survives.</li>
			</ul>
			For a space that is 'empty' or 'unpopulated'
			<ul><li>Each cell with three neighbors becomes populated.</li></ul>
		</Fragment>
	);
}