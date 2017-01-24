import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.jsx'
import Promise from 'bluebird';
import axios from 'axios';
// this is the component

class Confirmation extends Component {
// const Confirmation = (props) => {
	constructor(){
		super();
	}


	render(){
	const order = this.props.orderFromPreviousPage.shoppingCart.order;
	const user = this.props.orderFromPreviousPage.auth;
	console.log(this.props.orderFromPreviousPage)

	return(

		<div className="ShoppingCart_div" > 
			<h1> Dear {user ? user.name : 'Anonymous'}, </h1>
			<p> Thank you for your purchase. Your confirmation number is: </p>
			<p> {order.orderNumber} </p>
			<p> A copy of your order has been sent to {order.email} </p>

		</div>

	)
}

}

export default Confirmation;


// this is the container
// const mapStateToProps = (state) => {
//   return {
//     shoppingCart: state.shoppingCart,
//     auth: state.auth,
//     order: state.order
// };
// };



// export default connect(
//   mapStateToProps,
// )(Confirmation);

