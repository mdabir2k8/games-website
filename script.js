// ==================== Game Data ====================
const GAMES_DATA = [
  {"id":"2048","title":"2048","category":"puzzle","emoji":"🎮","color":"#667eea","description":"Combine tiles to reach 2048!","controls":"Arrow keys to slide","rating":4.6,"plays":4560000,"badge":"trending"},
  {"id":"snake","title":"Snake Game","category":"action","emoji":"🐍","color":"#2ecc71","description":"Control the snake and eat!","controls":"Arrow keys to control","rating":4.7,"plays":2340000,"badge":"trending"},
  {"id":"tic-tac-toe","title":"Tic Tac Toe","category":"puzzle","emoji":"⭕","color":"#e74c3c","description":"Classic Tic Tac Toe vs Computer!","controls":"Click to place X","rating":4.5,"plays":1250000,"badge":"popular"},
  {"id":"memory","title":"Memory Match","category":"puzzle","emoji":"🧠","color":"#3498db","description":"Match pairs of cards!","controls":"Click to flip cards","rating":4.3,"plays":890000,"badge":"popular"},
  {"id":"pong","title":"Pong","category":"action","emoji":"🏓","color":"#9b59b6","description":"Classic Pong game!","controls":"Up/Down arrows","rating":4.4,"plays":890000,"badge":"new"},
  {"id":"breakout","title":"Breakout","category":"action","emoji":"🧱","color":"#e67e22","description":"Break all the bricks!","controls":"Arrow keys","rating":4.3,"plays":1100000,"badge":"new"},
  {"id":"flappy","title":"Flappy Bird","category":"action","emoji":"🐦","color":"#f1c40f","description":"Fly through pipes!","controls":"Click or Space","rating":4.3,"plays":2890000,"badge":"popular"},
  {"id":"asteroids","title":"Asteroids","category":"action","emoji":"☄️","color":"#34495e","description":"Destroy asteroids!","controls":"Arrows + Space","rating":4.5,"plays":1450000,"badge":"trending"},
  {"id":"racing","title":"Car Racing","category":"racing","emoji":"🏎️","color":"#e74c3c","description":"Race your car!","controls":"Arrow keys","rating":4.6,"plays":2340000,"badge":"trending"},
  {"id":"basketball","title":"Basketball","category":"sports","emoji":"🏀","color":"#e67e22","description":"Score baskets!","controls":"Click to shoot","rating":4.4,"plays":1870000,"badge":"new"},
  {"id":"soccer","title":"Soccer","category":"sports","emoji":"⚽","color":"#27ae60","description":"Score goals!","controls":"Arrow keys","rating":4.5,"plays":2340000,"badge":"popular"},
  {"id":"chess","title":"Chess","category":"puzzle","emoji":"♟️","color":"#2c3e50","description":"Classic chess!","controls":"Click to move","rating":4.8,"plays":3450000,"badge":"popular"}
];

let allGames = GAMES_DATA;
let currentCategory = 'all';

// ==================== Initialize ====================
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadGames();
    setupEventListeners();
});

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#themeToggle i');
    if (icon) icon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

function loadGames() {
    showLoading(true);
    setTimeout(() => {
        renderTrendingGames();
        renderPopularGames();
        renderNewGames();
        renderAllGames();
        renderFavorites();
        renderRecentGames();
        showLoading(false);
    }, 200);
}

function renderTrendingGames() {
    const container = document.getElementById('trendingGames');
    if (!container) return;
    const games = allGames.filter(g => g.badge === 'trending');
    container.innerHTML = games.map(createGameCard).join('');
}

function renderPopularGames() {
    const container = document.getElementById('popularGames');
    if (!container) return;
    const games = allGames.filter(g => g.badge === 'popular');
    container.innerHTML = games.map(createGameCard).join('');
}

function renderNewGames() {
    const container = document.getElementById('newGames');
    if (!container) return;
    const games = allGames.filter(g => g.badge === 'new');
    container.innerHTML = games.map(createGameCard).join('');
}

function renderAllGames() {
    const container = document.getElementById('allGames');
    if (!container) return;
    let games = allGames;
    if (currentCategory !== 'all') {
        games = allGames.filter(g => g.category === currentCategory);
    }
    container.innerHTML = games.map(createGameCard).join('');
}

function renderFavorites() {
    const container = document.getElementById('favoritesGames');
    const empty = document.getElementById('emptyFavorites');
    if (!container) return;
    const favs = getFavorites();
    const games = allGames.filter(g => favs.includes(g.id));
    if (games.length === 0) {
        container.innerHTML = '';
        if (empty) empty.classList.remove('hidden');
        return;
    }
    if (empty) empty.classList.add('hidden');
    container.innerHTML = games.map(createGameCard).join('');
}

