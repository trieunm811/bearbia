import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import Leftadmin from './Leftadmin'
import axios from 'axios';
import LoginAdmin from './Login_admin';
function Admin() {
    const [name, setName] = useState('');
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        const checktoken = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API}/auth-admin`)
                if (res.data.Status === "Success") {
                    console.log(res);
                    setAuth(true)
                    setName(res.data.name)
                }
                else {
                    setAuth(false)
                }
            } catch (error) {
                console.log(error);
            }
        }
        checktoken();
    }, [])
    function handleLogout() {
        axios.get(`${process.env.REACT_APP_API}/logout-admin`)
            .then(res => {
                window.location.reload();
            }).catch(err => console.log(err))
    }
    return (
        <>
            {
                auth == true ?
                    <div className='admin-container'>
                        <Leftadmin />
                        <div className="admin-right">
                            <p>{name}</p>
                            <button onClick={handleLogout}>Đăng xuất</button>
                        </div>
                    </div>
                    :
                    <LoginAdmin />
            }

        </>
    )
}
export default Admin