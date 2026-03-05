/* ===== DATA ===== */
const HIRAGANA = [
  { q: 'あ', a: 'a' }, { q: 'い', a: 'i' }, { q: 'う', a: 'u' }, { q: 'え', a: 'e' }, { q: 'お', a: 'o' },
  { q: 'か', a: 'ka' }, { q: 'き', a: 'ki' }, { q: 'く', a: 'ku' }, { q: 'け', a: 'ke' }, { q: 'こ', a: 'ko' },
  { q: 'さ', a: 'sa' }, { q: 'し', a: 'shi' }, { q: 'す', a: 'su' }, { q: 'せ', a: 'se' }, { q: 'そ', a: 'so' },
  { q: 'た', a: 'ta' }, { q: 'ち', a: 'chi' }, { q: 'つ', a: 'tsu' }, { q: 'て', a: 'te' }, { q: 'と', a: 'to' },
  { q: 'な', a: 'na' }, { q: 'に', a: 'ni' }, { q: 'ぬ', a: 'nu' }, { q: 'ね', a: 'ne' }, { q: 'の', a: 'no' },
  { q: 'は', a: 'ha' }, { q: 'ひ', a: 'hi' }, { q: 'ふ', a: 'fu' }, { q: 'へ', a: 'he' }, { q: 'ほ', a: 'ho' },
  { q: 'ま', a: 'ma' }, { q: 'み', a: 'mi' }, { q: 'む', a: 'mu' }, { q: 'め', a: 'me' }, { q: 'も', a: 'mo' },
  { q: 'や', a: 'ya' }, { q: 'ゆ', a: 'yu' }, { q: 'よ', a: 'yo' },
  { q: 'ら', a: 'ra' }, { q: 'り', a: 'ri' }, { q: 'る', a: 'ru' }, { q: 'れ', a: 're' }, { q: 'ろ', a: 'ro' },
  { q: 'わ', a: 'wa' }, { q: 'を', a: 'wo' }, { q: 'ん', a: 'n' },
];

const KATAKANA = [
  { q: 'ア', a: 'a' }, { q: 'イ', a: 'i' }, { q: 'ウ', a: 'u' }, { q: 'エ', a: 'e' }, { q: 'オ', a: 'o' },
  { q: 'カ', a: 'ka' }, { q: 'キ', a: 'ki' }, { q: 'ク', a: 'ku' }, { q: 'ケ', a: 'ke' }, { q: 'コ', a: 'ko' },
  { q: 'サ', a: 'sa' }, { q: 'シ', a: 'shi' }, { q: 'ス', a: 'su' }, { q: 'セ', a: 'se' }, { q: 'ソ', a: 'so' },
  { q: 'タ', a: 'ta' }, { q: 'チ', a: 'chi' }, { q: 'ツ', a: 'tsu' }, { q: 'テ', a: 'te' }, { q: 'ト', a: 'to' },
  { q: 'ナ', a: 'na' }, { q: 'ニ', a: 'ni' }, { q: 'ヌ', a: 'nu' }, { q: 'ネ', a: 'ne' }, { q: 'ノ', a: 'no' },
  { q: 'ハ', a: 'ha' }, { q: 'ヒ', a: 'hi' }, { q: 'フ', a: 'fu' }, { q: 'ヘ', a: 'he' }, { q: 'ホ', a: 'ho' },
  { q: 'マ', a: 'ma' }, { q: 'ミ', a: 'mi' }, { q: 'ム', a: 'mu' }, { q: 'メ', a: 'me' }, { q: 'モ', a: 'mo' },
  { q: 'ヤ', a: 'ya' }, { q: 'ユ', a: 'yu' }, { q: 'ヨ', a: 'yo' },
  { q: 'ラ', a: 'ra' }, { q: 'リ', a: 'ri' }, { q: 'ル', a: 'ru' }, { q: 'レ', a: 're' }, { q: 'ロ', a: 'ro' },
  { q: 'ワ', a: 'wa' }, { q: 'ヲ', a: 'wo' }, { q: 'ン', a: 'n' },
];

