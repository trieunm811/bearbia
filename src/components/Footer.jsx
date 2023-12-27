import React from 'react'
import IconFB from '../assets/iconFB.png'
import IconZL from '../assets/iconZalo.png'
import IconLZD from '../assets/iconLZD.png'
import IconSP from '../assets/iconSP.png'
function Footer() {
  return (<>
    <hr style={{margin:"0 0 0 0", height:"15px",backgroundColor:"#0072bc"}}/>
    <footer className='footer'>
      <div className="col-1">
        <p className='footer-title'>Danh mục sản phẩm</p>
        <div className="col-1-item">
          <a href="#"><p>Dầu</p></a>
          <a href="#"><p>Kẹo</p></a>
          <a href="#"><p>Hỗ trợ sức khỏe</p></a>
          <a href="#"><p>Sản phẩm y tế</p></a>
          <a href="#"><p>Siro</p></a>
          <a href="#"><p>Sủi</p></a>
          <a href="#"><p>Vitamin</p></a>
        </div>
      </div>
      <div className="col-2">
        <p className='footer-title'>Thông tin liên hệ</p>
        <div className="col-2-item">
          <a href="#"><p style={{display:"flex",alignItems:"center",gap:"10px"}}><img src={IconFB} alt="icon-facebook"/>Facebook</p></a>
          <a href="#"><p style={{display:"flex",alignItems:"center",gap:"10px"}}><img src={IconZL} alt="icon-facebook"/>Zalo</p></a>
          <a href="#"><p style={{display:"flex",alignItems:"center",gap:"10px"}}><img src={IconSP} alt="icon-facebook"/>Shoppe</p></a>
          <a href="#"><p style={{display:"flex",alignItems:"center",gap:"10px"}}><img src={IconLZD} alt="icon-facebook"/>Lazada</p></a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer