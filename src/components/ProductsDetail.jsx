import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import Boxitem from './Boxitem';
import Salonpas from '../assets/salonpas.png'

function ProductsDetail() {
    const [count, setcount] = useState(1);
    const [productinfo, setproductinfo] = useState([]);
    const params = useParams();
    var id = params.id;
    function handleDecrease(){
        setcount(count-1);
        if(count < 2){
            setcount(1);
        }
    }
    function handleIncrease(){
        setcount(count+1);
    }
    useEffect(() => {
      const fetchproductdetail = async () => {
        try {
          const res = await axios.get(`http://localhost:8081/${id}`)
          setproductinfo(res.data)
          console.log(res);
        } catch (error){
          console.log(error);
        }
      }
      fetchproductdetail();
    },[productinfo,id])
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  return (
    <>
    <Header />
    <div className='productsdetail-container'>
        <div className="products-navigation">
          <p>Bearbia</p>
        </div>
        {productinfo.map((product,index) => {
            return(
            <div className="productsdetail-showing" key={index}>
                <div className="productsdetail-img">
                    <img src={product.urlimgsp} alt="img-sp" />
                </div>
                <div className="productsdetail-info">
                    <p>{product.Tensp}</p>
                    <p>Giá: {product.Gia}</p>
                    <div className="productsdetail-Soluong">
                        <p onClick={handleDecrease} style={{cursor:"pointer"}}>-</p>
                        <p style={{backgroundColor:"#338ec9",padding:"0px 10px",borderRadius:"5px",color:"white"}}>{count}</p>
                        <p onClick={handleIncrease} style={{cursor:"pointer"}}>+</p>
                    </div>
                    <div className="productsdetail-introduce">
                        {product.Thongtinchitiet}
                    </div>
                    <button className='productsdetail-btnThem'>Thêm vào giỏ hàng</button>
                </div>
            </div>
            )
            })}
    </div>
    <div className="content-DetailsListDM">
        <p style={{marginTop: 0, fontSize: "24px", fontWeight:"bold",marginBottom:"50px",textAlign:"left"}}>Sản phẩm thịnh hành</p>
          <Carousel 
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            keyBoardControl={true}
            containerClass='content-carousel'
            itemClass='content-carousel-item'>
              <Boxitem link= "https://www.facebook.com/" img = {Salonpas} name= "Salonpas (1 hộp x 10 gói)" price = "100.000đ/1 hộp" />
              <Boxitem link= "https://www.facebook.com/Bearbia02" img = {Salonpas} name= "Salonpas (1 hộp x 10 gói)" price = "100.000đ/1 hộp" />
              <Boxitem img = {Salonpas} name= "Salonpas (1 hộp x 10 gói)" price = "100.000đ/1 hộp" />
              <Boxitem img = {Salonpas} name= "Salonpas (1 hộp x 10 gói)" price = "100.000đ/1 hộp" />
              <Boxitem img = {Salonpas} name= "Salonpas (1 hộp x 10 gói)" price = "100.000đ/1 hộp" />
              <Boxitem img = {Salonpas} name= "Salonpas (1 hộp x 10 gói)" price = "100.000đ/1 hộp" />
              <Boxitem img = {Salonpas} name= "Salonpas (1 hộp x 10 gói)" price = "100.000đ/1 hộp" />
              <Boxitem img = {Salonpas} name= "Salonpas (1 hộp x 10 gói)" price = "100.000đ/1 hộp" />
              <Boxitem img = {Salonpas} name= "Salonpas (1 hộp x 10 gói)" price = "100.000đ/1 hộp" />
              <Boxitem img = {Salonpas} name= "Salonpas (1 hộp x 10 gói)" price = "100.000đ/1 hộp" />
          </Carousel>
      </div>
    </>
  )
}

export default ProductsDetail