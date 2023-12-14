import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import Login from './Login'
import CartItem from './CartItems';
function Cart() {
  const [auth, setAuth] = useState(false);
  const [items, setitems] = useState(JSON.parse(localStorage.getItem('items')) || [])
  const [qty, setqty] = useState(1);
  useEffect(() => {
    const checktoken = async () => {
      try {
        const res = await axios.get('http://localhost:8081/auth')
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
    localStorage.setItem("items",JSON.stringify(items))
    checktoken();
  }, [items])
  const updateQty = (id, newQty) => {
    const newItems = items.map((item) => {
      if (item.product.Masp === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setitems(newItems)
  };
  const deleteItem = (id) => {
    setitems(Prev => { 
      return Prev.filter((item) =>
      {
          return item.product.Masp !== id
      })
  })
  }
  const total = items
  .reduce((total, item) => total + item.qty * item.product.Gia, 0)
  .toFixed(3);
  return (
    auth ?
      <>
        <Header />
        <div className="cart-container">
          <div className="cart-showing">
            <p>Giỏ hàng</p>
            <div className="cart-product">
              <div className="cart-menu-product">
                <p style={{ width: "300px" }}>Sản phẩm</p>
                <p>Đơn giá</p>
                <p>Số lượng</p>
                <p>Thành tiền</p>
              </div >
              <hr />
              {items.map((item) => {
                  return (
                    <CartItem key={item.id} {...item.product} qty={item.qty} updateQty={updateQty} deleteItem={deleteItem}/>
                  )
              })}
            </div>
          </div>
          <div className="cart-price">
            <p>Tổng tiền</p>
            <p>Total: {total}</p>
          </div>
        </div>
      </>
      :
      <Login />
  )
}

export default Cart