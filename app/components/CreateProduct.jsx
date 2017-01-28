import React from 'react';
import axios from 'axios';

class CreateProduct extends React.Component{
  render() {
    this.props.locationList.locationList
    return(
      <div>
      <form onSubmit={(event) => this.props.handleSubmit(event)}>

        <div className="form-group">
          <label>Artist Name</label>
          <input type="text"
          value={this.props.newProduct.artistName}
          name="artistName"
          onChange={(event) => this.props.handleChange(event)}
          className="form-control" placeholder="DJ Money"/>
        </div>

        <div className="form-group">
          <label>Description</label>
          <input type="text"
          name="description"
          value={this.props.newProduct.description}
          onChange={(event) => this.props.handleChange(event)}
          className="form-control" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            name="email"
            type="text"
            value={this.props.newProduct.email}
            onChange={(event) => this.props.handleChange(event)}
            className="form-control" />
        </div>

        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            name="price"
            value={this.props.newProduct.price}
            onChange={(event) => this.props.handleChange(event)}
            />
        </div>

        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={this.props.newProduct.image}
            onChange={(event) => this.props.handleChange(event)}
          />
        </div>

        <div className="form-group">
          <label>Location</label>
          <select
            type="text"
            className="form-control"
            name="location"
            value={this.props.newProduct.location}
            onChange={(event) => this.props.handleChange(event)}
          >
            {
              this.props.locationList.locationList.map((location,i)=>{
                return <option key={i}>{location}</option>
              })
            }
          </select>
        </div>

        <div className="form-group">
          <label>Audio Sample</label>
          <input
            type="text"
            className="form-control"
            name="audio"
            value={this.props.newProduct.audio}
            onChange={(event) => this.props.handleChange(event)}
          />
        </div>

        <div className="form-group">
          <label>Genre</label>
          <select
            type="text"
            className="form-control"
            name="genre"
            value={this.props.newProduct.genre}
            onChange={(event) => this.props.handleChange(event)}
          >
            {
              this.props.genresList.genresList.map((genre,i)=>{
                return <option key={i}>{genre}</option>
              })
            }
          </select>
        </div>

        <div className="form-group">
          <label>Quantity</label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            value={this.props.newProduct.quantity}
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

export default CreateProduct;
