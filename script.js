/* ---------- Story content ---------- */

const STORY = {
  boat_far: {
    speaker: '',
    lines: [
      'Biển còn chìm trong sương. Một chiếc thuyền câu neo ngoài khơi, in bóng đen mảnh giữa nền trời cam nhạt đang rạng dần.',
      'Cảnh tượng đẹp đến mức Lam đứng sững lại vài giây — như thể cả buổi sáng chỉ được dựng lên riêng cho khoảnh khắc này.',
    ],
    dolly: true,
  },
  boat_close: {
    speaker: '',
    lines: [
      'Lam bước lại gần, mượn ống nhòm từ trạm y tế đưa hình ảnh lại gần hơn.',
      'Trên be thuyền, một người phụ nữ đang cúi người, tay cời một tấm lưới dính vệt sẫm màu. Dáng ngồi của chị run lên từng chặp, không phải vì lạnh.',
      'Cảnh đẹp không biến mất — nhưng nó không còn là cả câu chuyện nữa. Lam quay vào làng, bắt đầu ca trực đầu tiên của mình.',
    ],
    unlockNext: true,
  },
  clinic: {
    speaker: '',
    lines: [
      'Giữa trưa nắng, chị Thảo vẫn mặc áo dài tay khi đến khám. Khi đo huyết áp, tay áo hơi xô lên — một vệt bầm tím đã ngả vàng ở cổ tay.',
      '"Va vào be thuyền lúc kéo lưới ấy mà," chị cười nhẹ, kéo tay áo xuống ngay sau đó.',
      'Lam hỏi khẽ, không truy vấn. Chị Thảo im lặng hồi lâu rồi khẽ nói: "Đôi khi ảnh nóng tính... cũng vì lo cho vợ con thôi." Câu nói bỏ lửng, nhưng cánh cửa đã hé một khe nhỏ.',
    ],
  },
  neighbor: {
    speaker: 'Bà Sáu (hàng xóm)',
    lines: [
      '"Chuyện vợ chồng người ta, đèn nhà ai nấy rạng con ơi," bà nói khi Lam hỏi thăm, tay vẫn thoăn thoắt vá lưới.',
      '"Ngày xưa cả xóm này ai chẳng vậy, riết rồi cũng êm."',
      'Lam không tranh luận, nhưng câu nói ấy cứ ở lại trong đầu suốt quãng đường về.',
    ],
  },
  storm: {
    speaker: '',
    lines: [
      'Mùa biển động kéo dài. Thuyền anh Tùng về tay không mấy chuyến liền, nợ tiền dầu tiền lưới chất lên. Anh nhậu nhiều hơn, về muộn hơn.',
      'Đêm mưa lớn, tiếng bát đĩa vỡ vọng ra từ căn nhà cuối xóm.',
    ],
  },
  house: {
    speaker: '',
    lines: [
      'Bé Su — con gái út của chị Thảo — đứng ướt sũng trước cửa nhà Lam, mắt đỏ hoe. "Cô ơi... ba với mẹ con..."',
      'Lam gọi cho chị Hạnh ở Hội Phụ nữ xã xin tư vấn khẩn, rồi cùng đến — không đối đầu, chỉ đảm bảo đêm nay không ai gặp nguy hiểm thêm.',
      'Sáng hôm sau, chị Thảo ngồi lặng trong sân nắng. "Ảnh vốn không phải người xấu. Chỉ tại biển dạo này bạc quá. Tôi mà đi, ba đứa nhỏ lấy ai lo."',
    ],
  },
};

