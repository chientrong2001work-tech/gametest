const MESSAGE_POOL = [
  {
    channel: '📞',
    sender: 'Số lạ: 0909xxxxxx',
    text: '"Tôi là điều tra viên công an. Anh/chị đang liên quan vụ án rửa tiền, cần chuyển tiền vào tài khoản "tạm giữ" để xác minh, tuyệt đối không nói với ai."',
    isScam: true,
    tip: 'Công an KHÔNG BAO GIỜ làm việc qua điện thoại hay yêu cầu chuyển tiền để "xác minh". Đây là chiêu giả danh công an rất phổ biến.',
  },
  {
    channel: '💬',
    sender: 'Ngân hàng ABC (SMS)',
    text: '"Tai khoan cua quy khach da bi khoa. Bam vao link sau de xac thuc ngay: bit.ly/xacthuc-abc"',
    isScam: true,
    tip: 'Ngân hàng thật không gửi link rút gọn lạ yêu cầu "xác thực khẩn". Đây là link giả để đánh cắp thông tin đăng nhập.',
  },
  {
    channel: '📞',
    sender: 'Số lạ',
    text: '"Con đang cấp cứu ở bệnh viện, mất điện thoại nên mượn máy người khác gọi, mẹ chuyển gấp 20 triệu vào số tài khoản này giúp con!"',
    isScam: true,
    tip: 'Giả danh người thân gặp nạn để yêu cầu chuyển tiền gấp. Hãy luôn gọi lại số quen thuộc của con cháu để xác minh trước.',
  },
  {
    channel: '💬',
    sender: 'Trung tâm khuyến mãi',
    text: '"Chúc mừng quý khách đã trúng thưởng xe SH trị giá 80 triệu! Vui lòng nộp phí nhận thưởng 500.000đ để làm thủ tục."',
    isScam: true,
    tip: 'Không có giải thưởng thật nào bắt người trúng thưởng đóng phí trước. Đây là chiêu lừa "trúng thưởng ảo" kinh điển.',
  },
  {
    channel: '💬',
    sender: 'Nhóm đầu tư "Tài chính 4.0"',
    text: '"Chỉ cần nạp 5 triệu, cam kết lãi 30%/tháng, không rủi ro, rút tiền bất cứ lúc nào!"',
    isScam: true,
    tip: 'Lãi suất "khủng, không rủi ro" là dấu hiệu kinh điển của mô hình lừa đảo đa cấp/Ponzi.',
  },
  {
    channel: '📞',
    sender: 'Shipper (số lạ)',
    text: '"Đơn hàng của chị bị thất lạc ở kho, chị chuyển khoản trước 300.000đ để bên em đền bù và gửi lại hàng mới."',
    isScam: true,
    tip: 'Đơn vị giao hàng thật không yêu cầu khách chuyển khoản "đền bù" qua điện thoại. Hãy kiểm tra lại trên app đặt hàng chính thức.',
  },
  {
    channel: '💬',
    sender: 'Dịch vụ công (giả mạo)',
    text: '"Tài khoản định danh VNeID của bạn sắp bị khóa. Cập nhật ngay tại: dvc-update.info để tránh gián đoạn."',
    isScam: true,
    tip: 'Các cổng dịch vụ công thật đều dùng tên miền .gov.vn, không gửi link lạ yêu cầu "cập nhật gấp".',
  },
  {
    channel: '📞',
    sender: 'Cuộc gọi tự động',
    text: '"Thuê bao của quý khách có liên quan đến đường dây rửa tiền xuyên quốc gia. Bấm phím 9 để gặp công an giải quyết."',
    isScam: true,
    tip: 'Cuộc gọi tự động dọa dẫm rồi yêu cầu bấm phím là kịch bản lừa đảo hàng loạt, không phải quy trình của cơ quan công an.',
  },
  {
    channel: '💬',
    sender: 'Vay nhanh 24h',
    text: '"Vay tới 50 triệu, không cần thế chấp, giải ngân trong 5 phút. Chỉ cần đóng phí bảo hiểm khoản vay 800.000đ trước khi nhận tiền."',
    isScam: true,
    tip: 'Yêu cầu đóng phí trước khi giải ngân là dấu hiệu lừa đảo vay tiền online rất phổ biến hiện nay.',
  },
  {
    channel: '💬',
    sender: 'Ngân hàng ABC (SMS)',
    text: '"OTP giao dịch của quý khách là 386219. Vui lòng không cung cấp mã này cho bất kỳ ai kể cả nhân viên ngân hàng."',
    isScam: false,
    tip: 'Đây là tin nhắn OTP thật, chỉ mang tính thông báo. Tin nhắn ngân hàng thật luôn nhắc không chia sẻ mã OTP.',
  },
  {
    channel: '📞',
    sender: 'Con gái (đã lưu số)',
    text: '"Mẹ ơi tối nay con về ăn cơm nhé, mẹ nấu canh chua giúp con với!"',
    isScam: false,
    tip: 'Cuộc gọi từ số đã lưu, nội dung đời thường, không liên quan tiền bạc hay yêu cầu khẩn cấp — hoàn toàn an toàn.',
  },
  {
    channel: '💬',
    sender: 'Điện lực EVN',
    text: '"Hóa đơn tiền điện tháng này của quý khách là 452.000đ, vui lòng thanh toán trước ngày 25 qua các kênh chính thức."',
    isScam: false,
    tip: 'Thông báo hóa đơn thông thường, không kèm link lạ, không hối thúc chuyển khoản gấp — là tin nhắn an toàn.',
  },
  {
    channel: '💬',
    sender: 'Bạn Tư (Zalo)',
    text: '"Lâu rồi không gặp, dạo này bà khỏe không? Cuối tuần rảnh qua nhà tôi uống trà nhé."',
    isScam: false,
    tip: 'Tin nhắn hỏi thăm bình thường từ người quen, không có yêu cầu chuyển tiền hay bấm link — an toàn.',
  },
  {
    channel: '📞',
    sender: 'Shipper Giao Hàng Nhanh',
    text: '"Chào chị, em giao đơn hàng quần áo chị đặt hôm qua, tổng tiền thu hộ là 250.000đ, chị xuống nhận giúp em."',
    isScam: false,
    tip: 'Giao đúng đơn đã đặt, thu đúng số tiền COD ghi trên đơn hàng — đây là giao dịch bình thường.',
  },
  {
    channel: '💬',
    sender: 'Tổ dân phố',
    text: '"Thông báo: 8h sáng mai khu phố cắt nước để sửa đường ống, bà con chú ý trữ nước dùng."',
    isScam: false,
    tip: 'Thông báo dân sinh thông thường từ tổ dân phố, không liên quan tài chính — an toàn.',
  },
];

