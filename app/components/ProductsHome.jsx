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
        <div id="products" class="row list-group">
        {
          prod.products && prod.products.length>0 && prod.products.map((curr, i) => {
            return(
              <div key={i}>

                <div className="item col-xs-4 col-lg-4">
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
                                <img className="group list-group-image" src={curr.image} alt="" />
                              </Link>
                                <div className="caption">
                                    <h4 className="group inner list-group-item-heading">{curr.artistName}</h4>
                                      <p className="group inner list-group-item-text">{curr.description}</p>
                                      <div className="row">
                                        <div className="col-xs-12 col-md-6">
                                            <p className="lead">$ {curr.price}</p>
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
