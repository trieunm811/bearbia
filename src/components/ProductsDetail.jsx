import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import Boxitem from './Boxitem';
import Salonpas from '../assets/salonpas.png'
import BoxitemHome from './BoxitemHome';

function ProductsDetail() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || [],
  );
  const [count, setcount] = useState(1);
  const [productinfo, setproductinfo] = useState([]);
  const params = useParams();
  var id = params.id;
  var type = params.type;
  var flag = 0;
  function handleDecrease() {
    setcount(count - 1);
    if (count < 2) {
      setcount(1);
    }
  }
  function handleIncrease() {
    setcount(count + 1);
  }
  useEffect(() => {
    const fetchproductdetail = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/${id}`)
        setproductinfo(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    localStorage.setItem("items", JSON.stringify(items));
    fetchproductdetail();
  }, [items])
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0) + str.slice(1, str.length).toLowerCase();
  };
  return (
    <>
      <Header />
      <div className='productsdetail-container'>
        <div className="products-navigation">
          <p>Bearbia</p>
        </div>
        {productinfo.map((product, index) => {
          return (
            <div className="productsdetail-showing" key={index}>
              <div className="productsdetail-img">
                <img src={product.urlimgsp} alt="img-sp" />
              </div>
              <div className="productsdetail-info">
                <p style={{ fontSize: "25px", fontWeight: "bold", width: "420px" }}>{capitalizeFirstLetter(product.Tensp)}</p>
                <p>Giá: {product.Gia.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}đ</p>
                <div className="productsdetail-Soluong-1">
                  <p onClick={handleDecrease} style={{ cursor: "pointer" }}>-</p>
                  <input value={count} name="soluong" style={{ backgroundColor: "#338ec9", height: "30px", border: 'none', width: "30px", textAlign: "center", borderRadius: "5px", color: "white" }} />
                  <p onClick={handleIncrease} style={{ cursor: "pointer" }}>+</p>
                </div>
                <div className="productsdetail-introduce">
                  {product.Thongtinchitiet}
                </div>
                <button
                  className='productsdetail-btnThem'
                  onClick={() => {
                    if (items.length == 0) {
                      setItems([...items, { product, qty: count }])
                      localStorage.setItem("items", JSON.stringify([...items, { product, qty: 1 }]));
                      alert("Thêm thành công");
                    } else {
                      for (let i = 0; i < items.length; i++) {
                        if (items[i].product.Masp == product.Masp) {
                          alert("sản phẩm đã tồn tại trong giỏ hàng");
                          return;
                        } else {
                          flag = 1;
                        }
                      }
                    }
                    if(flag === 1){
                      setItems([...items, { product, qty: 1 }])
                      localStorage.setItem("items", JSON.stringify([...items, { product, qty: 1 }]));
                      alert("Thêm thành công1");
                    }
                  }}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          )
        })}
      </div>
      <div className="content-DetailsListDM">
        <p style={{ marginTop: 0, fontSize: "24px", fontWeight: "bold", marginBottom: "50px", textAlign: "left" }}>Sản phẩm liên quan</p>
        <BoxitemHome masp= {type} />
      </div>
    </>

    
  )
}

export default ProductsDetail