const SCENES = {
  start: {
    bg: 'bg-dawn-sea',
    speaker: '',
    text: [
      'Biển còn chìm trong sương. Một chiếc thuyền câu neo xa ngoài khơi, in bóng đen mảnh giữa nền trời cam nhạt đang rạng dần.',
      'Từ chỗ Lam đứng, cảnh tượng đẹp đến mức cô đứng sững lại vài giây — như thể cả buổi sáng chỉ được dựng lên riêng cho khoảnh khắc này.',
    ],
    choices: [{ label: 'Nhìn gần hơn', next: 'start_zoom', zoom: true }],
  },

  start_zoom: {
    bg: 'bg-dawn-sea-close',
    speaker: '',
    text: [
      'Lam bước thêm vài bước xuống ghềnh đá. Ống nhòm mượn từ trạm y tế đưa hình ảnh lại gần hơn.',
      'Trên be thuyền, một người phụ nữ đang cúi người, tay cời một tấm lưới dính vệt sẫm màu. Dáng ngồi của chị run lên từng chặp, không phải vì lạnh.',
      'Cảnh đẹp không biến mất — nhưng nó không còn là cả câu chuyện nữa.',
    ],
    choices: [{ label: 'Tiếp tục vào làng', next: 'village_arrive' }],
  },

  village_arrive: {
    bg: 'bg-village',
    speaker: '',
    text: [
      'Lam là cán bộ y tế — xã hội vừa được điều về xóm chài này, phụ trách đợt khám sức khỏe định kỳ và thăm hộ gia đình trong quý.',
      'Xóm nhỏ, nhà cửa san sát, ai cũng biết chuyện của ai — hoặc nghĩ là mình biết.',
    ],
    choices: [{ label: 'Tiếp tục', next: 'meet_thao_first' }],
  },

  meet_thao_first: {
    bg: 'bg-village',
    speaker: 'Trưởng thôn',
    text: [
      '"Nhà chị Thảo với anh Tùng đó cô. Ngoan nhất xóm này. Anh Tùng đi biển giỏi có tiếng, chị Thảo hiền, ba đứa con đều ngoan."',
      'Ông nói thêm, giọng chùng xuống một chút: "Dạo này biển mất mùa, ảnh hay nhậu hơn trước. Nhưng vợ chồng người ta, chắc cũng chỉ nhất thời."',
    ],
    choices: [{ label: 'Đến khám sức khỏe định kỳ cho chị Thảo', next: 'clinic_checkup' }],
  },

  clinic_checkup: {
    bg: 'bg-clinic',
    speaker: '',
    text: [
      'Giữa trưa nắng, chị Thảo vẫn mặc áo dài tay khi đến trạm y tế. Khi đo huyết áp, tay áo hơi xô lên — Lam thấy một vệt bầm tím đã ngả vàng ở cổ tay.',
      '"Va vào be thuyền lúc kéo lưới ấy mà," chị Thảo cười nhẹ, kéo tay áo xuống ngay sau đó.',
    ],
    choices: [
      { label: 'Hỏi thẳng: "Có phải anh Tùng đánh chị không?"', next: 'ask_directly', set: { trust: -1, asked: true } },
      { label: 'Hỏi khéo, nhẹ nhàng tạo niềm tin trước', next: 'ask_gently', set: { trust: 1, asked: true } },
      { label: 'Không hỏi thêm, chỉ ghi chú vào hồ sơ', next: 'stay_silent', set: { missed: true } },
    ],
  },

  ask_directly: {
    bg: 'bg-clinic',
    speaker: 'Chị Thảo',
    text: [
      '"Không, không có đâu cô ơi!" — chị đứng bật dậy, giọng gấp gáp khác hẳn lúc trước.',
      'Từ hôm đó, mỗi lần Lam ghé qua, chị Thảo đều tìm cớ bận, ánh mắt né tránh.',
    ],
    choices: [{ label: 'Tiếp tục', next: 'neighbor_ba_sau' }],
  },

  ask_gently: {
    bg: 'bg-clinic',
    speaker: 'Chị Thảo',
    text: [
      'Chị im lặng hồi lâu, mắt nhìn xuống đôi tay đang xoắn vạt áo.',
      '"Đôi khi ảnh nóng tính... cũng vì lo cho vợ con thôi cô à. Không phải lúc nào cũng vậy đâu."',
      'Câu nói bỏ lửng, nhưng cánh cửa đã hé mở một khe nhỏ.',
    ],
    choices: [{ label: 'Tiếp tục', next: 'neighbor_ba_sau' }],
  },

  stay_silent: {
    bg: 'bg-clinic',
    speaker: '',
    text: [
      'Lam ghi vào hồ sơ: "Vết bầm cổ tay, chưa rõ nguyên nhân" — rồi gấp sổ lại.',
      'Có một khoảnh khắc để hỏi thêm một câu. Khoảnh khắc đó đã qua.',
    ],
    choices: [{ label: 'Tiếp tục', next: 'neighbor_ba_sau' }],
  },

  neighbor_ba_sau: {
    bg: 'bg-village',
    speaker: 'Bà Sáu (hàng xóm)',
    text: [
      '"Chuyện vợ chồng người ta, đèn nhà ai nấy rạng con ơi," bà Sáu nói khi Lam hỏi thăm, tay vẫn thoăn thoắt vá lưới. "Ngày xưa cả xóm này ai chẳng vậy, riết rồi cũng êm."',
    ],
    choices: [
      { label: '"Đây không còn là chuyện riêng khi có người bị tổn thương, bác ạ"', next: 'storm_night', set: { challenged: true } },
      { label: 'Im lặng, không tranh luận với bà', next: 'storm_night', set: { challenged: false } },
    ],
  },

  storm_night: {
    bg: 'bg-storm-sea',
    speaker: '',
    text: [
      'Mùa biển động kéo dài. Thuyền anh Tùng về tay không mấy chuyến liền, nợ tiền dầu tiền lưới chất lên. Anh nhậu nhiều hơn, về nhà muộn hơn.',
      'Đêm mưa lớn, tiếng bát đĩa vỡ vọng ra từ căn nhà cuối xóm. Một lát sau, có tiếng gõ cửa gấp gáp nhà Lam — bé Su, con gái út của chị Thảo, đứng ướt sũng, mắt đỏ hoe.',
      '"Cô ơi... ba với mẹ con..."',
    ],
    choices: [
      { label: 'Chạy đến nhà can thiệp ngay', next: 'outcome_direct', set: { direct: true } },
      { label: 'Gọi công an xã đến can thiệp', next: 'outcome_police', set: { police: true } },
      { label: 'Gọi đường dây nóng Hội Phụ nữ xin tư vấn khẩn', next: 'outcome_hotline', set: { hotline: true } },
    ],
  },

  outcome_direct: {
    bg: 'bg-house-night',
    speaker: '',
    text: [
      'Lam chạy đến, đứng chắn giữa hai người, giọng cố giữ bình tĩnh dù tim đập dồn. Anh Tùng sững lại khi thấy người ngoài, cơn giận hạ nhiệt dần.',
      'Đêm đó không có ai bị thương thêm. Nhưng sáng hôm sau, chị Thảo tránh mặt Lam — như thể việc bị nhìn thấy còn đau hơn cả trận cãi vã.',
    ],
    choices: [{ label: 'Tiếp tục', next: 'aftermath' }],
  },

  outcome_police: {
    bg: 'bg-house-night',
    speaker: '',
    text: [
      'Công an xã đến, lập biên bản, nhắc nhở anh Tùng rồi về. Không ai bị tạm giữ — "chuyện gia đình, để họ tự giải quyết".',
      'Chị Thảo nghe tin hàng xóm đồn ầm ĩ cả xóm, càng thêm lo sợ điều tiếng và sợ bị trả đũa sau khi mọi người rời đi.',
    ],
    choices: [{ label: 'Tiếp tục', next: 'aftermath' }],
  },

  outcome_hotline: {
    bg: 'bg-house-night',
    speaker: 'Chị Hạnh (Hội Phụ nữ xã)',
    text: [
      'Qua điện thoại, chị Hạnh hướng dẫn Lam cách đến gần một cách an toàn — không đối đầu trực diện, không phán xét, chỉ đảm bảo đêm đó không ai gặp nguy hiểm.',
      '"Ngày mai gặp chị ấy riêng, không có ai khác. Đừng để chị ấy phải chọn giữa gia đình và mình, ngay từ câu đầu tiên."',
    ],
    choices: [{ label: 'Tiếp tục', next: 'aftermath', set: { safe: true } }],
  },

  aftermath: {
    bg: 'bg-house-day',
    speaker: 'Chị Thảo',
    text: [
      '"Cô đừng lo cho tôi nhiều quá," chị Thảo nói, mắt nhìn ra khoảng sân nắng. "Ảnh vốn không phải người xấu. Chỉ tại biển dạo này bạc quá."',
      '"Tôi mà đi, ba đứa nhỏ lấy ai lo. Ảnh say thì vậy, chứ tỉnh ra thương vợ thương con lắm. Với lại... đi đâu bây giờ cô."',
      'Không có câu trả lời nào dễ dàng ở đây — chỉ có một người phụ nữ đang cân đo giữa những nỗi sợ khác nhau.',
    ],
    choices: [
      { label: 'Tôn trọng quyết định của chị, để lại đường dây liên hệ lâu dài', next: 'ending_support', set: { respected: true } },
      { label: 'Thúc giục chị rời đi ngay vì quá nguy hiểm', next: 'ending_forced', set: { forced: true } },
    ],
  },

  ending_support: {
    bg: 'bg-calm-dawn',
    speaker: '',
    text: (state) => {
      const lines = [
        'Chị Thảo chưa rời đi. Nhưng từ hôm đó, chị có số điện thoại của Lam và của chị Hạnh lưu sẵn trong máy — một cánh cửa để ngỏ, dù chưa bước qua.',
        'Bé Su được cô giáo chủ nhiệm để mắt tới nhiều hơn. Lam vẫn ghé thăm mỗi tuần, không thúc ép, chỉ ở đó.',
      ];
      if (state.safe) {
        lines.push('Vì có người hướng dẫn đúng cách ngay từ đầu, niềm tin giữa họ không bị đánh đổi lấy một quyết định vội vàng.');
      }
      lines.push('Không phải một cái kết trọn vẹn. Nhưng là một đốm sáng nhỏ, thật, giữa những gì còn dang dở.');
      return lines;
    },
    choices: [{ label: 'Tiếp tục', next: 'epilogue' }],
  },

  ending_forced: {
    bg: 'bg-calm-dawn',
    speaker: '',
    text: [
      'Chị Thảo im lặng nghe Lam nói, rồi khẽ gật đầu cho qua chuyện. Tuần sau, chị đổi giờ khám để tránh gặp Lam.',
      'Ba tháng sau, Lam nghe tin gia đình vẫn ở đó, mọi thứ trông "bình thường" như cũ — chỉ là không còn ai hỏi han chị được nữa.',
      'Muốn giúp một người không có nghĩa là được quyền quyết định thay họ. Đôi khi, thúc ép chỉ đẩy cánh cửa khép chặt hơn.',
    ],
    choices: [{ label: 'Tiếp tục', next: 'epilogue' }],
  },

  epilogue: {
    bg: 'bg-calm-dawn',
    speaker: '',
    text: [
      'Sáng nay biển lại phẳng lặng, chiếc thuyền quen thuộc lại neo ngoài xa, đẹp như buổi đầu Lam đến đây.',
      'Nhìn từ xa, mọi thứ vẫn vậy. Chỉ có Lam là đã học được rằng vẻ đẹp của một khung cảnh và sự thật bên trong nó là hai điều khác nhau — và đôi khi, việc dũng cảm nhất không phải là nhìn xa cho đẹp, mà là dám nhìn gần.',
    ],
    choices: [{ label: 'Xem lại từ đầu', next: 'start' }],
    isEnding: true,
  },
};

