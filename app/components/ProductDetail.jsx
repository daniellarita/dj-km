import React from 'react';
import axios from 'axios';

class ProductDetail extends React.Component{
  constructor(){
    super();
    this.state={
      selectedProduct: {}
    }
  }

  componentDidMount(){
    // axios.get('/api/products/2')
    //   .then((result) => {
    //     this.setState({
    //       selectedProduct:result.data
    //     })
    //     console.log(this.state);
    //   })
  }

  getQuantityArray(){
    let q=this.props.selectedProduct.quantity;
    var qArray=[];
    for (let i=1;i<=q;i++){
      qArray.push(i)
    }
    return qArray;
  }

  render(){
    let quantity=this.getQuantityArray();
    console.log(this.props, "product props");

    let quantityRender;
    if(quantity.length!==0) {
         quantityRender =  quantity.map((q,i) => {
                      return (
                        <option key={i}>
                          {q}
                        </option>
                      )
                    })
                  }

    return(
      <div>
        <div className="col-md-8">
          <h1>{this.props.selectedProduct.artistName}</h1>
          <p>{this.props.selectedProduct.description}</p>
          <img src={this.props.selectedProduct.giveImage}></img>
          <div>Audio Sample Placeholder</div>
        </div>
        <div className="col-md-4">
          <h4>Price</h4>
          <p>{`$${this.props.selectedProduct.price}`}</p>
          <h4>Genre</h4>
          <p>{this.props.selectedProduct.genre}</p>
          <h4>Location</h4>
          <p>{this.props.selectedProduct.location}</p>
          <h4>Quantity</h4>
          <select>
            { quantityRender }
          </select>
          <button className="btn-primary">Add to Cart</button>
        </div>
      </div>
    )
  }
}

export default ProductDetail;
