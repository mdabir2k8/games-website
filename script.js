// ==================== GameZone - Advanced Gaming Platform ====================

// Game Database
const GAMES_DATA = [
    {id:"2048",title:"2048",category:"puzzle",emoji:"🎮",color:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",description:"Combine tiles to reach 2048!",controls:"Arrow keys to slide tiles",rating:4.6,plays:4560000,badge:"trending"},
    {id:"snake",title:"Snake Game",category:"action",emoji:"🐍",color:"linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",description:"Control the snake and eat food!",controls:"Arrow keys to control direction",rating:4.7,plays:2340000,badge:"trending"},
    {id:"tic-tac-toe",title:"Tic Tac Toe",category:"puzzle",emoji:"⭕",color:"linear-gradient(135deg, #ee0979 0%, #ff6a00 100%)",description:"Classic Tic Tac Toe vs AI!",controls:"Click to place X",rating:4.5,plays:1250000,badge:"popular"},
    {id:"memory",title:"Memory Match",category:"puzzle",emoji:"🧠",color:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",description:"Match pairs of cards!",controls:"Click to flip cards",rating:4.3,plays:890000,badge:"popular"},
    {id:"pong",title:"Pong",category:"action",emoji:"🏓",color:"linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",description:"Classic Pong vs AI!",controls:"Up/Down arrow keys",rating:4.4,plays:890000,badge:"new"},
    {id:"breakout",title:"Breakout",category:"action",emoji:"🧱",color:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",description:"Break all the bricks!",controls:"Arrow keys to move paddle",rating:4.3,plays:1100000,badge:"new"},
    {id:"flappy",title:"Flappy Bird",category:"action",emoji:"🐦",color:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",description:"Fly through pipes!",controls:"Click or Space to flap",rating:4.3,plays:2890000,badge:"popular"},
    {id:"asteroids",title:"Asteroids",category:"action",emoji:"☄️",color:"linear-gradient(135deg, #232526 0%, #414345 100%)",description:"Destroy asteroids!",controls:"Arrows to move, Space to shoot",rating:4.5,plays:1450000,badge:"trending"},
    {id:"racing",title:"Car Racing",category:"racing",emoji:"🏎️",color:"linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",description:"Race and avoid obstacles!",controls:"Arrow keys to steer",rating:4.6,plays:2340000,badge:"trending"},
    {id:"basketball",title:"Basketball",category:"sports",emoji:"🏀",color:"linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",description:"Score baskets!",controls:"Click to shoot",rating:4.4,plays:1870000,badge:"new"},
    {id:"soccer",title:"Soccer",category:"sports",emoji:"⚽",color:"linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)",description:"Keep the ball in play!",controls:"Arrow keys to move",rating:4.5,plays:2340000,badge:"popular"},
    {id:"chess",title:"Chess",category:"puzzle",emoji:"♟️",color:"linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",description:"Classic chess game!",controls:"Click to move pieces",rating:4.8,plays:3450000,badge:"popular"},
    // ========== NEW 50 GAMES ==========
    {id:"frogger",title:"Frogger",category:"action",emoji:"🐸",color:"linear-gradient(135deg, #2ecc71 0%, #27ae60 100%)",description:"Cross the road safely!",controls:"Arrow keys to hop",rating:4.5,plays:1200000,badge:"new"},
    {id:"tetris",title:"Tetris",category:"puzzle",emoji:"🧩",color:"linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",description:"Stack the blocks!",controls:"Arrow keys to rotate/move",rating:4.9,plays:5600000,badge:"trending"},
    {id:"minesweeper",title:"Minesweeper",category:"puzzle",emoji:"💣",color:"linear-gradient(135deg, #3498db 0%, #2980b9 100%)",description:"Find all mines!",controls:"Click to reveal, Right-click to flag",rating:4.4,plays:2100000,badge:"popular"},
    {id:"sudoku",title:"Sudoku",category:"puzzle",emoji:"🔢",color:"linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",description:"Fill the grid correctly!",controls:"Click and type numbers",rating:4.7,plays:3200000,badge:"trending"},
    {id:"spaceinvaders",title:"Space Invaders",category:"action",emoji:"👾",color:"linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",description:"Defend Earth from aliens!",controls:"Arrows to move, Space to shoot",rating:4.6,plays:2800000,badge:"popular"},
    {id:"pacman",title:"Pac-Man",category:"action",emoji:"👻",color:"linear-gradient(135deg, #f1c40f 0%, #f39c12 100%)",description:"Eat all dots, avoid ghosts!",controls:"Arrow keys to move",rating:4.8,plays:4500000,badge:"trending"},
    {id:"connect4",title:"Connect Four",category:"puzzle",emoji:"🔴",color:"linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)",description:"Connect 4 discs in a row!",controls:"Click column to drop disc",rating:4.5,plays:1800000,badge:"new"},
    {id:"checkers",title:"Checkers",category:"puzzle",emoji:"⚫",color:"linear-gradient(135deg, #2c3e50 0%, #1a252f 100%)",description:"Jump over opponent pieces!",controls:"Click to select and move",rating:4.4,plays:1500000,badge:"popular"},
    {id:"simon",title:"Simon Says",category:"puzzle",emoji:"🎨",color:"linear-gradient(135deg, #9b59b6 0%, #8e44ad 100%)",description:"Follow the color pattern!",controls:"Click colored buttons",rating:4.3,plays:980000,badge:"new"},
    {id:"wordle",title:"Wordle",category:"puzzle",emoji:"📝",color:"linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",description:"Guess the 5-letter word!",controls:"Type your guess",rating:4.8,plays:6200000,badge:"trending"},
    {id:"blackjack",title:"Blackjack",category:"puzzle",emoji:"🃏",color:"linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",description:"Beat the dealer to 21!",controls:"Click Hit or Stand",rating:4.5,plays:2400000,badge:"popular"},
    {id:"solitaire",title:"Solitaire",category:"puzzle",emoji:"♠️",color:"linear-gradient(135deg, #16a085 0%, #1abc9c 100%)",description:"Classic card sorting game!",controls:"Drag cards to stack",rating:4.6,plays:3100000,badge:"popular"},
    {id:"platformer",title:"Platform Jump",category:"adventure",emoji:"🏃",color:"linear-gradient(135deg, #e67e22 0%, #d35400 100%)",description:"Jump across platforms!",controls:"Arrow keys + Space to jump",rating:4.4,plays:1600000,badge:"new"},
    {id:"whackamole",title:"Whack-a-Mole",category:"action",emoji:"🔨",color:"linear-gradient(135deg, #8d6e63 0%, #6d4c41 100%)",description:"Hit the moles quickly!",controls:"Click on moles",rating:4.2,plays:780000,badge:"new"},
    {id:"bubbleshooter",title:"Bubble Shooter",category:"puzzle",emoji:"🫧",color:"linear-gradient(135deg, #00bcd4 0%, #0097a7 100%)",description:"Match 3+ bubbles!",controls:"Click to shoot",rating:4.5,plays:2200000,badge:"trending"},
    {id:"fruitninja",title:"Fruit Slice",category:"action",emoji:"🍉",color:"linear-gradient(135deg, #ff6b6b 0%, #ee5a5a 100%)",description:"Slice all the fruits!",controls:"Swipe/Click to slice",rating:4.6,plays:2900000,badge:"trending"},
    {id:"angrybirds",title:"Slingshot",category:"action",emoji:"🐦",color:"linear-gradient(135deg, #d32f2f 0%, #c62828 100%)",description:"Launch birds at targets!",controls:"Drag and release",rating:4.5,plays:2600000,badge:"popular"},
    {id:"candycrush",title:"Candy Match",category:"puzzle",emoji:"🍬",color:"linear-gradient(135deg, #e91e63 0%, #c2185b 100%)",description:"Match 3+ candies!",controls:"Click to swap candies",rating:4.6,plays:3800000,badge:"trending"},
    {id:"pinball",title:"Pinball",category:"action",emoji:"🎱",color:"linear-gradient(135deg, #3f51b5 0%, #303f9f 100%)",description:"Keep the ball in play!",controls:"Left/Right arrows for flippers",rating:4.4,plays:1400000,badge:"new"},
    {id:"templerun",title:"Endless Runner",category:"adventure",emoji:"🏃‍♂️",color:"linear-gradient(135deg, #4caf50 0%, #388e3c 100%)",description:"Run and avoid obstacles!",controls:"Up/Down to jump/slide",rating:4.7,plays:4100000,badge:"trending"},
    {id:"crossyroad",title:"Crossy Road",category:"action",emoji:"🐔",color:"linear-gradient(135deg, #ffeb3b 0%, #fbc02d 100%)",description:"Cross roads and rivers!",controls:"Arrow keys to move",rating:4.5,plays:1900000,badge:"popular"},
    {id:"doodlejump",title:"Doodle Jump",category:"action",emoji:"🤖",color:"linear-gradient(135deg, #8bc34a 0%, #689f38 100%)",description:"Jump on platforms!",controls:"Left/Right arrows",rating:4.6,plays:2500000,badge:"popular"},
    {id:"geometrydash",title:"Geometry Dash",category:"action",emoji:"🔷",color:"linear-gradient(135deg, #00bcd4 0%, #0097a7 100%)",description:"Jump over obstacles!",controls:"Click/Space to jump",rating:4.7,plays:3400000,badge:"trending"},
    {id:"stack",title:"Stack Tower",category:"puzzle",emoji:"📦",color:"linear-gradient(135deg, #607d8b 0%, #455a64 100%)",description:"Stack blocks perfectly!",controls:"Click to drop block",rating:4.3,plays:1700000,badge:"new"},
    {id:"helixjump",title:"Helix Jump",category:"action",emoji:"🌀",color:"linear-gradient(135deg, #9c27b0 0%, #7b1fa2 100%)",description:"Jump down the spiral!",controls:"Left/Right arrows",rating:4.5,plays:2100000,badge:"new"},
    {id:"bottleflip",title:"Bottle Flip",category:"action",emoji:"🍶",color:"linear-gradient(135deg, #03a9f4 0%, #0288d1 100%)",description:"Flip the bottle!",controls:"Click to flip",rating:4.1,plays:890000,badge:"new"},
    {id:"paperio",title:"Paper.io",category:"multiplayer",emoji:"📄",color:"linear-gradient(135deg, #ff5722 0%, #e64a19 100%)",description:"Conquer territory!",controls:"Arrow keys to move",rating:4.6,plays:2700000,badge:"trending"},
    {id:"slitherio",title:"Snake Arena",category:"multiplayer",emoji:"🐍",color:"linear-gradient(135deg, #4caf50 0%, #388e3c 100%)",description:"Grow your snake!",controls:"Mouse to steer",rating:4.7,plays:3900000,badge:"trending"},
    {id:" agar.io",title:"Cell Eat Cell",category:"multiplayer",emoji:"🦠",color:"linear-gradient(135deg, #9e9e9e 0%, #757575 100%)",description:"Eat smaller cells!",controls:"Mouse to move",rating:4.5,plays:3100000,badge:"popular"},
    {id:"tanks",title:"Tank Battle",category:"action",emoji:"🎯",color:"linear-gradient(135deg, #795548 0%, #5d4037 100%)",description:"Destroy enemy tanks!",controls:"Arrows + Space to shoot",rating:4.4,plays:1300000,badge:"new"},
    {id:"duckhunt",title:"Duck Hunt",category:"action",emoji:"🦆",color:"linear-gradient(135deg, #87ceeb 0%, #4db8ff 100%)",description:"Shoot the ducks!",controls:"Click to shoot",rating:4.3,plays:1100000,badge:"popular"},
    {id:"bowling",title:"Bowling",category:"sports",emoji:"🎳",color:"linear-gradient(135deg, #3f51b5 0%, #303f9f 100%)",description:"Knock down all pins!",controls:"Click to aim and throw",rating:4.4,plays:980000,badge:"new"},
    {id:"golf",title:"Mini Golf",category:"sports",emoji:"⛳",color:"linear-gradient(135deg, #4caf50 0%, #388e3c 100%)",description:"Get the ball in the hole!",controls:"Drag and release to putt",rating:4.3,plays:870000,badge:"new"},
    {id:"tennis",title:"Tennis",category:"sports",emoji:"🎾",color:"linear-gradient(135deg, #cddc39 0%, #c0ca33 100%)",description:"Win the tennis match!",controls:"Arrow keys to move",rating:4.4,plays:1100000,badge:"popular"},
    {id:"baseball",title:"Baseball",category:"sports",emoji:"⚾",color:"linear-gradient(135deg, #ff5722 0%, #e64a19 100%)",description:"Hit a home run!",controls:"Click to swing",rating:4.3,plays:920000,badge:"new"},
    {id:"archery",title:"Archery",category:"sports",emoji:"🏹",color:"linear-gradient(135deg, #795548 0%, #5d4037 100%)",description:"Hit the bullseye!",controls:"Click and drag to aim",rating:4.5,plays:780000,badge:"new"},
    {id:"darts",title:"Darts",category:"sports",emoji:"🎯",color:"linear-gradient(135deg, #e91e63 0%, #c2185b 100%)",description:"Score 180!",controls:"Click to throw dart",rating:4.2,plays:650000,badge:"new"},
    {id:"pool",title:"8 Ball Pool",category:"sports",emoji:"🎱",color:"linear-gradient(135deg, #2196f3 0%, #1976d2 100%)",description:"Pot all the balls!",controls:"Drag to aim and shoot",rating:4.6,plays:2400000,badge:"popular"},
    {id:"airhockey",title:"Air Hockey",category:"sports",emoji:"🏒",color:"linear-gradient(135deg, #00bcd4 0%, #0097a7 100%)",description:"Score goals!",controls:"Mouse to control paddle",rating:4.3,plays:720000,badge:"new"},
    {id:"piano",title:"Piano Tiles",category:"puzzle",emoji:"🎹",color:"linear-gradient(135deg, #212121 0%, #424242 100%)",description:"Tap the black tiles!",controls:"Click black tiles only",rating:4.6,plays:3600000,badge:"trending"},
    {id:"drum",title:"Drum Beats",category:"puzzle",emoji:"🥁",color:"linear-gradient(135deg, #ff9800 0%, #f57c00 100%)",description:"Follow the rhythm!",controls:"Click on beats",rating:4.2,plays:580000,badge:"new"},
    {id:"colorswitch",title:"Color Switch",category:"action",emoji:"🌈",color:"linear-gradient(135deg, #e91e63 0%, #9c27b0 50%, #2196f3 100%)",description:"Pass through matching colors!",controls:"Tap to jump",rating:4.5,plays:2000000,badge:"popular"},
    {id:"rollingsky",title:"Rolling Ball",category:"action",emoji:"🔮",color:"linear-gradient(135deg, #3f51b5 0%, #2196f3 100%)",description:"Roll and avoid obstacles!",controls:"Left/Right arrows",rating:4.4,plays:1600000,badge:"new"},
    {id:"runcube",title:"Run Cube",category:"action",emoji:"🎲",color:"linear-gradient(135deg, #ff5722 0%, #ff9800 100%)",description:"Jump with the cube!",controls:"Click/Space to jump",rating:4.3,plays:890000,badge:"new"},
    {id:"flyingbird",title:"Flying Bird",category:"adventure",emoji:"🦅",color:"linear-gradient(135deg, #64b5f6 0%, #1976d2 100%)",description:"Fly through the sky!",controls:"Hold to fly up",rating:4.4,plays:1200000,badge:"new"},
    {id:"subway",title:"Subway Surfer",category:"adventure",emoji:"🚇",color:"linear-gradient(135deg, #4caf50 0%, #2e7d32 100%)",description:"Run and dodge trains!",controls:"Swipe/Arrows to move",rating:4.8,plays:4800000,badge:"trending"},
    {id:"jetpack",title:"Jetpack Joyride",category:"action",emoji:"🚀",color:"linear-gradient(135deg, #673ab7 0%, #512da8 100%)",description:"Fly with jetpack!",controls:"Click/Space to fly",rating:4.6,plays:2300000,badge:"popular"},
    {id:"zombiedash",title:"Zombie Dash",category:"adventure",emoji:"🧟",color:"linear-gradient(135deg, #388e3c 0%, #1b5e20 100%)",description:"Run from zombies!",controls:"Arrow keys to move",rating:4.3,plays:980000,badge:"new"},
    {id:"ninja",title:"Fruit Ninja",category:"action",emoji:"⚔️",color:"linear-gradient(135deg, #607d8b 0%, #37474f 100%)",description:"Slice fruits like a ninja!",controls:"Swipe/Click to slice",rating:4.5,plays:1900000,badge:"popular"}
];

// State
let allGames = GAMES_DATA;
let currentCategory = 'all';
let soundEnabled = true;
let currentGameScore = 0;
let activeGameId = null;

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initSound();
    loadGames();
    setupEventListeners();
    updateFavCount();
    checkURLGame();
});

// ==================== Theme ====================
function initTheme() {
    const theme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeIcon(theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    playSound('click');
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// ==================== Sound ====================
function initSound() {
    soundEnabled = localStorage.getItem('soundEnabled') !== 'false';
    updateSoundIcon();
}

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('soundEnabled', soundEnabled);
    updateSoundIcon();
    if (soundEnabled) playSound('click');
}

function updateSoundIcon() {
    const btn = document.getElementById('soundToggle');
    const icon = btn?.querySelector('i');
    if (icon) icon.className = soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    btn?.classList.toggle('muted', !soundEnabled);
}

function playSound(type) {
    if (!soundEnabled) return;
    const sounds = { click: [800, 0.05], success: [523, 0.1], favorite: [880, 0.15], error: [200, 0.08], win: [660, 0.2] };
    const [freq, dur] = sounds[type] || sounds.click;
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + dur);
    } catch(e) {}
}

// ==================== Storage ====================
function getFavorites() { return JSON.parse(localStorage.getItem('favorites') || '[]'); }
function getRecentGames() { return JSON.parse(localStorage.getItem('recentGames') || '[]'); }
function getHighScores() { return JSON.parse(localStorage.getItem('highScores') || '{}'); }
function getStats() { return JSON.parse(localStorage.getItem('gameStats') || '{}'); }

function toggleFavorite(gameId) {
    let favs = getFavorites();
    const idx = favs.indexOf(gameId);
    if (idx > -1) { favs.splice(idx, 1); showToast('Removed from favorites'); }
    else { favs.push(gameId); showToast('Added to favorites! ❤️', 'success'); playSound('favorite'); }
    localStorage.setItem('favorites', JSON.stringify(favs));
    updateFavCount();
    document.querySelectorAll(`.game-card[data-id="${gameId}"] .fav-btn`).forEach(b => b.classList.toggle('active', favs.includes(gameId)));
    renderFavorites();
}

function updateFavCount() {
    const count = getFavorites().length;
    const el = document.getElementById('favCount');
    if (el) { el.textContent = count; el.style.display = count > 0 ? 'flex' : 'none'; }
}

function addToRecentGames(gameId) {
    let recent = getRecentGames().filter(id => id !== gameId);
    recent.unshift(gameId);
    localStorage.setItem('recentGames', JSON.stringify(recent.slice(0, 10)));
}

function saveHighScore(gameId, score) {
    const scores = getHighScores();
    if (!scores[gameId] || score > scores[gameId]) {
        scores[gameId] = score;
        localStorage.setItem('highScores', JSON.stringify(scores));
        showToast(`🏆 New High Score: ${score}!`, 'success');
        playSound('win');
        renderHighScores();
        checkAchievements();
        return true;
    }
    return false;
}

function updateStats(gameId, data) {
    const stats = getStats();
    if (!stats[gameId]) stats[gameId] = { plays: 0, totalTime: 0, bestScore: 0 };
    stats[gameId].plays++;
    if (data.score > stats[gameId].bestScore) stats[gameId].bestScore = data.score;
    localStorage.setItem('gameStats', JSON.stringify(stats));
}

function checkAchievements() {
    const scores = getHighScores();
    const achievements = [];
    
    if (Object.keys(scores).length >= 1) achievements.push({ id: 'first_win', name: 'First Win', icon: '🏅', desc: 'Score in your first game' });
    if (Object.keys(scores).length >= 5) achievements.push({ id: 'gamer', name: 'True Gamer', icon: '🎮', desc: 'Play 5 different games' });
    if (Object.keys(scores).length >= 10) achievements.push({ id: 'master', name: 'Game Master', icon: '👑', desc: 'Play 10 different games' });
    if (scores['2048'] >= 2048) achievements.push({ id: '2048_master', name: '2048 Master', icon: '🎯', desc: 'Reach 2048!' });
    if (getFavorites().length >= 5) achievements.push({ id: 'collector', name: 'Collector', icon: '❤️', desc: 'Favorite 5 games' });
    
    const unlocked = JSON.parse(localStorage.getItem('achievements') || '[]');
    achievements.forEach(a => {
        if (!unlocked.includes(a.id)) {
            unlocked.push(a.id);
            showToast(`🏅 Achievement: ${a.name}!`);
        }
    });
    localStorage.setItem('achievements', JSON.stringify(unlocked));
}

// ==================== Render ====================
function loadGames() {
    showLoading(true);
    setTimeout(() => {
        renderTrendingGames();
        renderPopularGames();
        renderNewGames();
        renderAllGames();
        renderFavorites();
        renderRecentGames();
        renderHighScores();
        showLoading(false);
    }, 200);
}

function createGameCard(game) {
    const isFav = getFavorites().includes(game.id);
    const hs = getHighScores()[game.id];
    return `
    <div class="game-card" data-id="${game.id}">
        ${game.badge ? `<span class="game-card-badge badge-${game.badge}">${game.badge.toUpperCase()}</span>` : ''}
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation();toggleFavorite('${game.id}')" title="${isFav ? 'Remove' : 'Add'} Favorite"><i class="fas fa-heart"></i></button>
        <div class="game-card-image" style="background:${game.color}" onclick="openGame('${game.id}')">
            <div class="game-emoji">${game.emoji}</div>
            ${hs ? `<span class="high-score-badge"><i class="fas fa-trophy"></i> ${hs}</span>` : ''}
            <div class="game-card-overlay"><button class="play-btn"><i class="fas fa-play"></i></button></div>
        </div>
        <div class="game-card-info" onclick="openGame('${game.id}')">
            <h3 class="game-card-title">${game.title}</h3>
            <div class="game-card-meta">
                <span class="game-card-category">${game.category}</span>
                <span class="game-card-rating"><i class="fas fa-star"></i> ${game.rating}</span>
            </div>
        </div>
    </div>`;
}

function renderTrendingGames() {
    const c = document.getElementById('trendingGames');
    if (c) c.innerHTML = allGames.filter(g => g.badge === 'trending').map(createGameCard).join('');
}

function renderPopularGames() {
    const c = document.getElementById('popularGames');
    if (c) c.innerHTML = allGames.filter(g => g.badge === 'popular').map(createGameCard).join('');
}

function renderNewGames() {
    const c = document.getElementById('newGames');
    if (c) c.innerHTML = allGames.filter(g => g.badge === 'new').map(createGameCard).join('');
}

function renderAllGames(filter = null) {
    const c = document.getElementById('allGames');
    if (!c) return;
    let games = [...allGames];
    if (currentCategory !== 'all') games = games.filter(g => g.category === currentCategory);
    if (filter) games = games.filter(g => g.badge === filter);
    
    const sort = document.getElementById('sortGames')?.value || 'default';
    if (sort === 'name') games.sort((a,b) => a.title.localeCompare(b.title));
    if (sort === 'rating') games.sort((a,b) => b.rating - a.rating);
    if (sort === 'plays') games.sort((a,b) => b.plays - a.plays);
    
    c.innerHTML = games.map(createGameCard).join('');
}

function renderFavorites() {
    const c = document.getElementById('favoritesGames');
    const e = document.getElementById('emptyFavorites');
    const b = document.getElementById('clearFavorites');
    if (!c) return;
    
    const games = allGames.filter(g => getFavorites().includes(g.id));
    if (games.length === 0) { c.innerHTML = ''; e?.classList.remove('hidden'); b && (b.style.display = 'none'); return; }
    e?.classList.add('hidden'); b && (b.style.display = 'flex');
    c.innerHTML = games.map(createGameCard).join('');
}

function renderRecentGames() {
    const c = document.getElementById('recentGames');
    const e = document.getElementById('emptyRecent');
    const b = document.getElementById('clearRecent');
    if (!c) return;
    
    const games = getRecentGames().map(id => allGames.find(g => g.id === id)).filter(Boolean).slice(0, 8);
    if (games.length === 0) { c.innerHTML = ''; e?.classList.remove('hidden'); b && (b.style.display = 'none'); return; }
    e?.classList.add('hidden'); b && (b.style.display = 'flex');
    c.innerHTML = games.map(createGameCard).join('');
}

function renderHighScores() {
    const c = document.getElementById('highScoresGrid');
    const e = document.getElementById('emptyHighScores');
    if (!c) return;
    
    const entries = Object.entries(getHighScores());
    if (entries.length === 0) { c.innerHTML = ''; e?.classList.remove('hidden'); return; }
    e?.classList.add('hidden');
    
    c.innerHTML = entries.map(([id, score]) => {
        const g = allGames.find(x => x.id === id);
        return g ? `<div class="highscore-card" onclick="openGame('${id}')"><span class="highscore-emoji">${g.emoji}</span><div class="highscore-info"><h4>${g.title}</h4><span class="score"><i class="fas fa-trophy"></i> ${score}</span></div></div>` : '';
    }).join('');
}

// ==================== Game Modal ====================
function openGame(gameId) {
    activeGameId = gameId;
    addToRecentGames(gameId);
    const game = allGames.find(g => g.id === gameId);
    if (!game) return;
    playSound('click');
    
    const touch = ['snake','pong','breakout','flappy','asteroids','racing','soccer','2048'].includes(game.id);
    const touchHTML = touch ? `
        <div class="touch-controls">
            <div class="touch-row"><button class="touch-btn" data-key="ArrowUp">▲</button></div>
            <div class="touch-row">
                <button class="touch-btn" data-key="ArrowLeft">◀</button>
                <button class="touch-btn" data-key="ArrowDown">▼</button>
                <button class="touch-btn" data-key="ArrowRight">▶</button>
            </div>
            ${game.id === 'asteroids' ? '<button class="touch-btn action-btn" data-key="Space">🔥 FIRE</button>' : ''}
            ${game.id === 'flappy' ? '<button class="touch-btn action-btn" data-key="Space">🪽 FLAP</button>' : ''}
        </div>` : '';
    
    const modal = document.createElement('div');
    modal.className = 'game-modal';
    modal.id = 'gameModal';
    modal.innerHTML = `
        <div class="game-modal-content">
            <div class="game-modal-header">
                <h2>${game.emoji} ${game.title}</h2>
                <div class="game-modal-header-actions">
                    <button class="header-btn" onclick="restartGame()" title="Restart"><i class="fas fa-redo"></i></button>
                    <button class="header-btn" onclick="shareGame('${game.id}')" title="Share"><i class="fas fa-share-alt"></i></button>
                    <button class="header-btn" onclick="toggleFullscreen()" title="Fullscreen"><i class="fas fa-expand"></i></button>
                    <button class="close-modal" onclick="closeGameModal()">✕</button>
                </div>
            </div>
            <div class="game-modal-body" id="gameModalBody"></div>
            ${touchHTML}
            <div class="game-modal-controls"><p><i class="fas fa-gamepad"></i> <strong>Controls:</strong> ${game.controls}</p></div>
        </div>`;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    modal.addEventListener('click', e => { if (e.target === modal) closeGameModal(); });
    
    setTimeout(() => {
        document.querySelectorAll('.touch-btn').forEach(btn => {
            const send = type => document.dispatchEvent(new KeyboardEvent(type, { key: btn.dataset.key, bubbles: true }));
            btn.addEventListener('touchstart', e => { e.preventDefault(); send('keydown'); });
            btn.addEventListener('touchend', e => { e.preventDefault(); send('keyup'); });
            btn.addEventListener('mousedown', () => send('keydown'));
            btn.addEventListener('mouseup', () => send('keyup'));
        });
        const init = gameInitFunctions[game.id];
        if (init) init(document.getElementById('gameModalBody'), s => saveHighScore(game.id, s));
    }, 100);
    
    renderRecentGames();
}

function closeGameModal() {
    document.getElementById('gameModal')?.remove();
    document.body.style.overflow = '';
    activeGameId = null;
    renderRecentGames();
    renderHighScores();
}

function restartGame() {
    const game = allGames.find(g => g.id === activeGameId);
    if (game) {
        const body = document.getElementById('gameModalBody');
        const init = gameInitFunctions[game.id];
        if (init) init(body, s => saveHighScore(game.id, s));
        playSound('click');
    }
}

function toggleFullscreen() {
    const el = document.querySelector('.game-modal-content');
    if (!document.fullscreenElement) el?.requestFullscreen?.();
    else document.exitFullscreen?.();
}

function shareGame(gameId) {
    const game = allGames.find(g => g.id === gameId);
    const url = window.location.href.split('?')[0] + `?game=${gameId}`;
    if (navigator.share) navigator.share({ title: `${game.title} - GameZone`, text: `Play ${game.title}!`, url });
    else { navigator.clipboard.writeText(url); showToast('Link copied to clipboard!'); }
    playSound('success');
}

function checkURLGame() {
    const params = new URLSearchParams(window.location.search);
    const gameId = params.get('game');
    if (gameId && allGames.find(g => g.id === gameId)) {
        setTimeout(() => openGame(gameId), 500);
    }
}

// ==================== UI Helpers ====================
function showLoading(show) {
    document.getElementById('loadingOverlay')?.classList.toggle('hidden', show);
}

function showToast(msg, type = 'success') {
    const t = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = msg;
    t.className = `toast ${type} show`;
    setTimeout(() => t.classList.remove('show'), 3000);
}

function showInfoModal(type) {
    const content = {
        about: '<h2><i class="fas fa-info-circle"></i> About GameZone</h2><p>Welcome to GameZone - your ultimate free gaming destination!</p><p>🎮 12+ games • 💾 Auto-save • 📱 Mobile-friendly • 🏆 High scores</p>',
        contact: '<h2><i class="fas fa-envelope"></i> Contact Us</h2><p>📧 Email: contact@gamezone.com</p><p>💬 Discord: discord.gg/gamezone</p>',
        privacy: '<h2><i class="fas fa-shield-alt"></i> Privacy Policy</h2><p>✅ All data stored locally on your device</p><p>✅ No personal data collected</p><p>✅ No tracking or cookies</p>',
        terms: '<h2><i class="fas fa-file-contract"></i> Terms of Service</h2><p>Use for personal entertainment. Games provided "as is". Have fun! 🎮</p>'
    };
    document.getElementById('infoModalBody').innerHTML = content[type] || '';
    document.getElementById('infoModal')?.classList.add('active');
}

// ==================== Event Listeners ====================
function setupEventListeners() {
    // Theme & Sound
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
    document.getElementById('soundToggle')?.addEventListener('click', toggleSound);
    
    // Mobile Menu
    document.getElementById('mobileMenuBtn')?.addEventListener('click', () => document.getElementById('mobileMenu')?.classList.toggle('active'));
    
    // Categories
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderAllGames();
            playSound('click');
        });
    });
    
    // Sort
    document.getElementById('sortGames')?.addEventListener('change', () => renderAllGames());
    
    // Search
    document.getElementById('searchInput')?.addEventListener('input', e => {
        const q = e.target.value.toLowerCase().trim();
        const r = document.getElementById('searchResults');
        if (q.length < 2) { r?.classList.remove('active'); return; }
        const matches = allGames.filter(g => g.title.toLowerCase().includes(q) || g.category.toLowerCase().includes(q));
        r.innerHTML = matches.slice(0, 5).map(g => `<div class="search-result-item" onclick="openGame('${g.id}');document.getElementById('searchResults').classList.remove('active');document.getElementById('searchInput').value='';"><span class="search-result-emoji">${g.emoji}</span><div class="search-result-info"><h4>${g.title}</h4><span>${g.category} • ⭐ ${g.rating}</span></div></div>`).join('') || '<div class="search-result-item"><span>No games found</span></div>';
        r?.classList.add('active');
    });
    document.addEventListener('click', e => { if (!e.target.closest('.search-box')) document.getElementById('searchResults')?.classList.remove('active'); });
    
    // See All Buttons
    document.querySelectorAll('.see-all').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            renderAllGames(btn.dataset.filter);
            document.getElementById('all-games')?.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Clear Buttons
    document.getElementById('clearFavorites')?.addEventListener('click', () => { localStorage.removeItem('favorites'); updateFavCount(); renderFavorites(); loadGames(); showToast('Favorites cleared'); });
    document.getElementById('clearRecent')?.addEventListener('click', () => { localStorage.removeItem('recentGames'); renderRecentGames(); showToast('Recent cleared'); });
    
    // Footer Links
    document.getElementById('linkAbout')?.addEventListener('click', e => { e.preventDefault(); showInfoModal('about'); });
    document.getElementById('linkContact')?.addEventListener('click', e => { e.preventDefault(); showInfoModal('contact'); });
    document.getElementById('linkPrivacy')?.addEventListener('click', e => { e.preventDefault(); showInfoModal('privacy'); });
    document.getElementById('linkTerms')?.addEventListener('click', e => { e.preventDefault(); showInfoModal('terms'); });
    document.getElementById('closeInfoModal')?.addEventListener('click', () => document.getElementById('infoModal')?.classList.remove('active'));
    document.getElementById('infoModal')?.addEventListener('click', e => { if (e.target.id === 'infoModal') e.target.classList.remove('active'); });
    
    // Footer Category Links
    document.querySelectorAll('.cat-link').forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            const cat = link.dataset.cat;
            document.querySelectorAll('.category-btn').forEach(b => b.classList.toggle('active', b.dataset.category === cat));
            currentCategory = cat;
            renderAllGames();
            document.getElementById('all-games')?.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeGameModal();
    });
}