const RECAP_TIPS = [
  'Không ai có thẩm quyền yêu cầu chuyển tiền qua điện thoại để "xác minh" hay "điều tra".',
  'Luôn gọi lại số điện thoại quen thuộc của người thân để xác nhận trước khi chuyển tiền gấp.',
  'Không bấm vào link lạ trong tin nhắn, kể cả khi tin nhắn có vẻ đến từ ngân hàng hay cơ quan nhà nước.',
  'Không có khoản đầu tư nào "lãi cao, không rủi ro" — đó luôn là dấu hiệu lừa đảo.',
  'Không đóng bất kỳ khoản phí nào để "nhận thưởng" hoặc "giải ngân khoản vay".',
  'Không chia sẻ mã OTP với bất kỳ ai, kể cả người tự xưng là nhân viên ngân hàng.',
];

const canvasCard = document.getElementById('message-card');
const channelIconEl = document.getElementById('channel-icon');
const senderEl = document.getElementById('message-sender');
const textEl = document.getElementById('message-text');
const timerBar = document.getElementById('timer-bar');
const feedbackEl = document.getElementById('feedback');
const moneyEl = document.getElementById('money');
const levelEl = document.getElementById('level');
const livesEl = document.getElementById('lives');
const scamBtn = document.getElementById('scam-btn');
const safeBtn = document.getElementById('safe-btn');
const startOverlay = document.getElementById('start-overlay');
const startBtn = document.getElementById('start-btn');
const gameoverOverlay = document.getElementById('gameover-overlay');
const gameoverTitle = document.getElementById('gameover-title');
const finalStatsEl = document.getElementById('final-stats');
const recapListEl = document.getElementById('recap-list');
const restartBtn = document.getElementById('restart-btn');

const STARTING_MONEY = 10_000_000;
const STARTING_LIVES = 3;
const MAX_DURATION_MS = 8000;
const MIN_DURATION_MS = 3000;

let state;
let timerInterval = null;
let deciding = false;
let usedIndices = [];

function shuffledPool() {
  const pool = [...MESSAGE_POOL];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool;
}

function formatMoney(amount) {
  return amount.toLocaleString('vi-VN') + 'đ';
}

function initState() {
  state = {
    money: STARTING_MONEY,
    lives: STARTING_LIVES,
    level: 1,
    correctStreak: 0,
    correctTotal: 0,
    roundsTotal: 0,
    running: true,
  };
  usedIndices = shuffledPool();
}

function updateStatsUI() {
  moneyEl.textContent = `Tiền tiết kiệm của Bà: ${formatMoney(Math.max(0, state.money))}`;
  levelEl.textContent = `Cấp: ${state.level}`;
  livesEl.textContent = '❤️'.repeat(state.lives) + '🖤'.repeat(STARTING_LIVES - state.lives);
}

