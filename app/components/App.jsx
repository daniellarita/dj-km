import React from 'react'
import Products from './Products';
import NavBarContainer from '../containers/NavBarContainer';
import Login from './Login';

const App = (props)=>{
  return(
    <div>
      <NavBarContainer />
      <Products />
    </div>
  );
}

export default App;
