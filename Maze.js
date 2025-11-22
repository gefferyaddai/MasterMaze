// ---- LEVELS DATA ----
const LEVELS = [
    { name: "The Beginning", difficulty: "easy", maze: `
0000000000000000000
0S11111111111111110
0100000001000000010
0101111111111111010
0101000110000010110
0101011111111101010
0101010000000101010
0101010111110101010
0101010100010101010
0101010101010101010
0101010101010101010
0100010101010101010
0111110101010101010
0000000101010101010
0111111101011101110
01000000010100000F0
0101111111010111110
0101000000010100000
0101011111110111110
0000000000000000000` },
    { name: "The Spiral", difficulty: "easy", maze: `
00000000000000000000000
0S111111111111111111110
01000000000000000000010
01011111111111111111010
01010000000000000001010
01010111111111111101010
01010100000000000101010
01010101111111110101010
01010101000000010101010
01010101011111010101010
01010101010001010101010
01010101010101010101010
01010101010F11111101010
01010101011111010101010
01010101000000011101010
01010101111111110101010
01010100000100000101010
01010111111111111101010
01010000000000000111010
01011111111111111111010
01000000001000000000010
01111111111111111111110
00000000000000000000000` },

    { name: "The Labyrinth", difficulty: "hard", maze: `
0S0000000000000000000000000000000000000
011111111111110111111111111111111111110
010000000000010100000000000000000000010
011111111110010101111111111111111110010
010100000011110101000000000000000011110
010101110000000101011111111111111100000
010101011111110101010000000000000111110
010101000000010101010111111111110100010
010101111110010101010100000000010101010
011111000011010101010101111110010101010
010101111100010101011101000011010101010
010101000001110101010111011100010101010
010101111100010101010101010001110101010
010101010011110101010101010110000101010
010101010000010101010101010111110101010
010101011110010101010101110000010101010
010101111111111110111010111111101010110
010101110100000101011101000001010101010
010100010111110101010101111101010101010
010111010000010101010100000101010101010
010001011110010101010111110101010101010
011101000011110101010100010101010101010
000101111100010101011111010101111101010
010100000111010101000101010100000101010
010111110001010101111101010111110101010
010000011101010100000101010100000101010
011111100101010111110101010111111101010
000000011101010000010101010101000101010
011111100001011111010101010101011111110
010000011111000001010101010101010000010
010111100001011101010101010101010111110
010000011101010001011101010101010000010
0000000000000000000000000000000000000F0` },
    { name: "The Gauntlet", difficulty: "expert", maze: `
0000000000000000000000000000000000000000000000000
0S11111100011111111100001111111111111111111111110
0100000101100000000011110000000000000000000000010
0101110101011111110000001111111111111111111110010
0101010101100000011111110000000000000000000011110
0101010100011111100000001111111111111111110000010
0101010111100000011111110000000000000000011111010
0101010000011111100000001111111111111110000001010
0101011111100000011111110000000000000011111101010
0101000000011111100000001111111111111100000101010
0101111111100000011111110000000000000011110101010
0100000000011111100000001111111111111100010101010
0111111111100000011111110000000000000111010101010
0000000000011111100000001111111111110001010101010
0111111111100000011111110000000000011101010101010
0100000000011111100000001111111111100101010101010
0101111111100000011111110000000000111101010101010
0101000000011111100000001111111110000101010101010
0101011111100000011111110000000011111101010101010
0101010000011111100000001111111100000101010101010
0101010111100000011111110000000011111101010101010
0101010100011111100000001111111100000001010101010
0101010101100000011111110000000011111111010101010
0101010101011111100000001111111100000000010101010
0101010101000000011111110000000011111111110101010
0101010101111111100000001111111100000000010101010
0101010100000000011111110000000011111111010101010
0101010111111111100000001111111100000001010101010
0101010000000000011111110000000011111101010101010
0101011111111111100000001111111100000101010101010
0101000000000000011111110000000011110101010101010
0101111111111111100000001111111100010101010101010
0100000000000000011111110000000111010101010101010
0011111111111111100000001111110001010101010101010
0000000000000000011111110000011101010101010101010
0111111111111111100000001111100001010101010101010
0F00000000000000000000000000011111010101010101010
0000000000000000000000000000000000000000000000000` },
    { name: "Geffery's Challenge", difficulty: "medium", maze: `
0000000S0000000000000000000000000000000000000000000000000000000
011111110011110000000000000000000000000011111111111111100000000
010000000010010111111101111111111111111111110000000000100000000
011111111110010100000100100000000000000000011111111100100000000
010010000010010100011111111111111111111100000000000101111000000
010010001110010111010000000000000000000100011111110101001000000
010111000100100101011111111111101111000100010000010101001111100
010000111111111101000000000010000001000111110000010111000000100
010111100000000001001001110111111001111000000000010000011110100
010100000000010000001000011100010101001000001111110000010010100
000110000111111111111000000100010011001111001000000111110010100
000011100001000001000000111100011111100000001000000100000010100
000000100001000001000000100100000000100111111001111100000011100
000011111111000011100011100111111100110100000001000001111000000
000010000001000010000000000000000101000100000001000001101001000
000010000001111011111001111111111101000111111111000000101001110
000011111111000000010101000000000001000000000000000000101010010
001111111001000000010101101111111111100000000001111111101011110
001000000001000000010111100001000001000111111001000001111000010
001000000111000000010000111111111001000100001001000001000000110
001000111100011111110000000000001111100100001001000001001111100
001000100000001000000001111100001000100110001001000001001000100
001111100000011111111100000111001000110010001111000111001000100
001000111110000000000111111101000000010011101100111100001000100
001000000011111111111100000001001111111111101100100111111000100
000000000000000000000000000000000000000000000000000000000000F00` }
];

