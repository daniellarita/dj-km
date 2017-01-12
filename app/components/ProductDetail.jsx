import React from 'react';
import NavBarContainer from '../containers/NavBarContainer';

const ProductDetail = (props) =>{
  console.log("props in product detail!!", props)
  return(
    <div>
      <NavBarContainer />
      <p>Sample Product Detail Page</p>
    </div>
  )
}
export default ProductDetail;
