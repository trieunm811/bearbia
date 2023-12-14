import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
function Boxitem(props) {
  const navigate = useNavigate();
  function handleClick(){
    navigate("/"+ props.type+ "/"+ props.id);
  }
  return (
    <div className="content-boxItem-item">
        <div className="content-boxItem-img"  onClick={handleClick}>
          <img src={props.img} alt="salonpas"/>
        </div>
        <div className="content-boxItem-item-Info">
            <p>{props.name}</p>
            <p style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis", width:"100%"}}>{props.detail}</p>
            <p style={{color:"green",fontWeight:"bold"}}>Giá: {props.price}đ</p>
            <button onClick={props.handleAddCart} style={{cursor:"pointer"}}>Thêm vào giỏ hàng</button>
        </div>
    </div>
  )
}

export default Boxitem