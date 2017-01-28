import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import CreateProduct from '../components/CreateProduct.jsx';
// import {postProduct} from '../reducers/createProduct.jsx';
import axios from 'axios';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
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
          audioSample:'',
          quantity:0
        },
        genresList: ['ELECTRONIC', 'RAP', 'FUNK', 'HIP-HOP'],

      }
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChange=this.handleChange.bind(this);
    }

    // componentDidMount() {
    //   axios.get('/api/products')
    //   .then((response) => {
    //
    //       console.log(response.data);
    //       const genres = this.state.genresList;
    //
    //       response.data.forEach((dj) => {
    //         genres.indexOf(dj.genre)!==-1 ? null : genres.push(dj.genre);
    //       });
    //
    //       this.setState({
    //         genresList: genres
    //       });
    //
    //       console.log(this.state.genresList);
    //   });
    // }

    handleSubmit(e) {
      e.preventDefault();
      axios.post('/api/products', this.state.newProduct)
      .then((response) => {
        // console.log(response);
        browserHistory.push("/");
      });
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
        temp.audioSample=e.target.value;
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
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      );
    }
  }
)
