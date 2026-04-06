# Lab 6 - WFood

## Giới thiệu dự án

WFood là một website tĩnh mô phỏng dịch vụ đặt đồ ăn nhanh, được xây dựng cho bài Lab 6 với mục tiêu luyện tập thiết kế giao diện web, tổ chức nội dung theo nhiều trang, xử lý responsive layout và bổ sung một số tương tác cơ bản bằng JavaScript.

Website được triển khai theo mô hình nhiều trang gồm trang chủ, trang thực đơn và trang liên hệ đặt hàng. Toàn bộ dự án tập trung vào việc thể hiện một sản phẩm demo có giao diện hiện đại, bố cục rõ ràng, dễ thao tác trên cả thiết bị desktop lẫn mobile.

## Mục tiêu của website

Trang web được xây dựng để mô phỏng một hệ thống đặt món trực quan và dễ sử dụng. Các mục tiêu chính gồm:

- Thể hiện bố cục trang web dịch vụ đồ ăn với hình ảnh trực quan, nội dung rõ ràng và điều hướng đơn giản.
- Áp dụng Bootstrap để xây dựng giao diện responsive nhanh và đồng nhất.
- Sử dụng JavaScript để tạo các tương tác cơ bản như lọc món ăn, hiển thị modal chi tiết món và xử lý form demo.
- Tổ chức mã nguồn tách biệt giữa HTML, CSS, JavaScript và thư mục tài nguyên.
- Rèn luyện tư duy thiết kế UX/UI theo hướng dễ tiếp cận, dễ đọc, dễ thao tác.

## Đối tượng sử dụng

Website hướng tới người dùng muốn xem nhanh danh sách món ăn, tham khảo món nổi bật và gửi yêu cầu đặt món thông qua biểu mẫu liên hệ. Vì đây là dự án demo, dữ liệu không được lưu vào cơ sở dữ liệu và không có chức năng thanh toán thực tế.

## Công nghệ sử dụng

- HTML5 để xây dựng cấu trúc nội dung.
- CSS3 để tùy biến giao diện và tăng tính nhận diện cho thương hiệu WFood.
- Bootstrap 5.3.3 để hỗ trợ grid system, component giao diện và responsive layout.
- Bootstrap Icons để sử dụng hệ thống biểu tượng trực quan.
- JavaScript thuần để xử lý các tương tác phía trình duyệt.

## Cấu trúc thư mục

```text
Lab6/
  index.html
  menu.html
  contact.html
  README.md
  assets/
    css/
      styles.css
    img/
      dish-chicken.svg
      dish-combo.svg
      dish-milktea.svg
      dish-pasta.svg
      dish-pizza.svg
      dish-ricechicken.svg
      dish-salad.svg
      hero-food.svg
      photos/
        burger.jpg
        chicken.jpg
        combo.jpg
        hero.jpg
        milktea.jpg
        pasta.jpg
        pizza.jpg
        ricechicken.jpg
        salad.jpg
    js/
      main.js
```

## Mô tả từng trang

### 1. Trang chủ - `index.html`

Trang chủ là nơi giới thiệu tổng quan về WFood và tạo ấn tượng đầu tiên với người dùng.

Các thành phần chính:

- Thanh điều hướng cố định phía trên, cho phép chuyển nhanh giữa Trang chủ, Thực đơn và Liên hệ.
- Khu vực hero với tiêu đề lớn, mô tả ngắn, nút kêu gọi hành động và hình minh họa.
- Carousel món nổi bật giúp làm nổi bật một số món ăn tiêu biểu.
- Khu vực giới thiệu các điểm nổi bật như giao nhanh, đóng gói cẩn thận và thanh toán linh hoạt.
- Phần mô tả quy trình đặt món qua 3 bước để người dùng hiểu cách sử dụng.
- Khu vực kêu gọi người dùng chuyển sang trang thực đơn để xem chi tiết món ăn.

Ý nghĩa UX/UI:

- Tạo điểm nhấn thị giác bằng khối hero lớn và carousel.
- Định hướng hành vi người dùng bằng các nút CTA rõ ràng.
- Trình bày thông tin theo từng khối giúp người xem dễ quét nội dung.

### 2. Trang thực đơn - `menu.html`

Trang thực đơn là nơi hiển thị danh sách món ăn đang có trong hệ thống demo.

Các thành phần chính:

- Ô tìm kiếm phía trên cho phép lọc món theo tên.
- Lưới sản phẩm sử dụng card layout để trình bày món ăn theo dạng trực quan.
- Mỗi card món ăn gồm hình ảnh, tên món, nhãn trạng thái, mô tả ngắn và giá bán.
- Nút "Xem chi tiết" trên mỗi món sẽ mở modal để hiển thị thông tin đầy đủ hơn.

Ý nghĩa UX/UI:

- Cấu trúc lưới giúp người dùng so sánh món nhanh.
- Hình ảnh chiếm diện tích lớn để tăng tính hấp dẫn.
- Modal giảm việc điều hướng sang trang khác, giúp luồng trải nghiệm mượt hơn.

### 3. Trang liên hệ và đặt hàng - `contact.html`

Trang liên hệ đóng vai trò là khu vực mô phỏng gửi yêu cầu đặt món.

Các thành phần chính:

