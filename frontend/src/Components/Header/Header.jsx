import './Header.css'
import NavBar from './Navbar.jsx';
import SideMenu from './SideMenu.jsx';
import { UserContext  } from '../../../../../../Downloads/Canyon_Full_Stack/canyoncomponents/src/UserContext.jsx';
import React, { useContext } from 'react'

function Header() {

  const {sideMenuBar, setsideMenuBar} = useContext(UserContext)

  return (
    <div className="header">
       <NavBar/>
       {
        sideMenuBar === true ? <SideMenu/> :<></>
       }
      </div>
  )
}

export default Header