import React from 'react';
import Products from './Products';
import NavBarContainer from '../containers/NavBarContainer';
import SearchFilter from './SearchFilter';
import { Link } from 'react-router';

const App = (props) => {
  return (
    <div>
      <NavBarContainer />
      <SearchFilter />
      <Products />
      <Link to="/product">Click here for demo product detail page</Link>
    </div>
  );
};

export default App;