const sceneBg = document.getElementById('scene-bg');
const speakerEl = document.getElementById('speaker');
const storyTextEl = document.getElementById('story-text');
const choicesEl = document.getElementById('choices');
const voiceToggleBtn = document.getElementById('voice-toggle');
const hotlineFooter = document.getElementById('hotline-footer');

const state = {};
let voiceEnabled = true;

function pickVietnameseVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  return voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('vi')) || null;
}

function speak(lines) {
  if (!voiceEnabled || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const text = lines.join(' ');
  const utterance = new SpeechSynthesisUtterance(text);
  const viVoice = pickVietnameseVoice();
  if (viVoice) utterance.voice = viVoice;
  utterance.lang = 'vi-VN';
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

function render(nodeId, opts = {}) {
  const node = SCENES[nodeId];
  if (!node) return;

  sceneBg.className = '';
  void sceneBg.offsetWidth;
  sceneBg.classList.add(node.bg);
  if (opts.zoom) sceneBg.classList.add('zoomed');

  const lines = typeof node.text === 'function' ? node.text(state) : node.text;

  speakerEl.textContent = node.speaker || '';
  storyTextEl.innerHTML = '';
  lines.forEach((line) => {
    const p = document.createElement('p');
    p.textContent = line;
    storyTextEl.appendChild(p);
  });

  choicesEl.innerHTML = '';
  node.choices.forEach((choice) => {
    const btn = document.createElement('button');
    btn.textContent = choice.label;
    btn.addEventListener('click', () => {
      if (choice.set) Object.assign(state, choice.set);
      render(choice.next, { zoom: !!choice.zoom });
    });
    choicesEl.appendChild(btn);
  });

  if (node.isEnding) {
    hotlineFooter.classList.remove('hidden');
  }

  speak(lines);
}

voiceToggleBtn.addEventListener('click', () => {
  voiceEnabled = !voiceEnabled;
  voiceToggleBtn.textContent = `🔊 Giọng đọc: ${voiceEnabled ? 'Bật' : 'Tắt'}`;
  if (!voiceEnabled && window.speechSynthesis) window.speechSynthesis.cancel();
});

if (window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {};
}

render('start');
