import React, { useEffect, useState } from 'react'
import Header from './Header'
import Boxitem from './Boxitem'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom';
function ProductsDetails() {
  const [danhmucdata,setdanhmucdata] = useState([]);
  const [productdetail,setproductdetail] = useState([]);
  const [items, setItems] = useState(
      JSON.parse(localStorage.getItem("items")) || [],
  );
  const params = useParams();
  const [title, settitle] = useState("")
  const qty = 1;
  var type = params.type;
  useEffect(() => {
    const fetchAllsptheodanhmuc = async () => {
      try {
        const res = await axios.get(`http://localhost:8081/productsDetails/${type}`)
        setproductdetail(res.data)
        settitle(res.data[0].tenloaisp)
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    const fetchAlldanhmuc = async () => {
      try {
        const res = await axios.get('http://localhost:8081/danhmuc')
        setdanhmucdata(res.data)
      } catch (error) {
        console.log(error);
      }
    }
    localStorage.setItem("items", JSON.stringify(items));
    fetchAlldanhmuc();
    fetchAllsptheodanhmuc();
  },[danhmucdata,productdetail,items])
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
            <p style={{fontSize:"23px",fontWeight:"bold"}}>Danh Mục</p>
            {danhmucdata.map((danhmuc,index) => {
            return(  
              <div key={index} className='products-List-box' style={ danhmuc.maloaisp == type ? {backgroundColor:"#338ec9"} : null}>
                <Link to={`/${danhmuc.maloaisp}`}><p>{danhmuc.tenloaisp}</p></Link>
              </div>
            )
            })}
          </div>
          <div className="products-Showing">
            {productdetail.map((product,index) => {
            return(
              <div key={index}>
                <Boxitem handleAddCart={() => {setItems([...items,{product,qty:1}])}} type={product.maloaisp} id={product.Masp} img={product.urlimgsp} detail={product.Thongtinchitiet} name={product.Tensp} price ={product.Gia}/>
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