const VOCAB = [
  { q: '犬', a: '개 (inu)', hint: 'いぬ' },
  { q: '猫', a: '고양이 (neko)', hint: 'ねこ' },
  { q: '魚', a: '물고기 (sakana)', hint: 'さかな' },
  { q: '水', a: '물 (mizu)', hint: 'みず' },
  { q: '火', a: '불 (hi)', hint: 'ひ' },
  { q: '山', a: '산 (yama)', hint: 'やま' },
  { q: '川', a: '강 (kawa)', hint: 'かわ' },
  { q: '空', a: '하늘 (sora)', hint: 'そら' },
  { q: '花', a: '꽃 (hana)', hint: 'はな' },
  { q: '木', a: '나무 (ki)', hint: 'き' },
  { q: '食べる', a: '먹다 (taberu)', hint: 'たべる' },
  { q: '飲む', a: '마시다 (nomu)', hint: 'のむ' },
  { q: '見る', a: '보다 (miru)', hint: 'みる' },
  { q: '聞く', a: '듣다 (kiku)', hint: 'きく' },
  { q: '話す', a: '말하다 (hanasu)', hint: 'はなす' },
  { q: '大きい', a: '크다 (ookii)', hint: 'おおきい' },
  { q: '小さい', a: '작다 (chiisai)', hint: 'ちいさい' },
  { q: '早い', a: '빠르다 (hayai)', hint: 'はやい' },
  { q: '遅い', a: '느리다 (osoi)', hint: 'おそい' },
  { q: '好き', a: '좋아하다 (suki)', hint: 'すき' },
  { q: '嫌い', a: '싫다 (kirai)', hint: 'きらい' },
  { q: '学校', a: '학교 (gakkou)', hint: 'がっこう' },
  { q: '友達', a: '친구 (tomodachi)', hint: 'ともだち' },
  { q: '先生', a: '선생님 (sensei)', hint: 'せんせい' },
  { q: '電車', a: '전철 (densha)', hint: 'でんしゃ' },
];

/* ===== GAME CONFIG ===== */
const TOTAL_QUESTIONS = 15;
const TIMER_SECONDS = 10;
const LIVES = 3;
const CIRCUMFERENCE = 2 * Math.PI * 44; // svg r=44

/* ===== STATE ===== */
let state = {
  mode: '',
  pool: [],
  used: [],
  questionIndex: 0,
  score: 0,
  lives: LIVES,
  streak: 0,
  maxStreak: 0,
  correctCount: 0,
  timerInterval: null,
  timeLeft: TIMER_SECONDS,
  answered: false,
  currentAnswer: '',
};

/* ===== DOM ===== */
const screens = {
  start:  document.getElementById('screen-start'),
  game:   document.getElementById('screen-game'),
  result: document.getElementById('screen-result'),
};

/* ===== UTILS ===== */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function getBestScore(mode) {
  return parseInt(localStorage.getItem(`best_${mode}`) || '0');
}
function saveBestScore(mode, score) {
  const prev = getBestScore(mode);
  if (score > prev) { localStorage.setItem(`best_${mode}`, score); return true; }
  return false;
}

/* ===== START ===== */
function renderBestScores() {
  const el = document.getElementById('best-scores');
  const modes = [
    { key: 'hiragana', label: '히라가나' },
    { key: 'katakana', label: '가타카나' },
    { key: 'vocab',    label: '기초 단어' },
    { key: 'mixed',    label: '종합 도전' },
  ];
  const lines = modes.map(m => {
    const b = getBestScore(m.key);
    return b > 0 ? `${m.label}: ${b}점` : null;
  }).filter(Boolean);
  el.textContent = lines.length ? '최고 기록 — ' + lines.join('  |  ') : '';
}

document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => startGame(btn.dataset.mode));
});