function renderRecentGames() {
    const container = document.getElementById('recentGames');
    const empty = document.getElementById('emptyRecent');
    if (!container) return;
    const recent = getRecentGames();
    const games = recent.map(id => allGames.find(g => g.id === id)).filter(Boolean).slice(0, 6);
    if (games.length === 0) {
        container.innerHTML = '';
        if (empty) empty.classList.remove('hidden');
        return;
    }
    if (empty) empty.classList.add('hidden');
    container.innerHTML = games.map(createGameCard).join('');
}

function createGameCard(game) {
    return `<div class="game-card" onclick="openGame('${game.id}')">
        ${game.badge ? `<span class="game-card-badge badge-${game.badge}">${game.badge.toUpperCase()}</span>` : ''}
        <div class="game-card-image" style="background: ${game.color};">
            <div class="game-emoji">${game.emoji}</div>
            <div class="game-card-overlay">
                <button class="play-btn"><i class="fas fa-play"></i></button>
            </div>
        </div>
        <div class="game-card-info">
            <h3 class="game-card-title">${game.title}</h3>
            <div class="game-card-meta">
                <span class="game-card-category">${game.category}</span>
                <span><i class="fas fa-star"></i> ${game.rating}</span>
            </div>
        </div>
    </div>`;
}

function openGame(gameId) {
    addToRecentGames(gameId);
    const game = allGames.find(g => g.id === gameId);
    if (game) showGameModal(game);
}

