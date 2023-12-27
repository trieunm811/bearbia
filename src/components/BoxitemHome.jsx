import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
function BoxitemHome(props) {
    const navigate = useNavigate();
    const [productList, setproductList] = useState([]);
    useEffect(() => {
        const fetchAllsptheodanhmuc = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API}/productsDetails/${props.masp}`)
                setproductList(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllsptheodanhmuc();
    }, [productList, props.masp])
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0) + str.slice(1,str.length).toLowerCase();
    };
    return (
        <Carousel
            swipeable={true}
            draggable={false}
            showDots={true}
            responsive={responsive}
            keyBoardControl={true}
            containerClass='content-carousel'
            itemClass='content-carousel-item'>
            {productList.map((item, index) => {
                return (
                    <div className="content-boxItem-item">
                        <div className="content-boxItem-img" onClick={() => { navigate(`/${item.Loaisp}/${item.Masp}`) }}>
                            <img src={item.urlimgsp} alt="salonpas" />
                        </div>
                        <div className="content-boxItem-item-Info">
                            <p style={{ height: "50px", overflow: "hidden", textOverflow: "ellipsis", width: "100%" }}>{capitalizeFirstLetter(item.Tensp)}</p>
                            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", width: "100%" }}>{capitalizeFirstLetter(item.Thongtinchitiet)}</p>
                            <p style={{ color: "green", fontWeight: "bold" }}>Giá: {item.Gia.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}đ</p>
                            <button onClick={() => { navigate(`/${item.Loaisp}/${item.Masp}`) }} style={{ cursor: "pointer" }}>xem chi tiết</button>
                        </div>
                    </div>
                )
            })}
        </Carousel>
    )
}

export default BoxitemHome