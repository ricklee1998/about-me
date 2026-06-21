# 이선위 · Frontend Developer

> 사용자가 자연스럽고 편리하게 서비스를 이용할 수 있도록 고민하는 프론트엔드 개발자입니다.

약 5년간 글로벌 영상 커뮤니케이션(WebRTC), 교육 플랫폼(LMS·LXP), AI 캐릭터 채팅(LLM) 서비스를 React·Next.js·TypeScript 기반으로 만들어왔습니다.
기능 구현뿐 아니라 **서비스 안정성·성능·유지보수성**, 그리고 **고객과의 소통**까지 함께 고려하는 개발을 지향합니다.

> *서비스는 자식이고 회사는 가족이다. 내 서비스에 정확히 화낼 수 있어야 더 애정이 깊어지고, 더 나은 품질로 다듬을 수 있다.*

## 🔗 사이트

**https://ricklee1998.github.io/about-me/**

## 📮 Contact

- ✉️ ricklee1998@naver.com
- 📞 010-6289-2548
- 🐙 [github.com/ricklee1998](https://github.com/ricklee1998)

## 🧭 어떤 일을 해왔나요

- **페어리테일 · 티팟** (2025.12 ~) — AI 캐릭터 채팅 플랫폼 프론트엔드. 제작자 페이지 일반/전문가 모드 분리, 이미지 관리(폴더/일반 · List·Grid·Split · Drag&Drop), 체크포인트·자동저장·이탈 가드.
- **라이너스** (2025.03 ~ 12) — 대학 LMS(Kiwi Standard), LXP(Kiwi Pro), SK텔레콤 협력 T-Link. 프론트엔드 중심 + DB·일정·고객사 소통까지.
- **에피소든** (2021.03 ~ 2024.06) — 150개국 사용자 글로벌 WebRTC 영어 회화 매칭. 매칭 알고리즘 초기 설계(Stable Roommate 기반), 디바이스·MediaStream 통합 관리, 친구 시스템 재사용 컴포넌트화.

## 📁 이 저장소는

포트폴리오 사이트(Vite + React + TypeScript + Tailwind CSS v4)의 소스이자, 동일한 데이터로 만든 Marp 슬라이드(`deck/portfolio.pdf` · `deck/portfolio.pptx` · `deck/onepager.pdf`)를 함께 보관합니다.
실제 회사 코드는 포함되어 있지 않고, 경력기술서·자기소개·직접 큐레이션한 스크린샷·로고만 정리되어 있습니다.

## 🛠 로컬 실행

```bash
npm install
npm run dev          # http://localhost:5173/about-me/
npm run build        # 정적 빌드
npm run deck         # 슬라이드(PDF + PPTX) 동시 생성
npm run onepager     # 한 장짜리 요약 (PDF + PPTX)
```

GitHub Pages 배포는 `.github/workflows/deploy.yml`이 `main` 브랜치 push 시 자동으로 처리합니다.
Repository Settings → Pages → Source: **GitHub Actions**.
