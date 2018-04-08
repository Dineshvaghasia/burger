import React from 'react'

import hoc from '../../../hoc/hoc';

const orderSummary = (props) => {
	const ingredientSummary = Object.keys(props.ingredients)
		.map(igkey => {
			return (
				<li><span style={{textTransform: 'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}</li>
			)
		});

	return(
		<hoc>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
			<ul>
				{ingredientSummary}
			</ul>
			<p>Continue to Checkout?</p>
		</hoc>
	)
};

export default orderSummary;