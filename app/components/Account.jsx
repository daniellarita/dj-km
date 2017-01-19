import React from 'react';
import axios from 'axios';
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
        .then(reviews => {
          console.log(reviews)
          // reviews.data
        })
        .then(reviews => {
          this.setState({reviews: reviews})
        })

        console.log(this.state.reviews);
    }

    render(){
      const user = this.props.user;
      console.log("props in account",this.props)
      return(
        <div>
          <div className="col-md-8">
            <h1>{`${user.name}'s Account`}</h1>
            <label>Account Email</label><p>{user.email}</p>
          </div>
          <div className="col-md-4">
            <label>Your Reviews</label>
          </div>
        </div>
      );
    }
}

export default Account;
