import React from 'react';

class Account extends React.Component {
    render(){
      console.log("props in account",this.props)
      return(
        <div>Your Account</div>
      );
    }
}

export default Account;
