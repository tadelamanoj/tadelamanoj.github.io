import * as React from 'react';
import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useState,
    useEffect 
  } from 'react';
import './menu.css';



function BasicMenu(){
  const [menu,setMenu]=useState(false)
  const [rend,setRend]=useState(null)
  function menuOptions(){
    return(
      <div className='optionbutton'  >
          <Button onClick={handleclick}><Link className='options'  to="/home">Profile</Link></Button>
          <Button onClick={handleclick}><Link className='options'  to="/details">About</Link></Button>
          <Button onClick={handleclick}><Link className='options'  to="/work">Work</Link></Button>
          <Button onClick={handleclick}><Link className='options'  to="/contact">Contact</Link></Button>
      </div>
    )
  }
  function handleclick(){
      setMenu(!menu)
      setRend(menuOptions)
    
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>{setRend(menuOptions)},[menu])
  return(
    <div>
      {menu?'' : <Button onClick={handleclick}><MenuIcon className='hamburg' sx={{ fontSize: 40 }}/></Button>}
      {menu ? rend :''}
    </div>
  )
}

export default BasicMenu