function currentDurationMs() {
  const reduced = MAX_DURATION_MS - (state.level - 1) * 500;
  return Math.max(MIN_DURATION_MS, reduced);
}

function nextMessage() {
  if (!state.running) return;
  if (usedIndices.length === 0) usedIndices = shuffledPool();
  const item = usedIndices.pop();
  state.currentItem = item;
  deciding = true;

  channelIconEl.textContent = item.channel;
  senderEl.textContent = item.sender;
  textEl.textContent = item.text;
  feedbackEl.classList.add('hidden');
  feedbackEl.classList.remove('correct', 'wrong');

  const duration = currentDurationMs();
  const startTime = performance.now();
  timerBar.style.width = '100%';

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    const elapsed = performance.now() - startTime;
    const pct = Math.max(0, 1 - elapsed / duration);
    timerBar.style.width = `${pct * 100}%`;
    if (elapsed >= duration) {
      clearInterval(timerInterval);
      if (deciding) handleTimeout();
    }
  }, 50);
}

function handleTimeout() {
  deciding = false;
  const item = state.currentItem;
  if (item.isScam) {
    applyMissedScam(item);
  } else {
    showFeedback(false, `Tin nhắn đã trôi qua — không sao, đây là tin an toàn nên không có thiệt hại.`);
    proceedAfterDelay();
  }
}

function applyMissedScam(item) {
  const loss = 1_000_000 + Math.floor(Math.random() * 3) * 1_000_000;
  state.money -= loss;
  state.lives -= 1;
  state.correctStreak = 0;
  updateStatsUI();
  showFeedback(false, `❌ Đây là LỪA ĐẢO! Bà đã mất ${formatMoney(loss)}. ${item.tip}`);
  canvasCard.classList.add('shake');
  setTimeout(() => canvasCard.classList.remove('shake'), 300);
  checkGameOver();
}

function showFeedback(correct, text) {
  feedbackEl.textContent = text;
  feedbackEl.classList.remove('hidden');
  feedbackEl.classList.toggle('correct', correct);
  feedbackEl.classList.toggle('wrong', !correct);
}

function proceedAfterDelay() {
  if (!state.running) return;
  setTimeout(() => {
    if (state.running) nextMessage();
  }, 1600);
}

function checkGameOver() {
  if (state.lives <= 0 || state.money <= 0) {
    endGame(false);
  }
}

function handleDecision(choseScam) {
  if (!deciding || !state.running) return;
  deciding = false;
  clearInterval(timerInterval);

  const item = state.currentItem;
  state.roundsTotal += 1;
  const correct = choseScam === item.isScam;

  if (correct) {
    state.correctTotal += 1;
    state.correctStreak += 1;
    if (state.correctStreak > 0 && state.correctStreak % 5 === 0) {
      state.level += 1;
    }
    if (item.isScam) {
      showFeedback(true, `✅ Chính xác, bạn đã chặn kịp lừa đảo! ${item.tip}`);
    } else {
      showFeedback(true, `✅ Chính xác, đây là tin an toàn. ${item.tip}`);
    }
    updateStatsUI();
  } else if (item.isScam) {
    applyMissedScam(item);
  } else {
    showFeedback(false, `⚠️ Đây là tin AN TOÀN, bạn chặn nhầm rồi. ${item.tip}`);
    state.correctStreak = 0;
  }

  updateStatsUI();
  checkGameOver();
  if (state.running) proceedAfterDelay();
}

function endGame(won) {
  state.running = false;
  clearInterval(timerInterval);
  deciding = false;

  const accuracy = state.roundsTotal > 0
    ? Math.round((state.correctTotal / state.roundsTotal) * 100)
    : 0;

  gameoverTitle.textContent = state.money <= 0
    ? 'Bà đã mất hết tiền tiết kiệm!'
    : 'Trò chơi kết thúc';
  finalStatsEl.textContent = `Số dư còn lại: ${formatMoney(Math.max(0, state.money))} · Độ chính xác: ${accuracy}% · Đã xử lý ${state.roundsTotal} tin nhắn.`;

  recapListEl.innerHTML = '';
  RECAP_TIPS.forEach((tip) => {
    const li = document.createElement('li');
    li.textContent = tip;
    recapListEl.appendChild(li);
  });

  gameoverOverlay.classList.remove('hidden');
}

function startGame() {
  startOverlay.classList.add('hidden');
  gameoverOverlay.classList.add('hidden');
  initState();
  updateStatsUI();
  nextMessage();
}

scamBtn.addEventListener('click', () => handleDecision(true));
safeBtn.addEventListener('click', () => handleDecision(false));
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);
