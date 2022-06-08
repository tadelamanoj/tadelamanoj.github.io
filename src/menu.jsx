import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import "./menu.css";
export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const resumeUrl="https://drive.google.com/file/d/1X_PD_AGrpF_JqXmwD_lpn9qM-BkXyyEP/view?usp=sharing"

  return (
    <div>
      <Button
        id="demo-positioned-"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <MenuIcon id='hamburg'  sx={{ fontSize: 40 , color:"white" }}/>
      </Button>
      <Menu
        id="demo-positioned-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        sx={{textAlign:"left",marginLeft:"0.5rem"}}
      >
        <li id='n'><Link onClick={handleClose} to="/">Profile</Link></li>
        <li id='n'><Link onClick={handleClose} to="/details">About</Link></li>
        <li id='n'><Link onClick={handleClose} to="/work">Work</Link></li>
        <li id='n'><Link onClick={handleClose} to="/contact">Contact</Link></li>
        <li id='n'><a onClick={handleClose} href={resumeUrl}><div className="header_option1">Resume</div></a></li>
      </Menu>
    </div>
  );
}
