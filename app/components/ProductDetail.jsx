import React from 'react';
import axios from 'axios';

class ProductDetail extends React.Component{
  constructor(){
    super();
    this.state={
      selectedProduct: {}
    }

        this.addToCart = this.addToCart.bind(this);

  }

  componentDidMount(){
    axios.get('/api/products/2')
      .then((result) => {
        this.setState({
          selectedProduct:result.data
        })
        console.log(this.state);
      })
  }

addToCart(event,obj){
  event.preventDefault();
  this.props.addToCart_func(obj)
}


  getQuantityArray(){
    let q=this.state.selectedProduct.quantity;
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
          <h1>{this.state.selectedProduct.artistName}</h1>
          <p>{this.state.selectedProduct.description}</p>
          <img src={this.state.selectedProduct.giveImage}></img>
          <div>Audio Sample Placeholder</div>
        </div>
        <div className="col-md-4">
          <h4>Price</h4>
          <p>{`$${this.state.selectedProduct.price}`}</p>
          <h4>Genre</h4>
          <p>{this.state.selectedProduct.genre}</p>
          <h4>Location</h4>
          <p>{this.state.selectedProduct.location}</p>
          <h4>Quantity</h4>
          <select>
            { quantityRender }
          </select>
          <button className="btn-primary" onClick={(event)=>addToCart(event,)}>Add to Cart</button>
        </div>
      </div>
    )
  }
}

export default ProductDetail;
