import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'
import axios from 'axios';
function Header() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/cart")
  }
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  axios.defaults.withCredentials = true;
  useEffect(() => {
    const checktoken = async () => {  
      try {
        const res = await axios.get('http://localhost:8081/auth')
        if(res.data.Status === "Success"){
          console.log(res);
          setAuth(true)
          setName(res.data.name)
        }
        else{
          setAuth(false)
          setMessage(res.data.Message)
        }
      } catch (error) {
        console.log(error);
      }
    }
    checktoken();
  }, [])
  function handleLogout(){
    axios.get('http://localhost:8081/logout')
    .then(res => {
      window.location.reload();
    }).catch(err => console.log(err))
  }
  return (
    <div className='menu'>
      <div className='menu-top'>
        <Link to={"/"}><img src={Logo} alt='logo_bearbeer' /></Link>
      </div>
      <div className='menu-middle'>
        <button className='menu-DanhMuc'>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M0.692338 0C0.508718 0 0.33262 0.070238 0.202781 0.195262C0.0729425 0.320287 0 0.489856 0 0.666667C0 0.843478 0.0729425 1.01305 0.202781 1.13807C0.33262 1.2631 0.508718 1.33333 0.692338 1.33333H17.3084C17.4921 1.33333 17.6682 1.2631 17.798 1.13807C17.9278 1.01305 18.0008 0.843478 18.0008 0.666667C18.0008 0.489856 17.9278 0.320287 17.798 0.195262C17.6682 0.070238 17.4921 0 17.3084 0H0.692338ZM0 6C0 5.82319 0.0729425 5.65362 0.202781 5.5286C0.33262 5.40357 0.508718 5.33333 0.692338 5.33333H17.3084C17.4921 5.33333 17.6682 5.40357 17.798 5.5286C17.9278 5.65362 18.0008 5.82319 18.0008 6C18.0008 6.17681 17.9278 6.34638 17.798 6.4714C17.6682 6.59643 17.4921 6.66667 17.3084 6.66667H0.692338C0.508718 6.66667 0.33262 6.59643 0.202781 6.4714C0.0729425 6.34638 0 6.17681 0 6ZM0 11.3333C0 11.1565 0.0729425 10.987 0.202781 10.8619C0.33262 10.7369 0.508718 10.6667 0.692338 10.6667H17.3084C17.4921 10.6667 17.6682 10.7369 17.798 10.8619C17.9278 10.987 18.0008 11.1565 18.0008 11.3333C18.0008 11.5101 17.9278 11.6797 17.798 11.8047C17.6682 11.9298 17.4921 12 17.3084 12H0.692338C0.508718 12 0.33262 11.9298 0.202781 11.8047C0.0729425 11.6797 0 11.5101 0 11.3333Z" fill="#112950"></path><path d="M0.692338 0C0.508718 0 0.33262 0.070238 0.202781 0.195262C0.0729425 0.320287 0 0.489856 0 0.666667C0 0.843478 0.0729425 1.01305 0.202781 1.13807C0.33262 1.2631 0.508718 1.33333 0.692338 1.33333H17.3084C17.4921 1.33333 17.6682 1.2631 17.798 1.13807C17.9278 1.01305 18.0008 0.843478 18.0008 0.666667C18.0008 0.489856 17.9278 0.320287 17.798 0.195262C17.6682 0.070238 17.4921 0 17.3084 0H0.692338ZM0 6C0 5.82319 0.0729425 5.65362 0.202781 5.5286C0.33262 5.40357 0.508718 5.33333 0.692338 5.33333H17.3084C17.4921 5.33333 17.6682 5.40357 17.798 5.5286C17.9278 5.65362 18.0008 5.82319 18.0008 6C18.0008 6.17681 17.9278 6.34638 17.798 6.4714C17.6682 6.59643 17.4921 6.66667 17.3084 6.66667H0.692338C0.508718 6.66667 0.33262 6.59643 0.202781 6.4714C0.0729425 6.34638 0 6.17681 0 6ZM0 11.3333C0 11.1565 0.0729425 10.987 0.202781 10.8619C0.33262 10.7369 0.508718 10.6667 0.692338 10.6667H17.3084C17.4921 10.6667 17.6682 10.7369 17.798 10.8619C17.9278 10.987 18.0008 11.1565 18.0008 11.3333C18.0008 11.5101 17.9278 11.6797 17.798 11.8047C17.6682 11.9298 17.4921 12 17.3084 12H0.692338C0.508718 12 0.33262 11.9298 0.202781 11.8047C0.0729425 11.6797 0 11.5101 0 11.3333Z" stroke="#112950"></path></svg>
          Danh Mục
          <svg class="HeaderPC_chevron-icon__Iw9ud" stroke="#112950" width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M10.6673 1.66602L6.00065 6.33268L1.33398 1.66602" stroke="#112950" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
        </button>
        <input type='text' placeholder='Tìm Kiếm' className='menu-search' />
      </div>
      <div className='menu-bottom'>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M12.0247 3C8.72343 3 6.04055 5.71073 6.04055 9.04624V11.9585C6.04055 12.5732 5.78124 13.5104 5.47206 14.0344L4.3251 15.9591C3.61698 17.1482 4.10569 18.4683 5.40224 18.9117C9.70083 20.3628 14.3385 20.3628 18.6371 18.9117C19.8439 18.5086 20.3725 17.0676 19.7142 15.9591L18.5673 14.0344C18.2681 13.5104 18.0088 12.5732 18.0088 11.9585V9.04624C18.0088 5.72081 15.3159 3 12.0247 3Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M14 3C13.6649 2.92857 13.3189 2.87302 12.9622 2.84127C11.9243 2.74603 10.9297 2.80159 10 3C10.3135 2.4127 11.0919 2 12 2C12.9081 2 13.6865 2.4127 14 3Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 20C15 21.65 13.65 23 12 23C11.18 23 10.42 22.66 9.88 22.12C9.34 21.58 9 20.82 9 20" stroke="white" stroke-width="1.5" stroke-miterlimit="10"></path></svg>
        <button className='menu-Cart' onClick={handleClick}>
          Giỏ hàng
          <svg class="cart-badge-container__cart-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.32857 8.34749L6.93157 15.5195C6.97557 16.0715 7.42657 16.4855 7.97757 16.4855H7.98157H18.8926H18.8946C19.4156 16.4855 19.8606 16.0975 19.9346 15.5825L20.8846 9.02349C20.9066 8.86749 20.8676 8.71149 20.7726 8.58549C20.6786 8.45849 20.5406 8.37649 20.3846 8.35449C20.1756 8.36249 11.5026 8.35049 6.32857 8.34749ZM7.97557 17.9855C6.65857 17.9855 5.54357 16.9575 5.43657 15.6425L4.52057 4.74849L3.01357 4.48849C2.60457 4.41649 2.33157 4.02949 2.40157 3.62049C2.47357 3.21149 2.86857 2.94549 3.26857 3.00949L5.34857 3.36949C5.68357 3.42849 5.93857 3.70649 5.96757 4.04649L6.20257 6.84749C20.4786 6.85349 20.5246 6.86049 20.5936 6.86849C21.1506 6.94949 21.6406 7.24049 21.9746 7.68849C22.3086 8.13549 22.4486 8.68649 22.3686 9.23849L21.4196 15.7965C21.2406 17.0445 20.1566 17.9855 18.8966 17.9855H18.8916H7.98357H7.97557Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.2876 12.043H14.5156C14.1006 12.043 13.7656 11.707 13.7656 11.293C13.7656 10.879 14.1006 10.543 14.5156 10.543H17.2876C17.7016 10.543 18.0376 10.879 18.0376 11.293C18.0376 11.707 17.7016 12.043 17.2876 12.043Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.545 20.7031C7.846 20.7031 8.089 20.9461 8.089 21.2471C8.089 21.5481 7.846 21.7921 7.545 21.7921C7.243 21.7921 7 21.5481 7 21.2471C7 20.9461 7.243 20.7031 7.545 20.7031Z" fill="white"></path><mask id="mask0" maskUnits="userSpaceOnUse" x="7" y="20" width="2" height="2"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 21.2471C7 21.5491 7.243 21.7931 7.546 21.7931C7.847 21.7931 8.09 21.5491 8.09 21.2471C8.09 20.9461 7.847 20.7031 7.546 20.7031C7.243 20.7031 7 20.9461 7 21.2471Z" fill="white"></path></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M7.544 21.0421C7.431 21.0421 7.339 21.1341 7.339 21.2471C7.339 21.4741 7.75 21.4741 7.75 21.2471C7.75 21.1341 7.657 21.0421 7.544 21.0421ZM7.544 22.5421C6.83 22.5421 6.25 21.9611 6.25 21.2471C6.25 20.5331 6.83 19.9531 7.544 19.9531C8.258 19.9531 8.839 20.5331 8.839 21.2471C8.839 21.9611 8.258 22.5421 7.544 22.5421Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8263 20.7031C19.1273 20.7031 19.3713 20.9461 19.3713 21.2471C19.3713 21.5481 19.1273 21.7921 18.8263 21.7921C18.5243 21.7921 18.2812 21.5481 18.2812 21.2471C18.2812 20.9461 18.5243 20.7031 18.8263 20.7031Z" fill="white"></path><mask id="mask1" maskUnits="userSpaceOnUse" x="18" y="20" width="2" height="2"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.2812 21.2471C18.2812 21.5491 18.5243 21.7931 18.8263 21.7931C19.1263 21.7931 19.3713 21.5491 19.3713 21.2471C19.3713 20.9461 19.1263 20.7031 18.8263 20.7031C18.5243 20.7031 18.2812 20.9461 18.2812 21.2471Z" fill="white"></path></mask><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8253 21.0421C18.7133 21.0421 18.6213 21.1341 18.6213 21.2471C18.6222 21.4761 19.0323 21.4741 19.0312 21.2471C19.0312 21.1341 18.9382 21.0421 18.8253 21.0421ZM18.8253 22.5421C18.1113 22.5421 17.5312 21.9611 17.5312 21.2471C17.5312 20.5331 18.1113 19.9531 18.8253 19.9531C19.5403 19.9531 20.1212 20.5331 20.1212 21.2471C20.1212 21.9611 19.5403 22.5421 18.8253 22.5421Z" fill="white"></path></svg>
        </button>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABrklEQVR4nO3WO2sVURTF8dHCR6FEtDD2MZhgI4I2IqioaCBdTHofKRQMiuIX8NGKbRQrtRIL9SNoIUIShVgpYuEbX2Bh9CdH9sXLvSHOuTO3kfxhw3DO2mudmWE2UxSL/AOsxBAmog5iRdFNcATvtPMWh7sVeilCfuAmTkTdirXEhbpDh8P4NbbMs78Vb0IzVGfw4zDds4Bmb2ge1RW6IQynS2ifhHZ9HcHbw+xGCW1694ltdQRvDrN7JbT3QztYR/ByfMZX9CygW4Nv+IRllYMTuBJ3cg1LihbSGq6H5nJRF1iHF2F8GwNNe4O4E3vPsba24AT68axpWr2PajCLjUUX5/QEHsY7/4IHONn1ef3/gj4cx9kOK/X25Ybux3fVSR77coJnovEijnZY5/ELUznBP/Eq6zHN7/MSczkNH2NMtk2pDI+l4fEhp6kx7EcrBI+Fx92cpp3xuNOJd3UQujuGS/LYkdt8Ok48h0lsKtEzENrUkziVe+g/4FDLX+XTMD6HY1Hp+mrsNUg9I0UVsDoGwnSJ73YKZ7CqUmgr6MUBjDdNqPFY621rWKT4y2/AhUDEvdINyAAAAABJRU5ErkJggg==" />
          {
            auth ?
            <div style={{display:'flex', gap:"3px",flexDirection:"column", marginRight:"20px"}}>
              <p style={{color:"white", fontSize:"13px",margin:"0 0 0 0",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",width: "100px"}}>{name}</p>
              <button style={{backgroundColor:"white",borderRadius:"5px",border:"none",padding:"5px",}} onClick={handleLogout}>Đăng xuất</button>
            </div>
            :
            <div>
              <Link to={"/login"}><button style={{backgroundColor:"white",borderRadius:"5px",border:"none",padding:"5px",}}>Đăng nhập</button></Link>
            </div>
          }
      </div>
    </div>
  )
}

export default Header