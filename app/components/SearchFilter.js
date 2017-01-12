import React from 'react';

const SearchFilter=() => {
  return(
    <div>
      <form className="navbar-form navbar-left" role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </form>
    </div>
  );
}

export default SearchFilter;