// ==================== Game Implementations ====================
const gameInitFunctions = {
    '2048': init2048,
    'snake': initSnake,
    'tic-tac-toe': initTicTacToe,
    'memory': initMemory,
    'pong': initPong,
    'breakout': initBreakout,
    'flappy': initFlappy,
    'asteroids': initAsteroids,
    'racing': initRacing,
    'basketball': initBasketball,
    'soccer': initSoccer,
    'chess': initChess,
    // New games
    'frogger': initFrogger,
    'tetris': initTetris,
    'minesweeper': initMinesweeper,
    'sudoku': initSudoku,
    'spaceinvaders': initSpaceInvaders,
    'pacman': initPacman,
    'connect4': initConnect4,
    'checkers': initCheckers,
    'simon': initSimon,
    'wordle': initWordle,
    'blackjack': initBlackjack,
    'solitaire': initSolitaire,
    'platformer': initPlatformer,
    'whackamole': initWhackamole,
    'bubbleshooter': initBubbleShooter,
    'fruitninja': initFruitNinja,
    'angrybirds': initAngryBirds,
    'candycrush': initCandyCrush,
    'pinball': initPinball,
    'templerun': initTempleRun,
    'crossyroad': initCrossyRoad,
    'doodlejump': initDoodleJump,
    'geometrydash': initGeometryDash,
    'stack': initStack,
    'helixjump': initHelixJump,
    'bottleflip': initBottleFlip,
    'paperio': initPaperIO,
    'slitherio': initSlitherIO,
    ' agar.io': initAgarIO,
    'tanks': initTanks,
    'duckhunt': initDuckHunt,
    'bowling': initBowling,
    'golf': initGolf,
    'tennis': initTennis,
    'baseball': initBaseball,
    'archery': initArchery,
    'darts': initDarts,
    'pool': initPool,
    'airhockey': initAirHockey,
    'piano': initPiano,
    'drum': initDrum,
    'colorswitch': initColorSwitch,
    'rollingsky': initRollingSky,
    'runcube': initRunCube,
    'flyingbird': initFlyingBird,
    'subway': initSubway,
    'jetpack': initJetpack,
    'zombiedash': initZombieDash,
    'ninja': initNinja
};

