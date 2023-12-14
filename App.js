const express = require("express");
const bodyparser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const app = express();
const cookieParser = require("cookie-parser");
// const config = "Driver={ODBC Driver 17 for SQL Server};Server=DESKTOP-SMHT39M;Database=ShopBearBia;Trusted_Connection=yes;"
app.use(cookieParser());
app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.static("public"))
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "bearbia"
})
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ Message: "we need token please provide it." })
    }
    else {
        jwt.verify(token, "our-jsonwebtoken-secret-key", (err, decoded) => {
            if (err) {
                return res.json({ Message: "Authentication Error." })
            } else {
                req.name = decoded.name;
                next();
            }
        })
    }
}
app.get('/auth', verifyUser, function (req, res) {
    return res.json({ Status: "Success", name: req.name })
})
app.post('/login', function (req, res) {
    db.connect(function (err) {
        const sql = "SELECT * FROM khachhang where email = ? and matkhau = ?"
        db.query(sql, [req.body.email, req.body.password], function (err, data) {
            if (err) {
                return res.json({ Message: "Lỗi đăng nhập" })
            }
            if (data.length > 0) {
                const name = data[0].Tenkh;
                const token = jwt.sign({ name }, "our-jsonwebtoken-secret-key", { expiresIn: '1d' });
                res.cookie('token', token)
                return res.json({ Status: "Đăng nhập thành công" })
            } else {
                return res.json({ Message: "Tài khoản không tồn tại" })
            }
        })
    })
})
app.get('/logout', function (req, res) {
    res.clearCookie('token')
    return res.json({Status: "Success"})
})
app.post('/admin', function (req, res) {
    db.connect(function (err) {
        const values = [
            req.body.masp,
            req.body.tensp,
            req.body.gia,
            req.body.soluong,
            req.body.loaisp,
            req.body.thongtin,
            req.body.urlimgSP
        ]
        const sqlString = "INSERT INTO sanpham(Masp,Tensp,Gia,Soluong,Loaisp,Thongtinchitiet,urlimgsp) VALUES(?)";
        db.query(sqlString, [values], function (err, data) {
            if (err) {
                return res.json("error");
            } else {
                return res.json(data);
            }
        })

    })
})
app.get('/productsDetails/:type', async function (req, res) {
    db.connect(function () {
        const sqlString = 'SELECT * FROM sanpham join danhmuc on sanpham.Loaisp= danhmuc.maloaisp where sanpham.Loaisp = ?'
        db.query(sqlString, [req.params.type], function (err, data) {
            if (err) {
                return res.json("Error");
            } else {
                return res.json(data);
            }
        })
    })
});
app.get('/danhmuc', async function (req, res) {
    db.connect(function () {
        db.query("SELECT * from danhmuc", function (err, data) {
            if (err) {
                return res.json("Error");
            } else {
                return res.json(data);
            }
        })
    })
});
app.get('/:id', async function (req, res) {
    db.connect(function () {
        const sqlString = 'SELECT * FROM sanpham where sanpham.masp = ?'
        db.query(sqlString, [req.params.id], function (err, data) {
            if (err) {
                return res.json("Error");
            } else {
                return res.json(data);
            }
        })
    })
});
app.listen(8081, function () {
    console.log("Server is starting on port: 8081");
})