- Phần giới thiệu ngắn về khu vực phục vụ và hotline.
- Biểu mẫu đặt hàng gồm họ tên, số điện thoại, địa chỉ, ghi chú, phương thức thanh toán và thời gian mong muốn.
- Hệ thống kiểm tra hợp lệ cơ bản bằng Bootstrap validation.
- Hộp FAQ dạng accordion để trả lời các câu hỏi thường gặp.

Ý nghĩa UX/UI:

- Form được chia nhóm rõ ràng, dễ nhập và dễ kiểm tra.
- Sử dụng phản hồi trực quan khi form hợp lệ hoặc thiếu thông tin.
- FAQ giúp người dùng hiểu nhanh sản phẩm mà không cần rời trang.

## Phong cách giao diện

Phong cách thiết kế của WFood hướng đến cảm giác trẻ trung, thân thiện và hiện đại.

Các đặc điểm nổi bật:

- Tông màu chính thiên về đỏ cam để gợi liên tưởng đến đồ ăn nhanh, sự ấm áp và năng lượng.
- Nền sáng kết hợp gradient nhẹ để tạo chiều sâu cho giao diện.
- Card bo góc lớn, đổ bóng mềm và khoảng trắng rộng để tăng độ thoáng.
- Hình ảnh món ăn được đặt ở vị trí dễ nhìn, giúp tăng tính trực quan.
- Typography rõ ràng, phân cấp tốt giữa tiêu đề, mô tả và thông tin phụ.

## Responsive Design

Website được xây dựng theo hướng responsive và có thể thích ứng với nhiều kích thước màn hình.

Trên desktop:

- Nội dung được chia cột hợp lý.
- Hero section và card món ăn hiển thị rộng rãi, tận dụng tốt không gian.

Trên tablet:

- Grid sản phẩm tự co giãn về số cột phù hợp.
- Khoảng cách giữa các khối vẫn đảm bảo dễ đọc.

Trên mobile:

- Navbar chuyển sang dạng thu gọn.
- Nút thao tác được mở rộng để dễ bấm.
- Nội dung được xếp dọc, ưu tiên khả năng đọc và cuộn.

## Các chức năng JavaScript

Tệp `assets/js/main.js` xử lý các tương tác chính của website.

### Tự động cập nhật năm ở footer

Khi trang được tải, JavaScript sẽ gán năm hiện tại vào phần footer để tránh phải chỉnh tay mỗi năm.

### Lọc món ăn trên trang thực đơn

Người dùng có thể nhập từ khóa vào ô tìm kiếm. Script sẽ đọc tên món từ thuộc tính `data-name` của từng card và ẩn hoặc hiện món tương ứng.

### Hiển thị chi tiết món bằng modal

Khi bấm nút xem chi tiết, dữ liệu của món như tên, giá, mô tả và ảnh sẽ được lấy từ các `data-* attribute` và đổ vào modal Bootstrap.

### Kiểm tra form đặt hàng

Trang liên hệ sử dụng kiểm tra hợp lệ cơ bản:

- Chặn gửi form nếu còn trường bắt buộc chưa nhập.
- Hiển thị trạng thái hợp lệ theo chuẩn Bootstrap.
- Nếu hợp lệ, hiện thông báo thành công dạng demo rồi reset form.

## Điểm mạnh của dự án

- Bố cục rõ ràng, dễ hiểu và dễ điều hướng.
- Có tính nhất quán giữa các trang.
- Áp dụng Bootstrap đúng mục đích để tăng tốc phát triển giao diện.
- Có tương tác cơ bản giúp website sinh động hơn.
- Phù hợp để làm bài lab trình bày về UI, responsive layout và tương tác phía client.

## Giới hạn hiện tại

Vì đây là dự án demo nên vẫn còn một số giới hạn:

- Chưa có giỏ hàng thật.
- Chưa có backend hoặc cơ sở dữ liệu.
- Chưa lưu đơn hàng thực tế.
- Chưa có tài khoản người dùng và đăng nhập.
- Tìm kiếm món chỉ là lọc phía client theo tên.

## Hướng phát triển trong tương lai

Nếu mở rộng thành dự án hoàn chỉnh, website có thể được phát triển thêm:

- Chức năng thêm món vào giỏ hàng.
- Hệ thống đăng nhập và quản lý người dùng.
- Kết nối backend để lưu đơn hàng.
- Bộ lọc món ăn theo danh mục, giá hoặc trạng thái.
- Trang quản trị để quản lý món ăn.
- Tích hợp thanh toán trực tuyến.
- Kết nối API giao hàng hoặc theo dõi đơn hàng.

## Cách chạy dự án

Vì đây là website tĩnh, có thể chạy rất đơn giản:

1. Mở thư mục `Lab6` trong VS Code hoặc trình quản lý tệp.
2. Mở trực tiếp `index.html` bằng trình duyệt.
3. Hoặc dùng tiện ích như Live Server để xem giao diện ổn định hơn trong quá trình chỉnh sửa.

## Tổng kết

WFood là một bài Lab 6 phù hợp để trình bày kỹ năng thiết kế giao diện web bằng Bootstrap kết hợp với HTML, CSS và JavaScript cơ bản. Dự án cho thấy cách xây dựng một website nhiều trang có định hướng UX/UI rõ ràng, có responsive layout, có tính trực quan cao và có đủ tương tác nền tảng để mô phỏng một sản phẩm đặt đồ ăn thực tế.