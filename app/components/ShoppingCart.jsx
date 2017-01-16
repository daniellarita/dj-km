import React, { Component } from 'react';
import {addToCart, deleteFromCart, purchase} from '../reducers/ShoppingCart_reducer';
import { connect } from 'react-redux';
import store from '../store.jsx'
import Promise from 'bluebird';
import axios from 'axios';

// this is the component
// const ShoppingCart = (props) => {

class ShoppingCart extends Component {
	constructor(){
		super();
		this.state = {
			shoppingCart: [],
			productToCheckForQuanity: {productId: 0, newQuantity: 0},
			quantityAvailable: true,
			unitsRemaining: 0
		}

	this.deleteFromCart = this.deleteFromCart.bind(this);
	this.handleQuantity = this.handleQuantity.bind(this);
	this.handleQuantityUpdate = this.handleQuantityUpdate.bind(this);
	this.proceedToOrder = this.proceedToOrder.bind(this);

	}

	componentDidMount(){	
		this.setState({shoppingCart: this.props.shoppingCart.shoppingCart})
	}

	componentWillReceiveProps(nextProps) {
	    const currentProps = this.props;

	    if (this.props.shoppingCart.shoppingCart.length !== nextProps.shoppingCart.shoppingCart.length)
	      this.setState({shoppingCart: nextProps.shoppingCart.shoppingCart})
	 }

	deleteFromCart(idToRemove){
		console.log(idToRemove)
		if(this.state.shoppingCart.length){
			const currentCart = this.state.shoppingCart;
			const newCart = currentCart.filter(elem => {return elem.id != idToRemove})
		this.props.deleteFromCart_func(newCart);
		// this.setState({shoppingCart: newCart})
		}
	}

	handleQuantity(event, idToUpdate){
		event.preventDefault();
		const newQuantity = event && event.target.value
		this.setState({productToCheckForQuanity: {
			productId: idToUpdate,
			newQuantity: parseInt(newQuantity)
		}})

	}

	handleQuantityUpdate(idToCheck, quantityToCheck){
		const quantityAvailable = true;
		if(this.state.productToCheckForQuanity.productId && this.state.productToCheckForQuanity.newQuantity){
		axios.get('/api/products/' + idToCheck)
		.then(product => {
			product.data.quantity < quantityToCheck ? this.setState({quantityAvailable: false, unitsRemaining: product.data.quantity}) : this.setState({quantityAvailable: true})

		})
	}

	}

	proceedToOrder(){
		//create and submit to orders table
		//update quantity on products
		//move to the checkout page (maybe just create a div below?)
	}

	render(){
		console.log(this.props)
	return(

		<div className="ShoppingCart_div"> 
			<div className="panel panel-default">
				  <div className="panel-heading">Shopping Cart</div>

				  <table className="table table-hover">
					  <thead>
					    <tr>
					      <th>Item Name</th>
					      <th>Quantity</th>
					      <th>Price (per unit)</th>
					      <th>Total</th>
					      <th />		
					      <th />			      
					    </tr>
					  </thead>
					  <tbody>
					  

					    { this.state.shoppingCart.length &&
					    	this.state.shoppingCart.map(elem => {
					    		return(
					    			  <tr key={elem.id} className="align">
									      <td className="align">{elem.artistName}</td>
									      <td><input onChange={(event)=>this.handleQuantity(event, elem.id)} type="text" className="input-group form-control" defaultValue={elem.quantity}/></td>
									      <td> ${elem.price}</td>
									      <td> ${this.state.productToCheckForQuanity.newQuantity ? this.state.productToCheckForQuanity.newQuantity * elem.price : (elem.price * elem.quantity && elem.price*elem.quantity)}</td>
									      <td> <div className="glyphicon glyphicon-remove" onClick={() => this.deleteFromCart(elem.id)}/> </td>
									      <td> 	<button type="submit" style={{}}className="quantity-update btn btn-primary" onClick={()=>this.handleQuantityUpdate(this.state.productToCheckForQuanity.productId, this.state.productToCheckForQuanity.newQuantity)}>Update quantity</button>
											</td> 
									   </tr>

					    			)
					    	})
					    }

					  </tbody>
					</table>
			</div>
			
			{  this.state.quantityAvailable ? null : <div className="alert alert-danger" role="alert">
			  		<strong>Oh snap!</strong> You are asking for more inventory than available.  There are {this.state.unitsRemaining} units available of this item
				</div>
			}

			<div className="panel panel-default">
				 <div className="panel-heading">Address</div>
 			</div>

  			<button type="button" className="btn btn-primary">Proceed to Checkout</button>

		</div>

	)

}
}


// this is the container
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    shoppingCart: state.shoppingCart};
};

const mapDispatchToProps = (dispatch) => {
  return ({
    addToCart_func: function(obj) {
      dispatch(addToCart(obj));
    },

    deleteFromCart_func: function(arr){
    	dispatch(deleteFromCart(arr));
    }

  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCart);

