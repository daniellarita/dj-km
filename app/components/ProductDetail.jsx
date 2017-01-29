import React from 'react';
import axios from 'axios';

class ProductDetail extends React.Component{
  constructor(){
    super();
    this.state = ({
      updatedProduct: {}
    })


        this.addToCart = this.addToCart.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);

  }

  componentDidMount(){
    this.setState({updatedProduct: this.props.selectedProduct});
  }

  updateQuantity(event){
    event.preventDefault();
    const temp = this.state.updatedProduct;
      temp.quantity = event.target.value;
      this.setState({updatedProduct: temp})
  }

  addToCart(event,obj){
    event.preventDefault();
    this.props.addToCart_func(obj)
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
          <select onChange={(event)=>this.updateQuantity(event)}>
            { quantityRender }
          </select>
          <button className="btn-primary" onClick={(event)=>this.addToCart(event,this.state.updatedProduct)}>Add to Cart</button>
        </div>
      </div>
    )
  }
}

export default ProductDetail;