function showGameModal(game) {
    // Remove existing modal
    closeGameModal();
    
    const needsTouchControls = ['snake', 'pong', 'breakout', 'flappy', 'asteroids', 'racing', 'soccer', '2048'];
    const touchHTML = needsTouchControls.includes(game.id) ? `
        <div class="touch-controls" id="touchControls">
            <div class="touch-row">
                <button class="touch-btn" data-key="ArrowUp">▲</button>
            </div>
            <div class="touch-row">
                <button class="touch-btn" data-key="ArrowLeft">◀</button>
                <button class="touch-btn" data-key="ArrowDown">▼</button>
                <button class="touch-btn" data-key="ArrowRight">▶</button>
            </div>
            ${game.id === 'asteroids' ? '<button class="touch-btn action-btn" data-key="Space">🔥 FIRE</button>' : ''}
            ${game.id === 'flappy' ? '<button class="touch-btn action-btn" data-key="Space">🪽 FLAP</button>' : ''}
        </div>
    ` : '';
    
    const modal = document.createElement('div');
    modal.className = 'game-modal';
    modal.id = 'gameModal';
    modal.innerHTML = `
        <div class="game-modal-content">
            <div class="game-modal-header">
                <h2>${game.emoji} ${game.title}</h2>
                <button class="close-modal" onclick="closeGameModal()">✕</button>
            </div>
            <div class="game-modal-body" id="gameModalBody"></div>
            ${touchHTML}
            <div class="game-modal-controls">
                <p><strong>Controls:</strong> ${game.controls} | Touch buttons for mobile!</p>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    // Setup touch controls
    setTimeout(() => setupTouchControls(), 150);
    
    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeGameModal();
    });
    
    setTimeout(() => {
        const body = document.getElementById('gameModalBody');
        const initFunc = gameInitFunctions[game.id];
        if (initFunc) initFunc(body);
        else body.innerHTML = `<p style="color:#fff;text-align:center;padding:50px;">Game loading...</p>`;
    }, 100);
}

function setupTouchControls() {
    document.querySelectorAll('.touch-btn').forEach(btn => {
        const sendKey = (type) => {
            const key = btn.dataset.key;
            const event = new KeyboardEvent(type, { key, code: key, bubbles: true });
            document.dispatchEvent(event);
        };
        btn.addEventListener('touchstart', (e) => { e.preventDefault(); sendKey('keydown'); });
        btn.addEventListener('touchend', (e) => { e.preventDefault(); sendKey('keyup'); });
        btn.addEventListener('mousedown', () => sendKey('keydown'));
        btn.addEventListener('mouseup', () => sendKey('keyup'));
        btn.addEventListener('mouseleave', () => sendKey('keyup'));
    });
}

function closeGameModal() {
    const modal = document.getElementById('gameModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
}

// ==================== Game Functions ====================
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
    'chess': initChess
};

function init2048(container) {
    container.innerHTML = `
        <style>
            .g2048-container { text-align: center; }
            .g2048-score { color: #fff; font-size: 24px; margin-bottom: 15px; }
            .g2048-grid { display: grid; grid-template-columns: repeat(4, 70px); gap: 8px; background: #bbada0; padding: 10px; border-radius: 8px; }
            .g2048-cell { width: 70px; height: 70px; border-radius: 6px; display: flex; justify-content: center; align-items: center; font-size: 28px; font-weight: bold; }
        </style>
        <div class="g2048-container">
            <div class="g2048-score">Score: <span id="g2048Score">0</span></div>
            <div class="g2048-grid" id="g2048Grid"></div>
        </div>
    `;
    
    let grid, score;
    const colors = {0:'#cdc1b4',2:'#eee4da',4:'#ede0c8',8:'#f2b179',16:'#f59563',32:'#f67c5f',64:'#f65e3b',128:'#edcf72',256:'#edcc61',512:'#edc850',1024:'#edc53f',2048:'#edc22e'};
    
    function init() {
        grid = Array(16).fill(0);
        score = 0;
        addR(); addR();
        render();
    }
    
    function addR() {
        const empty = grid.map((v,i) => v===0?i:-1).filter(i=>i>=0);
        if (empty.length) grid[empty[Math.floor(Math.random()*empty.length)]] = Math.random()<0.9?2:4;
    }
    
    function render() {
        document.getElementById('g2048Score').textContent = score;
        document.getElementById('g2048Grid').innerHTML = grid.map(v => {
            const bg = colors[v] || '#3c3a32';
            const fg = v<=4?'#776e65':'#f9f6f2';
            return `<div class="g2048-cell" style="background:${bg};color:${fg}">${v||''}</div>`;
        }).join('');
    }
    
    function slide(arr) {
        let a = arr.filter(v=>v);
        for (let i=0; i<a.length-1; i++) if (a[i]===a[i+1]) { a[i]*=2; score+=a[i]; a.splice(i+1,1); }
        while (a.length<4) a.push(0);
        return a;
    }
    
    function move(dir) {
        let moved = false;
        const rows = [[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]];
        const cols = [[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]];
        const groups = (dir==='left'||dir==='right')?rows:cols;
        
        groups.forEach(g => {
            let arr = g.map(i=>grid[i]);
            if (dir==='right'||dir==='down') arr.reverse();
            const newArr = slide(arr);
            if (dir==='right'||dir==='down') newArr.reverse();
            g.forEach((gi,i) => { if (grid[gi]!==newArr[i]) moved=true; grid[gi]=newArr[i]; });
        });
        
        if (moved) { addR(); render(); }
    }
    
    const h = (e) => {
        const dirs = {ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down'};
        if (dirs[e.key]) { e.preventDefault(); move(dirs[e.key]); }
    };
    document.addEventListener('keydown', h);
    init();
}

function initSnake(container) {
    container.innerHTML = `<canvas id="snakeCanvas" width="360" height="360" style="background:#1a1a2e;border-radius:10px;"></canvas>`;
    
    const canvas = document.getElementById('snakeCanvas');
    const ctx = canvas.getContext('2d');
    const gs = 18, gc = canvas.width/gs;
    let snake, food, dir, nextDir, loop;
    
    function reset() {
        snake = [{x:5,y:5}];
        dir = nextDir = 'right';
        placeFood();
        if (loop) clearInterval(loop);
        loop = setInterval(update, 100);
    }
    
    function placeFood() {
        do { food = {x:Math.floor(Math.random()*gc), y:Math.floor(Math.random()*gc)}; }
        while (snake.some(s => s.x===food.x && s.y===food.y));
    }
    
    function update() {
        dir = nextDir;
        const head = {...snake[0]};
        if (dir==='up') head.y--;
        if (dir==='down') head.y++;
        if (dir==='left') head.x--;
        if (dir==='right') head.x++;
        
        if (head.x<0||head.x>=gc||head.y<0||head.y>=gc||snake.some(s=>s.x===head.x&&s.y===head.y)) {
            clearInterval(loop);
            return;
        }
        
        snake.unshift(head);
        if (head.x===food.x&&head.y===food.y) placeFood();
        else snake.pop();
        
        draw();
    }
    
    function draw() {
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        snake.forEach((s,i) => {
            ctx.fillStyle = i===0?'#27ae60':'#2ecc71';
            ctx.fillRect(s.x*gs+1, s.y*gs+1, gs-2, gs-2);
        });
        ctx.fillStyle = '#e74c3c';
        ctx.beginPath();
        ctx.arc(food.x*gs+gs/2, food.y*gs+gs/2, gs/2-2, 0, Math.PI*2);
        ctx.fill();
    }
    
    const h = (e) => {
        if (e.key==='ArrowUp'&&dir!=='down') nextDir='up';
        if (e.key==='ArrowDown'&&dir!=='up') nextDir='down';
        if (e.key==='ArrowLeft'&&dir!=='right') nextDir='left';
        if (e.key==='ArrowRight'&&dir!=='left') nextDir='right';
    };
    document.addEventListener('keydown', h);
    reset();
}

function initTicTacToe(container) {
    container.innerHTML = `
        <style>
            .ttt-container { text-align: center; }
            .ttt-status { color: #fff; font-size: 20px; margin-bottom: 15px; }
            .ttt-board { display: grid; grid-template-columns: repeat(3, 80px); gap: 8px; justify-content: center; }
            .ttt-cell { width: 80px; height: 80px; background: #fff; border-radius: 8px; font-size: 48px; font-weight: bold; cursor: pointer; display: flex; justify-content: center; align-items: center; }
            .ttt-cell.x { color: #e74c3c; }
            .ttt-cell.o { color: #3498db; }
        </style>
        <div class="ttt-container">
            <div class="ttt-status" id="tttStatus">Your turn (X)</div>
            <div class="ttt-board" id="tttBoard"></div>
        </div>
    `;
    
    let board, turn, gameOver;
    const wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    
    function init() {
        board = Array(9).fill('');
        turn = 'X';
        gameOver = false;
        document.getElementById('tttStatus').textContent = 'Your turn (X)';
        render();
    }
    
    function render() {
        document.getElementById('tttBoard').innerHTML = board.map((v,i) => 
            `<div class="ttt-cell ${v.toLowerCase()}" data-idx="${i}">${v}</div>`
        ).join('');
        
        document.querySelectorAll('.ttt-cell').forEach(c => {
            c.addEventListener('click', () => move(parseInt(c.dataset.idx)));
        });
    }
    
    function move(i) {
        if (board[i] || gameOver || turn !== 'X') return;
        board[i] = 'X';
        if (checkWin('X')) { end('You win! 🎉'); return; }
        if (board.every(c => c)) { end("It's a draw!"); return; }
        turn = 'O';
        document.getElementById('tttStatus').textContent = 'Computer thinking...';
        render();
        setTimeout(computerMove, 400);
    }
    
    function computerMove() {
        if (gameOver) return;
        
        for (let w of wins) {
            const vals = w.map(i => board[i]);
            if (vals.filter(v=>v==='O').length===2 && vals.includes('')) {
                board[w[vals.indexOf('')]] = 'O';
                if (checkWin('O')) { end('Computer wins! 🤖'); return; }
                turn = 'X';
                document.getElementById('tttStatus').textContent = 'Your turn (X)';
                render();
                return;
            }
        }
        
        for (let w of wins) {
            const vals = w.map(i => board[i]);
            if (vals.filter(v=>v==='X').length===2 && vals.includes('')) {
                board[w[vals.indexOf('')]] = 'O';
                turn = 'X';
                document.getElementById('tttStatus').textContent = 'Your turn (X)';
                render();
                return;
            }
        }
        
        const empty = board.map((v,i) => v?-1:i).filter(i=>i>=0);
        if (empty.length) {
            board[empty[Math.floor(Math.random()*empty.length)]] = 'O';
            turn = 'X';
            document.getElementById('tttStatus').textContent = 'Your turn (X)';
            render();
        }
    }
    
    function checkWin(p) { return wins.some(w => w.every(i => board[i]===p)); }
    function end(msg) { gameOver = true; document.getElementById('tttStatus').textContent = msg; render(); }
    
    init();
}

function initMemory(container) {
    const emojis = ['🎮','🎯','🎲','🎪','🎨','🎭','🎸','🎺'];
    
    container.innerHTML = `
        <style>
            .mem-container { text-align: center; }
            .mem-stats { color: #fff; font-size: 18px; margin-bottom: 15px; }
            .mem-grid { display: grid; grid-template-columns: repeat(4, 70px); gap: 8px; justify-content: center; }
            .mem-card { width: 70px; height: 70px; background: #fff; border-radius: 8px; font-size: 36px; cursor: pointer; display: flex; justify-content: center; align-items: center; transition: transform 0.2s; }
            .mem-card:hover { transform: scale(1.05); }
            .mem-card.matched { opacity: 0.5; cursor: default; }
        </style>
        <div class="mem-container">
            <div class="mem-stats">Moves: <span id="memMoves">0</span> | Pairs: <span id="memPairs">0</span>/8</div>
            <div class="mem-grid" id="memGrid"></div>
        </div>
    `;
    
    let cards, flipped, matched, moves, locked;
    
    function init() {
        cards = [...emojis, ...emojis].sort(() => Math.random()-0.5);
        flipped = [];
        matched = [];
        moves = 0;
        locked = false;
        render();
    }
    
    function render() {
        document.getElementById('memMoves').textContent = moves;
        document.getElementById('memPairs').textContent = matched.length/2;
        
        document.getElementById('memGrid').innerHTML = cards.map((c,i) => 
            `<div class="mem-card ${matched.includes(i)?'matched':''}" data-idx="${i}">${flipped.includes(i)||matched.includes(i)?c:'❓'}</div>`
        ).join('');
        
        document.querySelectorAll('.mem-card').forEach(c => {
            c.addEventListener('click', () => flip(parseInt(c.dataset.idx)));
        });
    }
    
    function flip(i) {
        if (locked || flipped.includes(i) || matched.includes(i)) return;
        flipped.push(i);
        render();
        
        if (flipped.length === 2) {
            moves++;
            locked = true;
            setTimeout(() => {
                if (cards[flipped[0]] === cards[flipped[1]]) matched.push(...flipped);
                flipped = [];
                locked = false;
                render();
            }, 700);
        }
    }
    
    init();
}

function initPong(container) {
    container.innerHTML = `<canvas id="pongCanvas" width="450" height="320" style="background:#1a1a2e;border-radius:10px;"></canvas>`;
    
    const canvas = document.getElementById('pongCanvas');
    const ctx = canvas.getContext('2d');
    const pw = 8, ph = 50;
    let player, computer, ball, loop;
    
    function reset() {
        player = {x:15, y:canvas.height/2-ph/2};
        computer = {x:canvas.width-23, y:canvas.height/2-ph/2};
        ball = {x:canvas.width/2, y:canvas.height/2, vx:4, vy:2, r:6};
        loop = requestAnimationFrame(game);
    }
    
    const keys = {};
    document.addEventListener('keydown', e => { if(['ArrowUp','ArrowDown'].includes(e.key)) { e.preventDefault(); keys[e.key]=true; }});
    document.addEventListener('keyup', e => keys[e.key]=false);
    
    function game() {
        if (keys['ArrowUp'] && player.y>0) player.y -= 5;
        if (keys['ArrowDown'] && player.y<canvas.height-ph) player.y += 5;
        
        const target = ball.y - ph/2;
        if (computer.y < target) computer.y += 3;
        if (computer.y > target) computer.y -= 3;
        
        ball.x += ball.vx;
        ball.y += ball.vy;
        
        if (ball.y < ball.r || ball.y > canvas.height-ball.r) ball.vy *= -1;
        
        if (ball.x-ball.r < player.x+pw && ball.y > player.y && ball.y < player.y+ph) ball.vx *= -1;
        if (ball.x+ball.r > computer.x && ball.y > computer.y && ball.y < computer.y+ph) ball.vx *= -1;
        
        if (ball.x < 0 || ball.x > canvas.width) {
            ball.x = canvas.width/2;
            ball.vx = ball.vx > 0 ? -4 : 4;
        }
        
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#fff';
        ctx.fillRect(player.x, player.y, pw, ph);
        ctx.fillRect(computer.x, computer.y, pw, ph);
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
        ctx.fill();
        
        loop = requestAnimationFrame(game);
    }
    
    reset();
}

function initBreakout(container) {
    container.innerHTML = `<canvas id="breakCanvas" width="380" height="320" style="background:#1a1a2e;border-radius:10px;"></canvas>`;
    
    const canvas = document.getElementById('breakCanvas');
    const ctx = canvas.getContext('2d');
    const colors = ['#e74c3c','#e67e22','#f1c40f','#2ecc71'];
    let paddle, ball, bricks, loop;
    
    function reset() {
        paddle = {x:canvas.width/2-35, y:canvas.height-20, w:70, h:10};
        ball = {x:canvas.width/2, y:canvas.height-40, vx:3, vy:-3, r:6};
        bricks = [];
        for (let r=0; r<4; r++) {
            for (let c=0; c<8; c++) {
                bricks.push({x:c*46+10, y:r*22+20, w:42, h:18, color:colors[r], alive:true});
            }
        }
        loop = requestAnimationFrame(game);
    }
    
    const keys = {};
    document.addEventListener('keydown', e => { if(['ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); keys[e.key]=true; }});
    document.addEventListener('keyup', e => keys[e.key]=false);
    
    function game() {
        if (keys['ArrowLeft'] && paddle.x>0) paddle.x -= 6;
        if (keys['ArrowRight'] && paddle.x<canvas.width-paddle.w) paddle.x += 6;
        
        ball.x += ball.vx;
        ball.y += ball.vy;
        
        if (ball.x<ball.r || ball.x>canvas.width-ball.r) ball.vx *= -1;
        if (ball.y<ball.r) ball.vy *= -1;
        
        if (ball.y+ball.r>paddle.y && ball.x>paddle.x && ball.x<paddle.x+paddle.w) ball.vy *= -1;
        
        bricks.forEach(b => {
            if (b.alive && ball.x>b.x && ball.x<b.x+b.w && ball.y>b.y && ball.y<b.y+b.h) {
                ball.vy *= -1;
                b.alive = false;
            }
        });
        
        if (ball.y > canvas.height || bricks.every(b=>!b.alive)) {
            cancelAnimationFrame(loop);
            return;
        }
        
        ctx.fillStyle = '#1a1a2e';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        bricks.forEach(b => {
            if (b.alive) {
                ctx.fillStyle = b.color;
                ctx.fillRect(b.x, b.y, b.w, b.h);
            }
        });
        
        ctx.fillStyle = '#fff';
        ctx.fillRect(paddle.x, paddle.y, paddle.w, paddle.h);
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
        ctx.fill();
        
        loop = requestAnimationFrame(game);
    }
    
    reset();
}

function initFlappy(container) {
    container.innerHTML = `<canvas id="flappyCanvas" width="320" height="400" style="background:#70c5ce;border-radius:10px;"></canvas>`;
    
    const canvas = document.getElementById('flappyCanvas');
    const ctx = canvas.getContext('2d');
    let bird, pipes, score, gameOver, loop, frame;
    
    function reset() {
        bird = {x:50, y:180, vy:0, r:14};
        pipes = [];
        score = 0;
        gameOver = false;
        frame = 0;
        loop = requestAnimationFrame(game);
    }
    
    function flap() { if (!gameOver) bird.vy = -5; }
    
    canvas.addEventListener('click', flap);
    document.addEventListener('keydown', e => { if (e.code==='Space') { e.preventDefault(); flap(); }});
    
    function game() {
        frame++;
        bird.vy += 0.3;
        bird.y += bird.vy;
        
        if (frame % 70 === 0) {
            const gap = 120;
            const gapY = Math.random()*(canvas.height-gap-80)+40;
            pipes.push({x:canvas.width, gapY, gap});
        }
        
        pipes.forEach(p => p.x -= 2);
        pipes = pipes.filter(p => p.x > -40);
        
        pipes.forEach(p => {
            if (bird.x+bird.r > p.x && bird.x-bird.r < p.x+35 &&
                (bird.y-bird.r < p.gapY || bird.y+bird.r > p.gapY+p.gap)) gameOver = true;
        });
        
        if (bird.y > canvas.height-bird.r || bird.y < bird.r) gameOver = true;
        
        ctx.fillStyle = '#70c5ce';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        pipes.forEach(p => {
            ctx.fillStyle = '#73bf2e';
            ctx.fillRect(p.x, 0, 35, p.gapY);
            ctx.fillRect(p.x, p.gapY+p.gap, 35, canvas.height);
        });
        
        ctx.fillStyle = '#f7dc6f';
        ctx.beginPath();
        ctx.arc(bird.x, bird.y, bird.r, 0, Math.PI*2);
        ctx.fill();
        
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 20px Arial';
        ctx.fillText('Score: ' + score, 10, 30);
        
        if (!gameOver) loop = requestAnimationFrame(game);
    }
    
    reset();
}

function initAsteroids(container) {
    container.innerHTML = `<canvas id="astCanvas" width="450" height="360" style="background:#0a0a0a;border-radius:10px;"></canvas>`;
    
    const canvas = document.getElementById('astCanvas');
    const ctx = canvas.getContext('2d');
    let ship, asteroids, bullets, loop;
    
    function reset() {
        ship = {x:canvas.width/2, y:canvas.height/2, r:12, angle:-Math.PI/2, vx:0, vy:0};
        asteroids = [];
        bullets = [];
        for (let i=0; i<4; i++) spawnA();
        loop = requestAnimationFrame(game);
    }
    
    function spawnA(x,y,size=35) {
        const angle = Math.random()*Math.PI*2;
        asteroids.push({x:x??Math.random()*canvas.width, y:y??Math.random()*canvas.height, vx:Math.cos(angle)*1.5, vy:Math.sin(angle)*1.5, r:size});
    }
    
    const keys = {};
    let canShoot = true;
    document.addEventListener('keydown', e => keys[e.code]=true);
    document.addEventListener('keyup', e => keys[e.code]=false);
    
    function game() {
        if (keys['ArrowLeft']) ship.angle -= 0.05;
        if (keys['ArrowRight']) ship.angle += 0.05;
        if (keys['ArrowUp']) { ship.vx += Math.cos(ship.angle)*0.06; ship.vy += Math.sin(ship.angle)*0.06; }
        if (keys['Space'] && canShoot) {
            bullets.push({x:ship.x+Math.cos(ship.angle)*ship.r, y:ship.y+Math.sin(ship.angle)*ship.r, vx:Math.cos(ship.angle)*6, vy:Math.sin(ship.angle)*6, life:40});
            canShoot = false;
            setTimeout(() => canShoot=true, 200);
        }
        
        ship.x += ship.vx;
        ship.y += ship.vy;
        ship.vx *= 0.99;
        ship.vy *= 0.99;
        
        if (ship.x<0) ship.x = canvas.width;
        if (ship.x>canvas.width) ship.x = 0;
        if (ship.y<0) ship.y = canvas.height;
        if (ship.y>canvas.height) ship.y = 0;
        
        bullets.forEach(b => { b.x += b.vx; b.y += b.vy; b.life--; });
        bullets = bullets.filter(b => b.life>0);
        
        asteroids.forEach(a => { a.x += a.vx; a.y += a.vy; });
        asteroids.forEach(a => {
            if (a.x<-a.r) a.x = canvas.width+a.r;
            if (a.x>canvas.width+a.r) a.x = -a.r;
            if (a.y<-a.r) a.y = canvas.height+a.r;
            if (a.y>canvas.height+a.r) a.y = -a.r;
        });
        
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 2;
        asteroids.forEach(a => {
            ctx.beginPath();
            ctx.arc(a.x, a.y, a.r, 0, Math.PI*2);
            ctx.stroke();
        });
        
        ctx.fillStyle = '#fff';
        bullets.forEach(b => {
            ctx.beginPath();
            ctx.arc(b.x, b.y, 2, 0, Math.PI*2);
            ctx.fill();
        });
        
        ctx.save();
        ctx.translate(ship.x, ship.y);
        ctx.rotate(ship.angle+Math.PI/2);
        ctx.strokeStyle = '#64c8ff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, -ship.r);
        ctx.lineTo(-ship.r, ship.r);
        ctx.lineTo(ship.r, ship.r);
        ctx.closePath();
        ctx.stroke();
        ctx.restore();
        
        loop = requestAnimationFrame(game);
    }
    
    reset();
}

function initRacing(container) {
    container.innerHTML = `<canvas id="raceCanvas" width="300" height="450" style="background:#333;border-radius:10px;"></canvas>`;
    
    const canvas = document.getElementById('raceCanvas');
    const ctx = canvas.getContext('2d');
    let car, obstacles, score, loop;
    
    function reset() {
        car = {x:canvas.width/2-15, y:canvas.height-60, w:30, h:50};
        obstacles = [];
        score = 0;
        loop = requestAnimationFrame(game);
    }
    
    const keys = {};
    document.addEventListener('keydown', e => { if(['ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); keys[e.key]=true; }});
    document.addEventListener('keyup', e => keys[e.key]=false);
    
    let frame = 0;
    function game() {
        frame++;
        score++;
        
        if (keys['ArrowLeft'] && car.x>20) car.x -= 5;
        if (keys['ArrowRight'] && car.x<canvas.width-car.w-20) car.x += 5;
        
        if (frame % 60 === 0) {
            obstacles.push({x:20+Math.random()*(canvas.width-70), y:-50, w:40, h:60});
        }
        
        obstacles.forEach(o => o.y += 4);
        obstacles = obstacles.filter(o => o.y < canvas.height);
        
        obstacles.forEach(o => {
            if (car.x < o.x+o.w && car.x+car.w > o.x && car.y < o.y+o.h && car.y+car.h > o.y) {
                cancelAnimationFrame(loop);
                alert('Crash! Score: ' + score);
                return;
            }
        });
        
        ctx.fillStyle = '#333';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#fff';
        for (let i=0; i<10; i++) {
            ctx.fillRect(canvas.width/2-2, i*50+(frame%50), 4, 30);
        }
        
        ctx.fillStyle = '#e74c3c';
        ctx.fillRect(car.x, car.y, car.w, car.h);
        
        ctx.fillStyle = '#3498db';
        obstacles.forEach(o => ctx.fillRect(o.x, o.y, o.w, o.h));
        
        ctx.fillStyle = '#fff';
        ctx.font = '16px Arial';
        ctx.fillText('Score: ' + score, 10, 25);
        
        loop = requestAnimationFrame(game);
    }
    
    reset();
}

function initBasketball(container) {
    container.innerHTML = `
        <style>
            .bball-container { text-align: center; }
            .bball-score { color: #fff; font-size: 24px; margin-bottom: 15px; }
            .bball-game { width: 300px; height: 350px; background: linear-gradient(to bottom, #87CEEB, #4a90a4); border-radius: 10px; position: relative; cursor: crosshair; margin: 0 auto; }
            .bball-hoop { position: absolute; top: 50px; left: 50%; transform: translateX(-50%); width: 80px; height: 60px; border: 5px solid #fff; border-bottom: none; border-radius: 0 0 10px 10px; }
            .bball-ball { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); width: 40px; height: 40px; background: #e67e22; border-radius: 50%; }
        </style>
        <div class="bball-container">
            <div class="bball-score">Score: <span id="bballScore">0</span></div>
            <div class="bball-game" id="bballGame">
                <div class="bball-hoop"></div>
                <div class="bball-ball" id="bballBall"></div>
            </div>
            <p style="color:#fff;margin-top:15px;">Click above the ball to shoot!</p>
        </div>
    `;
    
    let score = 0;
    const game = document.getElementById('bballGame');
    const ball = document.getElementById('bballBall');
    
    game.addEventListener('click', (e) => {
        const rect = game.getBoundingClientRect();
        const y = e.clientY - rect.top;
        if (y < 280) {
            ball.style.transition = 'all 0.5s ease-out';
            ball.style.bottom = '280px';
            ball.style.left = (e.clientX - rect.left - 20) + 'px';
            
            setTimeout(() => {
                if (e.clientX - rect.left > 100 && e.clientX - rect.left < 200) {
                    score += 2;
                    document.getElementById('bballScore').textContent = score;
                }
                ball.style.transition = 'all 0.3s ease-in';
                ball.style.bottom = '30px';
                ball.style.left = '50%';
                ball.style.transform = 'translateX(-50%)';
            }, 600);
        }
    });
}

function initSoccer(container) {
    container.innerHTML = `<canvas id="soccerCanvas" width="400" height="300" style="background:#27ae60;border-radius:10px;"></canvas>`;
    
    const canvas = document.getElementById('soccerCanvas');
    const ctx = canvas.getContext('2d');
    let player, ball, score, loop;
    
    function reset() {
        player = {x:canvas.width/2, y:canvas.height-40, r:15};
        ball = {x:canvas.width/2, y:canvas.height/2, vx:0, vy:-3, r:10};
        score = 0;
        loop = requestAnimationFrame(game);
    }
    
    const keys = {};
    document.addEventListener('keydown', e => { if(['ArrowLeft','ArrowRight'].includes(e.key)) { e.preventDefault(); keys[e.key]=true; }});
    document.addEventListener('keyup', e => keys[e.key]=false);
    
    function game() {
        if (keys['ArrowLeft'] && player.x>player.r) player.x -= 5;
        if (keys['ArrowRight'] && player.x<canvas.width-player.r) player.x += 5;
        
        ball.x += ball.vx;
        ball.y += ball.vy;
        
        if (ball.x < ball.r || ball.x > canvas.width-ball.r) ball.vx *= -1;
        if (ball.y < ball.r) { ball.vy *= -1; ball.vx = (Math.random()-0.5)*4; }
        
        if (ball.y+ball.r > player.y-player.r && Math.abs(ball.x-player.x) < player.r+ball.r) {
            ball.vy = -Math.abs(ball.vy)*1.05;
            ball.vx += (ball.x-player.x)*0.1;
            score++;
        }
        
        if (ball.y > canvas.height) {
            cancelAnimationFrame(loop);
            alert('Game Over! Score: ' + score);
            return;
        }
        
        ctx.fillStyle = '#27ae60';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.strokeStyle = 'rgba(255,255,255,0.3)';
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.height/2, 50, 0, Math.PI*2);
        ctx.stroke();
        
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI*2);
        ctx.fill();
        
        ctx.fillStyle = '#e74c3c';
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.r, 0, Math.PI*2);
        ctx.fill();
        
        ctx.fillStyle = '#fff';
        ctx.font = '16px Arial';
        ctx.fillText('Score: ' + score, 10, 25);
        
        loop = requestAnimationFrame(game);
    }
    
    reset();
}

function initChess(container) {
    container.innerHTML = `
        <style>
            .chess-container { text-align: center; }
            .chess-board { display: grid; grid-template-columns: repeat(8, 40px); gap: 0; justify-content: center; border: 3px solid #8B4513; }
            .chess-cell { width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; font-size: 28px; cursor: pointer; }
            .chess-cell.light { background: #f0d9b5; }
            .chess-cell.dark { background: #b58863; }
            .chess-cell.selected { background: #7fff00 !important; }
        </style>
        <div class="chess-container">
            <div class="chess-board" id="chessBoard"></div>
            <p style="color:#fff;margin-top:15px;">Click a piece then click destination</p>
        </div>
    `;
    
    const pieces = {
        'r':'♜','n':'♞','b':'♝','q':'♛','k':'♚','p':'♟',
        'R':'♖','N':'♘','B':'♗','Q':'♕','K':'♔','P':'♙'
    };
    
    let board = [
        ['r','n','b','q','k','b','n','r'],
        ['p','p','p','p','p','p','p','p'],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['','','','','','','',''],
        ['P','P','P','P','P','P','P','P'],
        ['R','N','B','Q','K','B','N','R']
    ];
    let selected = null;
    
    function render() {
        const container = document.getElementById('chessBoard');
        container.innerHTML = '';
        
        for (let r=0; r<8; r++) {
            for (let c=0; c<8; c++) {
                const isLight = (r+c)%2===0;
                const cell = document.createElement('div');
                cell.className = `chess-cell ${isLight?'light':'dark'}`;
                if (selected && selected.r===r && selected.c===c) cell.classList.add('selected');
                cell.textContent = pieces[board[r][c]] || '';
                cell.dataset.r = r;
                cell.dataset.c = c;
                cell.addEventListener('click', () => click(r,c));
                container.appendChild(cell);
            }
        }
    }
    
    function click(r,c) {
        if (selected) {
            board[r][c] = board[selected.r][selected.c];
            board[selected.r][selected.c] = '';
            selected = null;
        } else if (board[r][c]) {
            selected = {r,c};
        }
        render();
    }
    
    render();
}

// ==================== Helper Functions ====================

function getFavorites() {
    const stored = localStorage.getItem('favorites');
    return stored ? JSON.parse(stored) : [];
}

function getRecentGames() {
    const stored = localStorage.getItem('recent');
    return stored ? JSON.parse(stored) : [];
}

function addToRecentGames(gameId) {
    let recent = getRecentGames().filter(id => id !== gameId);
    recent.unshift(gameId);
    recent = recent.slice(0, 10);
    localStorage.setItem('recent', JSON.stringify(recent));
}

function setupEventListeners() {
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
    
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderAllGames();
        });
    });
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const container = document.getElementById('allGames');
        if (!container) return;
        let games = allGames;
        if (currentCategory !== 'all') games = games.filter(g => g.category === currentCategory);
        if (query) games = games.filter(g => g.title.toLowerCase().includes(query));
        container.innerHTML = games.map(createGameCard).join('');
    });
    
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) loadMoreBtn.style.display = 'none';
}

function showLoading(show) {
    const overlay = document.getElementById('loadingOverlay');
    if (overlay) overlay.classList.toggle('hidden', !show);
}

function formatNumber(num) {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
}