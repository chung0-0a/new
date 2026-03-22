const questions = {
  easy: {
    truth: [
      "지금까지 먹어본 음식 중 가장 맛있었던 것은?",
      "가장 좋아하는 계절은 무엇인가요?",
      "어릴 때 꿈이 무엇이었나요?",
      "가장 좋아하는 영화는?",
      "마지막으로 울었던 게 언제인가요?",
      "가장 자주 가는 음식점은 어디인가요?",
      "지금 가장 듣고 싶은 노래는?",
      "가장 좋아하는 동물은?",
      "지금까지 가본 곳 중 가장 좋았던 여행지는?",
      "오늘 아침에 무슨 꿈을 꿨나요?",
    ],
    dare: [
      "30초 동안 닭춤 추기",
      "가장 웃긴 표정 만들기",
      "좋아하는 노래 첫 소절 부르기",
      "눈 감고 코 만지기 3번",
      "혀 꼬이는 말 세 번 말하기: '간장 공장 공장장'",
      "1분 동안 눈 깜빡이지 않기",
      "동물 울음소리 흉내 내기",
      "제자리에서 10번 점프하기",
      "팔굽혀펴기 5개 하기",
      "가장 좋아하는 사람 칭찬하기",
    ],
  },
  medium: {
    truth: [
      "지금까지 가장 부끄러웠던 순간은?",
      "첫사랑에 대해 이야기해 주세요.",
      "나쁜 습관이 있다면 무엇인가요?",
      "가장 후회하는 일은 무엇인가요?",
      "지금 가장 스트레스받는 것은?",
      "비밀로 하고 싶은 취미가 있나요?",
      "가장 무서운 것은 무엇인가요?",
      "지금까지 가장 큰 실수는 무엇이었나요?",
      "친구 중 가장 연락하기 싫은 사람은?",
      "가장 오래 잠을 잔 시간은 몇 시간인가요?",
    ],
    dare: [
      "지금 주변 사람에게 진심 어린 칭찬하기",
      "눈 감고 냉장고에서 뭔가 꺼내 먹기",
      "1분 동안 말하지 않기",
      "가장 좋아하는 노래 한 절 춤추며 부르기",
      "모르는 번호에 문자로 응원 메시지 보내기",
      "3분 동안 방 청소하기",
      "10분 동안 스마트폰 사용 금지",
      "가장 싫어하는 음식 먹어보기",
      "상대방 흉내 내기",
      "30초 동안 혀 내밀고 있기",
    ],
  },
  hard: {
    truth: [
      "지금까지 가장 큰 거짓말을 한 게 언제인가요?",
      "가장 질투했던 순간은?",
      "지금 이 자리에서 가장 솔직하게 말하기 싫은 것은?",
      "사랑했지만 말 못 했던 사람이 있나요?",
      "가장 창피한 버릇은?",
      "지금까지 가장 이기적으로 행동한 때는?",
      "타인에게 상처 준 적이 있다면 언제인가요?",
      "현재 가장 두려운 것은 무엇인가요?",
      "지금 당장 고치고 싶은 나쁜 성격은?",
      "가장 큰 콤플렉스는 무엇인가요?",
    ],
    dare: [
      "지금 당장 좋아하는 사람에게 고백 메시지 보내기",
      "5분 동안 한 발로 서 있기",
      "지금 보이는 가장 이상한 것 먹기",
      "SNS에 가장 웃긴 셀카 올리기",
      "모르는 사람에게 전화해서 노래 불러주기",
      "2분 동안 쉬지 않고 이야기하기",
      "팔굽혀펴기 20개 하기",
      "지금 이 자리에서 가장 솔직한 고백하기",
      "30분 동안 스마트폰 절전 모드로 두기",
      "10초 안에 혀 꼬이는 말 5번 말하기",
    ],
  },
};

let currentLevel = 'easy';
let currentMode = null;
let usedIndices = { truth: [], dare: [] };
let history = [];

const diffBtns = document.querySelectorAll('.diff-btn');
const truthButton = document.getElementById('truthButton');
const dareButton = document.getElementById('dareButton');
const cardArea = document.getElementById('cardArea');
const card = document.getElementById('card');
const cardType = document.getElementById('cardType');
const cardContent = document.getElementById('cardContent');
const nextButton = document.getElementById('nextButton');
const historyList = document.getElementById('historyList');
const historySection = document.getElementById('historySection');
const clearHistoryBtn = document.getElementById('clearHistory');

diffBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    diffBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.dataset.level;
    usedIndices = { truth: [], dare: [] };
    cardArea.classList.add('hidden');
  });
});

truthButton.addEventListener('click', () => showCard('truth'));
dareButton.addEventListener('click', () => showCard('dare'));
nextButton.addEventListener('click', () => showCard(currentMode));
clearHistoryBtn.addEventListener('click', () => {
  history = [];
  renderHistory();
});

function showCard(mode) {
  currentMode = mode;
  const pool = questions[currentLevel][mode];

  if (usedIndices[mode].length >= pool.length) {
    usedIndices[mode] = [];
  }

  let idx;
  do {
    idx = Math.floor(Math.random() * pool.length);
  } while (usedIndices[mode].includes(idx));

  usedIndices[mode].push(idx);
  const text = pool[idx];

  card.className = 'card ' + (mode === 'truth' ? 'card-truth' : 'card-dare');
  cardType.textContent = mode === 'truth' ? '💬 진실 (Truth)' : '🔥 도전 (Dare)';
  cardContent.textContent = text;

  cardArea.classList.remove('hidden');
  cardArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  history.unshift({ mode, text, level: currentLevel });
  if (history.length > 10) history.pop();
  renderHistory();
}

function renderHistory() {
  if (history.length === 0) {
    historySection.style.display = 'none';
    return;
  }
  historySection.style.display = 'block';
  historyList.innerHTML = history.map(item => `
    <li class="history-item history-${item.mode}">
      <span class="history-badge">${item.mode === 'truth' ? '💬 진실' : '🔥 도전'}</span>
      <span class="history-text">${item.text}</span>
    </li>
  `).join('');
}

renderHistory();
