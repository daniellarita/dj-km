import React from 'react';
import axios from 'axios';

class CreateProduct extends React.Component{
  constructor(){
    super();
  }

  render() {
    return(
      <div>
      <form onSubmit={(event) => this.props.submit(event)}>

        <div className="form-group">
          <label>Artist Name</label>
          <input type="text" className="form-control" placeholder="DJ Money"/>
        </div>

        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Genre</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Location</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Audio Sample</label>
          <input type="text" className="form-control" />
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input type="text" className="form-control" />
        </div>


        <button className="btn btn-primary" type="submit">SUBMIT</button>
        <button className="btn btn-reset" type="reset">RESET</button>

    </form>
  </div>
    );
  }
}

export default CreateProduct;
