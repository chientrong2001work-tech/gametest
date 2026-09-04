# Nhìn Gần

Game 3D đi lại được, chơi ngay trong trình duyệt (HTML5/JS + [three.js](https://threejs.org/), không cần cài đặt), lấy tinh thần từ truyện ngắn "Chiếc thuyền ngoài xa" của Nguyễn Minh Châu: sự tương phản giữa vẻ đẹp nhìn từ xa và sự thật khi nhìn gần.

Chủ đề: **bạo lực gia đình** — một vấn nạn có thật ở Việt Nam. Đây là câu chuyện gốc, nhân vật và cốt truyện hoàn toàn mới, không sao chép nội dung tác phẩm gốc — chỉ lấy cảm hứng ở cấu trúc "nhìn xa – đẹp, nhìn gần – thật" và sự phức tạp trong lý do nạn nhân không rời đi.

Người chơi vào vai Lam, cán bộ y tế — xã hội mới về một xóm chài low-poly, tự do đi lại trong không gian 3D, đến gần từng điểm cốt truyện được đánh dấu để câu chuyện tiếp diễn, và phải lựa chọn cách tiếp cận phù hợp ở cao trào.

## Chạy thử

Mở trực tiếp file `index.html` bằng trình duyệt (khuyến khích Chrome/Edge để có giọng đọc tiếng Việt tốt nhất), hoặc chạy server tĩnh:

```bash
npx serve .
```

## Cách chơi

- **WASD** hoặc phím mũi tên để di chuyển, **chuột** để nhìn quanh (bấm vào màn hình để khóa con trỏ).
- **E** để tương tác khi thấy gợi ý "Nhấn E để lại gần" — một điểm sáng nhỏ trên bản đồ luôn đánh dấu nơi cần đến tiếp theo.
- Nút 🔊 ở góc trên bật/tắt giọng đọc tự động (dùng giọng đọc có sẵn của trình duyệt/hệ điều hành qua Web Speech API, không cần file âm thanh ngoài). Tiếng bước chân, tiếng gió biển, tiếng sấm được tổng hợp trực tiếp bằng Web Audio API.
- Không có yếu tố thắng/thua hay tính điểm — một lựa chọn duy nhất ở cao trào dẫn đến hai kết cục khác nhau, phản ánh sự phức tạp thực tế của vấn đề.
- Cuối truyện có thông tin đường dây nóng hỗ trợ thật dành cho người đang gặp bạo lực gia đình.

## Cấu trúc

- `index.html` — canvas 3D + toàn bộ lớp HUD (phụ đề, gợi ý tương tác, overlay lựa chọn/kết thúc)
- `style.css` — giao diện HUD, không có hình ảnh ngoài
- `script.js` — dựng thế giới 3D bằng three.js (nhà cửa, thuyền, biển đều là hình khối cơ bản, không dùng model/texture ngoài), điều khiển góc nhìn thứ nhất, va chạm đơn giản, hệ thống điểm cốt truyện tuần tự, hiệu ứng bão đêm, âm thanh tổng hợp qua Web Audio API, giọng đọc qua `speechSynthesis`
- `vendor/three.min.js` — thư viện three.js r128 (giấy phép MIT), đóng gói sẵn trong repo để chạy hoàn toàn offline, không phụ thuộc CDN