let currentLevel = 0;
let unlockedLevels = [0];
let moves = 0;

// Load from localStorage
const savedUnlocked = localStorage.getItem('maze-unlocked-levels');
if (savedUnlocked) unlockedLevels = JSON.parse(savedUnlocked);

// ---- YOUR ORIGINAL DIRECTIONS ----
const Direction = Object.freeze({
    UP:    { row: -1, col:  0 },
    DOWN:  { row:  1, col:  0 },
    LEFT:  { row:  0, col: -1 },
    RIGHT: { row:  0, col:  1 },
});

// ---- YOUR ORIGINAL HELPERS ----
const posKey = ({ row, col }) => `${row},${col}`;
const posEq  = (a, b) => a.row === b.row && a.col === b.col;

function inSet(set, p) { return set.has(posKey(p)); }

function inside(grid, p) {
    return p.row >= 0 && p.row < grid.length &&
        p.col >= 0 && p.col < grid[0].length;
}

function nextPos(cur, dir) {
    return { row: cur.row + dir.row, col: cur.col + dir.col };
}

function canPlay(grid, future, finish, walls, walkables) {
    if (!inside(grid, future)) return false;
    if (inSet(walls, future))  return false;
    return inSet(walkables, future) || posEq(future, finish);
}

function formatTime(total) {
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
}

// ---- YOUR ORIGINAL TIMER ----
let timerInterval = null;
let seconds = 0;
let startTs = null;
let bestTimes = {};

const savedBestTimes = localStorage.getItem('maze-best-times');
if (savedBestTimes) bestTimes = JSON.parse(savedBestTimes);

function startTimer() {
    if (timerInterval) return;
    startTs = performance.now();
    const el = document.getElementById('timer');
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((performance.now() - startTs) / 1000);
        if (elapsed !== seconds) {
            seconds = elapsed;
            if (el) el.textContent = formatTime(seconds);
        }
    }, 100);
}

function stopTimer(commit = false) {
    clearInterval(timerInterval);
    timerInterval = null;

    const finalSec = Math.floor((performance.now() - startTs) / 1000) || 0;

    if (commit && finalSec > 0) {
        const prevBest = bestTimes[currentLevel];
        if (prevBest === undefined || finalSec < prevBest) {
            bestTimes[currentLevel] = finalSec;
            localStorage.setItem('maze-best-times', JSON.stringify(bestTimes));
            return { finalSec, isNewBest: true };
        }
        return { finalSec, isNewBest: false };
    }
    return { finalSec, isNewBest: false };
}

