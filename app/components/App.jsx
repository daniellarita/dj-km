import React from 'react'
import Products from './Products';
import NavBar from './NavBar';
import Login from './Login';

const App = (props)=>{
  return(
    <div>
      <NavBar />
      <Login />
      <Products />
    </div>
  );
}

export default App;
