import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Houses">Houses</NavLink>
          <NavLink to="/Game">Game</NavLink>
       </div>
    );
}
 
export default Navigation;