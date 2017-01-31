import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.jsx'
import Promise from 'bluebird';
import axios from 'axios';
import { queryInfo } from '../reducers/searchfilter';
import { setProductsOnBrowser } from '../reducers/productsHome';

class SearchFilter extends Component {
	constructor(){
		super();
		this.state = {
      artistName: -1,
      options: [],
      min: -1,
      max: -1,
      location: -1,
			country: false,
			rap: false,
			techno: false,
			rating: -1
		}

		this.handleSubmit = this.handleSubmit.bind(this);

	}

	componentDidMount(){

    axios.get('/api/products/all/locations')
    .then(locations => locations.data)
    .then(locations => {
      this.setState({options: locations})
      })
  }

	handleSubmit(event){
		event.preventDefault();

		var genres = [];
		if (this.state.country) genres.push("country");
		if (this.state.rap)	genres.push("rap");
		if (this.state.techno) genres.push("techno");
    if (genres && genres.length ===0) genres=-1;

		var searchfilterinfo = {
			artistName: this.state.artistName,
			min: this.state.min,
			max: this.state.max,
			location: this.state.location,
			rating: this.state.rating,
			genres: genres
		}

		this.props.handleSubmit(searchfilterinfo);

	}


	render(){
    const options = <div className="">
                          <select onChange={(event) => this.setState({location: event.target.value})}>
													<option value={""}> {"Select Location"} </option>
                            {this.state.options.length && this.state.options.map((location, index) => {
                               return (<option key={index} value={location.DISTINCT}> {location.DISTINCT} </option>)
                            })}
                          </select>
                    </div>


		const arrOfRatings = [];
		for (var i = 0; i < 5; i++) {
			arrOfRatings.push(<option key={i} value={i + 1}> {i+ 1} </option>);
		}

	return(
    <div className="container">
			<div className="col-md-3">
				<label>DJ Name</label>
				<input onChange={(event) => this.setState({artistName: event.target.value})} placeholder="Enter DJ Name" type="text" />
			</div>

			<div className="col-md-3">
				<div className="col-md-12">
					{
						this.state.options.length
						?
						options
						:
						null
					}
				</div>

				<div className="col-md-12 form-check form-check-inline">
					<select onChange={(event) => this.setState({rating: event.target.value})}>
						<option value={""}> {"Select Rating"} </option>
						{ arrOfRatings }
					</select>
				</div>
			</div>



			<div className="col-md-3">
				<div className="col-md-12 form-check">
					<input className="form-check-input" type="checkbox" onChange={(event) => this.setState({country: event.target.checked})} value="Country" />
					<label>Country</label>
					<br></br>
					<input className="form-check-input" type="checkbox" onChange={(event) => this.setState({rap: event.target.checked})} value="Rap" />
					<label>Rap</label>
					<br></br>
					<input className="form-check-input" type="checkbox" onChange={(event) => this.setState({techno: event.target.checked})} value="Techno" />
					<label>Techno</label>
				</div>
			</div>

			<div className="col-md-3">
				<label className="col-md-12">Price Range</label>
				<input className="col-md-4" onChange={(event) => this.setState({min: parseInt(event.target.value)})} type="text" />
				<input className="col-md-4" onChange={(event) => this.setState({max: parseInt(event.target.value)})} type="text" />
			</div>

			<div className="col-md-12">
				<button onClick = {this.handleSubmit} className="btn btn-primary"> ♫ Find my DJ ♫ </button>
			</div>

    </div>

	)

}
}


// this is the container
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return ({
    handleSubmit: function(queryInfo){
      var queryString='/?';
      for (var key in queryInfo){
        if (queryInfo[key] !== -1) {
          queryString+=(key+'='+queryInfo[key]+'&');
        }
      }
      queryString=queryString.slice(0,-1);
      axios.get(`/api/products/search/filter${queryString}`)
        .then(filteredProducts =>{
          dispatch(setProductsOnBrowser(filteredProducts.data));
        })
    }
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilter);
