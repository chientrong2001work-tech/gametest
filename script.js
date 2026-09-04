const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreEl = document.getElementById('score');

const player = { x: canvas.width / 2 - 15, y: canvas.height - 30, size: 30, speed: 5 };
const keys = {};
let items = [];
let score = 0;
let spawnTimer = 0;

window.addEventListener('keydown', (e) => (keys[e.key.toLowerCase()] = true));
window.addEventListener('keyup', (e) => (keys[e.key.toLowerCase()] = false));

function spawnItem() {
  items.push({
    x: Math.random() * (canvas.width - 15),
    y: -15,
    size: 15,
    speed: 2 + Math.random() * 2,
  });
}

function update() {
  if (keys['arrowleft'] || keys['a']) player.x -= player.speed;
  if (keys['arrowright'] || keys['d']) player.x += player.speed;
  if (keys['arrowup'] || keys['w']) player.y -= player.speed;
  if (keys['arrowdown'] || keys['s']) player.y += player.speed;

  player.x = Math.max(0, Math.min(canvas.width - player.size, player.x));
  player.y = Math.max(0, Math.min(canvas.height - player.size, player.y));

  spawnTimer++;
  if (spawnTimer > 45) {
    spawnItem();
    spawnTimer = 0;
  }

  items.forEach((item) => (item.y += item.speed));

  items = items.filter((item) => {
    const collided =
      player.x < item.x + item.size &&
      player.x + player.size > item.x &&
      player.y < item.y + item.size &&
      player.y + player.size > item.y;

    if (collided) {
      score += 10;
      scoreEl.textContent = `Score: ${score}`;
      return false;
    }
    return item.y < canvas.height;
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#4ade80';
  ctx.fillRect(player.x, player.y, player.size, player.size);

  ctx.fillStyle = '#fbbf24';
  items.forEach((item) => ctx.fillRect(item.x, item.y, item.size, item.size));
}

function loop() {
  update();
  draw();
  requestAnimationFrame(loop);
}

loop();
