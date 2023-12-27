import React, { useEffect, useState } from 'react'
import Banner from '../assets/bannerBearbia.png'
import IconFB from '../assets/iconFB.png'
import IconZL from '../assets/iconZalo.png'
import IconLZD from '../assets/iconLZD.png'
import IconSP from '../assets/iconSP.png'
import ContentItem from './ContentItem'
import Boxitem from './Boxitem'
import axios from 'axios'
import BoxitemHome from './BoxitemHome'
function Content() {
  const [danhmucdata, setdanhmucdata] = useState([]);
  const [productdetail, setproductdetail] = useState([]);
  const [masp, setmasp] = useState("");
  useEffect(() => {
    const fetchAlldanhmuc = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API}/danhmuc`)
        setdanhmucdata(res.data)
        for (let index = 0; index < res.data.length; index++) {
          setmasp(res.data[index].maloaisp);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAlldanhmuc();
  }, [danhmucdata])
  return (
    <div className='content-Container'>
      <div className="content-Banner">
        <div className="content-Banner-Box">
          <div className="content-Banner-img">
            <img src={Banner} alt="Banner_shop" />
          </div>
          <div className="content-Banner-contact">
            <p style={{ fontSize: "25px", fontWeight: "bold" }}>BearBia</p>
            <p style={{ marginTop: "-15px" }}>Chuyên cung cấp thực phẩm chức năng và vật dụng y tế, cửa hàng của chúng tôi đảm bảo sức khỏe và sự chăm sóc tốt nhất cho bạn và gia đình</p>
            <a href="https://www.facebook.com/Bearbia02"><img src={IconFB} alt="icon-Fb" /></a>
            <a href="https://www.facebook.com/Bearbia02"><img src={IconZL} alt="icon-Fb" /></a>
            <a href="https://www.facebook.com/Bearbia02"><img src={IconLZD} alt="icon-Fb" /></a>
            <a href="https://www.facebook.com/Bearbia02"><img src={IconSP} alt="icon-Fb" /></a>
          </div>
        </div>
      </div>
      <div className="content-box">
        <p style={{ marginTop: 0, fontSize: "24px", fontWeight: "bold", marginBottom: "50px" }}>Danh mục sản phẩm</p>
        <div className='content-ListDM'>
          {danhmucdata.map(danhmuc => {
            return (
              <>
                <ContentItem type={danhmuc.maloaisp} img={danhmuc.urlimgloaisp} name={danhmuc.tenloaisp} />
              </>
            )
          })}
        </div>
      </div>
      {danhmucdata.map((danhmuc, index) => {
        return (
          <div className="content-DetailsListDM">
            <p style={{ marginTop: 0, fontSize: "24px", fontWeight: "bold", marginBottom: "50px", textAlign: "left" }}>{danhmuc.tenloaisp}</p>
            <BoxitemHome masp={danhmuc.maloaisp} />
          </div>
        )
      })}
    </div>
  )
}

export default Content
