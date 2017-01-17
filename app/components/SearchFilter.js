import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.jsx'
import Promise from 'bluebird';
import axios from 'axios';
import { queryInfo } from '../reducers/searchfilter';

class SearchFilter extends Component {
	constructor(){
		super();
		this.state = {
      name: "",
      options: [],
      min: 0,
      max: 0,
      location: "",
			country: false,
			rap: false,
			techno: false,
			rating: "",
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

		var searchfilterinfo = {
			name: this.state.name,
			min: this.state.min,
			max: this.state.max,
			location: this.state.location,
			rating: this.state.rating,
			genres: genres
		}

		this.props.handleSubmit(searchfilterinfo);

	}


	render(){
    const options = <div>
                          <h2> Location </h2>
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
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Search</label>
          <div className="col-sm-10">
            <input onChange={(event) => this.setState({name: event.target.value})} type="text" />
          </div>
        </div>

        <h2> Select your Genres </h2>
        <div className="form-check form-check-inline">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" onChange={(event) => this.setState({country: event.target.checked})} value="Country" /> Country
          </label>
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" onChange={(event) => this.setState({rap: event.target.checked})} value="Rap" /> Rap
          </label>
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" onChange={(event) => this.setState({techno: event.target.checked})} value="Techno" /> Techno
          </label>
        </div>

        {
          this.state.options.length
          ? options
          : null
        }

        <h2> Rating </h2>
        <div className="form-check form-check-inline">
						<select onChange={(event) => this.setState({rating: event.target.value})}>
							<option value={""}> {"Select Rating"} </option>
							{ arrOfRatings }
						</select>
        </div>

        <h2> Price </h2>

        <div className="form-group row">
            <input onChange={(event) => this.setState({min: parseInt(event.target.value)})} type="text" /> to
            <input onChange={(event) => this.setState({max: parseInt(event.target.value)})} type="text" />
        </div>

        <div className="form-group row">
          <div className="offset-sm-2 col-sm-10">
            <button onClick = {this.handleSubmit} className="btn btn-primary"> ♫ Find my DJ ♫ </button>
          </div>
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
    handleSubmit: function(searchfilter) {
    		dispatch(queryInfo(searchfilter))
    },
  });
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchFilter);
