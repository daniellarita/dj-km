import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import Promise from 'bluebird';

class Account extends React.Component {

    constructor(){
      super();
      this.state={
        reviews:[]
      }
    }
    componentDidMount(){
      let userId=this.props.user.id;
      axios.get(`/api/reviews/users/${userId}`)
        .then(reviews => reviews.data)
        .then(reviews => {
          this.setState({reviews: reviews})
          })
    }

    render(){

      const user=this.props.user;
      console.log("REVIEWS LOC STATE", this.state.reviews)

      return(
        <div>
          <div className="col-md-8">
            <h1>{`${user.name}'s Account`}</h1>
            <label>Account Email</label><p>{user.email}</p>
          </div>

          <Link to="/addProduct">Add a DJ</Link>
          <div className="col-md-4">
            <label>Your Reviews</label>
            { this.state.reviews && this.state.reviews.length>1 && this.state.reviews.map((review, i)=>{
              return <div key={i}>{review.text}</div>
              })
            }
          </div>
        </div>
      );
    }
}

export default Account;
