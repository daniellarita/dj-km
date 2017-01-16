import React from 'react'
import ProductsHomeContainer from '../containers/ProductsHomeContainer.jsx';
import NavBarContainer from '../containers/NavBarContainer';
import SearchFilter from './SearchFilter';
import { Link } from 'react-router';

const App = (props)=>{
    return(
    <div>
      <NavBarContainer />
        {
            props.children && React.cloneElement(props.children, props)
        }
    </div>
  );
}

export default App;
