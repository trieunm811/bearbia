import React, { useState } from "react";
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
                <p style={{ width: "300px", display: "flex", alignItems: "center" }}><img src={urlimgsp} style={{ marginRight: "20px" }} />{Tensp}</p>
                <p style={{ width: "35px" }} >{Gia}</p>
                <div className="productsdetail-Soluong">
                    <p onClick={qty<=1 ? null: removeOne} style={{cursor:"pointer"}}>-</p>
                    <input value={qty} name="soluong" style={{ backgroundColor: "#338ec9", height: "30px", border: 'none', width: "30px", textAlign: "center", borderRadius: "5px", color: "white" }} />
                    <p onClick={addOne} style={{ cursor: "pointer" }}>+</p>
                </div>
                <p style={{marginLeft:"-30px"}}>{qty * Gia}</p>
                <button onClick={deleteOne}>Xóa</button>
            </div>
            <hr />
        </div>
    );
}
export default CartItem;
