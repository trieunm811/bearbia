import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
function Leftadmin() {
    return (
        <div className="admin-left">
            <div className="brand-admin">
                <Link to={"/"} ><img src={Logo} alt='logo_bearbeer' /></Link>
                <p>Bearbia</p>
            </div>
            <div className="admin-menu">
                <Link to={"/admin_addsp"} style={{textDecoration:"none"}}><p>Quản lý sản phẩm</p></Link>
            </div>
        </div>)
}

export default Leftadmin