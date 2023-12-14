import React, { useEffect, useState } from 'react'
import Dau from '../assets/hinh sp/dầu/dauthaoduoc.jpg'
import Keo from '../assets/hinh sp/kẹo/keodeo.jpg'
import Tinhdau from '../assets/hinh sp/nhóm sp hỗ trợ/tinhdauthongdo.jpg'
import SPYte from '../assets/hinh sp/sản phẩm y tế/SP02.jpg'
import Siro from '../assets/hinh sp/siro/siro.jpg'
import Sui from '../assets/hinh sp/sủi/sui1.jpg'
import Vitamin from '../assets/hinh sp/vitamin/thachbomau.jpg'
import Banner from '../assets/bannerBearbia.png'
import IconFB from '../assets/iconFB.png'
import IconZL from '../assets/iconZalo.png'
import IconLZD from '../assets/iconLZD.png'
import IconSP from '../assets/iconSP.png'
import ContentItem from './ContentItem'
import Salonpas from '../assets/salonpas.png'
import Boxitem from './Boxitem'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios'
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
function Content() {
  const [danhmucdata,setdanhmucdata] = useState([]);
  useEffect(() => {
    const fetchAlldanhmuc = async () => {
      try {
        const res = await axios.get('http://localhost:8081/danhmuc')
        setdanhmucdata(res.data)
      } catch (error) {
        console.log(error);
      }
    } 
    fetchAlldanhmuc();
  },[danhmucdata])
  return (
    <div className='content-Container'>
      <div className="content-Banner">
        <div className="content-Banner-Box">
          <div className="content-Banner-img">
            <img src={Banner} alt="Banner_shop"/>
          </div>
          <div className="content-Banner-contact">
            <p style={{fontSize: "25px", fontWeight:"bold"}}>BearBia</p>
            <p style={{marginTop: "-15px"}}>Chuyên cung cấp thực phẩm chức năng và vật dụng y tế, cửa hàng của chúng tôi đảm bảo sức khỏe và sự chăm sóc tốt nhất cho bạn và gia đình</p>
            <a href="https://www.facebook.com/Bearbia02"><img src={IconFB} alt="icon-Fb" /></a>
            <a href="https://www.facebook.com/Bearbia02"><img src={IconZL} alt="icon-Fb" /></a>
            <a href="https://www.facebook.com/Bearbia02"><img src={IconLZD} alt="icon-Fb" /></a>
            <a href="https://www.facebook.com/Bearbia02"><img src={IconSP} alt="icon-Fb" /></a>
          </div>
        </div>
      </div>
      <div className="content-box">
        <p style={{marginTop: 0, fontSize: "24px", fontWeight:"bold",marginBottom:"50px"}}>Danh mục sản phẩm</p>
          <div className='content-ListDM'>
            {danhmucdata.map(danhmuc => {
              return(
                <>
                <ContentItem type={danhmuc.maloaisp} img= {danhmuc.urlimgloaisp} name= {danhmuc.tenloaisp}/>
                </>
              )
            })}
          </div>
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
    </div>
  )
}

export default Content
