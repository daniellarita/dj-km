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
        <div className="well well-sm">
          <strong>Hire a DJ</strong>
        </div>
        <div className="row">
        {
          prod.products && prod.products.length>0 && prod.products.map((curr, i) => {
            return(
              <div key={i}>
                <div className="col-xs-4 col-lg-4">
                    <Link
                      onClick={()=>this.props.selectProduct(curr)}
                      to={`/products/${curr.id}`}
                      >
                      <h4>{curr.artistName}</h4>
                    </Link>
                    <div className="thumbnail">
                      <Link
                        onClick={()=>this.props.selectProduct(curr)}
                        to={`/products/${curr.id}`}
                        >
                        <img src={curr.image} />
                      </Link>
                      <div className="caption">
                        <h4>{curr.artistName}</h4>
                        <p>{curr.description}</p>
                        <div className="row">
                          <div className="col-xs-12 col-md-6">
                              <p>$ {curr.price}</p>
                          </div>
                          <div className="col-xs-12 col-md-6">
                              <a className="btn btn-success" href="">Add to cart</a>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
    );
  }
}

export default ProductsHome;