const ENDINGS = {
  support: {
    title: 'Một đốm sáng nhỏ',
    lines: [
      'Chị Thảo chưa rời đi. Nhưng từ hôm đó, chị có số điện thoại của Lam và của chị Hạnh lưu sẵn trong máy — một cánh cửa để ngỏ, dù chưa bước qua.',
      'Bé Su được cô giáo chủ nhiệm để mắt tới nhiều hơn. Lam vẫn ghé thăm mỗi tuần, không thúc ép, chỉ ở đó.',
      'Không phải một cái kết trọn vẹn. Nhưng là một đốm sáng nhỏ, thật, giữa những gì còn dang dở.',
    ],
  },
  forced: {
    title: 'Cánh cửa khép lại',
    lines: [
      'Chị Thảo im lặng nghe Lam nói, rồi khẽ gật đầu cho qua chuyện. Tuần sau, chị đổi giờ khám để tránh gặp Lam.',
      'Ba tháng sau, mọi thứ trông "bình thường" như cũ — chỉ là không còn ai hỏi han chị được nữa.',
      'Muốn giúp một người không có nghĩa là được quyền quyết định thay họ. Đôi khi, thúc ép chỉ đẩy cánh cửa khép chặt hơn.',
    ],
  },
};

const EPILOGUE_LINE =
  'Sáng nay biển lại phẳng lặng, chiếc thuyền quen thuộc lại neo ngoài xa, đẹp như buổi đầu Lam đến đây. Nhìn từ xa, mọi thứ vẫn vậy. Chỉ có Lam là đã học được rằng vẻ đẹp của một khung cảnh và sự thật bên trong nó là hai điều khác nhau — và đôi khi, việc dũng cảm nhất không phải là nhìn xa cho đẹp, mà là dám nhìn gần.';

/* ---------- DOM refs ---------- */

const canvas = document.getElementById('scene-canvas');
const voiceToggleBtn = document.getElementById('voice-toggle');
const interactPrompt = document.getElementById('interact-prompt');
const subtitleBox = document.getElementById('subtitle-box');
const subtitleSpeaker = document.getElementById('subtitle-speaker');
const subtitleText = document.getElementById('subtitle-text');
const subtitleContinue = document.getElementById('subtitle-continue');
const choiceOverlay = document.getElementById('choice-overlay');
const choiceText = document.getElementById('choice-text');
const choiceButtons = document.getElementById('choice-buttons');
const startOverlay = document.getElementById('start-overlay');
const startBtn = document.getElementById('start-btn');
const gameoverOverlay = document.getElementById('gameover-overlay');
const gameoverTitle = document.getElementById('gameover-title');
const gameoverText = document.getElementById('gameover-text');
const restartBtn = document.getElementById('restart-btn');

/* ---------- Audio ---------- */

let audioCtx = null;
let ambientGain = null;
let ambientFilter = null;
let voiceEnabled = true;

function initAudio() {
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

  const noiseSource = audioCtx.createBufferSource();
  noiseSource.buffer = noiseBuffer;
  noiseSource.loop = true;

  ambientFilter = audioCtx.createBiquadFilter();
  ambientFilter.type = 'lowpass';
  ambientFilter.frequency.value = 500;

  ambientGain = audioCtx.createGain();
  ambientGain.gain.value = 0.05;

  noiseSource.connect(ambientFilter).connect(ambientGain).connect(audioCtx.destination);
  noiseSource.start();
}

function playFootstep() {
  if (!audioCtx) return;
  const bufferSize = audioCtx.sampleRate * 0.08;
  const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize);

  const src = audioCtx.createBufferSource();
  src.buffer = buffer;
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.frequency.value = 120 + Math.random() * 40;
  const gain = audioCtx.createGain();
  gain.gain.value = 0.35;
  src.connect(filter).connect(gain).connect(audioCtx.destination);
  src.start();
}

function playThunder() {
  if (!audioCtx) return;
  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(180, now);
  osc.frequency.exponentialRampToValueAtTime(35, now + 0.7);
  const gain = audioCtx.createGain();
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(0.5, now + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);
  osc.connect(gain).connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 1.7);
}

function setStormAmbient(active) {
  if (!ambientGain || !ambientFilter) return;
  const now = audioCtx.currentTime;
  ambientGain.gain.linearRampToValueAtTime(active ? 0.14 : 0.05, now + 3);
  ambientFilter.frequency.linearRampToValueAtTime(active ? 900 : 500, now + 3);
}

