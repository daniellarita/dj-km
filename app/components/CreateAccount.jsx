import React from 'react';
import axios from 'axios';

class CreateAccount extends React.Component{
  render() {
    return(
      <div>
      <form onSubmit={(event) => this.props.handleSubmit(event)}>

        <div className="form-group">
          <label>Name</label>
          <input type="text"
          value={this.props.user.name}
          name="name"
          onChange={(event) => this.props.handleChange(event)}
          className="form-control"/>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={this.props.user.email}
            onChange={(event) => this.props.handleChange(event)}
            className="form-control" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            name="password"
            value={this.props.user.password}
            onChange={(event) => this.props.handleChange(event)}
            />
        </div>
        
        <button className="btn btn-primary" type="submit">SUBMIT</button>
        <button className="btn btn-reset" type="reset">RESET</button>
    </form>
  </div>
    );
  }
}

export default CreateAccount;