function initBestTime() {
    const best = bestTimes[currentLevel];
    const bestEl = document.getElementById('best-time');
    if (best !== undefined && bestEl) {
        bestEl.textContent = `🏆 ${formatTime(best)}`;
    } else if (bestEl) {
        bestEl.textContent = `🏆 --:--`;
    }
}

// ---- YOUR ORIGINAL RENDERING ----
function classFor(ch) {
    if (ch === '0') return 'wall';
    if (ch === 'F') return 'finish';
    return 'path';
}

function renderGrid(grid, container) {
    const rows = grid.length, cols = grid[0].length;

    const maxW = Math.min(window.innerWidth * 0.9, 900);
    const maxH = window.innerHeight * 0.4;
    const cell = Math.min(maxW / cols, maxH / rows);

    container.style.display = 'grid';
    container.style.width   = `${cell * cols}px`;
    container.style.height  = `${cell * rows}px`;
    container.style.gridTemplateColumns = `repeat(${cols}, ${cell}px)`;
    container.style.gridAutoRows        = `${cell}px`;

    container.innerHTML = '';
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const div = document.createElement('div');
            div.className = 'cell ' + classFor(grid[r][c]);
            div.dataset.r = r;
            div.dataset.c = c;
            container.appendChild(div);
        }
    }
}

function renderState(player, finish, container) {
    container.querySelectorAll('.cell.player').forEach(el => el.classList.remove('player'));

    const fEl = container.querySelector(`.cell[data-r="${finish.row}"][data-c="${finish.col}"]`);
    if (fEl) fEl.classList.add('finish');

    const pEl = container.querySelector(`.cell[data-r="${player.row}"][data-c="${player.col}"]`);
    if (pEl) pEl.classList.add('player');
}

// ---- YOUR ORIGINAL SHARED GAME STATE ----
const state = {
    grid: null,
    player: null,
    finish: null,
    walls: new Set(),
    walkables: new Set(),
    container: document.querySelector('.game-body'),
};

// ---- SCREEN MANAGEMENT ----
function showMenu() {
    stopTimer(false);
    document.getElementById('menu').classList.add('active');
    document.getElementById('game').classList.remove('active');
    document.getElementById('victory').classList.remove('active');
    renderLevelList();
}

function showGame() {
    document.getElementById('menu').classList.remove('active');
    document.getElementById('game').classList.add('active');
    document.getElementById('victory').classList.remove('active');
}

function showVictory(time, moveCount, isNewBest, unlockedNew) {
    document.getElementById('menu').classList.remove('active');
    document.getElementById('game').classList.remove('active');
    document.getElementById('victory').classList.add('active');

    document.getElementById('victory-level-name').textContent = LEVELS[currentLevel].name;
    document.getElementById('victory-time').textContent = formatTime(time);
    document.getElementById('victory-moves').textContent = moveCount;

    const badges = document.getElementById('victory-badges');
    badges.innerHTML = '';
    if (isNewBest) badges.innerHTML += '<div class="unlock-badge record">🏆 New Best Time!</div>';
    if (unlockedNew) badges.innerHTML += `<div class="unlock-badge level">🔓 Level ${currentLevel + 2} Unlocked!</div>`;

    const btns = document.getElementById('victory-buttons');
    btns.innerHTML = '';

    if (currentLevel < LEVELS.length - 1) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'success';
        nextBtn.textContent = 'Next Level →';
        nextBtn.onclick = () => { currentLevel++; readMap(); };
        btns.appendChild(nextBtn);
    }

    const retryBtn = document.createElement('button');
    retryBtn.className = 'secondary';
    retryBtn.textContent = '🔄 Retry';
    retryBtn.onclick = () => readMap();
    btns.appendChild(retryBtn);

    const menuBtn = document.createElement('button');
    menuBtn.className = 'secondary';
    menuBtn.textContent = '📋 Menu';
    menuBtn.onclick = showMenu;
    btns.appendChild(menuBtn);
}