function speak(lines) {
  if (!voiceEnabled || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(lines.join(' '));
  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith('vi'));
  if (viVoice) utterance.voice = viVoice;
  utterance.lang = 'vi-VN';
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

/* ---------- Three.js world ---------- */

let renderer, scene, camera;
let hemiLight, sunLight, fillLight, lightningLight;
const clock = new THREE.Clock();

const DAWN_FOG = new THREE.Color(0xd9a877);
const STORM_FOG = new THREE.Color(0x15151c);

const buildings = []; // { box: THREE.Box3, mesh }
const WORLD_HALF = 28;
const SEA_Z_LIMIT = 22;

function makeHouse(x, z, w, d, h, wallColor, roofColor) {
  const group = new THREE.Group();
  const wallMat = new THREE.MeshLambertMaterial({ color: wallColor });
  const wall = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), wallMat);
  wall.position.y = h / 2;
  group.add(wall);

  const roofMat = new THREE.MeshLambertMaterial({ color: roofColor });
  const roof = new THREE.Mesh(new THREE.ConeGeometry(Math.max(w, d) * 0.75, h * 0.7, 4), roofMat);
  roof.rotation.y = Math.PI / 4;
  roof.position.y = h + (h * 0.7) / 2;
  group.add(roof);

  group.position.set(x, 0, z);
  scene.add(group);

  const box = new THREE.Box3(
    new THREE.Vector3(x - w / 2, 0, z - d / 2),
    new THREE.Vector3(x + w / 2, h, z + d / 2),
  );
  buildings.push(box);
  return group;
}

function makeBoat(x, z) {
  const group = new THREE.Group();
  const hullMat = new THREE.MeshLambertMaterial({ color: 0x3a2a1e });
  const hull = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.6, 5), hullMat);
  hull.position.y = 0.3;
  group.add(hull);
  const mast = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.05, 3, 6),
    new THREE.MeshLambertMaterial({ color: 0x2a1f18 }),
  );
  mast.position.y = 1.9;
  group.add(mast);
  group.position.set(x, 0, z);
  scene.add(group);
  return group;
}

const MARKER_COLOR = 0x7ce8ff; // bright cyan — reads against both the warm dawn sky and the dark storm sky
let markerGroup = null;
let markerGem = null;
let markerLight = null;
let markerBaseY = 0;

function setMarker(x, z, h) {
  if (markerGroup) scene.remove(markerGroup);
  markerGroup = new THREE.Group();

  const gemHeight = h + 3.2;

  const beam = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.12, gemHeight, 8, 1, true),
    new THREE.MeshBasicMaterial({
      color: MARKER_COLOR,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide,
      depthWrite: false,
    }),
  );
  beam.position.y = gemHeight / 2;
  markerGroup.add(beam);

  const ring = new THREE.Mesh(
    new THREE.RingGeometry(0.7, 0.9, 24),
    new THREE.MeshBasicMaterial({ color: MARKER_COLOR, transparent: true, opacity: 0.6, side: THREE.DoubleSide }),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.03;
  markerGroup.add(ring);

  const gem = new THREE.Mesh(
    new THREE.OctahedronGeometry(0.6),
    new THREE.MeshBasicMaterial({ color: MARKER_COLOR }),
  );
  gem.position.y = gemHeight;
  markerGroup.add(gem);
  markerGem = gem;

  const light = new THREE.PointLight(MARKER_COLOR, 2, 14);
  light.position.y = gemHeight;
  markerGroup.add(light);
  markerLight = light;
  markerBaseY = gemHeight;

  markerGroup.position.set(x, 0, z);
  scene.add(markerGroup);
}

function clearMarker() {
  if (markerGroup) {
    scene.remove(markerGroup);
    markerGroup = null;
    markerGem = null;
    markerLight = null;
  }
}

/* Story points, visited in order */
let points = [];
let currentPointIndex = 0;

