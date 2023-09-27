import React from 'react'
import { Box, Button } from '@mui/material'
import './Styles.css'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <section style={{ width: "100%", height: "70px", backgroundColor: "#182e49" }}>
      <Box sx={{width: "100%", height: "70px", display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4, }}>
        <Box sx={{ display:'flex', alignItems:'center', gap:4 }}>
          <img src="../../public/PNG/logo.png" alt="Logo" style={{ scale: '0.7', cursor: 'pointer' }} />
          <input type="text" placeholder='Seacr...' className='searchInput' />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2 }}>
          <Button variant='contained' sx={{
            width: "120px", fontSize: "12px", height: '32px', backgroundColor: '#F4976C',
            '&:hover': { backgroundColor: '#F4976C' },
          }}>
            Get a Quote
          </Button>
          <Button variant='contained' sx={{
            width: "120px", fontSize: "12px", height: '32px', backgroundColor: '#F4976C',
            '&:hover': { backgroundColor: '#F4976C' },
          }}>
            Login
          </Button>
          <Link  onClick={()=> window.location.load('/addtocart')} to={'/addtocart'} >
          <Badge badgeContent={4} color="error" >
            <ShoppingCartIcon sx={{ color: "#fff" }}  />
          </Badge>
          </Link>
        </Box>
      </Box>
    </section>
  )
}

export default Header