import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import CreateAccount from '../components/CreateAccount.jsx';
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
        user:{
          name:'',
          email:'',
          password:''
        }
      }
      this.handleSubmit=this.handleSubmit.bind(this);
      this.handleChange=this.handleChange.bind(this);
    }

    componentDidMount(){
      // let temp=this.state.newProduct;
      // temp.genre=this.props.genresList.genresList[0];
      // temp.location=this.props.locationList.locationList[0];
      // this.setState({
      //   newProduct:temp
      // })
    }

    handleSubmit(e) {
      e.preventDefault();
      console.log(this.state);
      axios.post('/api/users', this.state.user)
      .then((response) => {
        browserHistory.push("/");
      });
    }

    handleChange(e){
      let temp=this.state.user;
      if (e.target.name==="name") {
        temp.name=e.target.value;
        this.setState({
          user: temp
        })
      }

      if (e.target.name==="email") {
        temp.email=e.target.value;
        this.setState({
          user: temp
        })
      }

      if (e.target.name==="password") {
        temp.password=e.target.value;
        this.setState({
          user: temp
        })
      }
    }

    render(){
      return(
        <CreateAccount
          {...this.state}
          {...this.props}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
        />
      );
    }
  }
)
