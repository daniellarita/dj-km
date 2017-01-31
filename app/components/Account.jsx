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
      const userId= this.props.user && this.props.user.id;
      // if (userId){
        axios.get(`/api/reviews/users/${userId}`)
        .then(reviews => reviews.data)
        .then(reviews => {
          this.setState({reviews: reviews})
        })
      // }
    }

    render(){
      const user=this.props.user;
      console.log(this.state.reviews)

      return(
        <div>{
            !user
            ? <h1>Loading...</h1>
            :
              <div>
                  <div className="col-md-8">
                      <h1>{`${user.name}'s Account`}</h1>
                      <label>Account Email</label><p>{user.email}</p>
                      <Link to="/addProduct">List a DJ</Link>
                  </div>
                  <div className="col-md-4">
                    <label>Your Reviews</label>
                    { this.state.reviews.map((review, i)=>{
                      return (
                        <div>
                          <Link to={`/products/${review.product_id}`}
                            key={i}
                            onClick={()=>this.props.getProduct(review.product_id)}
                            >
                              {review.text}
                          </Link>
                        </div>
                        );
                      })
                    }
                  </div>
                </div>
          }</div>
      );
    }
  }


  //       return(
  //         <div>
  //           <div className="col-md-8">
  //             <h1>{`${user.name}'s Account`}</h1>
  //             <label>Account Email</label><p>{user.email}</p>
  //           </div>
  //
  //           <Link to="/addProduct">List a DJ</Link>
  //           <div className="col-md-4">
  //             <label>Your Reviews</label>
  //             { this.state.reviews.map((review, i)=>{
  //               return <div key={i}>{review.text}</div>
  //               })
  //             }
  //           </div>
  //         </div>
  //       );
  //   }
  // }


export default Account;
