import React from 'react';
import { Menu,MenuItem,Button } from '@mui/material';
import './NavBar.css'


function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return <div className='menu'>
  <Button
    id="basic-button"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
  >
    Dashboard
  </Button>
  <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
  >
    <MenuItem onClick={handleClose}><a href='/'>Home</a></MenuItem>
    <MenuItem onClick={handleClose}><a href='slider'>Sliders</a></MenuItem>
    <MenuItem onClick={handleClose}>Logout</MenuItem>
  </Menu>


  <Button
    id="basic-button2"
    aria-controls={open ? 'basic-menu' : undefined}
    aria-haspopup="true"
    aria-expanded={open ? 'true' : undefined}
    onClick={handleClick}
  >
    Dashboard2
  </Button>
  <Menu
    id="basic-menu"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button2',
    }}
  >
    <MenuItem onClick={handleClose}><a href='/'>Home</a></MenuItem>
    <MenuItem onClick={handleClose}><a href='/slider'>Sliders</a></MenuItem>
    <MenuItem onClick={handleClose}><a href='/tab'>Tab</a></MenuItem>
  </Menu>
</div>
}

export default NavBar;
