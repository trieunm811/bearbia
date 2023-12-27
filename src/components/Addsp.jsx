import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import S3 from 'aws-s3'
import { useNavigate } from 'react-router-dom';
import Leftadmin from './Leftadmin';
window.Buffer = window.Buffer || require("buffer").Buffer;
function Addsp() {
    const [values, setValues] = useState({
        masp: "",
        tensp: "",
        gia: "",
        soluong: "",
        loaisp: "",
        thongtin: "",
        urlimgSP: ""
    })
    const [fileimgsp, setfileimgsp] = useState();
    const [showimg, setshowimg] = useState(false);
    const [urls3, seturls3] = useState("");
    const [showboxadd, setshowboxadd] = useState(false)
    const [showboxupdate, setshowboxupdate] = useState(false)
    const [allproduct, setallproduct] = useState([])
    const [id, setid] = useState('')
    const navigate = useNavigate();
    function handleInput(event) {
        setValues(Prev => ({
            ...Prev,
            [event.target.name]: [event.target.value]
        }))
    }
    useEffect(() => {
        const fetchAllsp = async () => {
            try {
                const res = await axios.get(`${process.env.REACT_APP_API}/allproduct`)
                setallproduct(res.data)
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllsp();
    }, [])
    function handleSubmit(event) {
        event.preventDefault();
        if (showboxadd == true) {
            axios.post('${process.env.REACT_APP_API}/admin', values)
            alert("Thêm sản phẩm thành công")
        } else {
            if (showboxupdate == true) {
                axios.post('${process.env.REACT_APP_API}/update/' + id, values)
                alert("Cập nhật sản phẩm thành công")
            }
        }
        window.location.reload();
    }
    function handleFile(event) {
        setfileimgsp(event.target.files[0]);
    }
    function uploadfiletos3(e) {
        e.preventDefault()
        const config = {
            bucketName: 'nhi-em-film',
            region: "ap-southeast-1",
            accessKeyId: process.env.REACT_APP_accessKeyId,
            secretAccessKey: process.env.REACT_APP_secretAccessKey
        }
        const S3Client = new S3(config);
        S3Client
            .uploadFile(fileimgsp, fileimgsp.tensp)
            .then(data => seturls3(data.location))
            .catch(err => console.error(err))
        setshowimg(true)
    }
    console.log(id);
    console.log(showboxadd);
    console.log(showboxupdate);

    return (
        <div>
            <div className='admin-container'>
                <Leftadmin />
                <div className="admin-right">
                    {
                        showboxadd == true || showboxupdate == true
                            ?
                            <div className="manage">
                                <form className='manage-form' onSubmit={handleSubmit}>
                                    <p onClick={() => {
                                        setshowboxadd(false)
                                        setshowboxupdate(false)
                                    }} style={{ cursor: "pointer", marginLeft: "100%", marginBottom: "0px" }}>X </p>
                                    <label>Mã sản phẩm: </label>
                                    <input type="text" name="masp" onChange={handleInput} />
                                    <label>Tên sản phẩm: </label>
                                    <input type="text" name="tensp" onChange={handleInput} />
                                    <label>Giá: </label>
                                    <input type="text" name='gia' onChange={handleInput} />
                                    <label>Số lượng: </label>
                                    <input type="number" name="soluong" onChange={handleInput} />
                                    <label>Loại sản phẩm: </label>
                                    <select name="loaisp" onChange={handleInput}>
                                        <option value="0">Chọn thể loại</option>
                                        <option value="dau">Dầu</option>
                                        <option value="keo">Kẹo</option>
                                        <option value="tpcn">Thực phẩm chức năng</option>
                                        <option value="spyt">Sản phẩm y tế</option>
                                    </select>
                                    <label>Thông tin chi tiết: </label>
                                    <textarea name="thongtin" onChange={handleInput} ></textarea>
                                    <input type="file" onChange={handleFile} />
                                    <button onClick={uploadfiletos3} className='admin-button'>Upload to S3 </button>
                                    <p style={showimg == true ? { fontSize: "15px" } : { display: "none" }}>{urls3}</p>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <img src={urls3} alt="imgsp" style={showimg == true ? { width: "250px", height: "250px" } : { display: "none" }} />
                                    </div>
                                    <input type="text" name='urlimgSP' onChange={handleInput} />
                                    <input type="submit" name='submit' className='admin-button' value="Nhập" />
                                </form>
                            </div>
                            :
                            <div className="admin-box-right">
                                <div className="admin-box-right-title">
                                    <p>Quản lý sản phẩm</p>
                                    <button onClick={() => { setshowboxadd(true) }}>Thêm</button>
                                </div>
                                <div className="admin-box-right-showsp">
                                    <div className="admin-box-right-showsp-infor">
                                        <p style={{ width: "300px" }}>Tên sản phẩm</p>
                                        <p style={{ width: "50px" }}>Giá</p>
                                        <p>Số lượng tồn kho</p>
                                        <p>Hình ảnh</p>
                                    </div>
                                    <hr />
                                    {allproduct.map((item, index) => {
                                        return (
                                            <>
                                                <div className="admin-box-right-showsp-infor">
                                                    <p style={{ width: "300px" }}>{item.Tensp}</p>
                                                    <p style={{ width: "50px" }}>{(item.Gia).toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}đ</p>
                                                    <p style={{ width: "120px" }}>{item.Soluong}</p>
                                                    <img src={item.urlimgsp} alt="img-product" />
                                                    <button onClick={() => {
                                                        axios.get("${process.env.REACT_APP_API}/delete/" + item.Masp)
                                                        alert("Xóa thành công")
                                                        window.location.reload();
                                                    }}>Xóa</button>
                                                    <button onClick={() => {
                                                        setshowboxupdate(true)
                                                        setid(item.Masp)
                                                    }}>Sửa</button>
                                                </div>
                                                <hr />
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Addsp