function buildWorld() {
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(DAWN_FOG.getHex(), 8, 65);

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 200);
  camera.position.set(0, 1.65, 20);

  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(DAWN_FOG.getHex());

  hemiLight = new THREE.HemisphereLight(0xfff0dd, 0x554433, 1.0);
  scene.add(hemiLight);
  sunLight = new THREE.DirectionalLight(0xffe0b0, 0.85);
  sunLight.position.set(30, 40, 10);
  scene.add(sunLight);
  fillLight = new THREE.AmbientLight(0x334455, 0.25);
  scene.add(fillLight);
  lightningLight = new THREE.PointLight(0xdfe8ff, 0, 120);
  lightningLight.position.set(0, 30, 0);
  scene.add(lightningLight);

  const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(WORLD_HALF * 2.4, WORLD_HALF * 2.4),
    new THREE.MeshLambertMaterial({ color: 0xc9b18a }),
  );
  ground.rotation.x = -Math.PI / 2;
  scene.add(ground);

  const sea = new THREE.Mesh(
    new THREE.PlaneGeometry(140, 80),
    new THREE.MeshLambertMaterial({ color: 0x1c3a55 }),
  );
  sea.rotation.x = -Math.PI / 2;
  sea.position.set(0, -0.02, SEA_Z_LIMIT + 40);
  scene.add(sea);

  makeBoat(0, 15);
  const clinicHouse = makeHouse(-9, -6, 4.5, 4.5, 3, 0x7a8a7a, 0x6a3a30);
  const neighborHouse = makeHouse(9, -6, 4.5, 4.5, 3, 0x8a7a5a, 0x5a3a2a);
  const thaoHouse = makeHouse(0, -22, 5.5, 5.5, 3.4, 0x9a8a6a, 0x4a2a20);

  // decorative, non-interactive houses
  makeHouse(-16, -18, 3.5, 3.5, 2.6, 0x8a7a6a, 0x5a3a2a);
  makeHouse(16, -18, 3.5, 3.5, 2.6, 0x7a7a6a, 0x5a3a2a);

  points = [
    { id: 'boat_far', x: 0, z: 15, radius: 4, h: 1.5, twoPart: 'boat_close' },
    { id: 'clinic', x: -9, z: -6, radius: 4.5, h: 3 },
    { id: 'neighbor', x: 9, z: -6, radius: 4.5, h: 3 },
    { id: 'house', x: 0, z: -22, radius: 5, h: 3.4, storm: true },
  ];

  setMarker(points[0].x, points[0].z, points[0].h);

  window.addEventListener('resize', onResize);
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

/* ---------- Controls ---------- */

const keys = {};
let yaw = Math.PI; // facing -z (into the village) at start
let pitch = 0;
let uiBlocking = false;
let stormActive = false;
let stormTimer = 0;
let footstepTimer = 0;

document.addEventListener('keydown', (e) => {
  keys[e.key.toLowerCase()] = true;
  if (e.key.toLowerCase() === 'e') tryInteract();
  if (uiBlocking && !choiceOverlay.classList.contains('hidden')) return;
  if (uiBlocking && (e.key === ' ' || e.key === 'Enter')) advanceSubtitle();
});
document.addEventListener('keyup', (e) => (keys[e.key.toLowerCase()] = false));

canvas.addEventListener('click', () => {
  if (!document.pointerLockElement && !uiBlocking) canvas.requestPointerLock();
});

document.addEventListener('mousemove', (e) => {
  if (document.pointerLockElement !== canvas) return;
  yaw -= e.movementX * 0.0022;
  pitch -= e.movementY * 0.0022;
  pitch = Math.max(-1.2, Math.min(1.2, pitch));
});

