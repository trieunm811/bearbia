import React, { useState } from "react";
import Delete from "../assets/delete.png"
function CartItem({ Masp, Tensp, Gia,urlimgsp, updateQty, qty,deleteItem}) {
    const addOne = () => {
        updateQty(Masp, qty + 1);
    };
    const removeOne = () => {
        updateQty(Masp, qty - 1);
    };
    const deleteOne = () =>{
        deleteItem(Masp);
    }
    return (
        <div>
            <div className="cart-menu-product">
                <p style={{ width:"300px",display: "flex", alignItems: "center" }}><img src={urlimgsp} style={{marginRight: "20px" }} />{Tensp}</p>
                <p style={{ width: "35px" }} >{Gia.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}đ</p>
                <div className="productsdetail-Soluong">
                    <p onClick={removeOne} style={{cursor:"pointer"}}>-</p>
                    <input value={qty} name="soluong" style={{ backgroundColor: "#338ec9", height: "30px", border: 'none', width: "30px", textAlign: "center", borderRadius: "5px", color: "white" }} />
                    <p onClick={addOne} style={{ cursor: "pointer" }}>+</p>
                </div>
                <p style={{width:"30px",marginLeft:"-25px"}}>{(qty * Gia).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}đ</p>
                <img src={Delete} onClick={deleteOne} style={{width:"30px",height:"30px", cursor:"pointer"}}/>
            </div>
            <hr />
        </div>
    );
}
export default CartItem;
