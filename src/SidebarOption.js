import React from "react";
import "./SidebarOption.css";
function SidebarOption({ title, Icon, image, url }) {
  const clicked = () => {
    console.log({url});
  }
  return (
    <div className="sidebarOption">
        {Icon && <Icon className="sidebarOption-icon" />}
      {Icon ? <h4>{title}</h4> : <div>
         <img src={image} alt="" />
         <p onClick={clicked} >{title}</p></div> }
    </div>
  );
}

export default SidebarOption;

