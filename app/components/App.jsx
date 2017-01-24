
import React from 'react';

import ProductsHomeContainer from '../containers/ProductsHomeContainer.jsx';

import NavBarContainer from '../containers/NavBarContainer';
import { Link } from 'react-router';

const App = (props) => {
  return (

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
