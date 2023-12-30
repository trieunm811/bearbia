-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 30, 2023 at 07:13 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bearbia`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `Manv` int NOT NULL AUTO_INCREMENT,
  `Tennv` varchar(50) DEFAULT NULL,
  `sdt` char(11) DEFAULT NULL,
  `email` char(100) DEFAULT NULL,
  `TK` varchar(100) DEFAULT NULL,
  `Mk` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Manv`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`Manv`, `Tennv`, `sdt`, `email`, `TK`, `Mk`) VALUES
(1, 'Trieu', '0899459421', 'trieunm@gmail.com', 'trieunm@gmail.com', '123');

-- --------------------------------------------------------

--
-- Table structure for table `danhmuc`
--

DROP TABLE IF EXISTS `danhmuc`;
CREATE TABLE IF NOT EXISTS `danhmuc` (
  `maloaisp` char(10) NOT NULL,
  `tenloaisp` varchar(50) NOT NULL,
  `urlimgloaisp` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`maloaisp`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `danhmuc`
--

INSERT INTO `danhmuc` (`maloaisp`, `tenloaisp`, `urlimgloaisp`) VALUES
('tpcn', 'Thực phẩm chức năng', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/6wYoah7opJBnygAWeUEoeS.jpeg'),
('dau', 'Dầu', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/hLK6irQ2vUkP3cBNkckk9v.jpeg'),
('keo', 'Kẹo', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/a6LJu9geRSRpxPmLTdCHww.jpeg'),
('spyt', 'Sản phẩm y tế', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/oLtbniFG32D64Sy3jVu9vS.jpeg'),
('spcn', 'San pham chuc nang', '123');

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
CREATE TABLE IF NOT EXISTS `khachhang` (
  `Makh` int NOT NULL AUTO_INCREMENT,
  `Tenkh` varchar(50) DEFAULT NULL,
  `sdt` char(11) DEFAULT NULL,
  `email` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `matkhau` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`Makh`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`Makh`, `Tenkh`, `sdt`, `email`, `matkhau`) VALUES
(1, 'Nguyễn Minh Triều', '0899459421', 'trieunm2002@gmail.com', 'minhtrieu2002'),
(2, 'Nguyen Anh Tu', '0899459422', 'trieunm2001@gmail.com', 'minhtrieu2002'),
(3, 'Nguyễn Hữu Trường', '0899459423', 'huutruong@gmail.com', 'huutruong2002');

-- --------------------------------------------------------

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
CREATE TABLE IF NOT EXISTS `sanpham` (
  `Masp` char(10) NOT NULL,
  `Tensp` varchar(50) DEFAULT NULL,
  `Gia` int DEFAULT NULL,
  `Soluong` int DEFAULT NULL,
  `Loaisp` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `Thongtinchitiet` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `urlimgsp` varchar(100) NOT NULL,
  PRIMARY KEY (`Masp`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `sanpham`
--

INSERT INTO `sanpham` (`Masp`, `Tensp`, `Gia`, `Soluong`, `Loaisp`, `Thongtinchitiet`, `urlimgsp`) VALUES
('SP08', 'KHANG KHÍ LINH - Hỗ Trợ Giảm Ho', 180000, 100, 'tpcn', 'Thành Phần KHANG KHÍ LINH:\nMỗi viên nang cứng chứa: \nHỗn hợp cao 500mg tương đương thảo mộc thô gồm:\nMạch Môn:....................................230mg\nLa bặc tử:......................................200mg\nCát Cánh:......................................150mg\nBạch giới tử:..................................135mg\nTô tử:.............................................135mg\nXạ Can:.........................................120mg\nHúng chanh:..................................100mg\nBạch Thược:.................................100mg\nĐan Sâm:......................................100mg\nThục địa:.......................................100mg\nTrần Bì:.........................................100mg\nXuyên khung:..................................90mg\nThiên hoa phấn:..............................90mg \nPhụ liệu: vỏ nang gelatin, chất độn (tinh bột sắn, bột tacl), chất chống đông vón (magie stearate, calci carbonat), chất ổn định (polyvinylpyrrolidone), dung môi (ethanol 96%), chất bảo quản (nipagin, nipasol)\nCông Dụng KHANG KHÍ LINH:\nHỗ trợ bổ phổi, giảm ho & giảm đờm\nHỗ trợ giảm đau rát họng, khản tiếng do viêm họng & viêm phế quản\nCách Dùng KHANG KHÍ LINH:\nNgười lớn: Uống 3 viên x 2 lần/ngày\nTrẻ em trên 6 tuổi: Uống 2 viên x 2 lần/ngày\nUống trước khi ăn 30 phút hoặc sau ăn khi ăn 1 tiếng\n', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/6wYoah7opJBnygAWeUEoeS.jpeg'),
('SP06', 'Tĩnh mạch linh', 300000, 100, 'tpcn', 'CÔNG DỤNG\nHỗ trợ lưu thông khí huyết,\nTăng cường sức bền thành mạch, \nHỗ trợ giảm nguy cơ cải thiện triệu chứng suy giãn tĩnh mạch\nTăng cường sức đề kháng.\nGiảm triệu chứng tê bì chân tay, đau cổ vai gáy.\nY học cổ truyền cho rằng, giãn tĩnh mạch là do huyết ứ, khí trệ. Bởi vậy, để điều trĩ căn bệnh này phải dùng liệu pháp hoạt huyết, hành khí, tán ứ kết hợp với bảo vệ thành mạch\nTHÀNH PHẦN\nHoàn toàn từ thảo dược lành tính, an toàn, không tác dụng phụ\nThành phần của Tĩnh mạch linh là công thức gia truyền dựa trên bài thuốc cổ phương Ngoc binh phong tán gia giảm, kết hợp các dược liệu quý giúp hoạt huyết, tán ứ, tăng cường sức bền thành mạch.\nMột viên nang chứ 500mg cao khô dược liệu: Đan Sâm, Xuyên Khung, Hoa Hòe, Bạch Thược, Ngưu Tất, Hoàng Kỳ, Đương Quy, Phòng Phong, Bạch Truật, Thiên Niên Kiện, Nhục Quế.\n\nHƯỚNG DẪN SỬ DỤNG: Ngày uống 2 lần, mỗi lần 2-3 viên, uống sau ăn 60 phút.\n', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/wgrd7TAWvA3g8y841kv7r8.jpeg'),
('SP07', 'Tinh dầu thông đỏ BP Golden Pine', 850000, 100, 'tpcn', 'THÀNH PHẦN: \nTrong mỗi viên tinh dầu thông đỏ BP Golden Pine (450mg) chứa:\nThành phần Hàm lượng\nTinh dầu thông đỏ 441 mg\nVitamin E 9 mg\nCÔNG DỤNG:\nGiúp THÔNG HUYẾT MẠCH:\nHỗ trợ giảm mỡ trong máu\nHỗ trợ giảm xơ vữa động mạch, ổn định huyết áp, giảm nguy cơ đột quỵ\nGiảm đường huyết và ngăn ngừa biến chứng tiểu đường\nTăng cường miễn dịch\nCÁCH SỬ DỤNG:\nNgày uống 2 lần, mỗi lần 1 viên, sau bữa ăn 30 phút.\nSử dụng liên tục từ 3-6 tháng để có kết quả tốt.\n', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/hmsdRRbxCgR4Z1UqUYqQa5.jpeg'),
('SP05', 'Kẹo Dẻo BIO KID', 20000, 100, 'keo', '- Công dụng:\nBổ sung LỢI KHUẨN có ích cho đường ruột giúp tăng cường chức năng tiêu hóa, tăng hấp thu dưỡng chất bổ sung dinh dưỡng cho cơ thể.\nTốt cho các trường hợp: Loạn khuẩn đường ruột, rối loạn tiêu hóa, tiêu chảy.\nBổ sung VITAMIN C giúp tăng cường hệ miễn dịch.\nPhù hợp với mọi độ tuổi, đặc biệt là TRẺ NHỎ, giúp hỗ trợ hệ MIỄN DỊCH, tăng cường khả năng ĐỀ KHÁNG chống lại các b ệnh về đường ruột với tỷ lợi khuẩn Probiotic HU58 với công nghệ đ ộc quyền từ Anh Quốc\nCách sử dụng:\nDùng ngay sau khi mở bao bì.\nĐối với: + Trẻ em trên 2 tuổi: Khẩu phần 5 viên/lần/ngày\nNgười lớn: Khẩu phần 7 viên/lần/ngày\n', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/m9z3P1Ee56CR45i12WXMvb.jpeg'),
('SP04', 'Kẹo ho tắc vàng', 50000, 100, 'keo', '-Thành phần: \nTinh dầu bạc hà.........7mg\nTinh dầu quả tắc.........1mg\nTinh dầu gừng.............0.6mg\nTinh dầu tần dày lá.....0,5mg\nEucalyptol...................0,6mg\nMật ong.......................100mg\nĐường isomalt vừa đủ\n-Công dụng:\nHỗ trợ làm ấm họng, thông phế khí, giúp giảm và làm dịu cơn ho, giảm đau rát họng và khàn tiếng.\n-Đối tượng sử dụng:\nNgười lớn và trẻ em trên 6 tuổi có những triệu chứng như: Ngứa cổ họng, đau rát họng, ho gió, ho khan, ho có đàm, khàn tiếng\n-Cách dùng: \nNgậm mỗi lần 1 viên, không quá 10 viên/ ngày\nNgậm đến khi tan hết hoặc nhai trước khi nuốt\nTrẻ em dưới 6 tuổi và phụ nữ mang thai nên tham khảo ý kiến bác sĩ, nhân viên y tế', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/a6LJu9geRSRpxPmLTdCHww.jpeg'),
('SP02', 'KEM BÔI HỖ TRỢ GIẢM SUY GIÃN TĨNH MẠCH VARIKOSE', 140000, 100, 'dau', '-Công dụng sản phẩm:\nGiúp săn chắc da, đàn hồi, giúp trắng sáng da, ngừa sạm da.\nSerum giúp hấp thu nhanh.\nKhông cảm giác nhờn rít, khó chịu.\n-Hướng dẫn sử dụng:\nBôi serum lên vùng bắp chân, đùi, mắt cá chân 2-3 lần/ ngày.\nMassage nhẹ nhàng để serum hấp thu hoàn toàn.\nBảo quản: Nơi khô ráo, tránh nhiệt độ cao và ánh nắng trực tiếp\nXuất xứ: Việt Nam', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/hLK6irQ2vUkP3cBNkckk9v.jpeg'),
('SP03', 'CHAI XỊT CHƯỜM NÓNG TIỆN LỢI, ĐẨY LÙI ĐAU NHỨC - B', 60000, 100, 'dau', 'Vận động sai cách, làm việc nặng lâu ngày khiến cơ thể đau nhức, mệt mỏi\nSử dụng BONE SPORT DTB - Xịt giảm đau tiện lợi, tác dụng nhanh chóng.\nThành phần chính gồm các chiết xuất quý như:\nChiết xuất Bạch Chỉ\nChiết xuất dây đau xương\nTinh dầu bạc hà\nTinh dầu long não\nTinh dầu quế\nTinh dầu hương nhu\nTinh dầu hồi\nHướng dẫn sử dụng: Sử dụng xịt lên phần da cần giảm đau, massage nhẹ nhàng cho dung dịch thẩm thấu.', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/nTD4BVZGTcs8oeLWDRujXE.jpeg'),
('SP01', 'Dầu thảo dược DR.huang', 300000, 100, 'dau', '- Công Dụng: Chống viêm, thư giãn gân cốt, giảm đau nhức, Đau cơ xương khớp mãn tính, đau nhức người lớn tuổi, chấn thương, căn cơ chơi thể thao hoặc có thể dùng khi muỗi, côn trùng cắn.Cách dùng:Thoa một lớp mỏng lên vùng đau hay chấn thương sau đó mát xa 2-3 phút để tăng sự hấp thu.Số lần dùng tùy theo nhu cầu và cảm nhận của cơ thể , đau mãn tính nên sử dụng thêm ban đêm để sáng được cảm giác khoan khoái.\n- thành phần\nMentha piperita (Peppermint) Oil, \nJuniperus communis (Juniper berry) \nFruit Oil, Eugenia caryophyllus (Clove) Flower Oil, Aloe barbadensis Leaf Extract Persea gratissima (Avocado) Oil, Prunus amygdalus dulcis (Sweet Almond) Oil, Glucuronic acid. \n-THỜI HẠN SỬ DỤNG: 36 tháng kể từ ngày sản xuất. \n-BẢO QUẢN: Nơi khô ráo, thoáng mát, tránh ánh sáng, nhiệt độ dưới 30 độ C\n', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/cawJPTyvkWdR9tYkMchr1o.jpeg'),
('SP09', 'Nữ Phụ Khang, hỗ trợ bổ huyết, tăng cường nội tiết', 120000, 100, 'tpcn', 'thành phần của Nữ Phụ Khang\nThành phần trong 1 viên nang cứng chứa:\n\nHỗn hợp cao 500 mg tương đương thảo mộc thô gồm:\nĐương Quy: 230mg.\nĐan Sâm: 200mg.\nBạch Thược: 160mg.\nThục Địa: 160mg.\nHoàng Đằng: 160mg.\nHồng Hoa: 130mg.\nXuyên Khung: 130 Mg.\nXà sàng tử: 130 mg\nHương Phụ: 130mg.\nThương Nhĩ Tử: 120mg.\nPhụ liệu: Tinh bột sắn, bột talc, magie stearat, calci, nipagin, nipasol, PVP K30, ethanol, vỏ nang gelatin vừa đủ 1 viên.\n\nLưu ý trong quá trình sử dụng Nữ Phụ Khang\nKhông dùng cho người mẫn cảm với bất kỳ thành phần nào của sản phẩm.\nKhông sử dụng vượt quá liều lượng khuyến cáo.\nĐọc kỹ hướng dẫn sử dụng trước khi dùng.\nSản phẩm này không phải là thuốc, và không có chức năng thay thế thuốc chữa bệnh\n', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/daFzauz4dMLiBiSUTDagTu.jpeg'),
('SP10', 'Bài thạch Hadopharma', 135000, 100, 'tpcn', 'Mỗi viên nang mềm chứa:\nCao đặc tổng hợp...............400mg tương đương với:\nKim tiền thảo……………………….2,5g\nMã đề………………………………..1g\nTỳ giải……………………………….1g\nTrạch tả……………………………… 0,6g\nUất kim………………………………..0,8g\nNgưu tất………………………………..0,6g\nKê nội kim……………………………..0,6g\nDiệp hạ châu........................0,6g\nCác chất phụ gia ………….. 1 viên\n\nCách Dùng:\nNgười lớn: Uống 2 viên/ lần x 2-3 lần/ngày\nTrẻ em trên 6 tuổi: Uống 1-2 viên x 2 lần/ngày\nBào mòn - Tán sỏi\nHỗ trợ điều trị và giúp giảm nguy cơ tái phát:\n- Sỏi thận - sỏi niệu quản\n- Sỏi bàng quang\n- Viêm đường tiết niệu\n- Sỏi túi mật, sỏi đường tiết niệu\n- Lợi tiểu\n', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/fabJRF5KLszYLs1Lzvma4K.jpeg'),
('SP11', 'Bột sủi thanh nhiệt Opticool', 50000, 100, 'tpcn', 'Mỗi ngày phải tiếp xúc với thời tiết nắng nóng, đồ ăn chiên xào, sinh hoạt không điều độ khiến cơ thể dễ bị nóng, nhiệt miệng Bột sủi thanh nhiệt Opticool với sự kết hợp từ các chiết xuất thảo mộc thiên nhiên có tính mát là giải pháp ưu việt giúp giảm nhanh các triệu chứng nóng trong người, nhiệt miệng, khô môi\nThành phần:\nVitamin C: 65 mg\nVitamin PP: 3 mg\nVitamin B1: 1,5 mg\nPhụ liệu: Hương tùy loại\n*HƯỚNG DẪN SỬ DỤNG:\n- Trẻ em từ 6 - 12 tuổi: 1 gói x 2 - 3 lần/ngày\n- Người lớn và trẻ em trên 12 tuổi: 1 gói x 3 - 4 lần/ngày\n- Hòa tan 1 gói (7g) trong 150 – 200ml nước, ngon hơn khi uống lạnh.Và lắc soda\n', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/cFGGqDPcDP2N14fhjvRNfT.jpeg'),
('SP12', 'Hộp Băng Dính Cá Nhân Kulgo', 150000, 100, 'spyt', 'Thành phần: \n+Băng: vải viscose và polyamide co giãn\n+Gạc: viscose có lớp mảng trên cùng bằng polyethylene không gây dính\n+Chất dính: keo nóng chảy không dùng dung môi, mỗi miếng đựng trong từng bao riêng\n_Chỉ định : băng dính cá nhân mỏng thoáng,  độ dính cao,  độ co giãn tốt bảo vệ các vết thương nhỏ, vết trầy xước,  rách da\n_Cách dùng: làm vệ sinh da,  lau khô trước khi dán băng,  thay băng hàng ngày\nThương hiệu Vifaco\nQuy cách sản phẩm Hộp 102 miếng dán\nĐối tượng Người bị vết thương nhỏ, trầy xước, rách da\nXuất xứ Việt Nam\nĐường dùng - Dán lên vết thương\n', 'https://nhi-em-film.s3-ap-southeast-1.amazonaws.com/oLtbniFG32D64Sy3jVu9vS.jpeg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