function renderLevelList() {
    const list = document.getElementById('level-list');
    list.innerHTML = '';

    LEVELS.forEach((lvl, i) => {
        const unlocked = unlockedLevels.includes(i);
        const best = bestTimes[i];

        const card = document.createElement('div');
        card.className = 'level-card' + (unlocked ? '' : ' locked');
        card.innerHTML = `
      <div class="level-row">
        <div>
          <div class="level-header">
            <span class="level-title">${unlocked ? 'Level ' + (i+1) : '🔒'}</span>
            <span class="badge ${lvl.difficulty}">${lvl.difficulty.charAt(0).toUpperCase() + lvl.difficulty.slice(1)}</span>
          </div>
          <div class="level-name">${lvl.name}</div>
        </div>
        ${unlocked ? (best !== undefined ? `<div class="best-time-badge">🏆 ${formatTime(best)}</div>` : '<span style="color:#a78bfa;opacity:0.5;font-size:0.8rem;">Not completed</span>') : ''}
      </div>`;

        if (unlocked) {
            card.onclick = () => {
                currentLevel = i;
                readMap();
            };
        }
        list.appendChild(card);
    });
}

// ---- YOUR ORIGINAL readMap ----
function readMap() {
    initBestTime();
    stopTimer(false);
    seconds = 0;
    moves = 0;
    const timerEl = document.getElementById('timer');
    if (timerEl) timerEl.textContent = '00:00';

    const text = LEVELS[currentLevel].maze;
    const grid = text.trim().split('\n').map(line => line.split(''));

    let player = null, finish = null;
    const walls = new Set();
    const walkables = new Set();

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            const ch = grid[r][c];
            const key = `${r},${c}`;

            if (ch === '0') walls.add(key);
            if (ch === '1') walkables.add(key);
            if (ch === 'S') { player = { row: r, col: c }; walkables.add(key); }
            if (ch === 'F') { finish = { row: r, col: c }; walkables.add(key); }
        }
    }

    if (!player || !finish) throw new Error('Missing S or F in maze');

    state.grid = grid;
    state.player = player;
    state.finish = finish;
    state.walls = walls;
    state.walkables = walkables;

    // Update UI
    document.getElementById('game-title').textContent = `Level ${currentLevel + 1}`;
    document.getElementById('game-level').textContent = LEVELS[currentLevel].name;
    const badge = document.getElementById('game-badge');
    badge.textContent = LEVELS[currentLevel].difficulty.charAt(0).toUpperCase() + LEVELS[currentLevel].difficulty.slice(1);
    badge.className = 'badge ' + LEVELS[currentLevel].difficulty;

    showGame();
    renderGrid(grid, state.container);
    renderState(state.player, state.finish, state.container);
    startTimer();
}

// ---- YOUR ORIGINAL KEY HANDLER ----
const keyMap = {
    ArrowUp: Direction.UP,
    ArrowDown: Direction.DOWN,
    ArrowLeft: Direction.LEFT,
    ArrowRight: Direction.RIGHT,
    w: Direction.UP, W: Direction.UP,
    s: Direction.DOWN, S: Direction.DOWN,
    a: Direction.LEFT, A: Direction.LEFT,
    d: Direction.RIGHT, D: Direction.RIGHT,
};

document.addEventListener('keydown', (e) => {
    if (!document.getElementById('game').classList.contains('active')) return;

    const dir = keyMap[e.key];
    if (!dir || !state.grid) return;

    e.preventDefault();

    const future = nextPos(state.player, dir);
    if (canPlay(state.grid, future, state.finish, state.walls, state.walkables)) {
        state.player = future;
        moves++;
        renderState(state.player, state.finish, state.container);

        if (posEq(state.player, state.finish)) {
            const { finalSec, isNewBest } = stopTimer(true);

            // Unlock next level
            let unlockedNew = false;
            if (currentLevel < LEVELS.length - 1 && !unlockedLevels.includes(currentLevel + 1)) {
                unlockedLevels.push(currentLevel + 1);
                localStorage.setItem('maze-unlocked-levels', JSON.stringify(unlockedLevels));
                unlockedNew = true;
            }

            showVictory(finalSec, moves, isNewBest, unlockedNew);
        }
    }
});

// ---- YOUR ORIGINAL RESTART BUTTON ----
document.getElementById('restart-button').addEventListener('click', readMap);
document.getElementById('menu-button').addEventListener('click', showMenu);

// ---- FIRST LOAD ----
showMenu();