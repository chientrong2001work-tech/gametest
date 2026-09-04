# Tỉnh Táo! – Chống Lừa Đảo

Game web đơn giản (HTML5/JS thuần) hướng tới một vấn nạn có thật ở Việt Nam: **lừa đảo qua điện thoại/tin nhắn nhắm vào người lớn tuổi** (giả danh công an, giả ngân hàng, giả người thân cấp cứu, trúng thưởng ảo, đầu tư lãi khủng, vay tiền thu phí trước...).

Người chơi vào vai người giúp bà sàng lọc cuộc gọi/tin nhắn: chặn kịp lừa đảo để giữ tiền tiết kiệm của bà, nhưng đừng chặn nhầm tin nhắn thật từ người thân, ngân hàng, hàng xóm.

Đây là game độc lập, không liên quan đến cốt truyện hay cách chơi của bất kỳ game nào khác — chỉ lấy cảm hứng ở tinh thần "phản ánh vấn nạn thật tại Việt Nam".

## Chạy thử

Mở trực tiếp file `index.html` bằng trình duyệt, hoặc chạy một server tĩnh:

```bash
npx serve .
```

## Cách chơi

- Mỗi lượt, một cuộc gọi/tin nhắn xuất hiện kèm thanh thời gian đếm ngược.
- Bấm **🚫 Đây là lừa đảo** nếu nghi ngờ, hoặc **✅ Tin này an toàn** nếu tin đáng tin.
- Bỏ lỡ một tin lừa đảo thật (chọn sai hoặc hết giờ) → mất tiền tiết kiệm của bà và mất 1 mạng.
- Chặn nhầm tin an toàn → không mất tiền nhưng mất chuỗi điểm.
- Sau mỗi 5 lượt đúng liên tiếp, độ khó tăng (thời gian phản ứng ngắn lại).
- Hết mạng hoặc hết tiền tiết kiệm → kết thúc game, hiển thị bảng tổng kết kèm các dấu hiệu nhận biết lừa đảo để ghi nhớ.

## Cấu trúc

- `index.html` — khung giao diện: thẻ tin nhắn, thanh thời gian, nút hành động, overlay bắt đầu/kết thúc
- `style.css` — giao diện tối giản kiểu ứng dụng điện thoại
- `script.js` — logic game: ngân hàng tình huống thật, vòng lặp lượt chơi, tính điểm/mạng/độ khó, bảng tổng kết
