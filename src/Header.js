import React from "react";
import "./Header.css";
import { useDataLayerValue } from "./DataLayer";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useEffect } from "react";

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0].url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