/* ===== GAME START ===== */
function buildPool(mode) {
  if (mode === 'hiragana') return shuffle(HIRAGANA).map(d => ({ ...d, type: '히라가나' }));
  if (mode === 'katakana') return shuffle(KATAKANA).map(d => ({ ...d, type: '가타카나' }));
  if (mode === 'vocab')    return shuffle(VOCAB).map(d => ({ ...d, type: '단어 뜻 맞추기' }));
  // mixed
  const h = shuffle(HIRAGANA).slice(0, 6).map(d => ({ ...d, type: '히라가나' }));
  const k = shuffle(KATAKANA).slice(0, 5).map(d => ({ ...d, type: '가타카나' }));
  const v = shuffle(VOCAB).slice(0, 4).map(d => ({ ...d, type: '단어 뜻 맞추기' }));
  return shuffle([...h, ...k, ...v]);
}

function startGame(mode) {
  state = {
    mode,
    pool: buildPool(mode).slice(0, TOTAL_QUESTIONS),
    used: [],
    questionIndex: 0,
    score: 0,
    lives: LIVES,
    streak: 0,
    maxStreak: 0,
    correctCount: 0,
    timerInterval: null,
    timeLeft: TIMER_SECONDS,
    answered: false,
    currentAnswer: '',
  };
  updateLivesUI();
  updateScoreUI();
  updateStreakUI();
  showScreen('game');
  nextQuestion();
}

/* ===== QUESTION ===== */
function nextQuestion() {
  if (state.questionIndex >= state.pool.length) { endGame(); return; }

  clearInterval(state.timerInterval);
  state.answered = false;

  const item = state.pool[state.questionIndex];
  state.currentAnswer = item.a;

  // progress
  document.getElementById('progress-bar').style.width =
    (state.questionIndex / state.pool.length * 100) + '%';

  // question text
  document.getElementById('question-type').textContent = item.type;
  document.getElementById('question-char').textContent = item.q;
  document.getElementById('question-hint').textContent = item.hint ? `(${item.hint})` : '';

  // hide feedback
  const fb = document.getElementById('feedback');
  fb.classList.add('hidden');
  fb.className = 'feedback hidden';

  // build choices
  buildChoices(item);

  // timer
  startTimer();
  state.questionIndex++;
}

function buildChoices(item) {
  const grid = document.getElementById('choices');
  grid.innerHTML = '';

  // Pool to pick wrong answers from
  const sameType = (item.type === '단어 뜻 맞추기') ? VOCAB :
                   (item.type === '히라가나') ? HIRAGANA : KATAKANA;

  const wrongs = shuffle(sameType.filter(d => d.a !== item.a))
    .slice(0, 3)
    .map(d => d.a);

  const options = shuffle([item.a, ...wrongs]);

  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = opt;
    btn.addEventListener('click', () => handleChoice(btn, opt));
    grid.appendChild(btn);
  });
}

/* ===== TIMER ===== */
function startTimer() {
  state.timeLeft = TIMER_SECONDS;
  const arc = document.getElementById('timer-arc');
  const num = document.getElementById('timer-num');
  arc.style.strokeDasharray = CIRCUMFERENCE;

  function tick() {
    arc.style.strokeDashoffset = CIRCUMFERENCE * (1 - state.timeLeft / TIMER_SECONDS);
    num.textContent = state.timeLeft;
    arc.classList.remove('warn', 'danger');
    if (state.timeLeft <= 3) arc.classList.add('danger');
    else if (state.timeLeft <= 5) arc.classList.add('warn');

    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      if (!state.answered) timeUp();
    } else {
      state.timeLeft--;
    }
  }
  tick();
  state.timerInterval = setInterval(tick, 1000);
}

/* ===== ANSWER HANDLING ===== */
function handleChoice(btn, chosen) {
  if (state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);

  const correct = chosen === state.currentAnswer;
  resolveAnswer(correct, btn);
}

