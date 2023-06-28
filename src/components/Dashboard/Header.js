import React from 'react';

import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated }) => {
  return (
    <header>
      <h1>TEAM MEMBERS</h1>
      <div style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={() => setIsAdding(true)}>Add Member</button>
        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
     {/* <div style ={{marginTop: '30px', marginBottom: '18px'}}>
     <h1>Filter</h1>
        <button onClick={() => setIsAdding(true)}>Company</button>
        <button onClick={() => setIsAdding(true)}>Status</button>
     </div> */}

    </header>
  );
};

export default Header;
