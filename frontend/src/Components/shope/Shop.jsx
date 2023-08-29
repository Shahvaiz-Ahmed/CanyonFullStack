import React from 'react';
import Sleft from "./ShopLeft.jsx"
import Sright from "./ShopRight.jsx";
import Drawer  from './Drawer.jsx';
import { useContext } from 'react';
import './Shop.css'
import Table from './ItemDetails.jsx';
import { UserContext } from '../../../../../../Downloads/Canyon_Full_Stack/canyoncomponents/src/UserContext.jsx';
import  { useEffect, useState } from 'react';
// import zIndex from '@mui/material/styles/zIndex';

const Shope = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const {isdraweropen,setisdraweropen} = useContext(UserContext);
const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call it initially

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  
 
 
  

  return (
    
    <div className="row" style={{height:"100%"}} xs={12} md={8} lg={4} >
      <div >
        {isMobileView ? (
        
          <>
            {isdraweropen ? <Drawer/> : null}
          </>
        ) : (
        
          <Sleft  />
        )}
      </div>
      {isMobileView ? (
        
        <>
          {isdraweropen ? <div style={{"position":"absolute","zIndex":"1","top":"125px","left":"0"}}>
      <Sright   />

      </div> :<><div style={{"width":"100vh"}}><Sright/></div></>}
        </>
      ) : (
      
        <Sright />
      )} 
     
    </div>
  );
} 
export default Shope