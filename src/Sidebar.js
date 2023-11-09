import React from "react";
import "./Sidebar.css";
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  console.log(playlists);

  return (
    <div className="sidebar">
      <div className="option">
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <hr />
      </div>
      <SidebarOption className='option' Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      
      {playlists?.items?.map((playlist) => (
          <div>
             <SidebarOption title={playlist.name} image={playlist.images[0]} url={playlist.href.split("/").pop()} />
          </div>
          
        )) }
    </div>
  );
}

export default Sidebar;