function init2048(container, saveScore) {
    let grid, score;
    container.innerHTML = `<style>.g2048{text-align:center}.g2048-score{color:var(--text-primary);font-size:28px;font-weight:700;margin-bottom:20px}.g2048-grid{display:grid;grid-template-columns:repeat(4,75px);gap:10px;background:var(--bg-tertiary);padding:15px;border-radius:16px;margin:0 auto;width:fit-content}.g2048-cell{width:75px;height:75px;border-radius:12px;display:flex;justify-content:center;align-items:center;font-size:26px;font-weight:bold;transition:transform 0.1s}</style><div class="g2048"><div class="g2048-score">Score: <span id="g2048Score">0</span></div><div class="g2048-grid" id="g2048Grid"></div></div>`;
    
    const colors = {0:'#cdc1b4',2:'#eee4da',4:'#ede0c8',8:'#f2b179',16:'#f59563',32:'#f67c5f',64:'#f65e3b',128:'#edcf72',256:'#edcc61',512:'#edc850',1024:'#edc53f',2048:'#edc22e'};
    
    function init() { grid = Array(16).fill(0); score = 0; addR(); addR(); render(); }
    function addR() { const e = grid.map((v,i) => v===0?i:-1).filter(i=>i>=0); if(e.length) grid[e[Math.floor(Math.random()*e.length)]] = Math.random()<0.9?2:4; }
    function render() { document.getElementById('g2048Score').textContent = score; document.getElementById('g2048Grid').innerHTML = grid.map(v => `<div class="g2048-cell" style="background:${colors[v]||'#3c3a32'};color:${v<=4?'#776e65':'#f9f6f2'}">${v||''}</div>`).join(''); }
    function slide(arr) { let a = arr.filter(v=>v); for(let i=0;i<a.length-1;i++) if(a[i]===a[i+1]){a[i]*=2;score+=a[i];a.splice(i+1,1);} while(a.length<4)a.push(0); return a; }
    function move(dir) {
        let moved = false;
        const rows = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]], cols = [[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]];
        const groups = (dir==='left'||dir==='right')?rows:cols;
        groups.forEach(g => {
            let arr = g.map(i=>grid[i]);
            if(dir==='right'||dir==='down') arr.reverse();
            const newArr = slide(arr);
            if(dir==='right'||dir==='down') newArr.reverse();
            g.forEach((gi,i) => { if(grid[gi]!==newArr[i]) moved=true; grid[gi]=newArr[i]; });
        });
        if(moved){addR();render();if(saveScore)saveScore(score);}
    }
    const h = e => { const d = {ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down'}; if(d[e.key]){e.preventDefault();move(d[e.key]);}};
    document.addEventListener('keydown', h);
    init();
}

function initSnake(container, saveScore) {
    container.innerHTML = `<style>.snake-info{text-align:center;color:var(--text-primary);margin-bottom:15px}.snake-score{font-size:24px;font-weight:700}.snake-gameover{color:#e74c3c;font-size:18px;margin-top:10px;display:none}.snake-restart{background:var(--accent-gradient);color:white;border:none;padding:12px 24px;border-radius:50px;cursor:pointer;font-size:16px;margin-top:15px;font-family:Poppins,sans-serif}</style><div class="snake-info"><div class="snake-score">Score: <span id="snakeScore">0</span></div><div class="snake-gameover" id="snakeGameOver">Game Over! Score: <span id="snakeFinalScore">0</span></div><button class="snake-restart" id="snakeRestart" style="display:none">🔄 Play Again</button></div><canvas id="snakeCanvas" width="360" height="360" style="background:linear-gradient(135deg,#1a1a2e,#16213e);border-radius:16px;display:block;margin:0 auto"></canvas>`;
    
    const canvas = document.getElementById('snakeCanvas'), ctx = canvas.getContext('2d');
    const gs = 18, gc = canvas.width/gs;
    let snake, food, dir, nextDir, loop, score, running;
    
    function reset() {
        snake = [{x:5,y:5}]; dir = nextDir = 'right'; score = 0; running = true;
        placeFood(); document.getElementById('snakeScore').textContent = '0';
        document.getElementById('snakeGameOver').style.display = 'none';
        document.getElementById('snakeRestart').style.display = 'none';
        if(loop) clearInterval(loop); loop = setInterval(update, 100); draw();
    }
    function placeFood() { do { food = {x:Math.floor(Math.random()*gc), y:Math.floor(Math.random()*gc)}; } while(snake.some(s=>s.x===food.x&&s.y===food.y)); }
    function update() {
        if(!running) return;
        dir = nextDir; const head = {...snake[0]};
        if(dir==='up') head.y--; if(dir==='down') head.y++; if(dir==='left') head.x--; if(dir==='right') head.x++;
        if(head.x<0||head.x>=gc||head.y<0||head.y>=gc||snake.some(s=>s.x===head.x&&s.y===head.y)) {
            clearInterval(loop); running = false;
            document.getElementById('snakeGameOver').style.display = 'block';
            document.getElementById('snakeFinalScore').textContent = score;
            document.getElementById('snakeRestart').style.display = 'inline-block';
            if(saveScore) saveScore(score); return;
        }
        snake.unshift(head);
        if(head.x===food.x&&head.y===food.y) { score += 10; document.getElementById('snakeScore').textContent = score; placeFood(); }
        else snake.pop();
        draw();
    }
    function draw() {
        ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,canvas.width,canvas.height);
        snake.forEach((s,i) => { ctx.fillStyle = i===0?'#6c5ce7':'#a29bfe'; ctx.beginPath(); ctx.roundRect(s.x*gs+1,s.y*gs+1,gs-2,gs-2,4); ctx.fill(); });
        ctx.fillStyle = '#e74c3c'; ctx.beginPath(); ctx.arc(food.x*gs+gs/2,food.y*gs+gs/2,gs/2-2,0,Math.PI*2); ctx.fill();
    }
    const h = e => { if(!running) return; const k = e.key;
        if(k==='ArrowUp'&&dir!=='down'){e.preventDefault();nextDir='up';} if(k==='ArrowDown'&&dir!=='up'){e.preventDefault();nextDir='down';}
        if(k==='ArrowLeft'&&dir!=='right'){e.preventDefault();nextDir='left';} if(k==='ArrowRight'&&dir!=='left'){e.preventDefault();nextDir='right';}
    };
    document.addEventListener('keydown', h);
    document.getElementById('snakeRestart').addEventListener('click', reset);
    reset();
}

