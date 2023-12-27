import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header';
import Boxitem from './Boxitem';
function Sptimkiem() {
    const [items, setItems] = useState(
        JSON.parse(localStorage.getItem("items")) || [],
    );
    var flag = 0;
    const params = useParams();
    const id = params.id;
    const [value, setvalue] = useState([])
    const [showvalue, setshowvalue] = useState(true)
    const [message, setmessage] = useState("")
    useEffect(() => {
        const searchSP = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API}/timkiem/` + id)
            if(res.data.Message == "Sản phẩm cần tìm không tồn tại")
            {
                setshowvalue(false)
                setmessage(res.data.Message)
            }else{
                setvalue(res.data)
            }
        }
        searchSP()
    }, [])
    return (
        <>
            <Header />
            <div className='search-container'>
                {
                    showvalue == true
                        ?<>
                        {
                            value.map((product) => {
                                return (
                                    <div>
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
                                            if (flag === 1) {
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

                            })
                        }
                        </>
                        :
                        <p>{message}</p>
                 
                 }

            </div>
        </>
    )
}

export default Sptimkiem