function movePlayer(delta) {
  if (uiBlocking) return;
  const speed = 5 * delta;
  const forward = new THREE.Vector3(Math.sin(yaw), 0, Math.cos(yaw)).multiplyScalar(-1);
  const right = new THREE.Vector3(forward.z, 0, -forward.x);

  let moved = false;
  const next = camera.position.clone();
  if (keys['w'] || keys['arrowup']) { next.addScaledVector(forward, speed); moved = true; }
  if (keys['s'] || keys['arrowdown']) { next.addScaledVector(forward, -speed); moved = true; }
  if (keys['a'] || keys['arrowleft']) { next.addScaledVector(right, -speed); moved = true; }
  if (keys['d'] || keys['arrowright']) { next.addScaledVector(right, speed); moved = true; }

  next.x = Math.max(-WORLD_HALF, Math.min(WORLD_HALF, next.x));
  next.z = Math.max(-WORLD_HALF, Math.min(SEA_Z_LIMIT, next.z));

  // simple circle-vs-AABB collision against buildings
  const radius = 0.5;
  for (const box of buildings) {
    const closestX = Math.max(box.min.x, Math.min(next.x, box.max.x));
    const closestZ = Math.max(box.min.z, Math.min(next.z, box.max.z));
    const dx = next.x - closestX;
    const dz = next.z - closestZ;
    const distSq = dx * dx + dz * dz;
    if (distSq < radius * radius) {
      const dist = Math.sqrt(distSq) || 0.001;
      const push = radius - dist;
      next.x += (dx / dist) * push;
      next.z += (dz / dist) * push;
    }
  }

  camera.position.x = next.x;
  camera.position.z = next.z;

  camera.rotation.set(pitch, yaw, 0, 'YXZ');

  if (moved) {
    footstepTimer -= delta;
    if (footstepTimer <= 0) {
      playFootstep();
      footstepTimer = 0.42;
    }
  }
}

/* ---------- Interaction / story flow ---------- */

let activeDollyTarget = null;

function tryInteract() {
  if (uiBlocking) return;
  const point = points[currentPointIndex];
  if (!point) return;
  const dx = camera.position.x - point.x;
  const dz = camera.position.z - point.z;
  if (Math.sqrt(dx * dx + dz * dz) > point.radius) return;

  interactPrompt.classList.add('hidden');
  showSubtitle(point.id);
}

let pendingAfterSubtitle = null;

function showSubtitle(storyId) {
  const entry = STORY[storyId];
  uiBlocking = true;
  subtitleSpeaker.textContent = entry.speaker || '';
  subtitleText.innerHTML = '';
  entry.lines.forEach((line) => {
    const p = document.createElement('p');
    p.textContent = line;
    subtitleText.appendChild(p);
  });
  subtitleBox.classList.remove('hidden');
  speak(entry.lines);
  pendingAfterSubtitle = storyId;
}

subtitleContinue.addEventListener('click', advanceSubtitle);

function advanceSubtitle() {
  if (subtitleBox.classList.contains('hidden')) return;
  subtitleBox.classList.add('hidden');
  const storyId = pendingAfterSubtitle;
  pendingAfterSubtitle = null;

  const point = points[currentPointIndex];

  if (storyId === 'boat_far') {
    dollyToPoint(point, () => showSubtitle('boat_close'));
    return;
  }

  if (storyId === 'boat_close') {
    advanceToNextPoint();
    return;
  }

  if (storyId === 'house') {
    showChoice();
    return;
  }

  advanceToNextPoint();
}

function dollyToPoint(point, onDone) {
  const startPos = camera.position.clone();
  const dir = new THREE.Vector3(point.x - startPos.x, 0, point.z - startPos.z);
  const dist = dir.length();
  dir.normalize();
  const endPos = startPos.clone().addScaledVector(dir, Math.max(0, dist - point.radius * 0.7));
  const duration = 1100; // ms, tracked independently of the shared render-loop clock
  const startTime = performance.now();
  uiBlocking = true;
  function step() {
    const k = Math.min(1, (performance.now() - startTime) / duration);
    camera.position.lerpVectors(startPos, endPos, k);
    if (k < 1) requestAnimationFrame(step);
    else { uiBlocking = false; onDone(); }
  }
  step();
}