function initTicTacToe(container, saveScore) {
    container.innerHTML = `<style>.ttt{text-align:center}.ttt-status{color:var(--text-primary);font-size:20px;margin-bottom:15px}.ttt-board{display:grid;grid-template-columns:repeat(3,80px);gap:8px;justify-content:center}.ttt-cell{width:80px;height:80px;background:var(--bg-tertiary);border-radius:12px;font-size:48px;font-weight:bold;cursor:pointer;display:flex;justify-content:center;align-items:center;transition:transform 0.1s}.ttt-cell:hover{transform:scale(1.05)}.ttt-cell.x{color:#e74c3c}.ttt-cell.o{color:#3498db}</style><div class="ttt"><div class="ttt-status" id="tttStatus">Your turn (X)</div><div class="ttt-board" id="tttBoard"></div></div>`;
    let board, turn, over; const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    function init() { board = Array(9).fill(''); turn = 'X'; over = false; document.getElementById('tttStatus').textContent = 'Your turn (X)'; render(); }
    function render() { document.getElementById('tttBoard').innerHTML = board.map((v,i) => `<div class="ttt-cell ${v.toLowerCase()}" data-idx="${i}">${v}</div>`).join(''); document.querySelectorAll('.ttt-cell').forEach(c => c.addEventListener('click
', () => click(parseInt(c.dataset.idx)))); }
    function click(i) { if(board[i] || over || turn !== 'X') return; board[i] = 'X'; render(); if(check('X')) { document.getElementById('tttStatus').textContent = '🎉 You win!'; over = true; if(saveScore) saveScore(10); return; } if(board.every(c => c)) { document.getElementById('tttStatus').textContent = "It's a draw!"; over = true; return; } setTimeout(ai, 300); }
    function ai() { const empty = board.map((v,i) => v ? -1 : i).filter(i => i >= 0); if(!empty.length) return; let move = empty[Math.floor(Math.random() * empty.length)]; board[move] = 'O'; render(); if(check('O')) { document.getElementById('tttStatus').textContent = 'AI wins! 😢'; over = true; return; } document.getElementById('tttStatus').textContent = 'Your turn (X)'; }
    function check(p) { return wins.some(w => w.every(i => board[i] === p)); }
    init();
}

function initMemory(container, saveScore) {
    const emojis = ['🍎','🍊','🍋','🍇','🍓','🍒','🥝','🍑'];
    container.innerHTML = `<style>.mem{text-align:center}.mem-info{color:var(--text-primary);font-size:18px;margin-bottom:15px}.mem-grid{display:grid;grid-template-columns:repeat(4,70px);gap:10px;justify-content:center}.mem-card{width:70px;height:70px;background:linear-gradient(135deg,#667eea,#764ba2);border-radius:12px;cursor:pointer;display:flex;justify-content:center;align-items:center;font-size:32px;transition:transform 0.3s}.mem-card.flipped{background:var(--bg-tertiary)}.mem-card.matched{background:#27ae60;opacity:0.7}</style><div class="mem"><div class="mem-info">Moves: <span id="memMoves">0</span> • Matches: <span id="memMatches">0</span>/8</div><div class="mem-grid" id="memGrid"></div></div>`;
    let cards, flipped, matched, moves;
    function init() { cards = [...emojis, ...emojis].sort(() => Math.random() - 0.5); flipped = []; matched = []; moves = 0; render(); }
    function render() { document.getElementById('memGrid').innerHTML = cards.map((e,i) => `<div class="mem-card ${flipped.includes(i)?'flipped':''} ${matched.includes(i)?'matched':''}" data-idx="${i}">${flipped.includes(i)||matched.includes(i)?e:'❓'}</div>`).join(''); document.querySelectorAll('.mem-card').forEach(c => c.addEventListener('click', () => click(parseInt(c.dataset.idx)))); }
    function click(i) { if(flipped.length >= 2 || flipped.includes(i) || matched.includes(i)) return; flipped.push(i); render(); if(flipped.length === 2) { moves++; document.getElementById('memMoves').textContent = moves; setTimeout(check, 500); } }
    function check() { if(cards[flipped[0]] === cards[flipped[1]]) { matched.push(...flipped); document.getElementById('memMatches').textContent = matched.length/2; if(matched.length === 16) { if(saveScore) saveScore(Math.max(100 - moves * 2, 10)); } } flipped = []; render(); }
    init();
}

function initPong(container, saveScore) {
    container.innerHTML = `<style>.pong{text-align:center}.pong-score{color:var(--text-primary);font-size:24px;margin-bottom:10px}</style><div class="pong"><div class="pong-score">You: <span id="pongPlayer">0</span> • AI: <span id="pongAI">0</span></div><canvas id="pongCanvas" width="400" height="300" style="background:#1a1a2e;border-radius:12px"></canvas></div>`;
    const canvas = document.getElementById('pongCanvas'), ctx = canvas.getContext('2d');
    let py, ay, bx, by, bvx, bvy, ps, as, running;
    const pw = 10, ph = 60, bw = 10;
    function reset() { py = ay = canvas.height/2 - ph/2; bx = canvas.width/2; by = canvas.height/2; bvx = 5 * (Math.random() > 0.5 ? 1 : -1); bvy = 3 * (Math.random() > 0.5 ? 1 : -1); ps = as = 0; running = true; updateScore(); }
    function updateScore() { document.getElementById('pongPlayer').textContent = ps; document.getElementById('pongAI').textContent = as; }
    function update() { if(!running) return; by += bvy; ay += (by - ay - ph/2) * 0.08; if(by <= bw || by >= canvas.height - bw) bvy *= -1; if(bx <= pw + bw && by >= py && by <= py + ph) { bvx = Math.abs(bvx) * 1.05; bvy += (by - py - ph/2) * 0.1; } if(bx >= canvas.width - pw - bw && by >= ay && by <= ay + ph) { bvx = -Math.abs(bvx) * 1.05; } if(bx < 0) { as++; updateScore(); if(as >= 5) { running = false; if(saveScore) saveScore(ps * 10); } else { bx = canvas.width/2; bvx = 5; } } if(bx > canvas.width) { ps++; updateScore(); bx = canvas.width/2; bvx = -5; } draw(); requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.setLineDash([5,5]); ctx.strokeStyle = '#333'; ctx.beginPath(); ctx.moveTo(canvas.width/2,0); ctx.lineTo(canvas.width/2,canvas.height); ctx.stroke(); ctx.setLineDash([]); ctx.fillStyle = '#6c5ce7'; ctx.fillRect(0,py,pw,ph); ctx.fillStyle = '#e74c3c'; ctx.fillRect(canvas.width-pw,ay,pw,ph); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(bx,by,bw,0,Math.PI*2); ctx.fill(); }
    const h = e => { if(e.key==='ArrowUp'){e.preventDefault();py=Math.max(0,py-20)} if(e.key==='ArrowDown'){e.preventDefault();py=Math.min(canvas.height-ph,py+20)} };
    document.addEventListener('keydown', h);
    reset(); update();
}

function initBreakout(container, saveScore) {
    container.innerHTML = `<style>.brk{text-align:center}.brk-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="brk"><div class="brk-score">Score: <span id="brkScore">0</span></div><canvas id="brkCanvas" width="400" height="350" style="background:linear-gradient(180deg,#1a1a2e,#16213e);border-radius:12px"></canvas></div>`;
    const canvas = document.getElementById('brkCanvas'), ctx = canvas.getContext('2d');
    const bw = 80, bh = 12, br = 8, bc = 7;
    let px, bx, by, bvx, bvy, bricks, score, running;
    function reset() { px = canvas.width/2 - bw/2; bx = canvas.width/2; by = canvas.height - 50; bvx = 4; bvy = -4; score = 0; running = true; bricks = []; const colors = ['#e74c3c','#e67e22','#f1c40f','#2ecc71','#3498db','#9b59b6','#1abc9c']; for(let r=0;r<bc;r++) for(let c=0;c<br;c++) bricks.push({x:c*50+25, y:r*25+30, w:45, h:18, color:colors[r]}); updateScore(); }
    function updateScore() { document.getElementById('brkScore').textContent = score; }
    function update() { if(!running) return; bx += bvx; by += bvy; if(bx <= br || bx >= canvas.width - br) bvx *= -1; if(by <= br) bvy *= -1; if(by >= canvas.height - br) { running = false; if(saveScore) saveScore(score); return; } if(by >= canvas.height - 40 && bx >= px && bx <= px + bw) bvy = -Math.abs(bvy); bricks = bricks.filter(b => { if(bx >= b.x && bx <= b.x + b.w && by >= b.y && by <= b.y + b.h) { bvy *= -1; score += 10; updateScore(); return false; } return true; }); if(bricks.length === 0) { if(saveScore) saveScore(score + 100); running = false; } draw(); requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,canvas.width,canvas.height); bricks.forEach(b => { ctx.fillStyle = b.color; ctx.beginPath(); ctx.roundRect(b.x,b.y,b.w,b.h,4); ctx.fill(); }); ctx.fillStyle = '#6c5ce7'; ctx.beginPath(); ctx.roundRect(px,canvas.height-30,bw,bh,6); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(bx,by,br,0,Math.PI*2); ctx.fill(); }
    const h = e => { if(e.key==='ArrowLeft'){e.preventDefault();px=Math.max(0,px-20)} if(e.key==='ArrowRight'){e.preventDefault();px=Math.min(canvas.width-bw,px+20)} };
    document.addEventListener('keydown', h);
    reset(); update();
}

function initFlappy(container, saveScore) {
    container.innerHTML = `<style>.flp{text-align:center}.flp-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="flp"><div class="flp-score">Score: <span id="flpScore">0</span></div><canvas id="flpCanvas" width="350" height="400" style="background:linear-gradient(180deg,#87CEEB,#E0F6FF);border-radius:12px"></canvas></div>`;
    const canvas = document.getElementById('flpCanvas'), ctx = canvas.getContext('2d');
    let bird, pipes, score, running, gameStarted;
    function reset() { bird = {y:canvas.height/2,vy:0}; pipes = []; score = 0; running = true; gameStarted = false; updateScore(); }
    function updateScore() { document.getElementById('flpScore').textContent = score; }
    function update() {
        if(!running) return;
        if(gameStarted) { bird.vy += 0.5; bird.y += bird.vy; pipes.forEach(p => { p.x -= 3; if(!p.scored && p.x < 50) { p.scored = true; score++; updateScore(); } }); pipes = pipes.filter(p => p.x > -60); if(pipes.length === 0 || pipes[pipes.length-1].x < 200) pipes.push({x:350,gap:100+Math.random()*100,scored:false}); pipes.forEach(p => { if(50+20 > p.x && 50-20 < p.x+50 && (bird.y-15 < p.gap-50 || bird.y+15 > p.gap+50)) gameOver(); }); if(bird.y > canvas.height || bird.y < 0) gameOver(); }
        draw(); if(running) requestAnimationFrame(update);
    }
    function gameOver() { running = false; if(saveScore) saveScore(score); }
    function draw() {
        ctx.fillStyle = '#87CEEB'; ctx.fillRect(0,0,canvas.width,canvas.height);
        ctx.fillStyle = '#f39c12'; ctx.beginPath(); ctx.arc(50,bird.y,20,0,Math.PI*2); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(58,bird.y-5,6,0,Math.PI*2); ctx.fill();
        pipes.forEach(p => { ctx.fillStyle = '#27ae60'; ctx.fillRect(p.x,0,50,p.gap-50); ctx.fillRect(p.x,p.gap+50,50,canvas.height); });
        if(!gameStarted) { ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#fff'; ctx.font = '20px Poppins'; ctx.textAlign = 'center'; ctx.fillText('Click or Space to Start',canvas.width/2,canvas.height/2); }
    }
    function flap() { if(!running) return; gameStarted = true; bird.vy = -8; }
    const h = e => { if(e.key===' '||e.code==='Space'){e.preventDefault();flap()} };
    canvas.addEventListener('click', flap); document.addEventListener('keydown', h);
    reset(); update();
}

function initAsteroids(container, saveScore) {
    container.innerHTML = `<style>.ast{text-align:center}.ast-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="ast"><div class="ast-score">Score: <span id="astScore">0</span></div><canvas id="astCanvas" width="400" height="400" style="background:#0a0a0f;border-radius:12px"></canvas></div>`;
    const canvas = document.getElementById('astCanvas'), ctx = canvas.getContext('2d');
    let ship, asteroids, bullets, score, running, keys;
    function reset() { ship = {x:canvas.width/2, y:canvas.height/2, a:0, r:15}; asteroids = []; bullets = []; score = 0; running = true; keys = {}; for(let i=0;i<5;i++) asteroids.push({x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:30+Math.random()*20, vx:(Math.random()-0.5)*2, vy:(Math.random()-0.5)*2}); updateScore(); }
    function updateScore() { document.getElementById('astScore').textContent = score; }
    function update() { if(!running) return; if(keys['ArrowLeft']) ship.a -= 0.08; if(keys['ArrowRight']) ship.a += 0.08; if(keys['ArrowUp']) { ship.x += Math.cos(ship.a)*3; ship.y += Math.sin(ship.a)*3; } bullets.forEach(b => { b.x += Math.cos(b.a)*8; b.y += Math.sin(b.a)*8; }); bullets = bullets.filter(b => b.x > 0 && b.x < canvas.width && b.y > 0 && b.y < canvas.height); asteroids.forEach(a => { a.x += a.vx; a.y += a.vy; if(a.x < 0) a.x = canvas.width; if(a.x > canvas.width) a.x = 0; if(a.y < 0) a.y = canvas.height; if(a.y > canvas.height) a.y = 0; }); bullets.forEach(b => { asteroids = asteroids.filter(a => Math.hypot(b.x-a.x,b.y-a.y) > a.r); }); asteroids.forEach(a => { if(Math.hypot(ship.x-a.x,ship.y-a.y) < a.r + ship.r) { running = false; if(saveScore) saveScore(score); } }); if(asteroids.length === 0) { if(saveScore) saveScore(score + 200); running = false; } draw(); if(running) requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#0a0a0f'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.strokeStyle = '#fff'; ctx.beginPath(); ctx.moveTo(ship.x + Math.cos(ship.a)*ship.r, ship.y + Math.sin(ship.a)*ship.r); ctx.lineTo(ship.x + Math.cos(ship.a+2.5)*ship.r, ship.y + Math.sin(ship.a+2.5)*ship.r); ctx.lineTo(ship.x + Math.cos(ship.a-2.5)*ship.r, ship.y + Math.sin(ship.a-2.5)*ship.r); ctx.closePath(); ctx.stroke(); ctx.fillStyle = '#f39c12'; bullets.forEach(b => ctx.fillRect(b.x-2,b.y-2,4,4)); ctx.strokeStyle = '#888'; asteroids.forEach(a => { ctx.beginPath(); ctx.arc(a.x,a.y,a.r,0,Math.PI*2); ctx.stroke(); }); }
    function shoot() { bullets.push({x:ship.x+Math.cos(ship.a)*ship.r, y:ship.y+Math.sin(ship.a)*ship.r, a:ship.a}); score += 5; updateScore(); }
    const h = e => { keys[e.code] = true; if(e.code==='Space'){e.preventDefault();shoot()} };
    const hu = e => { keys[e.code] = false; };
    document.addEventListener('keydown', h); document.addEventListener('keyup', hu);
    reset(); update();
}

function initRacing(container, saveScore) {
    container.innerHTML = `<style>.rac{text-align:center}.rac-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="rac"><div class="rac-score">Score: <span id="racScore">0</span></div><canvas id="racCanvas" width="300" height="450" style="background:#1a1a2e;border-radius:12px"></canvas></div>`;
    const canvas = document.getElementById('racCanvas'), ctx = canvas.getContext('2d');
    let car, obstacles, score, running, speed;
    function reset() { car = {x:canvas.width/2-20, y:canvas.height-80, w:40, h:60}; obstacles = []; score = 0; running = true; speed = 5; updateScore(); }
    function updateScore() { document.getElementById('racScore').textContent = score; }
    function update() { if(!running) return; if(Math.random() < 0.03) obstacles.push({x:30+Math.random()*(canvas.width-90), y:-60, w:40, h:60}); obstacles.forEach(o => o.y += speed); obstacles = obstacles.filter(o => o.y < canvas.height + 70); obstacles.forEach(o => { if(car.x < o.x+o.w && car.x+car.w > o.x && car.y < o.y+o.h && car.y+car.h > o.y) { running = false; if(saveScore) saveScore(score); } }); score++; if(score % 500 === 0) speed += 0.5; updateScore(); draw(); if(running) requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#2c3e50'; ctx.fillRect(25,0,10,canvas.height); ctx.fillRect(canvas.width-35,0,10,canvas.height); for(let y=0;y<canvas.height;y+=40) { ctx.fillStyle = '#f1c40f'; ctx.fillRect(canvas.width/2-3,y,6,20); } ctx.fillStyle = '#e74c3c'; ctx.beginPath(); ctx.roundRect(car.x,car.y,car.w,car.h,8); ctx.fill(); ctx.fillStyle = '#c0392b'; ctx.fillRect(car.x+5,car.y+5,car.w-10,15); ctx.fillStyle = '#3498db'; obstacles.forEach(o => { ctx.beginPath(); ctx.roundRect(o.x,o.y,o.w,o.h,8); ctx.fill(); }); }
    const h = e => { if(e.key==='ArrowLeft'){e.preventDefault();car.x=Math.max(30,car.x-15)} if(e.key==='ArrowRight'){e.preventDefault();car.x=Math.min(canvas.width-70,car.x+15)} };
    document.addEventListener('keydown', h);
    reset(); update();
}

function initBasketball(container, saveScore) {
    container.innerHTML = `<style>.bsk{text-align:center}.bsk-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}.bsk-canvas{cursor:crosshair}</style><div class="bsk"><div class="bsk-score">Score: <span id="bskScore">0</span> / Attempts: <span id="bskAtt">0</span></div><canvas id="bskCanvas" width="350" height="400" class="bsk-canvas" style="background:linear-gradient(180deg,#3498db,#2980b9);border-radius:12px"></canvas></div>`;
    const canvas = document.getElementById('bskCanvas'), ctx = canvas.getContext('2d');
    let ball, hoop, score, attempts, running, dragging, dragStart;
    function reset() { ball = {x:60,y:320,r:18}; hoop = {x:280,y:120,w:60,h:10}; score = 0; attempts = 0; running = true; dragging = false; updateScore(); }
    function updateScore() { document.getElementById('bskScore').textContent = score; document.getElementById('bskAtt').textContent = attempts; }
    function update() { if(!running) return; if(!dragging && ball.thrown) { ball.vy += 0.5; ball.x += ball.vx; ball.y += ball.vy; if(ball.x > hoop.x && ball.x < hoop.x+hoop.w && ball.y > hoop.y-10 && ball.y < hoop.y+20 && ball.vy > 0) { score++; updateScore(); if(saveScore) saveScore(score * 10); } if(ball.y > canvas.height + 50) reset(); } draw(); if(running) requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#3498db'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#e74c3c'; ctx.fillRect(hoop.x-10,hoop.y-5,hoop.w+20,15); ctx.fillStyle = '#f39c12'; ctx.beginPath(); ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2); ctx.fill(); if(dragging) { ctx.strokeStyle = '#fff'; ctx.setLineDash([5,5]); ctx.beginPath(); ctx.moveTo(ball.x,ball.y); ctx.lineTo(dragStart.x,dragStart.y); ctx.stroke(); ctx.setLineDash([]); } }
    canvas.addEventListener('mousedown', e => { const r = canvas.getBoundingClientRect(); const mx = e.clientX - r.left, my = e.clientY - r.top; if(Math.hypot(mx-ball.x,my-ball.y) < 40) { dragging = true; dragStart = {x:mx,y:my}; } });
    canvas.addEventListener('mousemove', e => { if(dragging) { const r = canvas.getBoundingClientRect(); dragStart = {x:e.clientX-r.left,y:e.clientY-r.top}; } });
    canvas.addEventListener('mouseup', e => { if(dragging) { const dx = ball.x - dragStart.x, dy = ball.y - dragStart.y; ball.vx = dx * 0.15; ball.vy = dy * 0.15; ball.thrown = true; attempts++; updateScore(); dragging = false; } });
    reset(); update();
}

function initSoccer(container, saveScore) {
    container.innerHTML = `<style>.scc{text-align:center}.scc-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="scc"><div class="scc-score">Score: <span id="sccScore">0</span></div><canvas id="sccCanvas" width="350" height="400" style="background:linear-gradient(180deg,#27ae60,#2ecc71);border-radius:12px"></canvas></div>`;
    const canvas = document.getElementById('sccCanvas'), ctx = canvas.getContext('2d');
    let player, ball, score, running;
    function reset() { player = {x:canvas.width/2, y:canvas.height-60, r:20}; ball = {x:canvas.width/2, y:canvas.height/2, r:15, vx:2, vy:2}; score = 0; running = true; updateScore(); }
    function updateScore() { document.getElementById('sccScore').textContent = score; }
    function update() { if(!running) return; ball.x += ball.vx; ball.y += ball.vy; if(ball.x <= ball.r || ball.x >= canvas.width-ball.r) ball.vx *= -1; if(ball.y <= ball.r || ball.y >= canvas.height-ball.r) ball.vy *= -1; if(Math.hypot(player.x-ball.x,player.y-ball.y) < player.r + ball.r) { const angle = Math.atan2(ball.y-player.y, ball.x-player.x); ball.vx = Math.cos(angle) * 5; ball.vy = Math.sin(angle) * 5; score++; updateScore(); } ball.vx *= 0.995; ball.vy *= 0.995; if(Math.abs(ball.vx) < 1) ball.vx = (Math.random()-0.5) * 3; if(Math.abs(ball.vy) < 1) ball.vy = (Math.random()-0.5) * 3; draw(); if(running) requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#27ae60'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.strokeStyle = 'rgba(255,255,255,0.3)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(canvas.width/2,canvas.height/2,60,0,Math.PI*2); ctx.stroke(); ctx.fillStyle = '#3498db'; ctx.beginPath(); ctx.arc(player.x,player.y,player.r,0,Math.PI*2); ctx.fill(); ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(ball.x,ball.y,ball.r,0,Math.PI*2); ctx.fill(); }
    const h = e => { if(e.key==='ArrowLeft'){e.preventDefault();player.x=Math.max(player.r,player.x-15)} if(e.key==='ArrowRight'){e.preventDefault();player.x=Math.min(canvas.width-player.r,player.x+15)} if(e.key==='ArrowUp'){e.preventDefault();player.y=Math.max(player.r,player.y-15)} if(e.key==='ArrowDown'){e.preventDefault();player.y=Math.min(canvas.height-player.r,player.y+15)} };
    document.addEventListener('keydown', h);
    reset(); update();
}

function initChess(container, saveScore) {
    const pieces = {K:'♔',Q:'♕',R:'♖',B:'♗',N:'♘',P:'♙',k:'♚',q:'♛',r:'♜',b:'♝',n:'♞',p:'♟'};
    const initBoard = [['r','n','b','q','k','b','n','r'],['p','p','p','p','p','p','p','p'],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['','','','','','','',''],['P','P','P','P','P','P','P','P'],['R','N','B','Q','K','B','N','R']];
    container.innerHTML = `<style>.chs{text-align:center}.chs-turn{color:var(--text-primary);font-size:18px;margin-bottom:10px}.chs-board{display:grid;grid-template-columns:repeat(8,45px);gap:1px;background:#333;padding:2px;border-radius:8px;margin:0 auto;width:fit-content}.chs-cell{width:45px;height:45px;display:flex;justify-content:center;align-items:center;font-size:32px;cursor:pointer}.chs-cell.light{background:#f0d9b5}.chs-cell.dark{background:#b58863}.chs-cell.selected{background:#7fc97f!important}.chs-cell.valid-move{background:#ffeb3b!important}</style><div class="chs"><div class="chs-turn" id="chsTurn">White's turn ♔</div><div class="chs-board" id="chsBoard"></div></div>`;
    let board, selected, validMoves, whiteTurn;
    function reset() { board = initBoard.map(r => [...r]); selected = null; validMoves = []; whiteTurn = true; render(); }
    function isWhite(p) { return p && p === p.toUpperCase(); }
    function isBlack(p) { return p && p === p.toLowerCase(); }
    function getValidMoves(r,c) { const p = board[r][c]; const moves = []; if(!p) return moves; const addMove = (nr,nc) => { if(nr >= 0 && nr < 8 && nc >= 0 && nc < 8) { const t = board[nr][nc]; if(!t || (whiteTurn && isBlack(t)) || (!whiteTurn && isWhite(t))) moves.push({r:nr,c:nc}); } }; const addLine = (dr,dc) => { for(let i=1;i<8;i++){ const nr=r+dr*i, nc=c+dc*i; if(nr<0||nr>7||nc<0||nc>7) break; const t=board[nr][nc]; if(!t){moves.push({r:nr,c:nc});continue} if((whiteTurn&&isBlack(t))||(!whiteTurn&&isWhite(t)))moves.push({r:nr,c:nc}); break } };
        switch(p.toLowerCase()) { case 'p': const dir = isWhite(p) ? -1 : 1; if(!board[r+dir]?.[c]) addMove(r+dir,c); if(!board[r+dir]?.[c] && !board[r+2*dir]?.[c] && (isWhite(p)?r===6:r===1)) addMove(r+2*dir,c); if(board[r+dir]?.[c-1] && (whiteTurn?isBlack(board[r+dir][c-1]):isWhite(board[r+dir][c-1]))) addMove(r+dir,c-1); if(board[r+dir]?.[c+1] && (whiteTurn?isBlack(board[r+dir][c+1]):isWhite(board[r+dir][c+1]))) addMove(r+dir,c+1); break; case 'r': addLine(0,1);addLine(0,-1);addLine(1,0);addLine(-1,0); break; case 'n': [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(([dr,dc])=>addMove(r+dr,c+dc)); break; case 'b': addLine(1,1);addLine(1,-1);addLine(-1,1);addLine(-1,-1); break; case 'q': addLine(0,1);addLine(0,-1);addLine(1,0);addLine(-1,0);addLine(1,1);addLine(1,-1);addLine(-1,1);addLine(-1,-1); break; case 'k': for(let dr=-1;dr<=1;dr++) for(let dc=-1;dc<=1;dc++) if(dr||dc) addMove(r+dr,c+dc); break; }
        return moves;
    }
    function render() { const container = document.getElementById('chsBoard'); container.innerHTML = ''; for(let r=0;r<8;r++) for(let c=0;c<8;c++) { const cell = document.createElement('div'); cell.className = `chs-cell ${(r+c)%2===0?'light':'dark'}`; if(selected?.r===r && selected?.c===c) cell.classList.add('selected'); if(validMoves.some(m=>m.r===r&&m.c===c)) cell.classList.add('valid-move'); cell.textContent = pieces[board[r][c]] || ''; cell.addEventListener('click', () => click(r,c)); container.appendChild(cell); } }
    function click(r,c) { if(selected && validMoves.some(m=>m.r===r&&m.c===c)) { board[r][c] = board[selected.r][selected.c]; board[selected.r][selected.c] = ''; if(board[r][c].toLowerCase()==='p' && (r===0||r===7)) board[r][c] = whiteTurn ? 'Q' : 'q'; whiteTurn = !whiteTurn; document.getElementById('chsTurn').textContent = whiteTurn ? "White's turn ♔" : "Black's turn ♚"; selected = null; validMoves = []; render(); if(saveScore) saveScore(10); return; } const p = board[r][c]; if(p && ((whiteTurn && isWhite(p)) || (!whiteTurn && isBlack(p)))) { selected = {r,c}; validMoves = getValidMoves(r,c); } else { selected = null; validMoves = []; } render(); }
    reset();
}

// ==================== NEW 50 GAMES IMPLEMENTATIONS ====================

function initFrogger(container, saveScore) {
    container.innerHTML = `<style>.frg{text-align:center}.frg-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="frg"><div class="frg-score">Score: <span id="frgScore">0</span></div><canvas id="frgCanvas" width="360" height="400" style="background:#1a1a2e;border-radius:12px"></canvas></div>`;
    const canvas = document.getElementById('frgCanvas'), ctx = canvas.getContext('2d');
    let frog, cars, logs, score, running;
    function reset() { frog = {x:180,y:370,w:30,h:30}; cars = []; logs = []; score = 0; running = true; for(let i=0;i<4;i++) for(let j=0;j<3;j++) cars.push({x:j*140+i*30,y:100+i*50,w:50,h:30,vx:2+i}); for(let i=0;i<3;i++) for(let j=0;j<2;j++) logs.push({x:j*200,y:20+i*40,w:80,h:25,vx:-1-i*0.3}); updateScore(); }
    function updateScore() { document.getElementById('frgScore').textContent = score; }
    function update() { if(!running) return; cars.forEach(c => { c.x += c.vx; if(c.x > canvas.width) c.x = -c.w; }); logs.forEach(l => { l.x += l.vx; if(l.x < -l.w) l.x = canvas.width; }); cars.forEach(c => { if(frog.x < c.x+c.w && frog.x+frog.w > c.x && frog.y < c.y+c.h && frog.y+frog.h > c.y) { running = false; if(saveScore) saveScore(score); } }); draw(); if(running) requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#27ae60'; ctx.fillRect(0,0,canvas.width,60); ctx.fillStyle = '#3498db'; ctx.fillRect(0,60,canvas.width,100); ctx.fillStyle = '#333'; ctx.fillRect(0,160,canvas.width,200); ctx.fillStyle = '#27ae60'; ctx.fillRect(0,360,canvas.width,40); ctx.fillStyle = '#e74c3c'; cars.forEach(c => ctx.fillRect(c.x,c.y,c.w,c.h)); ctx.fillStyle = '#8b4513'; logs.forEach(l => ctx.fillRect(l.x,l.y,l.w,l.h)); ctx.fillStyle = '#2ecc71'; ctx.beginPath(); ctx.arc(frog.x+frog.w/2,frog.y+frog.h/2,frog.w/2,0,Math.PI*2); ctx.fill(); }
    const h = e => { if(!running) return; if(e.key==='ArrowUp'){e.preventDefault();frog.y=Math.max(0,frog.y-40);score+=10;updateScore()} if(e.key==='ArrowDown'){e.preventDefault();frog.y=Math.min(canvas.height-frog.h,frog.y+40)} if(e.key==='ArrowLeft'){e.preventDefault();frog.x=Math.max(0,frog.x-40)} if(e.key==='ArrowRight'){e.preventDefault();frog.x=Math.min(canvas.width-frog.w,frog.x+40)} };
    document.addEventListener('keydown', h);
    reset(); update();
}

function initTetris(container, saveScore) {
    container.innerHTML = `<style>.ttr{text-align:center}.ttr-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="ttr"><div class="ttr-score">Score: <span id="ttrScore">0</span></div><canvas id="ttrCanvas" width="240" height="480" style="background:#0a0a1a;border-radius:12px"></canvas></div>`;
    const canvas = document.getElementById('ttrCanvas'), ctx = canvas.getContext('2d');
    const COLS = 10, ROWS = 20, SZ = 24; const shapes = [[[[1,1,1,1]]],[[[1,1],[1,1]]],[[[1,1,1],[0,1,0]]],[[[1,1,1],[1,0,0]]],[[[1,1,1],[0,0,1]]],[[[1,1,0],[0,1,1]]],[[[0,1,1],[1,1,0]]]];
    const colors = ['#00f0f0','#f0f000','#a000f0','#f0a000','#0000f0','#00f000','#f00000'];
    let board, piece, score, running, lastDrop;
    function reset() { board = Array(ROWS).fill(0).map(() => Array(COLS).fill(0)); score = 0; running = true; lastDrop = Date.now(); spawn(); updateScore(); }
    function updateScore() { document.getElementById('ttrScore').textContent = score; }
    function spawn() { const t = Math.floor(Math.random()*shapes.length); piece = {shape:shapes[t][0],color:colors[t],x:3,y:0}; if(collision()) running = false; }
    function collision() { for(let y=0;y<piece.shape.length;y++) for(let x=0;x<piece.shape[y].length;x++) if(piece.shape[y][x] && (board[piece.y+y]?.[piece.x+x] || piece.x+x<0 || piece.x+x>=COLS || piece.y+y>=ROWS)) return true; return false; }
    function merge() { for(let y=0;y<piece.shape.length;y++) for(let x=0;x<piece.shape[y].length;x++) if(piece.shape[y][x]) board[piece.y+y][piece.x+x] = piece.color; }
    function clearLines() { for(let y=ROWS-1;y>=0;y--) if(board[y].every(c=>c)) { board.splice(y,1); board.unshift(Array(COLS).fill(0)); score += 100; updateScore(); y++; } }
    function rotate() { const rotated = piece.shape[0].map((_,i) => piece.shape.map(row => row[i]).reverse()); const prev = piece.shape; piece.shape = rotated; if(collision()) piece.shape = prev; }
    function update() { if(!running) return; if(Date.now() - lastDrop > 500) { piece.y++; if(collision()) { piece.y--; merge(); clearLines(); spawn(); } lastDrop = Date.now(); } draw(); if(running) requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#0a0a1a'; ctx.fillRect(0,0,canvas.width,canvas.height); board.forEach((row,y) => row.forEach((c,x) => { if(c) { ctx.fillStyle = c; ctx.fillRect(x*SZ+1,y*SZ+1,SZ-2,SZ-2); } })); ctx.fillStyle = piece.color; for(let y=0;y<piece.shape.length;y++) for(let x=0;x<piece.shape[y].length;x++) if(piece.shape[y][x]) ctx.fillRect((piece.x+x)*SZ+1,(piece.y+y)*SZ+1,SZ-2,SZ-2); }
    const h = e => { if(!running) return; if(e.key==='ArrowLeft'){e.preventDefault();piece.x--;if(collision())piece.x++} if(e.key==='ArrowRight'){e.preventDefault();piece.x++;if(collision())piece.x--} if(e.key==='ArrowDown'){e.preventDefault();piece.y++;if(collision()){piece.y--;if(saveScore)saveScore(score)}} if(e.key==='ArrowUp'){e.preventDefault();rotate()} };
    document.addEventListener('keydown', h);
    reset(); update();
}

function initMinesweeper(container, saveScore) {
    container.innerHTML = `<style>.msw{text-align:center}.msw-info{color:var(--text-primary);font-size:18px;margin-bottom:10px}.msw-grid{display:grid;grid-template-columns:repeat(10,32px);gap:2px;justify-content:center}.msw-cell{width:32px;height:32px;background:var(--bg-tertiary);border-radius:4px;font-size:14px;font-weight:bold;cursor:pointer;display:flex;justify-content:center;align-items:center}.msw-cell.revealed{background:var(--bg-secondary)}.msw-cell.mine{background:#e74c3c}.msw-cell.flagged{background:#f39c12}</style><div class="msw"><div class="msw-info">💣 Mines: <span id="mswMines">15</span> | Flags: <span id="mswFlags">0</span></div><div class="msw-grid" id="mswGrid"></div></div>`;
    const SIZE = 10, MINES = 15; let grid, revealed, flagged, over;
    function reset() { grid = Array(SIZE).fill(0).map(() => Array(SIZE).fill(0)); revealed = Array(SIZE).fill(0).map(() => Array(SIZE).fill(false)); flagged = Array(SIZE).fill(0).map(() => Array(SIZE).fill(false)); over = false; let placed = 0; while(placed < MINES) { const r = Math.floor(Math.random()*SIZE), c = Math.floor(Math.random()*SIZE); if(!grid[r][c]) { grid[r][c] = -1; placed++; } } for(let r=0;r<SIZE;r++) for(let c=0;c<SIZE;c++) if(grid[r][c] !== -1) { let count = 0; for(let dr=-1;dr<=1;dr++) for(let dc=-1;dc<=1;dc++) if(grid[r+dr]?.[c+dc] === -1) count++; grid[r][c] = count; } render(); }
    function render() { const el = document.getElementById('mswGrid'); el.innerHTML = ''; for(let r=0;r<SIZE;r++) for(let c=0;c<SIZE;c++) { const cell = document.createElement('div'); cell.className = 'msw-cell'; if(revealed[r][c]) { cell.classList.add('revealed'); if(grid[r][c] === -1) { cell.classList.add('mine'); cell.textContent = '💣'; } else if(grid[r][c]) cell.textContent = grid[r][c]; } else if(flagged[r][c]) { cell.classList.add('flagged'); cell.textContent = '🚩'; } cell.addEventListener('click', () => reveal(r,c)); cell.addEventListener('contextmenu', e => { e.preventDefault(); flag(r,c); }); el.appendChild(cell); } document.getElementById('mswFlags').textContent = flagged.flat().filter(f=>f).length; }
    function reveal(r,c) { if(over || revealed[r][c] || flagged[r][c]) return; revealed[r][c] = true; if(grid[r][c] === -1) { over = true; revealed = Array(SIZE).fill(0).map(() => Array(SIZE).fill(true)); render(); if(saveScore) saveScore(0); return; } if(grid[r][c] === 0) for(let dr=-1;dr<=1;dr++) for(let dc=-1;dc<=1;dc++) if(r+dr>=0 && r+dr<SIZE && c+dc>=0 && c+dc<SIZE) reveal(r+dr,c+dc); render(); checkWin(); }
    function flag(r,c) { if(over || revealed[r][c]) return; flagged[r][c] = !flagged[r][c]; render(); }
    function checkWin() { let won = true; for(let r=0;r<SIZE;r++) for(let c=0;c<SIZE;c++) if(grid[r][c] !== -1 && !revealed[r][c]) won = false; if(won && saveScore) saveScore(100); }
    reset();
}

function initSudoku(container, saveScore) {
    const puzzle = [[5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],[8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],[0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9]];
    container.innerHTML = `<style>.sdk{text-align:center}.sdk-grid{display:grid;grid-template-columns:repeat(9,40px);gap:1px;background:#333;padding:3px;border-radius:8px;justify-content:center}.sdk-cell{width:40px;height:40px;background:var(--bg-tertiary);display:flex;justify-content:center;align-items:center;font-size:18px;font-weight:bold;cursor:pointer;color:var(--text-primary)}.sdk-cell.fixed{color:#6c5ce7;cursor:default}.sdk-cell.selected{background:var(--accent-primary);color:white}.sdk-cell:nth-child(3n){border-right:2px solid #555}.sdk-cell:nth-child(n+19):nth-child(-n+27),.sdk-cell:nth-child(n+46):nth-child(-n+54){border-bottom:2px solid #555}</style><div class="sdk"><div class="sdk-grid" id="sdkGrid"></div></div>`;
    let board = puzzle.map(r => [...r]), selected = null;
    function render() { const el = document.getElementById('sdkGrid'); el.innerHTML = ''; for(let r=0;r<9;r++) for(let c=0;c<9;c++) { const cell = document.createElement('div'); cell.className = 'sdk-cell' + (puzzle[r][c] ? ' fixed' : '') + (selected?.r===r && selected?.c===c ? ' selected' : ''); cell.textContent = board[r][c] || ''; cell.addEventListener('click', () => { if(!puzzle[r][c]) { selected = {r,c}; render(); } }); el.appendChild(cell); } }
    const h = e => { if(!selected) return; const num = parseInt(e.key); if(num >= 1 && num <= 9) { board[selected.r][selected.c] = num; render(); checkWin(); } else if(e.key === 'Backspace') { board[selected.r][selected.c] = 0; render(); } };
    function checkWin() { const valid = board.every((row,r) => row.every((v,c) => { if(!v) return false; const inRow = row.filter(x => x === v).length === 1; const inCol = board.every(row => row[c] !== v || row === board[r]); return inRow && inCol; })); if(valid && saveScore) saveScore(100); }
    document.addEventListener('keydown', h);
    render();
}

function initSpaceInvaders(container, saveScore) {
    container.innerHTML = `<style>.si{text-align:center}.si-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="si"><div class="si-score">Score: <span id="siScore">0</span></div><canvas id="siCanvas" width="400" height="400" style="background:#0a0a0f;border-radius:12px"></canvas></div>`;
    const canvas = document.getElementById('siCanvas'), ctx = canvas.getContext('2d');
    let player, aliens, bullets, score, running, dir, moveTimer;
    function reset() { player = {x:200,y:370,w:40,h:20}; aliens = []; bullets = []; score = 0; running = true; dir = 1; moveTimer = 0; for(let r=0;r<4;r++) for(let c=0;c<8;c++) aliens.push({x:50+c*40,y:50+r*35,w:30,h:20,alive:true}); updateScore(); }
    function updateScore() { document.getElementById('siScore').textContent = score; }
    function update() { if(!running) return; moveTimer++; if(moveTimer > 30) { aliens.forEach(a => { a.x += dir * 10; }); const edge = aliens.some(a => a.alive && (a.x < 10 || a.x > canvas.width - a.w - 10)); if(edge) { dir *= -1; aliens.forEach(a => a.y += 15); } moveTimer = 0; } bullets.forEach(b => b.y -= 8); bullets = bullets.filter(b => b.y > 0); bullets.forEach(b => { aliens.forEach(a => { if(a.alive && b.x > a.x && b.x < a.x+a.w && b.y > a.y && b.y < a.y+a.h) { a.alive = false; b.y = -100; score += 10; updateScore(); } }); }); if(aliens.every(a => !a.alive)) { if(saveScore) saveScore(score + 100); running = false; } if(aliens.some(a => a.alive && a.y > player.y - 20)) { if(saveScore) saveScore(score); running = false; } draw(); if(running) requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#0a0a0f'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#6c5ce7'; ctx.fillRect(player.x-player.w/2,player.y,player.w,player.h); ctx.fillStyle = '#2ecc71'; aliens.filter(a=>a.alive).forEach(a => ctx.fillRect(a.x,a.y,a.w,a.h)); ctx.fillStyle = '#f39c12'; bullets.forEach(b => ctx.fillRect(b.x-2,b.y,4,10)); }
    function shoot() { bullets.push({x:player.x,y:player.y-10}); }
    const h = e => { if(!running) return; if(e.key==='ArrowLeft'){e.preventDefault();player.x=Math.max(player.w/2,player.x-15)} if(e.key==='ArrowRight'){e.preventDefault();player.x=Math.min(canvas.width-player.w/2,player.x+15)} if(e.code==='Space'){e.preventDefault();shoot()} };
    document.addEventListener('keydown', h);
    reset(); update();
}

function initPacman(container, saveScore) {
    container.innerHTML = `<style>.pm{text-align:center}.pm-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="pm"><div class="pm-score">Score: <span id="pmScore">0</span></div><canvas id="pmCanvas" width="380" height="380" style="background:#000;border-radius:12px"></canvas></div>`;
    const canvas = document.getElementById('pmCanvas'), ctx = canvas.getContext('2d');
    const SZ = 19; let pacman, ghosts, dots, score, running, dir;
    function reset() { pacman = {x:9,y:17}; ghosts = [{x:8,y:9},{x:10,y:9},{x:9,y:8},{x:9,y:10}]; dots = []; score = 0; running = true; dir = 'right'; for(let r=0;r<SZ;r++) for(let c=0;c<SZ;c++) if((r<3||r>5||c<3||c>5)&&(r<7||r>11||c<7||c>11)&&(r%3!==0||c%3!==0)) dots.push({x:c,y:r}); updateScore(); }
    function updateScore() { document.getElementById('pmScore').textContent = score; }
    function update() { if(!running) return; if(dir==='right') pacman.x++; if(dir==='left') pacman.x--; if(dir==='up') pacman.y--; if(dir==='down') pacman.y++; if(pacman.x < 0) pacman.x = SZ-1; if(pacman.x >= SZ) pacman.x = 0; const dotIdx = dots.findIndex(d => d.x === pacman.x && d.y === pacman.y); if(dotIdx > -1) { dots.splice(dotIdx,1); score += 10; updateScore(); } if(dots.length === 0) { if(saveScore) saveScore(score + 100); running = false; } ghosts.forEach(g => { const dirs = [{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}]; const d = dirs[Math.floor(Math.random()*4)]; g.x += d.x; g.y += d.y; if(g.x < 0) g.x = SZ-1; if(g.x >= SZ) g.x = 0; if(Math.hypot(g.x-pacman.x,g.y-pacman.y) < 1) { if(saveScore) saveScore(score); running = false; } }); draw(); if(running) setTimeout(update, 200); }
    function draw() { ctx.fillStyle = '#000'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#f1c40f'; dots.forEach(d => ctx.fillRect(d.x*20+6,d.y*20+6,8,8)); ctx.fillStyle = '#f1c40f'; ctx.beginPath(); ctx.arc(pacman.x*20+10,pacman.y*20+10,8,0,Math.PI*2); ctx.fill(); const ghostColors = ['#e74c3c','#3498db','#ff69b4','#00ffff']; ghosts.forEach((g,i) => { ctx.fillStyle = ghostColors[i]; ctx.beginPath(); ctx.arc(g.x*20+10,g.y*20+10,8,0,Math.PI*2); ctx.fill(); }); }
    const h = e => { if(e.key==='ArrowLeft') dir = 'left'; if(e.key==='ArrowRight') dir = 'right'; if(e.key==='ArrowUp') dir = 'up'; if(e.key==='ArrowDown') dir = 'down'; };
    document.addEventListener('keydown', h);
    reset(); setTimeout(update, 200);
}

function initConnect4(container, saveScore) {
    container.innerHTML = `<style>.c4{text-align:center}.c4-status{color:var(--text-primary);font-size:20px;margin-bottom:15px}.c4-board{display:grid;grid-template-columns:repeat(7,50px);gap:4px;background:#3498db;padding:10px;border-radius:10px;justify-content:center}.c4-cell{width:50px;height:50px;background:#fff;border-radius:50%;cursor:pointer;transition:transform 0.1s}.c4-cell:hover{transform:scale(1.05)}.c4-cell.red{background:#e74c3c}.c4-cell.yellow{background:#f1c40f}</style><div class="c4"><div class="c4-status" id="c4Status">Your turn (🔴)</div><div class="c4-board" id="c4Board"></div></div>`;
    const ROWS = 6, COLS = 7; let board, turn, over;
    function reset() { board = Array(ROWS).fill(0).map(() => Array(COLS).fill(0)); turn = 1; over = false; render(); }
    function render() { const el = document.getElementById('c4Board'); el.innerHTML = ''; for(let r=0;r<ROWS;r++) for(let c=0;c<COLS;c++) { const cell = document.createElement('div'); cell.className = 'c4-cell' + (board[r][c]===1?' red':board[r][c]===2?' yellow':''); cell.addEventListener('click', () => drop(c)); el.appendChild(cell); } }
    function drop(c) { if(over) return; let r = ROWS-1; while(r >= 0 && board[r][c]) r--; if(r < 0) return; board[r][c] = turn; if(checkWin(r,c,turn)) { document.getElementById('c4Status').textContent = (turn===1?'🔴 You':'🟡 AI') + ' win!'; over = true; if(turn===1 && saveScore) saveScore(100); return; } turn = 2; render(); setTimeout(ai, 300); }
    function ai() { const cols = []; for(let c=0;c<COLS;c++) { let r=ROWS-1; while(r>=0 && board[r][c]) r--; if(r>=0) cols.push(c); } if(cols.length) { const c = cols[Math.floor(Math.random()*cols.length)]; let r = ROWS-1; while(board[r][c]) r--; board[r][c] = 2; if(checkWin(r,c,2)) { document.getElementById('c4Status').textContent = '🟡 AI wins!'; over = true; return; } turn = 1; document.getElementById('c4Status').textContent = 'Your turn (🔴)'; render(); } }
    function checkWin(r,c,p) { const dirs = [[0,1],[1,0],[1,1],[1,-1]]; return dirs.some(([dr,dc]) => { let count = 1; for(let i=1;i<4;i++) if(board[r+dr*i]?.[c+dc*i]===p) count++; else break; for(let i=1;i<4;i++) if(board[r-dr*i]?.[c-dc*i]===p) count++; else break; return count >= 4; }); }
    reset();
}

function initCheckers(container, saveScore) {
    container.innerHTML = '<style>.ckr{text-align:center}.ckr-turn{color:var(--text-primary);font-size:18px;margin-bottom:10px}.ckr-board{display:grid;grid-template-columns:repeat(8,45px);gap:0;background:#333;padding:5px;border-radius:8px;justify-content:center}.ckr-cell{width:45px;height:45px;display:flex;justify-content:center;align-items:center}.ckr-cell.light{background:#f0d9b5}.ckr-cell.dark{background:#b58863}.ckr-piece{width:36px;height:36px;border-radius:50%;cursor:pointer}.ckr-piece.red{background:#e74c3c}.ckr-piece.black{background:#2c3e50}</style><div class="ckr"><div class="ckr-turn" id="ckrTurn">Your turn (🔴)</div><div class="ckr-board" id="ckrBoard"></div></div>';
    let board, selected, turn;
    function reset() { board = []; for(let r=0;r<8;r++) { board[r] = []; for(let c=0;c<8;c++) { if((r+c)%2===1) board[r][c] = r<3 ? {color:'black'} : r>4 ? {color:'red'} : null; else board[r][c] = null; } } selected = null; turn = 'red'; render(); }
    function render() { const el = document.getElementById('ckrBoard'); el.innerHTML = ''; for(let r=0;r<8;r++) for(let c=0;c<8;c++) { const cell = document.createElement('div'); cell.className = 'ckr-cell ' + ((r+c)%2===0 ? 'light' : 'dark'); if(board[r][c]) { const piece = document.createElement('div'); piece.className = 'ckr-piece ' + board[r][c].color; piece.addEventListener('click', e => { e.stopPropagation(); if(board[r][c].color === turn) { selected = {r,c}; render(); } }); cell.appendChild(piece); } el.appendChild(cell); } }
    reset();
}

function initSimon(container, saveScore) {
    container.innerHTML = '<style>.sim{text-align:center}.sim-score{color:var(--text-primary);font-size:22px;margin-bottom:15px}.sim-buttons{display:grid;grid-template-columns:repeat(2,80px);gap:10px;justify-content:center}.sim-btn{width:80px;height:80px;border:none;border-radius:15px;cursor:pointer;opacity:0.6}.sim-btn.flash{opacity:1;transform:scale(1.05)}.sim-btn.red{background:#e74c3c}.sim-btn.blue{background:#3498db}.sim-btn.green{background:#2ecc71}.sim-btn.yellow{background:#f1c40f}</style><div class="sim"><div class="sim-score">Level: <span id="simLevel">1</span></div><div class="sim-buttons"><button class="sim-btn red" data-color="0"></button><button class="sim-btn blue" data-color="1"></button><button class="sim-btn green" data-color="2"></button><button class="sim-btn yellow" data-color="3"></button></div></div>';
    let sequence = [], playerSeq = [], level = 0, playing = true;
    function nextRound() { level++; document.getElementById('simLevel').textContent = level; playerSeq = []; sequence.push(Math.floor(Math.random()*4)); playSequence(); }
    async function playSequence() { for(let i=0;i<sequence.length;i++) { await flash(sequence[i]); await new Promise(r => setTimeout(r, 200)); } }
    function flash(color) { return new Promise(resolve => { const btn = document.querySelector('.sim-btn[data-color="' + color + '"]'); btn.classList.add('flash'); setTimeout(() => { btn.classList.remove('flash'); resolve(); }, 400); }); }
    document.querySelectorAll('.sim-btn').forEach(btn => btn.addEventListener('click', function() { if(!playing) return; const color = parseInt(this.dataset.color); playerSeq.push(color); flash(color); if(playerSeq[playerSeq.length-1] !== sequence[playerSeq.length-1]) { playing = false; if(saveScore) saveScore(level * 10); return; } if(playerSeq.length === sequence.length) setTimeout(nextRound, 1000); }));
    nextRound();
}

function initWordle(container, saveScore) {
    const words = ['APPLE','BEACH','CHAIR','DANCE','EAGLE','FLAME','GRAPE','HOUSE','JUICE','KNIFE','LEMON','MUSIC','NIGHT','OCEAN','PIANO','QUEEN','RIVER','STONE','TIGER','WATER'];
    let word = words[Math.floor(Math.random()*words.length)], guesses = [], currentGuess = '', over = false;
    container.innerHTML = '<style>.wrd{text-align:center}.wrd-grid{display:grid;grid-template-rows:repeat(6,1fr);gap:5px;justify-content:center}.wrd-row{display:grid;grid-template-columns:repeat(5,40px);gap:5px}.wrd-cell{width:40px;height:40px;background:var(--bg-tertiary);border-radius:8px;font-size:20px;font-weight:bold;display:flex;justify-content:center;align-items:center;text-transform:uppercase}.wrd-cell.correct{background:#27ae60;color:white}.wrd-cell.present{background:#f39c12;color:white}.wrd-cell.absent{background:#7f8c8d;color:white}</style><div class="wrd"><div class="wrd-grid" id="wrdGrid"></div></div>';
    function render() { const el = document.getElementById('wrdGrid'); el.innerHTML = ''; for(let i=0;i<6;i++) { const row = document.createElement('div'); row.className = 'wrd-row'; for(let j=0;j<5;j++) { const cell = document.createElement('div'); cell.className = 'wrd-cell'; if(guesses[i]) { cell.textContent = guesses[i][j]; if(word[j] === guesses[i][j]) cell.classList.add('correct'); else if(word.includes(guesses[i][j])) cell.classList.add('present'); else cell.classList.add('absent'); } else if(i === guesses.length && currentGuess[j]) cell.textContent = currentGuess[j]; row.appendChild(cell); } el.appendChild(row); } }
    document.addEventListener('keydown', function h(e) { if(over) return; if(e.key === 'Enter' && currentGuess.length === 5) { guesses.push(currentGuess); if(currentGuess === word) { over = true; if(saveScore) saveScore((6-guesses.length)*20+100); } else if(guesses.length === 6) { over = true; if(saveScore) saveScore(0); } currentGuess = ''; render(); } else if(e.key === 'Backspace') { currentGuess = currentGuess.slice(0,-1); render(); } else if(e.key.length === 1 && e.key.match(/[a-zA-Z]/) && currentGuess.length < 5) { currentGuess += e.key.toUpperCase(); render(); } });
    render();
}

function initBlackjack(container, saveScore) {
    container.innerHTML = '<style>.bjk{text-align:center}.bjk-cards{display:flex;gap:10px;justify-content:center;margin:15px 0;min-height:80px}.bjk-card{width:50px;height:70px;background:white;border-radius:8px;display:flex;justify-content:center;align-items:center;font-size:20px;font-weight:bold;color:#333}.bjk-card.hidden{background:#3498db}.bjk-info{color:var(--text-primary);font-size:18px;margin:10px 0}.bjk-btns{display:flex;gap:10px;justify-content:center;margin-top:15px}.bjk-btn{background:var(--accent-gradient);color:white;border:none;padding:12px 24px;border-radius:25px;cursor:pointer;font-size:16px}</style><div class="bjk"><div class="bjk-info">Dealer: <span id="bjkDealer">?</span></div><div class="bjk-cards" id="bjkDealerCards"></div><div class="bjk-info">You: <span id="bjkPlayer">0</span></div><div class="bjk-cards" id="bjkPlayerCards"></div><div class="bjk-btns"><button class="bjk-btn" id="bjkHit">Hit</button><button class="bjk-btn" id="bjkStand">Stand</button></div></div>';
    const suits = ['♠','♥','♦','♣'], values = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    let deck, playerHand, dealerHand, over;
    function reset() { deck = []; for(let s of suits) for(let v of values) deck.push({suit:s,value:v}); deck.sort(() => Math.random()-0.5); playerHand = [draw(), draw()]; dealerHand = [draw(), draw()]; over = false; render(); }
    function draw() { return deck.pop(); }
    function getScore(hand) { let score = 0, aces = 0; for(let c of hand) { if(c.value === 'A') { aces++; score += 11; } else if(['K','Q','J'].includes(c.value)) score += 10; else score += parseInt(c.value); } while(score > 21 && aces) { score -= 10; aces--; } return score; }
    function render() { document.getElementById('bjkPlayer').textContent = getScore(playerHand); document.getElementById('bjkDealer').textContent = over ? getScore(dealerHand) : '?'; document.getElementById('bjkPlayerCards').innerHTML = playerHand.map(c => '<div class="bjk-card">'+c.value+c.suit+'</div>').join(''); document.getElementById('bjkDealerCards').innerHTML = dealerHand.map((c,i) => '<div class="bjk-card'+(!over&&i===1?' hidden':'")+'">'+(!over&&i===1?'':c.value+c.suit)+'</div>').join(''); }
    document.getElementById('bjkHit').addEventListener('click', () => { if(over) return; playerHand.push(draw()); render(); if(getScore(playerHand) > 21) { over = true; render(); if(saveScore) saveScore(0); } });
    document.getElementById('bjkStand').addEventListener('click', () => { if(over) return; over = true; while(getScore(dealerHand) < 17) dealerHand.push(draw()); render(); const ps = getScore(playerHand), ds = getScore(dealerHand); if(ds > 21 || ps > ds) { if(saveScore) saveScore(100); } else if(saveScore) saveScore(0); });
    reset();
}

function initPlatformer(container, saveScore) {
    container.innerHTML = '<style>.plt{text-align:center}.plt-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="plt"><div class="plt-score">Score: <span id="pltScore">0</span></div><canvas id="pltCanvas" width="400" height="300" style="background:linear-gradient(180deg,#87CEEB,#E0F6FF);border-radius:12px"></canvas></div>';
    const canvas = document.getElementById('pltCanvas'), ctx = canvas.getContext('2d');
    let player = {x:50,y:200,w:30,h:40,vy:0,jumping:false}, platforms = [{x:0,y:270,w:400,h:30},{x:100,y:200,w:80,h:15},{x:220,y:150,w:80,h:15}], score = 0, running = true, keys = {};
    function update() { if(!running) return; player.vy += 0.5; player.y += player.vy; if(keys['ArrowLeft']) player.x -= 5; if(keys['ArrowRight']) player.x += 5; platforms.forEach(p => { if(player.x+player.w > p.x && player.x < p.x+p.w && player.y+player.h > p.y && player.y+player.h < p.y+p.h+10 && player.vy > 0) { player.y = p.y - player.h; player.vy = 0; player.jumping = false; } }); if(player.y > canvas.height) { if(saveScore) saveScore(score); running = false; } score = Math.max(score, Math.floor(player.x/10)); document.getElementById('pltScore').textContent = score; draw(); if(running) requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#87CEEB'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#e74c3c'; ctx.fillRect(player.x,player.y,player.w,player.h); ctx.fillStyle = '#27ae60'; platforms.forEach(p => ctx.fillRect(p.x,p.y,p.w,p.h)); }
    document.addEventListener('keydown', e => { keys[e.code] = true; if(e.code==='Space' && !player.jumping) { player.vy = -12; player.jumping = true; } });
    document.addEventListener('keyup', e => { keys[e.code] = false; });
    update();
}

function initWhackamole(container, saveScore) {
    container.innerHTML = '<style>.wam{text-align:center}.wam-score{color:var(--text-primary);font-size:22px;margin-bottom:15px}.wam-grid{display:grid;grid-template-columns:repeat(3,80px);gap:15px;justify-content:center}.wam-hole{width:80px;height:80px;background:#8b4513;border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:40px;cursor:pointer}.wam-hole.mole{background:#654321}</style><div class="wam"><div class="wam-score">Score: <span id="wamScore">0</span> | Time: <span id="wamTime">30</span></div><div class="wam-grid" id="wamGrid"></div></div>';
    let moles = Array(9).fill(false), score = 0, time = 30;
    function render() { const el = document.getElementById('wamGrid'); el.innerHTML = ''; for(let i=0;i<9;i++) { const hole = document.createElement('div'); hole.className = 'wam-hole' + (moles[i]?' mole':''); hole.textContent = moles[i]?'🐹':''; hole.addEventListener('click', () => { if(moles[i]) { score += 10; document.getElementById('wamScore').textContent = score; moles[i] = false; render(); } }); el.appendChild(hole); } }
    setInterval(() => { moles = Array(9).fill(false); moles[Math.floor(Math.random()*9)] = true; render(); }, 800);
    setInterval(() => { time--; document.getElementById('wamTime').textContent = time; if(time <= 0 && saveScore) saveScore(score); }, 1000);
    render();
}

function initBubbleShooter(container, saveScore) {
    container.innerHTML = '<style>.bsh{text-align:center}.bsh-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="bsh"><div class="bsh-score">Score: <span id="bshScore">0</span></div><canvas id="bshCanvas" width="350" height="400" style="background:#1a1a2e;border-radius:12px;cursor:crosshair"></canvas></div>';
    const canvas = document.getElementById('bshCanvas'), ctx = canvas.getContext('2d');
    const colors = ['#e74c3c','#3498db','#2ecc71','#f1c40f','#9b59b6'];
    let bubbles = [], shooter = {x:175,y:380,r:15,color:colors[Math.floor(Math.random()*colors.length)]}, score = 0;
    for(let r=0;r<5;r++) for(let c=0;c<8;c++) bubbles.push({x:25+c*40,y:30+r*35,r:15,color:colors[Math.floor(Math.random()*colors.length)]});
    function draw() { ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,canvas.width,canvas.height); bubbles.forEach(b => { ctx.fillStyle = b.color; ctx.beginPath(); ctx.arc(b.x,b.y,b.r,0,Math.PI*2); ctx.fill(); }); ctx.fillStyle = shooter.color; ctx.beginPath(); ctx.arc(shooter.x,shooter.y,shooter.r,0,Math.PI*2); ctx.fill(); }
    canvas.addEventListener('click', e => { const rect = canvas.getBoundingClientRect(); const mx = e.clientX-rect.left, my = e.clientY-rect.top; const angle = Math.atan2(my-shooter.y,mx-shooter.x); let bullet = {x:shooter.x,y:shooter.y,r:10,color:shooter.color,vx:Math.cos(angle)*8,vy:Math.sin(angle)*8}; function moveBullet() { bullet.x += bullet.vx; bullet.y += bullet.vy; bubbles.forEach((b,i) => { if(Math.hypot(bullet.x-b.x,bullet.y-b.y) < bullet.r+b.r && b.color === bullet.color) { bubbles.splice(i,1); score += 10; document.getElementById('bshScore').textContent = score; } }); if(bullet.y > 0) requestAnimationFrame(moveBullet); else { shooter.color = colors[Math.floor(Math.random()*colors.length)]; draw(); } } moveBullet(); });
    draw();
}

function initFruitNinja(container, saveScore) {
    container.innerHTML = '<style>.fnj{text-align:center}.fnj-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="fnj"><div class="fnj-score">Score: <span id="fnjScore">0</span></div><canvas id="fnjCanvas" width="350" height="400" style="background:linear-gradient(180deg,#1a1a2e,#2c3e50);border-radius:12px;cursor:crosshair"></canvas></div>';
    const canvas = document.getElementById('fnjCanvas'), ctx = canvas.getContext('2d');
    const fruits = ['🍎','🍊','🍋','🍇','🍓','🍉'];
    let items = [], score = 0, running = true;
    setInterval(() => { if(running) items.push({x:Math.random()*300+25,y:400,emoji:fruits[Math.floor(Math.random()*fruits.length)],vy:-8-Math.random()*4,vx:(Math.random()-0.5)*3,rotation:0,rv:(Math.random()-0.5)*0.2}); }, 500);
    function update() { ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,canvas.width,canvas.height); items.forEach(i => { i.y += i.vy; i.vy += 0.3; i.x += i.vx; i.rotation += i.rv; ctx.save(); ctx.translate(i.x,i.y); ctx.rotate(i.rotation); ctx.font = '40px Arial'; ctx.textAlign = 'center'; ctx.fillText(i.emoji,0,0); ctx.restore(); }); items = items.filter(i => i.y < 450); if(running) requestAnimationFrame(update); }
    canvas.addEventListener('click', e => { const rect = canvas.getBoundingClientRect(); const mx = e.clientX-rect.left, my = e.clientY-rect.top; items = items.filter(i => { if(Math.hypot(mx-i.x,my-i.y) < 30) { score += 10; document.getElementById('fnjScore').textContent = score; return false; } return true; }); });
    update();
}

function initCandyCrush(container, saveScore) {
    container.innerHTML = '<style>.cc{text-align:center}.cc-score{color:var(--text-primary);font-size:22px;margin-bottom:15px}.cc-grid{display:grid;grid-template-columns:repeat(8,40px);gap:4px;justify-content:center}.cc-cell{width:40px;height:40px;border-radius:8px;font-size:28px;cursor:pointer;display:flex;justify-content:center;align-items:center}.cc-cell:hover{transform:scale(1.1)}.cc-cell.selected{box-shadow:0 0 15px #f1c40f}</style><div class="cc"><div class="cc-score">Score: <span id="ccScore">0</span></div><div class="cc-grid" id="ccGrid"></div></div>';
    const candies = ['🍬','🍭','🍫','🍪','🧁','🍩'];
    let grid = [], selected = null, score = 0;
    function reset() { grid = []; for(let r=0;r<8;r++) { grid[r] = []; for(let c=0;c<8;c++) grid[r][c] = candies[Math.floor(Math.random()*candies.length)]; } render(); }
    function render() { const el = document.getElementById('ccGrid'); el.innerHTML = ''; for(let r=0;r<8;r++) for(let c=0;c<8;c++) { const cell = document.createElement('div'); cell.className = 'cc-cell' + (selected?.r===r && selected?.c===c?' selected':''); cell.textContent = grid[r][c]; cell.addEventListener('click', () => click(r,c)); el.appendChild(cell); } }
    function click(r,c) { if(!selected) { selected = {r,c}; render(); } else { const dr = Math.abs(selected.r-r), dc = Math.abs(selected.c-c); if((dr===1 && dc===0) || (dr===0 && dc===1)) { [grid[selected.r][selected.c], grid[r][c]] = [grid[r][c], grid[selected.r][selected.c]]; checkMatch(); } selected = null; render(); } }
    function checkMatch() { for(let r=0;r<8;r++) for(let c=0;c<6;c++) if(grid[r][c] === grid[r][c+1] && grid[r][c] === grid[r][c+2]) { grid[r][c] = grid[r][c+1] = grid[r][c+2] = candies[Math.floor(Math.random()*candies.length)]; score += 30; document.getElementById('ccScore').textContent = score; } for(let r=0;r<6;r++) for(let c=0;c<8;c++) if(grid[r][c] === grid[r+1][c] && grid[r][c] === grid[r+2][c]) { grid[r][c] = grid[r+1][c] = grid[r+2][c] = candies[Math.floor(Math.random()*candies.length)]; score += 30; document.getElementById('ccScore').textContent = score; } }
    reset();
}

function initGeometryDash(container, saveScore) {
    container.innerHTML = '<style>.gd{text-align:center}.gd-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="gd"><div class="gd-score">Distance: <span id="gdScore">0</span></div><canvas id="gdCanvas" width="400" height="250" style="background:linear-gradient(180deg,#1a1a2e,#16213e);border-radius:12px"></canvas></div>';
    const canvas = document.getElementById('gdCanvas'), ctx = canvas.getContext('2d');
    let cube = {x:50,y:200,w:30,vy:0,grounded:true}, obstacles = [], score = 0, running = true, speed = 5;
    function update() { if(!running) return; if(Math.random() < 0.015) obstacles.push({x:450,y:200,w:30,h:50}); obstacles.forEach(o => o.x -= speed); obstacles = obstacles.filter(o => o.x > -50); cube.vy += 0.8; cube.y += cube.vy; if(cube.y >= 200) { cube.y = 200; cube.vy = 0; cube.grounded = true; } obstacles.forEach(o => { if(cube.x+cube.w > o.x && cube.x < o.x+o.w && cube.y+cube.h > o.y) { running = false; if(saveScore) saveScore(score); } }); score++; if(score % 500 === 0) speed += 0.5; document.getElementById('gdScore').textContent = score; draw(); if(running) requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#f39c12'; ctx.fillRect(cube.x,cube.y,cube.w,cube.w); ctx.fillStyle = '#e74c3c'; obstacles.forEach(o => ctx.fillRect(o.x,o.y,o.w,o.h)); ctx.fillStyle = '#3498db'; ctx.fillRect(0,230,canvas.width,20); }
    function jump() { if(cube.grounded) { cube.vy = -15; cube.grounded = false; } }
    canvas.addEventListener('click', jump);
    document.addEventListener('keydown', e => { if(e.code==='Space') { e.preventDefault(); jump(); } });
    update();
}

function initDoodleJump(container, saveScore) {
    container.innerHTML = '<style>.dj{text-align:center}.dj-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="dj"><div class="dj-score">Score: <span id="djScore">0</span></div><canvas id="djCanvas" width="300" height="400" style="background:linear-gradient(180deg,#fffde7,#fff9c4);border-radius:12px"></canvas></div>';
    const canvas = document.getElementById('djCanvas'), ctx = canvas.getContext('2d');
    let doodle = {x:150,y:300,w:40,h:40,vy:0}, platforms = [], score = 0, running = true, keys = {};
    for(let i=0;i<8;i++) platforms.push({x:Math.random()*260,y:i*50,w:60,h:15});
    function update() { if(!running) return; if(keys['ArrowLeft']) doodle.x -= 5; if(keys['ArrowRight']) doodle.x += 5; if(doodle.x < -doodle.w) doodle.x = canvas.width; if(doodle.x > canvas.width) doodle.x = -doodle.w; doodle.vy += 0.4; doodle.y += doodle.vy; platforms.forEach(p => { if(doodle.vy > 0 && doodle.x+doodle.w > p.x && doodle.x < p.x+p.w && doodle.y+doodle.h > p.y && doodle.y+doodle.h < p.y+p.h+10) doodle.vy = -12; }); if(doodle.y < 150) { doodle.y = 150; platforms.forEach(p => p.y += 5); score += 5; document.getElementById('djScore').textContent = score; platforms = platforms.filter(p => p.y < canvas.height); while(platforms.length < 8) platforms.push({x:Math.random()*260,y:0,w:60,h:15}); } if(doodle.y > canvas.height) { running = false; if(saveScore) saveScore(score); } draw(); if(running) requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#fffde7'; ctx.fillRect(0,0,canvas.width,canvas.height); ctx.fillStyle = '#27ae60'; platforms.forEach(p => ctx.fillRect(p.x,p.y,p.w,p.h)); ctx.fillStyle = '#27ae60'; ctx.fillRect(doodle.x,doodle.y,doodle.w,doodle.h); }
    document.addEventListener('keydown', e => { keys[e.code] = true; });
    document.addEventListener('keyup', e => { keys[e.code] = false; });
    update();
}

function initStack(container, saveScore) {
    container.innerHTML = '<style>.stk{text-align:center}.stk-score{color:var(--text-primary);font-size:22px;margin-bottom:10px}</style><div class="stk"><div class="stk-score">Height: <span id="stkScore">0</span></div><canvas id="stkCanvas" width="300" height="400" style="background:linear-gradient(180deg,#1a1a2e,#16213e);border-radius:12px"></canvas></div>';
    const canvas = document.getElementById('stkCanvas'), ctx = canvas.getContext('2d');
    let blocks = [{x:100,y:350,w:100}], current = {x:0,w:100,dir:1}, score = 0, running = true;
    function update() { if(!running) return; current.x += current.dir * 3; if(current.x <= 0 || current.x + current.w >= canvas.width) current.dir *= -1; draw(); if(running) requestAnimationFrame(update); }
    function draw() { ctx.fillStyle = '#1a1a2e'; ctx.fillRect(0,0,canvas.width,canvas.height); const colors = ['#e74c3c','#e67e22','#f1c40f','#2ecc71','#3498db','#9b59b6']; blocks.forEach((b,i) => { ctx.fillStyle = colors[i % colors.length]; ctx.fillRect(b.x,b.y,b.w,20); }); ctx.fillStyle = '#f39c12'; ctx.fillRect(current.x,350 - blocks.length * 20,current.w,20); }
    function drop() { if(!running) return; const last = blocks[blocks.length-1]; const overlap = Math.max(0, Math.min(current.x + current.w, last.x + last.w) - Math.max(current.x, last.x)); if(overlap <= 0) { running = false; if(saveScore) saveScore(score * 10); return; } blocks.push({x:Math.max(current.x, last.x),y:last.y - 20,w:overlap}); score++; document.getElementById('stkScore').textContent = score; current.w = overlap; }
    canvas.addEventListener('click', drop);
    document.addEventListener('keydown', e => { if(e.code==='Space') { e.preventDefault(); drop(); } });
    update();
}
