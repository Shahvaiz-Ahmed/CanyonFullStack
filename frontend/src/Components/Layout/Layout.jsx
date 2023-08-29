import React from 'react'
import Header from '../Header/Header.jsx'
import Footer from '../Footer/Footer.jsx'
const Layout = ({children}) => {
    // const {name} = useContext(UserContext)
    return (
        <div xs={12} md={8} lg={4}>
            
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout