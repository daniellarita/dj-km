import React from 'react';
import axios from 'axios';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      djArray: []
    };
  }

  componentDidMount() {
    axios.get('/api/products')
    .then((result) => {
      this.setState({djArray: result.data});
    });
  }

  render() {
    let michael="HEY";
    console.log(this.state);



    return (
      <div>
        {
          if(this.state.djArray.length!==0) {
             michael = this.state.djArray.map((dj) => {
                      return (
                        <div>
                          <h1>{dj.artistName}</h1>
                          <img href={dj.image}></img>
                        </div>
                      )
                    })
                  }
        }
      </div>
    )
  }
}

export default Products;
