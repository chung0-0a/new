/* ===== QUESTION DATA ===== */

const EASY_TRUTH = [
  "지금까지 가장 웃겼던 순간을 이야기해주세요!",
  "어릴 때 장래희망은 무엇이었나요?",
  "지금 이 자리에서 가장 재미있는 사람은 누구인가요?",
  "가장 좋아하는 음식은 무엇인가요?",
  "아직까지 도전해보지 못한 것이 있다면?",
  "가장 행복했던 여행지는 어디인가요?",
  "처음 만나는 사람한테 첫인상이 어떻다고 느끼나요?",
  "좋아하는 계절은 언제이고 이유는?",
  "오늘 기분을 날씨로 표현하면?",
  "가장 자랑스러운 나의 장점은?",
];
const EASY_DARE = [
  "옆 사람에게 진심 어린 칭찬을 3가지 해주세요!",
  "30초 동안 좋아하는 노래를 불러주세요!",
  "가장 재미있는 표정으로 사진 찍기!",
  "모두에게 손하트를 날려주세요!",
  "옆 사람 어깨를 30초간 두드려주세요!",
  "30초 동안 한 발로 서있기!",
  "눈 감고 자신의 이름 쓰기!",
  "왼손으로 옆 사람 이름 쓰기 도전!",
  "가장 귀여운 목소리로 자기소개!",
  "방에서 가장 웃긴 물건 찾아오기!",
];

const NORMAL_TRUTH = [
  "지금까지 살면서 가장 부끄러웠던 순간은 언제인가요?",
  "첫사랑에 대해 솔직하게 이야기해주세요.",
  "지금 이 자리에서 가장 좋아하는 사람은 누구인가요?",
  "평생 비밀로 해왔던 것이 있다면 말해주세요.",
  "가장 최근에 거짓말을 한 게 언제인가요?",
  "남몰래 울었던 적이 있나요? 언제였나요?",
  "현재 짝사랑하는 사람이 있나요?",
  "인생에서 가장 후회되는 결정은 무엇인가요?",
  "가장 이상한 꿈을 꾼 것을 이야기해 주세요.",
  "나쁜 습관이 있다면 솔직하게 말해주세요.",
  "지금 가장 걱정되는 것은 무엇인가요?",
  "살면서 가장 멍청한 짓을 했던 순간은 언제인가요?",
  "지금 스마트폰 검색 기록을 보여줄 수 있나요?",
  "가장 오래 연락 안 한 친구는 누구이고 이유는?",
  "오늘 여기 있는 사람 중 가장 믿음직스러운 사람은?",
];
const NORMAL_DARE = [
  "1분 동안 혼자 춤을 춰주세요!",
  "지금 당장 핸드폰 잠금화면을 모두에게 보여주세요!",
  "팔굽혀펴기 10개를 해주세요!",
  "30초 동안 좋아하는 동물 흉내를 내세요!",
  "다음 턴이 올 때까지 웃으면 탈락이에요!",
  "30초 동안 말을 하면 안 돼요!",
  "눈 감고 10초 동안 한 발로 서 있기!",
  "모두에게 웃긴 셀카를 찍어서 보여주세요!",
  "박수를 치면서 노래를 불러주세요!",
  "눈을 감고 옆 사람 얼굴을 그려보세요!",
  "가장 웃긴 목소리로 '나는 진실만 말한다'고 외쳐주세요!",
  "30초 동안 눈을 깜빡이지 않기에 도전해보세요!",
];

const HARD_TRUTH = NORMAL_TRUTH; // PRO 전용 (데모)
const HARD_DARE  = NORMAL_DARE;

const QUESTIONS = {
  easy:   { truth: EASY_TRUTH,   dare: EASY_DARE },
  normal: { truth: NORMAL_TRUTH, dare: NORMAL_DARE },
  hard:   { truth: HARD_TRUTH,   dare: HARD_DARE },
};

