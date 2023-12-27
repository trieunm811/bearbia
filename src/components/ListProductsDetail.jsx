import React, { useEffect, useState } from 'react'
import Header from './Header'
import Boxitem from './Boxitem'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
function ProductsDetails() {
  const [danhmucdata, setdanhmucdata] = useState([]);
  const [productdetail, setproductdetail] = useState([]);
  const [soluong, setsoluong] = useState([]);
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || [],
  );
  var flag= 0;
  const params = useParams();
  const [title, settitle] = useState("")
  var type = params.type;
  useEffect(() => {
    const fetchAllsptheodanhmuc = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/productsDetails/${type}`)
        setproductdetail(res.data)
        setsoluong(res.data.length)
        settitle(res.data[0].tenloaisp)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    const fetchAlldanhmuc = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/danhmuc`)
        setdanhmucdata(res.data)
      } catch (error) {
        console.log(error);
      }
    }

    fetchAlldanhmuc();
    fetchAllsptheodanhmuc();
  }, [danhmucdata, items])
  return (
    <div>
      <Header />
      <div className="products-container">
        <div className="products-navigation">
          <p>Bearbia</p>
        </div>
        <div className="products-title">
          <p>{title}</p>
        </div>
        <div className="products-content">
          <div className="products-List">
            <p style={{ fontSize: "23px", fontWeight: "bold" }}>Danh Mục</p>
            {danhmucdata.map((danhmuc, index) => {
              return (
                <div key={index} className='products-List-box' style={danhmuc.maloaisp == type ? { backgroundColor: "#338ec9" } : null}>
                  <Link to={`/${danhmuc.maloaisp}`}><p>{danhmuc.tenloaisp}</p></Link>
                </div>
              )
            })}
          </div>
          <div className="products-Showing">
            {productdetail.map((product, index) => {
              return (
                <div key={index}>
                  <Boxitem handleAddCart={() => {
                    if (items.length == 0) {
                      setItems([...items, { product, qty: 1 }])
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
                    type={product.maloaisp}
                    id={product.Masp}
                    img={product.urlimgsp}
                    detail={product.Thongtinchitiet}
                    name={product.Tensp}
                    price={(product.Gia).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')} />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetails