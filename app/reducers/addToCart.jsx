const mapDispatchToProps = (dispatch) => {
  return {
    addToCart_func: function(arr) {
      dispatch(addToCart(arr));
    }
}
 
};


export default connect(
  mapDispatchToProps
)(ProductTile);

this.addToCart = this.addToCart.bind(this);

addToCart(obj){
	this.props.addToCart_func(obj)
}