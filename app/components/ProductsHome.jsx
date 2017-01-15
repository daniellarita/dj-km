import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

class ProductsHome extends React.Component {
  componentDidMount() {
    this.props.receiveProducts();
  }

  render() {
    let prod = this.props.products;

    return(
      <div>
        <h1>Welcome to DJKM!</h1>
        {
          prod.products && prod.products.length!==0 && prod.products.map((curr, i) => {
            return(
              <div key={i}>
                <h3><Link onClick={()=>this.props.selectProduct(curr)} to={`/products/${curr.id}`}>{curr.artistName}</Link></h3>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default ProductsHome;
