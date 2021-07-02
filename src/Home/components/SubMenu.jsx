import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <NavLink className="sidebar-link" to={item.path}	onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <span className="sidebar-label">{item.title}</span>
        </div>
        <div className="m-2">
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </NavLink>

      {subnav &&
      item.subNav.map((item, index) => {
        return (
          <NavLink className="dropdown-link" to={item.path} key={index}>
            {item.icon}
            <span className="sidebar-label">{item.title}</span>
          </NavLink>
        );
      })}
    </>
  );
};

export default SubMenu;
