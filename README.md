# Nhìn Gần

Game kể chuyện 2D (HTML5/JS thuần, hình ảnh vẽ hoàn toàn bằng CSS, giọng đọc dùng Web Speech API có sẵn của trình duyệt) lấy tinh thần từ truyện ngắn "Chiếc thuyền ngoài xa" của Nguyễn Minh Châu: sự tương phản giữa vẻ đẹp nhìn từ xa và sự thật khi nhìn gần.

Chủ đề: **bạo lực gia đình** — một vấn nạn có thật ở Việt Nam. Đây là câu chuyện gốc, nhân vật và cốt truyện hoàn toàn mới, không sao chép nội dung tác phẩm gốc — chỉ lấy cảm hứng ở cấu trúc "nhìn xa – đẹp, nhìn gần – thật" và sự phức tạp trong lý do nạn nhân không rời đi.

Người chơi vào vai Lam, cán bộ y tế — xã hội mới về một xóm chài, dần phát hiện sự thật đằng sau một gia đình tưởng chừng êm ấm, và phải lựa chọn cách tiếp cận phù hợp.

## Chạy thử

Mở trực tiếp file `index.html` bằng trình duyệt (khuyến khích Chrome/Edge để có giọng đọc tiếng Việt tốt nhất), hoặc chạy server tĩnh:

```bash
npx serve .
```

## Cách chơi

- Đọc từng đoạn truyện, bấm vào các lựa chọn để dẫn dắt câu chuyện.
- Nút 🔊 ở đầu trang bật/tắt giọng đọc tự động (dùng giọng đọc có sẵn của trình duyệt/hệ điều hành, không cần file âm thanh ngoài).
- Không có yếu tố thắng/thua hay tính điểm — các lựa chọn dẫn đến những kết cục khác nhau, phản ánh sự phức tạp thực tế của vấn đề.
- Cuối truyện có thông tin đường dây nóng hỗ trợ thật dành cho người đang gặp bạo lực gia đình.

## Cấu trúc

- `index.html` — khung giao diện: sân khấu cảnh, khối thoại, lựa chọn, footer đường dây nóng
- `style.css` — toàn bộ hình ảnh nền (biển sương sớm, xóm chài, phòng khám, đêm bão...) vẽ bằng CSS gradient/shape, không dùng ảnh ngoài
- `script.js` — engine kể chuyện dạng cây cảnh (scene graph) với nhánh lựa chọn, cờ trạng thái ảnh hưởng đoạn kết, tích hợp giọng đọc qua `speechSynthesis`
