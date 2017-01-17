<<<<<<< HEAD
import React from 'react';
import Products from './Products';
=======
import React from 'react'
import ProductsHomeContainer from '../containers/ProductsHomeContainer.jsx';
>>>>>>> 01f0c0f19e3fbb8dff6957986760f907e36dfce9
import NavBarContainer from '../containers/NavBarContainer';
import SearchFilter from './SearchFilter';
import { Link } from 'react-router';

<<<<<<< HEAD
const App = (props) => {
  return (
=======
const App = (props)=>{
    return(
>>>>>>> 01f0c0f19e3fbb8dff6957986760f907e36dfce9
    <div>
      <NavBarContainer/>
      <div style={{marginTop: '80px'}}>
        {
          props.children && React.cloneElement(props.children, props)
        }
      </div>
    </div>
  );
};

export default App;
