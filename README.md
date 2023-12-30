Hướng dẫn cài đặt:
Bước 1: Tải và cài đặt môi trường Node.js(Phiên bản Recommended for Most User)
https://nodejs.org/en
Bước 2: Cài đặt bộ cài tự động app React
 - mở cmd tại thư mục bất kỳ gõ lệnh: npm install -g create-react-app
Bước 3: Tiến hành tạo React project trong ổ đĩa, folder bạn muốn tạo.
 - trỏ tới ổ đĩa, folder muốn tạo trong cmd rồi gõ lệnh: create-react-app X với X là tên của project tùy ý bạn.(nếu bạn không thực hiện bước 2 thì tại bước 3 bạn có thể làm y chang cho tới phần gõ lệnh thì là: npx/npm create-react-app X).
Bước 4: Chạy thử Project với câu lệnh: npm start.

Hướng dẫn sử dụng react project bearbia:
Bước 1: Cài đặt những package có trong project với câu lệnh sau:
- npm i express body-parser cors mysql jsonwebtoken cookie-parser path react-multi-carousel react-router-dom axios buffer.
giải thích các package: 
1. Express: Express là một web application framework for nodejs, nó cung cấp cho chúng những rất nhiều tính năng mạnh mẽ trên nền tảng web. Express rất dễ dàng để phát triển các ứng dụng nhanh dựa trên Node.js cho các ứng dụng Web. Express hỗ trợ các phương thức HTTP và middleware tạo ra 1 API rất mạnh mẽ và sử dụng dễ dàng hơn
2. body-parser: Đây là phần mềm trung gian node.js để xử lý dữ liệu biểu mẫu được mã hóa JSON, Raw, Text và URL.
3. cors: nghĩa là chia sẻ tài nguyên chéo nhau, hơi khó hiểu 1 tí nhưng dễ hiểu hơn thì nó là việc bạn chia sẻ tài nguyên của các domain khác nhau cho nhau, hay đơn giản hơn là khi việc client gọi 1 api từ 1 nguồn khác có domain khác với trang hiện tại (nguồn gốc) chính là cors.
4. mysql: dùng để kết nối tới mysql và thức hiện các tương tác với database.
5. jsonwebtoken: JSON Web Token (JWT) là một chuẩn mở (RFC 7519) định nghĩa một cách nhỏ gọn và khép kín để truyền một cách an toàn thông tin giữa các bên dưới dạng đối tượng JSON. Thông tin này có thể được xác minh và đáng tin cậy vì nó có chứa chữ ký số. JWTs có thể được ký bằng một thuật toán bí mật (với thuật toán HMAC) hoặc một public / private key sử dụng mã hoá RSA.
6. cookie-parser: là một thằng trung gian hay gọi là middleware trong Expressjs được sử dụng để phân tích cú pháp cookie và cũng là một phần mềm trung gian phổ biến khi những lập trình viên khởi tạo dự án sử dụng nodejs và expressjs.
7. react-multi-carousel: hỗ trợ làm giao diện.
8. react-router-dom: một API cho các ứng dụng React. React router sử dụng định tuyến động phía máy khách cho phép xây dựng SPA (Single Page Application) với điều hướng mà không cần làm mới trang. Đây là một cách ngày càng phổ biến để mang lại trải nghiệm tốt hơn cho người dùng.
9. axios: thư viện giúp client tương tác với server thông qua giao thức HTTP dựa trên các Promises.
Bước 2: tiến hành chạy project với lệnh npm start và npm run server để chạy Nodejs.
Bước 3: Trải nghiệm Web bán hàng y tế, thực phẩm chức năng. Hiện chưa có chức năng thanh toán( sẽ phát triển về sau)!
