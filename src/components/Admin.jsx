import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import S3 from 'aws-s3'
import { useNavigate } from 'react-router-dom';
window.Buffer = window.Buffer || require("buffer").Buffer;
function Admin() {
    const [values, setValues] = useState({
        masp: "",
        tensp: "",
        gia: "",
        soluong: "",
        loaisp:"",
        thongtin: "",
        urlimgSP: ""
    })
    const [fileimgsp, setfileimgsp] = useState();
    const [showimg, setshowimg] = useState(false);
    const [urls3, seturls3] = useState("");
    const navigate = useNavigate();
    function handleInput(event){
        setValues(Prev => ({
            ...Prev,
            [event.target.name] : [event.target.value]
        }))
    }
    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8081/admin',values)
        setTimeout(() => {
            window.location.reload();
        }, 3000);
        alert("Thêm sản phẩm thành công")
    }
    function handleFile(event) {
        setfileimgsp(event.target.files[0]);
    }
    function uploadfiletos3(e){
        e.preventDefault()
        const config = {
          bucketName: 'nhi-em-film',
          region: "ap-southeast-1",
          accessKeyId: 'AKIAT4TJ3MBX6AYBNH6L',
          secretAccessKey: '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'
        }
        const S3Client = new S3(config);
        S3Client
        .uploadFile(fileimgsp,fileimgsp.tensp)
        .then(data => seturls3(data.location))
        .catch(err => console.error(err))
        setshowimg(true)
      }
    return (
        <div>
            <Header />
            <div className="manage">
                <form className='manage-form' onSubmit={handleSubmit}>
                    <label>Mã sản phẩm: </label>
                    <input type="text" name="masp" onChange={handleInput}/>
                    <label>Tên sản phẩm: </label>
                    <input type="text" name="tensp" onChange={handleInput}/>
                    <label>Giá: </label>
                    <input type="text" name='gia'onChange={handleInput} />
                    <label>Số lượng: </label>
                    <input type="number" name="soluong" onChange={handleInput}/>
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
                    <input type="file" onChange={handleFile}/>
                    <button onClick={uploadfiletos3} className='admin-button'>Upload to S3 </button>
                    <p style={showimg == true ? {fontSize:"15px"} : {display:"none"}}>{urls3}</p>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <img src={urls3} alt="imgsp" style={showimg == true ? {width:"250px",height:"250px"} : {display:"none"}}/>
                    </div>
                    <input type="text" name='urlimgSP'onChange={handleInput}/>
                    <input type="submit" name='submit' className='admin-button' value="Nhập"/>
                </form>
            </div>
        </div>
    )
}

export default Admin