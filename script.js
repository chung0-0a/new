/* ===== QUESTION DATA ===== */

const TRUTH_QUESTIONS = [
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
  "지금까지 받은 최고의 칭찬은 무엇인가요?",
  "가장 무서운 것은 무엇인가요?",
  "지금 가장 걱정되는 것은 무엇인가요?",
  "살면서 가장 멍청한 짓을 했던 순간은 언제인가요?",
  "가장 갖고 싶은 것은 무엇인가요?",
  "오늘 여기 있는 사람 중 가장 믿음직스러운 사람은?",
  "지금까지 살면서 가장 용감했던 순간은?",
  "지금 스마트폰 검색 기록을 보여줄 수 있나요?",
  "가장 오래 연락 안 한 친구는 누구이고 이유는?",
  "다음 생이 있다면 어떤 사람으로 태어나고 싶나요?",
];

const DARE_CHALLENGES = [
  "1분 동안 혼자 춤을 춰주세요!",
  "옆 사람에게 진심 어린 칭찬을 3가지 해주세요!",
  "지금 당장 핸드폰 잠금화면을 모두에게 보여주세요!",
  "1분 동안 좋아하는 노래를 불러주세요!",
  "팔굽혀펴기 10개를 해주세요!",
  "30초 동안 좋아하는 동물 흉내를 내세요!",
  "다음 턴이 올 때까지 웃으면 탈락이에요!",
  "30초 동안 말을 하면 안 돼요!",
  "눈 감고 10초 동안 한 발로 서 있기!",
  "모두에게 웃긴 셀카를 찍어서 보여주세요!",
  "다음 사람에게 어깨 마사지를 30초간 해주세요!",
  "가장 이상한 표정을 30초 동안 유지하세요!",
  "박수를 치면서 노래를 불러주세요!",
  "눈을 감고 옆 사람 얼굴을 그려보세요!",
  "지금 당장 방에서 가장 웃긴 사물을 찾아오세요!",
  "모두가 보는 앞에서 영어로 자기소개를 해주세요!",
  "10초 안에 혀로 코 핥기 도전!",
  "가장 웃긴 목소리로 '나는 진실만 말한다'고 외쳐주세요!",
  "왼손으로 이름 쓰기에 도전해보세요!",
  "30초 동안 눈을 깜빡이지 않기에 도전해보세요!",
];

/* ===== APP STATE ===== */

const App = {
  players: [],
  currentPlayerIndex: 0,
  currentMode: 'truth',

  // Per-session used question tracking
  _usedTruth: new Set(),
  _usedDare: new Set(),

  /* ── Navigation ── */

  go(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
  },

  /* ── Player Management ── */

  addPlayer() {
    const input = document.getElementById('player-input');
    const name = input.value.trim();

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
    const list = document.getElementById('player-list');
    list.innerHTML = '';
    this.players.forEach((name, i) => {
      const item = document.createElement('div');
      item.className = 'player-item';
      item.innerHTML = `
        <span>${this._escapeHtml(name)}</span>
        <button class="btn-delete" onclick="App.removePlayer(${i})" aria-label="삭제">🗑</button>
      `;
      list.appendChild(item);
    });
  },

  /* ── Onboarding flow ── */

  goToOb3() {
    if (this.players.length < 2) {
      this.showAlert('최소 2명의 플레이어를 추가해주세요!');
      return;
    }
    this.go('screen-ob3');
  },

  selectMode(mode) {
    this.currentMode = mode;

    const cardTruth = document.getElementById('card-truth');
    const cardDare  = document.getElementById('card-dare');

    cardTruth.classList.toggle('selected', mode === 'truth');
    cardDare.classList.toggle('selected', mode === 'dare');
  },

  /* ── Game ── */

  startGame() {
    if (this.players.length < 2) {
      this.go('screen-ob2');
      this.showAlert('최소 2명의 플레이어를 추가해주세요!');
      return;
    }

    this.currentPlayerIndex = 0;
    this._usedTruth.clear();
    this._usedDare.clear();

    this.go('screen-game');
    this.setMode(this.currentMode);

    document.getElementById('game-player-name').textContent = this.players[0];
    document.getElementById('game-question').textContent = '시작 버튼을 눌러주세요!';
  },

  setMode(mode) {
    this.currentMode = mode;
    document.getElementById('tab-truth').classList.toggle('active', mode === 'truth');
    document.getElementById('tab-dare').classList.toggle('active', mode === 'dare');
  },

  nextTurn() {
    // Show question for CURRENT player
    const playerName = this.players[this.currentPlayerIndex];
    document.getElementById('game-player-name').textContent = playerName;

    // Pick a random unused question
    const questions = this.currentMode === 'truth' ? TRUTH_QUESTIONS : DARE_CHALLENGES;
    const usedSet   = this.currentMode === 'truth' ? this._usedTruth : this._usedDare;

    // Reset if all questions exhausted
    if (usedSet.size >= questions.length) usedSet.clear();

    let idx;
    do {
      idx = Math.floor(Math.random() * questions.length);
    } while (usedSet.has(idx));

    usedSet.add(idx);
    document.getElementById('game-question').textContent = questions[idx];

    // Advance to next player for the following turn
    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
  },

  goHome() {
    this.showConfirm(
      '홈으로 돌아가시겠습니까?\n게임 진행 상황이 초기화됩니다.',
      () => {
        this.players = [];
        this._renderPlayerList();
        this.go('screen-ob1');
      }
    );
  },

  /* ── Modal helpers ── */

  showAlert(msg) {
    this._openModal(msg, null);
  },

  showConfirm(msg, onConfirm) {
    this._openModal(msg, onConfirm);
  },

  _openModal(msg, onConfirm) {
    // Remove existing modal
    const existing = document.getElementById('app-modal');
    if (existing) existing.remove();

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
      </div>
    `;

    document.querySelector('.app-wrapper').appendChild(overlay);

    document.getElementById('modal-ok').addEventListener('click', () => {
      overlay.remove();
      if (hasConfirm) onConfirm();
    });

    if (hasConfirm) {
      document.getElementById('modal-cancel').addEventListener('click', () => overlay.remove());
    }

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });
  },

  /* ── Utility ── */

  _escapeHtml(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  },
};

/* ===== SPLASH AUTO-TRANSITION ===== */
setTimeout(() => App.go('screen-ob1'), 2000);