function advanceToNextPoint() {
  clearMarker();
  currentPointIndex++;
  uiBlocking = false;
  const next = points[currentPointIndex];
  if (!next) return;
  setMarker(next.x, next.z, next.h);
  if (next.storm) startStorm();
}

function startStorm() {
  stormActive = true;
  stormTimer = 0;
  setStormAmbient(true);
}

function showChoice() {
  uiBlocking = true;
  if (document.pointerLockElement) document.exitPointerLock();
  choiceText.textContent =
    '"Cô đừng lo cho tôi nhiều quá," chị Thảo nói. "Tôi mà đi, ba đứa nhỏ lấy ai lo. Ảnh say thì vậy, chứ tỉnh ra thương vợ thương con lắm."';
  choiceButtons.innerHTML = '';
  const opts = [
    { label: 'Tôn trọng quyết định của chị, để lại đường dây liên hệ lâu dài', ending: 'support' },
    { label: 'Thúc giục chị rời đi ngay vì quá nguy hiểm', ending: 'forced' },
  ];
  opts.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt.label;
    btn.addEventListener('click', () => finishGame(opt.ending));
    choiceButtons.appendChild(btn);
  });
  choiceOverlay.classList.remove('hidden');
  speak([choiceText.textContent]);
}

function finishGame(endingId) {
  choiceOverlay.classList.add('hidden');
  clearMarker();
  const ending = ENDINGS[endingId];
  gameoverTitle.textContent = ending.title;
  gameoverText.innerHTML = '';
  [...ending.lines, EPILOGUE_LINE].forEach((line) => {
    const p = document.createElement('p');
    p.textContent = line;
    gameoverText.appendChild(p);
  });
  gameoverOverlay.classList.remove('hidden');
  speak([...ending.lines, EPILOGUE_LINE]);
}

/* ---------- Game loop ---------- */

function updateStorm(delta) {
  if (!stormActive) return;
  stormTimer += delta;
  const k = Math.min(1, stormTimer / 5);
  scene.fog.color.lerpColors(DAWN_FOG, STORM_FOG, k);
  renderer.setClearColor(scene.fog.color.getHex());
  hemiLight.intensity = 1.0 - 0.75 * k;
  sunLight.intensity = 0.85 - 0.7 * k;

  if (k >= 1 && Math.random() < 0.006) {
    lightningLight.intensity = 6;
    playThunder();
  }
  lightningLight.intensity = Math.max(0, lightningLight.intensity - delta * 8);
}

function updatePrompt() {
  const point = points[currentPointIndex];
  if (!point || uiBlocking) {
    interactPrompt.classList.add('hidden');
    return;
  }
  const dx = camera.position.x - point.x;
  const dz = camera.position.z - point.z;
  const near = Math.sqrt(dx * dx + dz * dz) <= point.radius;
  interactPrompt.classList.toggle('hidden', !near);

  if (markerGroup && markerGem) {
    markerGem.rotation.y += 0.03;
    const bob = Math.sin(performance.now() * 0.002) * 0.3;
    markerGem.position.y = markerBaseY + bob;
    markerLight.position.y = markerBaseY + bob;
  }
}

function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(0.05, clock.getDelta());
  movePlayer(delta);
  updateStorm(delta);
  updatePrompt();
  renderer.render(scene, camera);
}

/* ---------- Boot ---------- */

voiceToggleBtn.addEventListener('click', () => {
  voiceEnabled = !voiceEnabled;
  voiceToggleBtn.textContent = `🔊 Giọng đọc: ${voiceEnabled ? 'Bật' : 'Tắt'}`;
  if (!voiceEnabled && window.speechSynthesis) window.speechSynthesis.cancel();
});

restartBtn.addEventListener('click', () => window.location.reload());

startBtn.addEventListener('click', () => {
  startOverlay.classList.add('hidden');
  initAudio();
  canvas.requestPointerLock();
  clock.getDelta();
  animate();
});

buildWorld();
