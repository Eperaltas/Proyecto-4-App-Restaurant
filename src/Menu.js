import React from 'react';

function Menu(props) {
  return (
    <div className="container">
      <div className="subcontainer">
        <div className="logo">
          {props.title}
        </div>

        <div className="search">

        </div>

        <div className="actions">

        </div>
      </div>
    </div>
  );
}

export default Menu;