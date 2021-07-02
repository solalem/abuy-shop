import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import { SidebarData } from "./sidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sidebar-nav" sidebar={sidebar}>
          <div className="sidebar-wrap">
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
