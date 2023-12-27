import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Login from './Login';
function Boxitem(props) {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(false);
  function handleClick(){
    navigate("/"+ props.type+ "/"+ props.id);
  }
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0) + str.slice(1,str.length).toLowerCase();
  };
  useEffect(() => {
    const checktoken = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/auth`)
        if (res.data.Status === "Success") {
          setAuth(true)
        }
        else {
          setAuth(false)
        }
      } catch (error) {
        console.log(error);
      }
    }
    checktoken();
  },[])
  return (
    <div className="content-boxItem-item">
        <div className="content-boxItem-img"  onClick={handleClick}>
          <img src={props.img} alt="salonpas"/>
        </div>
        <div className="content-boxItem-item-Info">
            <p style={{height: "50px"}}>{capitalizeFirstLetter(props.name)}</p>
            <p style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis", width:"100%"}}>{props.detail}</p>
            <p style={{color:"green",fontWeight:"bold"}}>Giá: {props.price}đ</p>
            <button onClick={ auth==true ? props.handleAddCart : ()=>{navigate("/login")} } style={{cursor:"pointer"}}>Thêm vào giỏ hàng</button>
        </div>
    </div>
  )
}

export default Boxitem