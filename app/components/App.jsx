import React from 'react'
import Products from './Products';
import NavBarContainer from '../containers/NavBarContainer';
import SearchFilter from './SearchFilter';

const App = (props)=>{
  return(
    <div>
      <NavBarContainer />
      <SearchFilter />
      <Products />
    </div>
  );
}

export default App;