/* ===== APP STATE ===== */
const App = {
  players: [],
  currentPlayerIndex: 0,
  currentMode: 'dare',
  currentLevel: 'normal',
  isDarkTheme: false,
  obIndex: 0,

  _usedTruth: new Set(),
  _usedDare: new Set(),
  _stats: {},

  /* ── Navigation ── */
  go(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
  },

  /* ── Onboarding Carousel ── */
  obGo(targetIndex, direction) {
    const screens = ['screen-ob1', 'screen-ob2', 'screen-ob3'];
    const currentId = screens[this.obIndex];
    const targetId  = screens[targetIndex];

    if (currentId === targetId) return;

    const outClass = direction === 'left'  ? 'ob-anim-out-left'  : 'ob-anim-out-right';
    const inClass  = direction === 'left'  ? 'ob-anim-in-right'  : 'ob-anim-in-left';

    const currentEl = document.getElementById(currentId);
    const targetEl  = document.getElementById(targetId);

    // Show target and animate both
    targetEl.classList.add('active', inClass);
    currentEl.classList.add(outClass);

    setTimeout(() => {
      currentEl.classList.remove('active', outClass);
      targetEl.classList.remove(inClass);
      this.obIndex = targetIndex;
    }, 380);
  },

  /* ── Level Selection ── */
  selectLevel(level) {
    if (level === 'hard') {
      // Hard is PRO-locked — show ad screen
      this.go('screen-ad');
      return;
    }
    this.currentLevel = level;
    this.go('screen-setup');
  },

  /* ── Dark / Light Theme ── */
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    const app = document.querySelector('.app');
    app.setAttribute('data-theme', this.isDarkTheme ? 'dark' : 'light');

    const btn = document.getElementById('theme-toggle');
    btn.classList.toggle('active', !this.isDarkTheme);
    // icon swap handled by CSS: .icon-light/.icon-dark toggled via data-theme
  },

  /* ── Player Management ── */
  addPlayer() {
    const input = document.getElementById('setup-input');
    const name  = input.value.trim();
    if (!name) return;

    if (this.players.length >= 8) {
      this.showAlert('최대 8명까지 추가할 수 있습니다.');
      return;
    }
    if (this.players.map(p => p.toLowerCase()).includes(name.toLowerCase())) {
      this.showAlert('이미 같은 이름의 플레이어가 있습니다.');
      return;
    }
    this.players.push(name);
    input.value = '';
    input.focus();
    this._renderPlayerList();
  },

  removePlayer(index) {
    this.players.splice(index, 1);
    this._renderPlayerList();
  },

  _renderPlayerList() {
    const list = document.getElementById('setup-player-list');
    list.innerHTML = '';
    this.players.forEach((name, i) => {
      const item = document.createElement('div');
      item.className = 'player-item';
      item.innerHTML = `
        <span>${this._esc(name)}</span>
        <button class="btn-delete" onclick="App.removePlayer(${i})" aria-label="삭제">
          <div style="width:20px;height:20px;background:#ff5963;-webkit-mask-image:url('https://www.figma.com/api/mcp/asset/b11a72a2-dba1-461a-a2f6-5af6791b62b9');mask-image:url('https://www.figma.com/api/mcp/asset/b11a72a2-dba1-461a-a2f6-5af6791b62b9');-webkit-mask-size:contain;mask-size:contain;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-position:center;mask-position:center;"></div>
        </button>
      `;
      list.appendChild(item);
    });
  },

  /* ── Game ── */
  startGame() {
    if (this.players.length < 2) {
      this.showAlert('최소 2명의 플레이어를 추가해주세요!');
      return;
    }
    this.currentPlayerIndex = 0;
    this._usedTruth.clear();
    this._usedDare.clear();
    this._stats = {};
    this.players.forEach(name => { this._stats[name] = { truth: 0, dare: 0 }; });

    this.go('screen-game');
    this.setMode('dare');
    document.getElementById('game-player-name').textContent = this.players[0];
    document.getElementById('game-question').textContent    = '시작 버튼을 눌러주세요!';
  },

  setMode(mode) {
    this.currentMode = mode;
    document.getElementById('tab-truth').classList.toggle('active', mode === 'truth');
    document.getElementById('tab-dare').classList.toggle('active', mode === 'dare');
  },

  nextTurn() {
    const playerName = this.players[this.currentPlayerIndex];
    document.getElementById('game-player-name').textContent = playerName;

    const pool   = QUESTIONS[this.currentLevel][this.currentMode];
    const usedSet = this.currentMode === 'truth' ? this._usedTruth : this._usedDare;

    if (usedSet.size >= pool.length) usedSet.clear();

    let idx;
    do { idx = Math.floor(Math.random() * pool.length); }
    while (usedSet.has(idx));
    usedSet.add(idx);

    document.getElementById('game-question').textContent = pool[idx];

    if (this._stats[playerName]) {
      this._stats[playerName][this.currentMode]++;
    }
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
  },

  showResults() {
    this._renderResults();
    this.go('screen-results');
  },

  _renderResults() {
    const list = document.getElementById('results-list');
    list.innerHTML = '';
    this.players.forEach(name => {
      const s = this._stats[name] || { truth: 0, dare: 0 };
      const item = document.createElement('div');
      item.className = 'result-item';
      item.innerHTML = `
        <span class="result-name">${this._esc(name)}</span>
        <span class="result-stats">Truth ${s.truth} · Dare ${s.dare}</span>
      `;
      list.appendChild(item);
    });
  },

  endGame() {
    this.players = [];
    this._stats  = {};
    this._renderPlayerList();
    this.go('screen-level');
  },

  playAgain() { this.startGame(); },

  goHome() {
    this.showConfirm(
      '홈으로 돌아가시겠습니까?\n레벨 선택 화면으로 이동합니다.',
      () => {
        this.players = [];
        this._stats  = {};
        this._renderPlayerList();
        this.go('screen-level');
      }
    );
  },

  /* ── Modals ── */
  showAlert(msg)            { this._openModal(msg, null); },
  showConfirm(msg, onOk)    { this._openModal(msg, onOk); },

  _openModal(msg, onConfirm) {
    document.getElementById('app-modal')?.remove();
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.id = 'app-modal';
    const hasConfirm = typeof onConfirm === 'function';
    overlay.innerHTML = `
      <div class="modal-box">
        <p class="modal-msg">${msg.replace(/\n/g, '<br>')}</p>
        <div class="modal-btns">
          ${hasConfirm ? `<button class="modal-btn cancel" id="modal-cancel">취소</button>` : ''}
          <button class="modal-btn confirm" id="modal-ok">${hasConfirm ? '확인' : '닫기'}</button>
        </div>
      </div>`;
    document.querySelector('.app').appendChild(overlay);
    document.getElementById('modal-ok').addEventListener('click', () => {
      overlay.remove(); if (hasConfirm) onConfirm();
    });
    if (hasConfirm) {
      document.getElementById('modal-cancel').addEventListener('click', () => overlay.remove());
    }
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
  },

  _esc(s) {
    return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  },
};

/* ===== ONBOARDING SWIPE ===== */
(function initObSwipe() {
  const screens = ['screen-ob1', 'screen-ob2', 'screen-ob3'];
  let startX = 0, startY = 0;

  screens.forEach((id, idx) => {
    const el = document.getElementById(id);

    el.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    }, { passive: true });

    el.addEventListener('touchend', e => {
      const dx = startX - e.changedTouches[0].clientX;
      const dy = Math.abs(startY - e.changedTouches[0].clientY);

      // Only react to horizontal swipes (not vertical scroll)
      if (Math.abs(dx) < 50 || dy > Math.abs(dx)) return;

      if (dx > 0) {
        // Swipe left → go forward
        if (App.obIndex < 2) App.obGo(App.obIndex + 1, 'left');
        else App.go('screen-ad'); // last screen → go to ad
      } else {
        // Swipe right → go back
        if (App.obIndex > 0) App.obGo(App.obIndex - 1, 'right');
      }
    }, { passive: true });
  });
})();

/* ===== SPLASH AUTO-TRANSITION ===== */
setTimeout(() => App.go('screen-ob1'), 2000);