function timeUp() {
  state.answered = true;
  // highlight correct
  const btns = document.querySelectorAll('.choice-btn');
  btns.forEach(b => {
    if (b.textContent === state.currentAnswer) b.classList.add('correct');
    b.disabled = true;
  });
  resolveAnswer(false, null, true);
}

function resolveAnswer(correct, clickedBtn, timedOut = false) {
  const btns = document.querySelectorAll('.choice-btn');
  btns.forEach(b => b.disabled = true);

  if (correct) {
    clickedBtn.classList.add('correct');
    const bonus = state.streak >= 4 ? 30 : state.streak >= 2 ? 20 : 10;
    const timeBonus = Math.floor(state.timeLeft * 2);
    state.score += bonus + timeBonus;
    state.streak++;
    state.maxStreak = Math.max(state.maxStreak, state.streak);
    state.correctCount++;
    showFeedback(true, bonus + timeBonus);
  } else {
    if (clickedBtn) clickedBtn.classList.add('wrong');
    state.streak = 0;
    state.lives--;
    updateLivesUI();
    showFeedback(false, timedOut ? '⏱ 시간 초과!' : `정답: ${state.currentAnswer}`);
  }

  updateScoreUI();
  updateStreakUI();

  if (state.lives <= 0) {
    setTimeout(endGame, 1200);
  } else {
    setTimeout(nextQuestion, 1100);
  }
}

function showFeedback(ok, msg) {
  const fb = document.getElementById('feedback');
  const icon = document.getElementById('feedback-icon');
  const text = document.getElementById('feedback-text');
  fb.className = `feedback ${ok ? 'ok' : 'bad'}`;
  icon.textContent = ok ? '✓' : '✗';
  text.textContent = ok ? `+${msg}점` : `${msg}`;
}

/* ===== UI UPDATES ===== */
function updateLivesUI() {
  const hearts = document.querySelectorAll('#lives-display .heart');
  hearts.forEach((h, i) => {
    h.classList.toggle('lost', i >= state.lives);
  });
}

function updateScoreUI() {
  document.getElementById('score').textContent = state.score;
}

function updateStreakUI() {
  const el = document.getElementById('streak-text');
  el.textContent = state.streak >= 2 ? `🔥 ${state.streak} 연속!` : `🔥 ${state.streak}`;
}

/* ===== END GAME ===== */
function endGame() {
  clearInterval(state.timerInterval);
  document.getElementById('progress-bar').style.width = '100%';

  // result screen
  const pct = state.pool.length > 0 ? state.correctCount / state.pool.length : 0;
  let emoji, title;
  if (pct >= 0.9)      { emoji = '🏆'; title = '완벽해요! 최고!'; }
  else if (pct >= 0.7) { emoji = '🎉'; title = '잘 했어요!'; }
  else if (pct >= 0.5) { emoji = '😊'; title = '좋아요! 더 연습해봐요'; }
  else                  { emoji = '💪'; title = '계속 도전해봐요!'; }

  document.getElementById('result-emoji').textContent = emoji;
  document.getElementById('result-title').textContent = title;
  document.getElementById('res-score').textContent = state.score;
  document.getElementById('res-correct').textContent =
    `${state.correctCount}/${state.pool.length}`;
  document.getElementById('res-streak').textContent = state.maxStreak;

  const isNew = saveBestScore(state.mode, state.score);
  document.getElementById('new-best').classList.toggle('hidden', !isNew);

  showScreen('result');
  renderBestScores();
}

/* ===== BUTTONS ===== */
document.getElementById('btn-exit').addEventListener('click', () => {
  clearInterval(state.timerInterval);
  showScreen('start');
  renderBestScores();
});

document.getElementById('btn-retry').addEventListener('click', () => {
  startGame(state.mode);
});

document.getElementById('btn-home').addEventListener('click', () => {
  showScreen('start');
  renderBestScores();
});

/* ===== INIT ===== */
renderBestScores();
