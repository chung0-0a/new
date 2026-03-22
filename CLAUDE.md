# 프로젝트 개요 (Project Overview)

- **프로젝트명:** Truth or Dare (19+ 성인/커플용 진실게임 앱)
- **목적:** 연인 및 친밀한 성인 모임을 위한 단계별 수위 조절 진실게임 앱.
- **핵심 기술 스택:** Flutter (Frontend), Node.js (Environment/MCP)
- **디자인 가이드:** [Figma Reference](https://www.figma.com/design/FvbFsrcLc9ycarTwHuPtLn/Turth-or-Dare--Copy-?node-id=0-1&m=dev)

## 핵심 로직 및 기능 (Core Rules)

1. **3단계 게임 모드:**
   - Easy (친구들용, 가벼움)
   - Normal (썸/커플용, 설렘)
   - Hard (19+ 매운맛, 과감함)
2. **강제 밸런스 로직:** 동일 플레이어가 'Truth(진실)'를 연속 3회 선택하면, 다음 차례는 무조건 'Dare(도전)'를 수행해야 함.
3. **안전장치:** 사용자 보호를 위한 'Hard Limit' 설정 기능 포함.

## 코딩 가이드라인 (Coding Style)

- **언어 및 프레임워크:** Flutter (Dart) 컨벤션 준수.
- **네이밍 규칙:** 클래스는 `PascalCase`, 변수와 함수는 `camelCase`.
- **구조화:** UI 위젯은 피그마 디자인을 반영하여 재사용 가능한 컴포넌트로 분리.
- **상태 관리:** Provider 또는 Riverpod 권장.

## 환경 설정 (Environment)

- **패키지 관리:** `flutter pub get`
- **빌드/실행:** `flutter run`
- **프로젝트 분석:** /init 명령어로 분석된 내용을 이 파일에 지속적으로 업데이트할 것.

---

## 프로젝트 현황 (Project Status)

### 현재 파일 구조
```
/home/user/new/
├── CLAUDE.md         # 이 파일 (프로젝트 규칙)
├── index.html        # 로또 번호 추첨기 (기존 파일 - Truth or Dare와 무관)
├── script.js         # 로또 번호 추첨기 JS (기존 파일)
└── styles.css        # 로또 번호 추첨기 CSS (기존 파일)
```

### TODO
- [ ] Flutter 프로젝트 초기화 (`flutter create`)
- [ ] 게임 모드 (Easy/Normal/Hard) 구현
- [ ] 강제 밸런스 로직 구현 (Truth 3회 연속 → Dare 강제)
- [ ] Hard Limit 안전장치 구현
- [ ] Figma 디자인 기반 UI 컴포넌트 구성
- [ ] 상태 관리 (Riverpod) 설정
