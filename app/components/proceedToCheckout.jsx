import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.jsx'
import Promise from 'bluebird';
import axios from 'axios';
import { Link } from 'react-router';
import { purchase } from '../reducers/ShoppingCart_reducer';
import crypto from 'crypto';
import Confirmation from './confirmation'

// this is the component

class Checkout extends Component {
	constructor(){
		super();
		this.state = {
			currentuser:{},
			order:{},
			emailValid: false,
			goToConfirmation: false,
			error: false
		}

	
	this.updateAddress = this.updateAddress.bind(this);
	this.sendToPurchase = this.sendToPurchase.bind(this);
	this.emailValidation = this.emailValidation.bind(this);

	}

	componentDidMount(){	
		const id = this.props.auth ? this.props.auth.id : 'anonymous'
		const order = {user_id: id, quantity: [], products: this.props.shoppingCart.shoppingCart}
		this.setState({currentuser: this.props.auth, order: order})
	}


	updateAddress(event){
		const order = this.state.order;
		order.deliveryAddress = event.target.value;
		this.setState({order: order})
	}

	sendToPurchase(event){
		event.preventDefault();
		const emailToPass = event.target.email.value;
		const order = this.state.order;
		order.email = emailToPass;


		function getRandomIntInclusive(min, max) {
			  min = Math.ceil(min);
			  max = Math.floor(max);
			  return Math.floor(Math.random() * (max - min + 1)) + min;
		}


		if(!this.state.currentuser){
			order.user_id = getRandomIntInclusive(1,1000000)
		} 
		
		axios.post('/api/orders', this.state.order)
			.then((res) => {
				if(res === 'error'){this.setState({error: true})}
					else{
				order.orderNumber = res.data.orderNumber;
				this.setState({order:order})
				this.setState({goToConfirmation: true})
				this.props.purchase_func(this.state.order)

			}
		})
			
		// if(!this.state.currentuser){
		// 	order.orderNumber = crypto.randomBytes(5).toString('hex').toUpperCase();
		// 	order.user_id = getRandomIntInclusive(1,1000000)
		// 	this.setState({order: order})
		// 	axios.post('/api/sendmail', this.state.order)
		// 	this.setState({goToConfirmation: true})
		// 	this.props.purchase_func(this.state.order)

		// } else{	
		// 	// console.log(this.state.order)
		// 	axios.post('/api/orders', this.state.order)
		// 	.then((res) => {
		// 		if(res === 'error'){this.setState({error: true})}
		// 			else{
		// 		order.orderNumber = res.data.orderNumber;
		// 		this.setState({order:order})
		// 		this.setState({goToConfirmation: true})
		// 		this.props.purchase_func(this.state.order)

		// 	}
		// 	})
			
		// }
		// router.push('/confirmation')		
	}

	emailValidation(event){
		event.preventDefault();
		var validEmail = false;
	   	const email = event.target.value;
	    const atpos = email.indexOf("@");
	    const dotpos = email.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
	        this.setState({emailValid: false})
	    } else this.setState({emailValid: true})

	}

	render(){
	// console.log(this.state)
	return(
		<div className="container-fluid">
		{!this.state.goToConfirmation 
			?
		<div className="ShoppingCart_div" > 
			Welcome {this.props.auth ? this.props.auth.name : 'Unknown user'}
			<form className="checkout" onSubmit={event => this.sendToPurchase(event)}>
			  <div className="form-group">
			    <label >Address</label>
			    <input onChange={event => this.updateAddress(event)}type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
			  </div>
			  {this.props.auth 
			  	? 
				  	<div className="form-group">
				    <label>please enter your email</label>
				    <input onChange={event=>this.emailValidation(event)}name="email" type="text" className="form-control" id="formGroupExampleInput2" value={this.props.auth.email}/>


				    	 {
						   	!this.state.emailValid 
						   	? <div className="alert alert-danger" style={{marginTop:'5px'}}>
						  		<strong>Please enter a valid email!</strong> 
								</div> 
							: <button type="Submit" className='btn btn-primary'> Purchase </button> 
							}
				    </div>


			  	: <div className="form-group">
			    <label >please enter your email</label>
			    <input onChange={event=>this.emailValidation(event)}name="email" type="text" className="form-control" id="formGroupExampleInput2" />
			   {
			   	!this.state.emailValid 
			   	? <div className="alert alert-danger" style={{marginTop:'5px'}}>
			  		<strong>Please enter a valid email!</strong> 
					</div> 
				: <button type="Submit" className='btn btn-primary'> Purchase </button> 
				}
			  </div>
			}
			</form>

		</div>
		: <div>
		{!this.state.error 
			? <Confirmation orderFromPreviousPage={this.props}/>
			: <div className="alert alert-danger" style={{marginTop:'5px'}}>
				<strong>Sorry, one of your items is no longer available</strong> 
								</div>
		}

		</div>
		
	}
	</div>

	)

}
}


// this is the container
const mapStateToProps = (state) => {
  // console.log(state)
  return {
    shoppingCart: state.shoppingCart,
    auth: state.auth,
    order: state.order

};
};

const mapDispatchToProps = (dispatch) => {
  return ({
    purchase_func: function(ord) {
      dispatch(purchase(ord));
    }

  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);

