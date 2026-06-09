# 송승민 포트폴리오

임베디드 · 비전 · 차량 데이터 개인 포트폴리오 정적 웹사이트입니다.

## 폴더 구조

```
portfolio/
├── index.html      # 페이지 본문
├── styles.css      # 스타일
├── script.js       # 스크롤 reveal 애니메이션
├── .nojekyll       # GitHub Pages가 Jekyll 처리를 건너뛰게 함
└── assets/         # 이미지 (프로필 · 프로젝트 5종 + 보조)
    ├── profile.jpg
    ├── yolo-roi.jpg
    ├── obd-driving.jpg
    ├── rc-track.png
    ├── ninja-gesture.jpg
    ├── depression-demo.jpg
    └── data-chart.png
```

## 로컬에서 확인

빌드 도구 없습니다. 그냥 `index.html`을 브라우저로 열거나, 간단히 정적 서버를 띄우면 됩니다.

```bash
# Python 3
python -m http.server 8000
# → http://localhost:8000
```

## GitHub Pages 배포 (두 가지 방법 중 택1)

### 방법 A. 사용자 사이트 (`<username>.github.io`)

자신의 메인 포트폴리오 도메인으로 쓰고 싶을 때.

1. GitHub에서 **`wndtk123456-beep.github.io`** 이름으로 새 public 저장소를 만듭니다 (이름이 정확히 `<유저명>.github.io` 여야 함).
2. 이 폴더 안에서:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/wndtk123456-beep/wndtk123456-beep.github.io.git
   git push -u origin main
   ```
3. 1~2분 뒤 `https://wndtk123456-beep.github.io/` 로 접속.

### 방법 B. 프로젝트 사이트 (`<username>.github.io/<repo>`)

기존 저장소가 있거나 이름을 자유롭게 쓰고 싶을 때.

1. GitHub에서 임의 이름(예: `portfolio`) 으로 public 저장소를 만들고 push.
2. 저장소 **Settings → Pages** 진입.
3. **Source: Deploy from a branch**, **Branch: `main` / `(root)`** 선택 후 Save.
4. 1~2분 뒤 `https://wndtk123456-beep.github.io/portfolio/` 로 접속.

## 자주 묻는 것

**이미지가 안 보여요.**
경로가 `./assets/...` 로 시작하는지 확인하세요. GitHub에 올릴 때 `assets/` 폴더가 빠지면 깨집니다.

**프로필 이미지를 바꾸고 싶어요.**
`assets/profile.jpg` 파일을 같은 이름으로 덮어쓰면 됩니다.

**프로젝트 추가하고 싶어요.**
`index.html` 의 `<div class="project-list">` 안에 `<article class="project-item">` 블록을 복사·수정하면 됩니다.
