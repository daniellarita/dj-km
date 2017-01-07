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

    let djRender;           
    if(this.state.djArray.length!==0) {
         djRender =  this.state.djArray.map((dj,i) => {
                      return (
                        <div key={i}>
                          <h1>{dj.artistName}</h1>
                          <img src={dj.image}></img>
                        </div>
                      )
                    })
                  }

    return (
      <div>
        {
          djRender
        }
      </div>
    )
  }
}

export default Products;
