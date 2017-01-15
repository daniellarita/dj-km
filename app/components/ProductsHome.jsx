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
          prod.products && prod.products.length>0 && prod.products.map((curr, i) => {
            return(
              <div>
              <div className="well well-sm">
                <strong>Category Title</strong>
                <div className="btn-group">
                  <a href="#" id="list" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-th-list">
                  </span>List</a> <a href="#" id="grid" className="btn btn-default btn-sm"><span className="glyphicon glyphicon-th"></span>Grid</a>
                </div>
              </div>
              <div key={i}>
                <h4>
                  <Link
                    onClick={()=>this.props.selectProduct(curr)}
                    to={`/products/${curr.id}`}
                  >
                  {curr.artistName}
                  </Link>



                </h4>
              </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default ProductsHome;
