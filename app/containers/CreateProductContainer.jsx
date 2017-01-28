import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateProduct from '../components/CreateProduct.jsx';
import {postProduct} from '../reducers/createProduct.jsx';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postProduct: function() {
      dispatch(postProduct(newProduct));
    }

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  class extends React.Component{
    constructor(){
      super();
      this.state={
        newProduct:{
          artistName:'',
          description:'',
          email:'',
          price:0,
          image:'',
          genre:'',
          location:'',
          audio:'',
          quantity:0
        }
      }
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChange=this.handleChange.bind(this);
    }

    handleSubmit(e){
      e.preventDefault();
    }

    handleChange(e){
      let temp=this.state.newProduct;

      if (e.target.name==="artistName") {
        temp.artistName=e.target.value;
        this.setState({
          newProduct: temp
        })
      }

      if (e.target.name==="description") {
        temp.description=e.target.value;
        this.setState({
          newProduct: temp
        })
      }

      if (e.target.name==="email") {
        temp.email=e.target.value;
        this.setState({
          newProduct: temp
        })
      }

      if (e.target.name==="price") {
        temp.price=e.target.value;
        this.setState({
          newProduct: temp
        })
      }

      if (e.target.name==="image") {
        temp.image=e.target.value;
        this.setState({
          newProduct: temp
        })
      }

      if (e.target.name==="genre") {
        temp.genre=e.target.value;
        this.setState({
          newProduct: temp
        })
      }

      if (e.target.name==="location") {
        temp.location=e.target.value;
        this.setState({
          newProduct: temp
        })
      }

      if (e.target.name==="audio") {
        temp.audio=e.target.value;
        this.setState({
          newProduct: temp
        })
      }

      if (e.target.name==="quantity") {
        temp.quantity=e.target.value;
        this.setState({
          newProduct: temp
        })
      }
    }

    render(){
      return(
        <CreateProduct
          {...this.state}
          {...this.props}
          submit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      );
    }
  }
)

