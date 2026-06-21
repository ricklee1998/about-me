export type Company = '페어리테일' | '라이너스' | '에피소든' | '대학';

export type ProjectImage = {
  src: string;
  caption?: string;
  isPlaceholder?: boolean;
};

export type ProjectVideo = {
  src: string;
  caption?: string;
};

export type ProjectFeature = {
  title: string;
  body: string;
};

export type ProjectComparison = {
  topic: string;
  description?: string;
  before: { src: string; caption: string };
  after: { src: string; caption: string };
};

export type Project = {
  id: string;
  company: Company;
  title: string;
  period: string;
  site?: string;
  oneLine: string;
  role: string;
  overview: string;
  responsibilities: string[];
  achievements: string[];
  stack: string[];
  images: ProjectImage[];
  video?: ProjectVideo;
  features?: ProjectFeature[];
  comparisons?: ProjectComparison[];
  context?: string;
  note?: string;
};

export const companyOrder: Company[] = ['페어리테일', '라이너스', '에피소든', '대학'];

export const companyMeta: Record<Company, { period: string; oneLine: string }> = {
  페어리테일: {
    period: '2025.12 ~ 재직 중',
    oneLine: 'AI 캐릭터 채팅 플랫폼 티팟의 프론트엔드 고도화',
  },
  라이너스: {
    period: '2025.03 ~ 2025.12',
    oneLine: '대학 LMS·LXP 구축과 SK텔레콤 협력 T-Link 풀스택 개발',
  },
  에피소든: {
    period: '2021.03 ~ 2024.06',
    oneLine: '150개국 사용자가 이용하는 WebRTC 기반 글로벌 영상 커뮤니케이션',
  },
  대학: {
    period: '대학 재학 중',
    oneLine: '학부 시절 진행한 회의 솔루션 / 투표 시스템 프로젝트',
  },
};

export const projects: Project[] = [
  // ────────────────── 페어리테일 ──────────────────
  {
    id: 'teapot',
    company: '페어리테일',
    title: '티팟(Teapot) — AI 캐릭터 채팅 플랫폼',
    period: '2025.12 ~ 재직 중',
    site: 'https://teapotchat.com',
    oneLine: '제작자가 만드는 캐릭터, 사용자가 즐기는 대화 — LLM 기반 AI 캐릭터 채팅 플랫폼',
    role: 'Frontend (Next.js · TypeScript · GCP)',
    context:
      '티팟은 LLM 기반의 AI 캐릭터 채팅 플랫폼입니다. 타겟은 크게 두 축 — 제작자는 자신만의 캐릭터를 창조하고, 사용자는 그 캐릭터와의 대화에서 재미와 즐거움을 얻습니다. 성별·연령에 관계없이 다양한 결의 캐릭터가 공존하는 공간입니다. 저는 2025년 12월말부터 합류해 프론트엔드 전반의 리뉴얼 작업을 맡고 있습니다.',
    overview:
      '주로 다룬 영역은 검색·메인·제작자·채팅 내부 네 페이지입니다. 입사 직전 버전(25_)의 화면들은 정보가 빽빽하고 제작자가 거쳐야 할 단계가 많았는데, 저는 같은 기능을 유지하면서 사용자가 처음 만나도 막히지 않는 흐름으로 재설계하는 데 집중했습니다. 특히 제작자 페이지는 일반 모드와 전문가 모드로 분리해, 처음 만드는 사람과 능숙한 사람이 각자의 속도로 캐릭터를 만들 수 있게 했습니다 — 실제 제작자분들의 피드백도 매우 긍정적이었습니다.',
    features: [
      {
        title: '검색 · 메인 — 탐색 흐름 재설계',
        body:
          '검색에 필터를 강화하고, 메인은 사용자가 다음에 무엇을 봐야 할지 자연스럽게 이어지는 동선으로 다시 짰습니다.',
      },
      {
        title: '제작자 페이지 — 일반/전문가 모드',
        body:
          '입사 전 버전은 선택지·단계가 너무 많아 진입 장벽이 높았습니다. 저는 이를 일반(simple) 모드와 전문가(detail) 모드로 나눴습니다. 일반 모드는 처음 만드는 사람용 간결한 섹션, 전문가 모드는 템플릿 섹션 reorder·잠금해제 편집·Jinja2 렌더 기반 길이 계산을 제공합니다. 같은 제품이 사용자 숙련도에 맞춰 다른 얼굴을 보여주도록 만들었습니다.',
      },
      {
        title: '캐릭터 제작 — 이미지 관리',
        body:
          '캐릭터 이미지를 자유롭게 정리할 수 있도록 두 가지 보관 타입(폴더 / 일반)과 세 가지 뷰(List · Grid · Split)를 모두 지원합니다. Drag & Drop으로 폴더 합치기, 이미지 합치기, 폴더 해제까지 자연스럽게 수행할 수 있어, 수십 장의 캐릭터·상황 이미지를 직접 다루는 제작자가 자기 방식대로 정리할 수 있도록 만들었습니다.',
      },
      {
        title: '캐릭터 제작 — 안전한 작성 흐름',
        body:
          '드래프트와 체크포인트 기반 버전 관리(최대 50개) 위에서 동작합니다. 10분 주기 자동저장, 등록 완료된 체크포인트는 덮어쓰기 금지(새 체크포인트 생성), 작성 도중 새로고침·뒤로가기 시 이탈 가드 다이얼로그, 프롬프트 진행률 기준 30,000자 한도 체크 — "작성하던 게 날아간다"는 사고를 구조적으로 막는 흐름을 짰습니다.',
      },
      {
        title: '채팅 내부 — 모델·뷰어·캡처',
        body:
          '대화를 풍부하게 만드는 UI 기능에 집중했습니다. 모델 선택, 뷰어 설정(2종), 대화 캡처·편집 모달 등을 추가·재구성해, 같은 대화도 사용자가 원하는 방식으로 다듬을 수 있게 했습니다.',
      },
      {
        title: '운영 · 부가 기능 전반',
        body:
          '나의 채팅방 목록 관리, 제작자 팔로우 페이지, 출석체크, 페르소나·유저노트, 마일스톤·리워드, 빌링·온보딩·PWA 등 — 사용자가 자주 돌아올 이유를 만드는 주변 화면들까지 폭넓게 정리했습니다.',
      },
    ],
    responsibilities: [
      'Next.js·TypeScript 기반 검색·메인·제작자·채팅 등 주요 페이지 전면 리뉴얼',
      '제작자 페이지 — 일반(simple) / 전문가(detail) 모드 분리, 단계 축소, 진입 장벽 완화',
      '캐릭터 제작 — 이미지 관리(폴더/일반 타입 · List·Grid·Split 뷰 · Drag&Drop 폴더 합치기·이미지 합치기·폴더 해제) 설계·구현',
      '캐릭터 제작 — 드래프트·체크포인트 기반 버전 관리(최대 50개), 10분 주기 자동저장, 작성 중 이탈 가드, 30,000자 진행률 측정',
      '전문가 모드 detail 프롬프트 — Jinja2(nunjucks) 기반 템플릿 섹션 reorder·렌더, 컨텍스트(`character.*` 등) 정합',
      '채팅 내부 UI 고도화 — 모델 선택, 뷰어 설정(2종), 대화 캡처·편집 모달',
      '나의 채팅방 목록 관리, 제작자 팔로우, 출석체크, 페르소나·유저노트, 마일스톤·리워드, 빌링·온보딩 등 부가 화면 정리',
      'LLM 응답·장기/단기 메모리·GCP Function Call·Firestore 데이터 흐름 연결, base64 이미지 업로드 후 URL 치환 파이프라인',
      '디자인 시스템·공통 컴포넌트 구축, PWA·모바일 사용성·이미지 로딩 최적화',
    ],
    achievements: [
      '제작자 페이지 일반/전문가 모드 분리로 신규 제작자의 진입 장벽을 크게 낮춤 — 실제 제작자 피드백 매우 긍정적',
      '캐릭터 제작 이미지 관리에 — 폴더/일반 타입, List·Grid·Split 뷰, Drag&Drop 합치기/해제까지 도입해 수십 장의 이미지를 다루는 제작자의 정리 흐름을 제품 안에서 완결',
      '체크포인트·자동저장·이탈 가드를 묶어 "작성하던 게 날아간다"는 사고를 구조적으로 차단',
      '검색·메인·채팅의 정보 밀도와 동선을 재정리해 사용자 탐색·대화 경험을 일관성 있게 정돈',
      '대화 캡처/공유, 모델 선택, 뷰어 설정 등 채팅 내부 UI 기능 다각화로 같은 대화도 사용자별 취향에 맞게 다듬을 수 있도록 확장',
      '주요 화면 리팩토링·이미지 최적화로 초기 로딩과 렌더링 성능 개선',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Python', 'GCP', 'Firestore', 'Jinja2', 'PWA'],
    comparisons: [
      {
        topic: '메인 페이지',
        description: '정보 밀도와 다음 액션의 우선순위를 다시 정렬',
        before: { src: '/assets/teapot/before/01.png', caption: '입사 전(25) — 메인' },
        after: { src: '/assets/teapot/after/01.png', caption: '리뉴얼 후(26) — 메인' },
      },
      {
        topic: '검색 페이지',
        description: '필터와 결과 카드의 시각 위계를 정리해 탐색 효율을 끌어올림',
        before: { src: '/assets/teapot/before/02.png', caption: '입사 전(25) — 검색' },
        after: { src: '/assets/teapot/after/02.png', caption: '리뉴얼 후(26) — 검색' },
      },
      {
        topic: '채팅 내부 페이지',
        description: '대화 가독성과 액션 배치를 재정렬, 모델 선택·뷰어·캡처 등 새 기능 확장의 토대',
        before: { src: '/assets/teapot/before/03.png', caption: '입사 전(25) — 채팅' },
        after: { src: '/assets/teapot/after/04.png', caption: '리뉴얼 후(26) — 채팅' },
      },
      {
        topic: '채팅 — 뷰어 설정',
        description: '한 화면에 묶여 있던 옵션을 사용 빈도·맥락에 따라 분리',
        before: { src: '/assets/teapot/before/04.png', caption: '입사 전(25) — 뷰어 설정' },
        after: { src: '/assets/teapot/after/06.png', caption: '리뉴얼 후(26) — 뷰어 설정' },
      },
      {
        topic: '제작자 페이지 — 일반/전문가 모드 분리',
        description: '선택지와 단계가 과도하게 많던 구조를 일반/전문가 모드로 갈라, 진입 장벽과 숙련자 효율을 동시에 잡음',
        before: { src: '/assets/teapot/before/05.png', caption: '입사 전(25) — 제작자 페이지' },
        after: { src: '/assets/teapot/after/13.png', caption: '리뉴얼 후(26) — 캐릭터 제작 시작 단계' },
      },
      {
        topic: '출석체크',
        description: '레이아웃과 보상 흐름을 한 화면에 정돈',
        before: { src: '/assets/teapot/before/08.png', caption: '입사 전(25) — 출석체크' },
        after: { src: '/assets/teapot/after/12.png', caption: '리뉴얼 후(26) — 출석체크' },
      },
    ],
    images: [
      { src: '/assets/teapot/after/01.png', caption: '메인 페이지' },
      { src: '/assets/teapot/logo.svg', caption: '티팟 로고' },
      { src: '/assets/teapot/after/03.png', caption: '검색 — 필터' },
      { src: '/assets/teapot/after/05.png', caption: '채팅 — 모델 선택' },
      { src: '/assets/teapot/after/07.png', caption: '채팅 — 뷰어 설정 (상세)' },
      { src: '/assets/teapot/after/08.png', caption: '채팅 — 대화 캡처 기능' },
      { src: '/assets/teapot/after/09.png', caption: '채팅 — 대화 캡처 편집 모달' },
      { src: '/assets/teapot/after/10.png', caption: '나의 채팅방 목록 관리' },
      { src: '/assets/teapot/after/11.png', caption: '제작자 팔로우 페이지' },
      { src: '/assets/teapot/after/14.png', caption: '캐릭터 제작 — 설명 단계' },
      { src: '/assets/teapot/after/15.png', caption: '캐릭터 제작 — 프롬프트' },
      { src: '/assets/teapot/after/16.png', caption: '캐릭터 제작 — 이미지 관리(Grid 뷰)' },
      { src: '/assets/teapot/after/17.png', caption: '캐릭터 제작 — 이미지 관리(List 뷰)' },
      { src: '/assets/teapot/after/18.png', caption: '캐릭터 제작 — 저장 목록' },
      { src: '/assets/teapot/after/19.png', caption: '캐릭터 제작 — 등록' },
    ],
  },

  // ────────────────── 라이너스 ──────────────────
  {
    id: 'kiwi-lxp',
    company: '라이너스',
    title: 'Kiwi Pro LXP — 차세대 학습 경험 플랫폼',
    period: '2025.09 ~ 2025.12',
    oneLine: 'LMS를 한 단계 끌어올린 LXP — 러닝 저널·퍼스널 그룹·미팅 허브로 학습 경험을 재설계',
    role: 'Frontend Lead (Next.js · TypeScript · Spring Boot · AI Chatbot)',
    context:
      '첫 LXP 발주처(국내 한 종합대학)로 시작한 프로젝트입니다. 기존 LMS의 강의·과제 흐름을 넘어 학습 경험 자체를 지원하는 차세대 플랫폼을 새로 설계했습니다.',
    overview:
      '기존 LMS가 강의·과제 관리에 머무른다면, LXP는 학생의 학습 경험과 성장 그 자체를 다룹니다. Zoom·Panopto·Slack 등 외부 CMS와의 연동, 학기 흐름을 단계별로 끌어가는 러닝 저널, 학생 커뮤니티를 위한 퍼스널 그룹, 온·오프라인 수업을 한 곳에서 다루는 미팅 허브까지 — 네 가지 축을 중심으로 프론트엔드를 설계했습니다.',
    features: [
      {
        title: 'Learning Journal',
        body:
          '교수가 학기 중 단계별로 과제·퀴즈를 출제하고, 학생이 제출하면 교수가 채점·피드백을 남기며 학생이 단계적으로 성장하도록 돕는 학습 일지. 한 학기의 성장 곡선을 한눈에 추적할 수 있도록 UI를 설계했습니다.',
      },
      {
        title: 'Personal Group',
        body:
          '학생 주도의 커뮤니티 공간. 동아리·스터디·단체 활동 그룹을 자유롭게 만들 수 있으며, 공개형·비공개형 그룹을 지원합니다. LMS가 다루지 못하던 학생들 사이의 자율적 학습 경험을 플랫폼으로 끌어들였습니다.',
      },
      {
        title: 'Meeting Hub',
        body:
          '온라인 수업(Live·Video)과 오프라인 수업 공지를 한 화면에 모은 통합 강의 허브. 교수자는 형태에 관계없이 한 곳에서 수업을 운영하고, 학생은 다음에 무엇을 들어야 할지 한 번에 파악할 수 있습니다.',
      },
      {
        title: 'CMS · 협업 도구 연동',
        body:
          'Zoom·Panopto·Slack과 직접 연동되어 화상 수업·강의 녹화·팀 채팅이 LXP 안에서 끊김 없이 이어집니다. AI 챗봇(솔트룩스 루시아)을 함께 붙여 학습 지원도 강화했습니다.',
      },
    ],
    responsibilities: [
      'Next.js·TypeScript 기반 LXP 프론트엔드 리딩 — 로그인·메인·달력·러닝 저널·퍼스널 그룹·미팅 허브·관리자 권한 세팅 등 핵심 화면 전반 구현',
      'Zoom·Panopto·Slack 등 외부 서비스와의 프론트엔드 연동',
      '솔트룩스 루시아 AI 챗봇 인터페이스 구현 (사용자 입력 ↔ 모델 응답 흐름)',
      'Kiwi Standard(LMS)와 Kiwi Pro(LXP) 간 공통 데이터 구조 설계 — 두 제품이 같은 학사 데이터를 공유',
      '교수·학생·관리자 등 역할별 권한 분기 UI 설계',
      '반복 릴리즈·운영 이슈 대응, CI/CD 기반 배포 운영',
    ],
    achievements: [
      'LMS ↔ LXP 데이터 연계 구조 구축 — 두 제품이 서로의 학사 데이터를 단절 없이 사용',
      '러닝 저널·퍼스널 그룹·미팅 허브 3축으로 "LMS에서 LXP로"의 제품 정체성을 화면 단위까지 일관되게 구현',
      'Zoom·Panopto·Slack 등 외부 도구를 플랫폼 안으로 통합해 학습·협업 흐름을 한 곳에서 처리',
      '학생 자율 커뮤니티(Personal Group)를 도입해 학습이 강의 시간에만 갇히지 않도록 확장',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Spring Boot',
      'PostgreSQL',
      'Zoom',
      'Panopto',
      'Slack',
      'AI Chatbot',
    ],
    images: [
      { src: '/assets/linus/kiwi-lxp/02.png', caption: '메인 — 학기 흐름과 다음 액션을 한눈에' },
      { src: '/assets/linus/kiwi-lxp/01.png', caption: '로그인 — 학교별 SSO와 통합' },
      { src: '/assets/linus/kiwi-lxp/03.png', caption: '캘린더 — 강의·과제·미팅을 통합 뷰로' },
      { src: '/assets/linus/kiwi-lxp/04.png', caption: 'Learning Journal — 교수가 단계별로 끌어가는 학습 일지' },
      { src: '/assets/linus/kiwi-lxp/05.png', caption: 'Personal Group — 학생 자율 커뮤니티 공간' },
      { src: '/assets/linus/kiwi-lxp/06.png', caption: 'Meeting Hub — 온·오프라인 수업을 한 화면에' },
      { src: '/assets/linus/kiwi-lxp/07.png', caption: '관리자 — 역할·권한 세팅 화면' },
    ],
  },
  {
    id: 'tlink',
    company: '라이너스',
    title: 'T-Link — SK텔레콤 다이얼 링크 기반 단축 진입 서비스',
    period: '2025.08 ~ 2025.11',
    site: 'https://skttlink.com',
    oneLine: '*(별) + 단축번호 발신만으로 기업·이벤트 페이지에 바로 진입하는 SKT 전용 채널',
    role: 'Full-stack (Next.js · Nest.js · React + Vite · MySQL)',
    context:
      '다이얼 링크(Dial Link) — 번호와 *(별)을 함께 발신하면 SKT 무선망에서 모바일 웹으로 연결되는 SKT 고유 기능. T-Link는 이 다이얼 링크 위에서 동작하는 단축 진입 채널로, 기업·이벤트 주최자가 자기 전용 단축번호를 구매하면 사용자가 *(별) + 단축번호만 누르고 발신해서 곧바로 해당 페이지에 진입할 수 있습니다. (SKT 가입자 전용. iPhone은 다이얼 링크에서 보낸 문자를 클릭해 접속, 최초 1회 이용 동의 필요)',
    overview:
      'SK텔레콤과 직접 소통하며 백엔드·프론트엔드·어드민까지 풀스택으로 구축했습니다. 운영자가 단축번호를 구매·관리하고 콘텐츠를 등록하면, 사용자는 단축번호 한 번으로 기업 페이지·이벤트 페이지·SKT 멤버 전용 혜택까지 바로 도달합니다.',
    features: [
      {
        title: '단축번호 → 페이지 동적 라우팅',
        body:
          '구매된 단축번호에 따라 기업 페이지·이벤트 페이지·외부 링크 등 어디로 보낼지 동적으로 결정되는 라우팅 구조. 잘못된 입력·만료된 번호·외부 연동 오류에 대한 예외 처리까지 포함합니다.',
      },
      {
        title: '운영자 어드민',
        body:
          '단축번호·콘텐츠·회원 전용 페이지를 관리하는 어드민. 콘텐츠 등록부터 노출 일정·이벤트 관리까지 한 곳에서 운영할 수 있도록 설계했습니다.',
      },
      {
        title: 'SKT 멤버 전용 혜택 페이지',
        body:
          '예: 대학로 연극 티켓 단축번호로 진입하면 SKT 멤버 대상 할인 페이지가 노출되는 식. 회원 인증·혜택 노출 로직을 페이지 단위로 구성했습니다.',
      },
    ],
    responsibilities: [
      'Next.js 기반 사용자용 프론트엔드, Nest.js 기반 백엔드, React+Vite 기반 어드민까지 풀스택 개발',
      'SK텔레콤 담당자와 직접 소통하며 다이얼 링크 동작 명세·라우팅 정책을 기능으로 구체화',
      '단축번호 입력 → 페이지 매핑의 동적 라우팅 구조 설계',
      '외부 서비스 링크 통합 관리, 회원 전용 페이지·콘텐츠 운영 구조 개발',
      '할인·이벤트 콘텐츠 화면 구현, API 설계·입력값 검증·예외 처리',
      '다양한 입력 패턴, iOS/Android 디바이스, SKT 망 환경 테스트',
    ],
    achievements: [
      '서로 다른 외부 서비스를 *(별) + 단축번호 하나로 통합한 진입 채널 구축',
      '다이얼 한 번으로 원하는 페이지에 도달하는 — 통신사 인프라와 모바일 웹을 잇는 사용자 경험 확보',
      '회원 전용 혜택을 단축번호 단위로 노출할 수 있는 운영 기반 마련',
      '잘못된 입력·만료된 번호·외부 연동 오류까지 안정적으로 처리하는 예외 흐름 구현',
      'SKT 직원과의 지속적 협업으로 통신사 요건을 빠르게 반영',
    ],
    stack: ['Next.js', 'TypeScript', 'Nest.js', 'React', 'Vite', 'Tailwind CSS', 'MySQL'],
    images: [
      { src: '/assets/linus/tlink-primary.png', caption: 'T-Link 로고' },
      { src: '/assets/linus/tlink/01.png', caption: '메인 — 상단 (단축번호 진입 UX)' },
      { src: '/assets/linus/tlink/02.png', caption: '메인 — 하단 (이벤트·혜택 콘텐츠)' },
      { src: '/assets/linus/tlink/03.png', caption: '서비스 설명 페이지 — 다이얼 링크 사용법 안내' },
    ],
  },
  {
    id: 'kiwi-lms',
    company: '라이너스',
    title: 'Kiwi Standard — 대학 LMS 구축·운영',
    period: '2025.03 ~ 2025.09',
    oneLine: '모 대학 발주처 LMS — 프론트엔드 중심, DB 설계·일정·고객사 소통까지 함께',
    role: 'Frontend(주) · Backend·DB 일부 · Project Coordination',
    context:
      '모 대학교 발주처의 LMS 구축 프로젝트로 진행됐습니다. 저는 앞단(프론트엔드) 비중이 높았고, 그 위에 일부 백엔드/DB 설계, 일정 관리, 교수진·행정 직원 등 학교 담당자와의 소통까지 함께 맡았습니다.',
    overview:
      '학생·교수·관리자 세 역할을 모두 다루는 학사 시스템이라, 화면 종류가 많고 각 역할이 기대하는 동선이 다릅니다. 같은 "강의 목록"이라도 학생·교수·관리자에게 보여야 할 정보와 액션이 전혀 다르고, 학교마다 요구도 미묘하게 다릅니다. 프론트엔드를 중심으로 이 다양성을 흡수하면서, 동시에 DB 구조와 일정을 흔들리지 않게 유지하는 데 집중했습니다.',
    features: [
      {
        title: '역할별 대시보드 (학생 · 교수 · 관리자)',
        body:
          '학생은 오늘 해야 할 학습을, 교수는 강의·학생 현황을, 관리자는 과목·유저 운영을 한눈에 본다는 — 같은 데이터를 세 가지 시점으로 풀어낸 대시보드 군. 교수 대시보드는 학교 요구에 따른 커스텀 버전까지 함께 운영합니다.',
      },
      {
        title: '강의 운영 흐름 (강의 목록 / 현황 / 학생 성적)',
        body:
          '교수가 한 학기 동안 자기 강의를 끌어가는 핵심 동선. 강의 목록·진행 현황·학생 성적 페이지를 일관된 정보 구조로 묶어, 다른 화면이라도 같은 멘탈 모델로 이동할 수 있도록 설계했습니다.',
      },
      {
        title: '학사 캘린더 + 일정 추가',
        body:
          '강의·과제·시험 등 학사 일정을 통합한 캘린더와, 권한별로 일정을 직접 추가할 수 있는 폼. 학교 운영 일정과 학생 개인 학습 일정이 자연스럽게 겹쳐 보이도록 구성했습니다.',
      },
      {
        title: '관리자 운영 페이지 (과목 · 유저)',
        body:
          '행정 담당자가 사용하는 운영 영역. 학기 개설·유저 권한·계정 관리 등 LMS의 모든 운영 액션이 시작되는 곳으로, 안정성과 실수 방지(되돌릴 수 없는 액션의 확인 흐름)를 우선했습니다.',
      },
      {
        title: 'FAQ · 도움말',
        body:
          '교수·행정 담당자 응대에서 반복되는 질문을 정리해 FAQ에 녹였습니다. 현장에서 들었던 표현을 그대로 문항으로 옮겨, 사용자의 검색어와 답이 더 잘 만나도록 했습니다.',
      },
    ],
    responsibilities: [
      'Next.js·TypeScript 기반 프론트엔드 전반 — 로그인·대시보드·강의·캘린더·관리자·FAQ 등 핵심 화면',
      '역할별(학생·교수·관리자) UI/UX 분기와 공통 컴포넌트 설계',
      '일부 백엔드 작업 + 프론트와 직접 맞닿는 DB 스키마·관계 설계 참여',
      '프로젝트 일정·우선순위·리스크·릴리즈 관리',
      '교수진·행정 담당자 등 학교 측 이해관계자와의 직접 커뮤니케이션 — 요구사항을 기능으로 구체화',
      'Feature Cut 결정: 일정 안에 들어갈 기능과 다음 릴리즈로 미룰 기능을 협의로 정리',
    ],
    achievements: [
      '학생·교수·관리자 세 역할이 같은 학사 데이터를 다른 시점으로 보는 일관된 정보 구조 구축',
      '교수 대시보드 커스텀 버전을 별도 옵션으로 운영해, 학교별 요구를 본체에 흡수하지 않고 깔끔하게 분리',
      '학교 현장 담당자와의 소통을 통해 문서가 아니라 실제 운영의 언어로 요구사항을 정리한 경험',
      '앞단 중심이지만 DB·일정·고객사 소통까지 닿는 — 풀스택 시야로 프로젝트를 운영',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Java',
      'Spring Boot',
      'PostgreSQL',
      'MySQL',
      'SAML SSO',
    ],
    images: [
      { src: '/assets/linus/kiwi-lms/01.png', caption: '로그인' },
      { src: '/assets/linus/kiwi-lms/02.png', caption: '학생 대시보드 — 오늘 해야 할 학습 한눈에' },
      { src: '/assets/linus/kiwi-lms/03.png', caption: '교수 대시보드 — 강의·학생 현황' },
      { src: '/assets/linus/kiwi-lms/04.png', caption: '교수 대시보드 — 학교 요구별 커스텀 버전' },
      { src: '/assets/linus/kiwi-lms/05.png', caption: '교수 — 강의 목록' },
      { src: '/assets/linus/kiwi-lms/06.png', caption: '교수 — 강의 목록' },
      { src: '/assets/linus/kiwi-lms/07.png', caption: '교수 — 강의 현황' },
      { src: '/assets/linus/kiwi-lms/08.png', caption: '교수 — 강의 현황' },
      { src: '/assets/linus/kiwi-lms/09.png', caption: '교수 — 학생 성적 페이지' },
      { src: '/assets/linus/kiwi-lms/10.png', caption: '학사 캘린더' },
      { src: '/assets/linus/kiwi-lms/11.png', caption: '캘린더 — 일정 추가' },
      { src: '/assets/linus/kiwi-lms/12.png', caption: '관리자 — 과목 관리' },
      { src: '/assets/linus/kiwi-lms/13.png', caption: '관리자 — 유저 관리' },
      { src: '/assets/linus/kiwi-lms/14.png', caption: 'FAQ 페이지' },
    ],
    note: '일부 정보는 마스킹 처리 후 게재했습니다.',
  },

  // ────────────────── 에피소든 ──────────────────
  {
    id: 'ep-25',
    company: '에피소든',
    title: 'Episoden 2.5 — WebRTC 기반 글로벌 영어 회화 매칭',
    period: '2022.11 ~ 2024.06',
    oneLine: '7분 동안 5~7명을 만나는 1:1 영어 회화 — 매칭 알고리즘·미디어 스트림·친구 시스템을 함께 설계',
    role: 'Frontend · Media Stream · User Data Analysis · 매칭 알고리즘 초기 설계',
    context:
      '에피소든은 가입 직후 인터뷰 룸에서 프리랜서 직원과 1~3분 영어 대화로 기본 실력을 인증해야 진입할 수 있는, 영어 회화 중심의 글로벌 실시간 영상 서비스입니다. 본 서비스에서는 약 7분 동안 1:1로 5~7명을 만나고, 연결이 끊겨도 1분 내에 새로운 상대를 만납니다. 매칭이 실패하면 최대 6명까지 들어올 수 있는 호스트 룸(n:n 다인방)으로 fallback됩니다. 저는 이 흐름의 프론트엔드, 미디어 스트림 구조, 그리고 매칭 알고리즘의 초기 설계까지 함께 맡았습니다.',
    overview:
      'WebRTC·Janus·TURN을 기반으로, 다양한 기기와 네트워크 환경에서 매칭→통화→재매칭이 매끄럽게 이어지도록 프론트엔드 구조와 미디어 파이프라인을 끌어올렸습니다. 또한 사용자 데이터 추출·분석을 직접 수행하며 KPI를 끌어올리는 사이클에 기여했고, "같은 사람이 너무 자주 매칭되지 않으면서도 마음에 든 상대는 다시 만날 수 있는" 매칭 정책을 알고리즘 수준에서 설계했습니다.',
    features: [
      {
        title: 'Interview Room — 진입 인증',
        body:
          '가입 직후 프리랜서 직원과 1~3분 영어 대화로 기본 실력을 확인. 매칭 품질의 하한선을 처음부터 보장하는 게이트.',
      },
      {
        title: '본 서비스 — 7분, 5~7명 1:1',
        body:
          '약 7분 동안 1:1로 5~7명과 빠르게 회화. 연결이 끊겨도 약 1분 안에 새 상대를 만나도록 매칭/복구 흐름을 설계했습니다.',
      },
      {
        title: 'Host Room (n:n, 최대 6명)',
        body:
          '매칭 실패 시 fallback. 최대 6명이 함께 들어오는 다인방으로, 1:1을 잡지 못하는 시간대에도 사용자가 빈손으로 돌아가지 않도록 안전망 역할을 합니다. 웹·모바일 모두 동일한 경험으로 동작합니다.',
      },
      {
        title: '매칭 알고리즘 — Stable Roommate 기반',
        body:
          '초기 알고리즘을 직접 설계. Stable Roommate 알고리즘 위에 같은 사람과의 반복 매칭을 억제하는 정책, 그리고 친구 추가된 상대를 "한 번 더 만나기"로 이어주는 보상 흐름을 얹었습니다. "이 사람 수준이 높다 / 또 만나고 싶다 / 만나고 싶지 않다"와 같은 사용자 시그널이 누적되어 다음 매칭에 반영됩니다.',
      },
      {
        title: '친구 시스템 — Best · Worst · 매칭 기록',
        body:
          '베스트 프렌즈·월스트 프렌즈·매칭 히스토리 등 원래 따로따로 구현되던 친구 관련 화면을 단일 재사용 컴포넌트로 묶어, 데이터 종류만 바꾸면 동일한 UX·동작·정렬을 그대로 적용할 수 있게 정리했습니다.',
      },
      {
        title: '미디어 스트림 · 디바이스 통합 관리',
        body:
          '마이크·카메라·스피커 등 디바이스 input/output 설정과 PeerConnection의 MediaStream을 — 화면마다 따로 잡지 않고 하나의 Context·단일 Stream으로 일관 관리. 캡처·녹화 기능도 이 통합 스트림 위에 얹어 화질·성능을 안정적으로 확보했습니다.',
      },
    ],
    responsibilities: [
      '매칭 알고리즘 초기 설계 — Stable Roommate 기반 정책 + 사용자 시그널 반영 흐름',
      'WebRTC·Janus·TURN 기반 미디어 통신 구조 분석 및 고도화',
      '디바이스(input/output)와 MediaStream을 Context·단일 스트림으로 통합 관리하는 프론트엔드 구조 설계',
      '캡처/녹화 기능 개발 — 통합 스트림 위에서 일관되게 동작',
      '친구 시스템(Best Friends · Worst Friends · 매칭 히스토리)을 단일 재사용 컴포넌트로 통합',
      'Web·React Native 앱 간 상태 동기화 및 공통 로직 구축',
      '연결 실패·장치 인식·네트워크 변경 등 통신 예외 처리',
      '브라우저·OS별 호환성 테스트, Grafana·Kibana·CloudWatch 기반 장애 분석',
      '사용자 데이터 추출·분석으로 KPI 측정·개선 사이클 운영',
    ],
    achievements: [
      '매칭 알고리즘 초기 설계로 — 반복 매칭은 줄이고 친구·호감 시그널은 다음 매칭에 반영되는 정책 도입',
      '디바이스·미디어 스트림 통합 관리 구조로 화면마다 흩어져 있던 코드 중복·관리 복잡도를 크게 감소',
      '친구 기능 재사용 컴포넌트화로 베스트/월스트 프렌즈/매칭 히스토리 — 모든 친구 관련 화면이 동일한 UX·동작 보장',
      '연결 상태 동기화·재연결 로직 개선으로 끊김 1분 내 재매칭이라는 핵심 약속을 안정화',
      '데이터 분석 기반 의사결정으로 주간 주요 KPI 평균 10~15% 상승에 기여',
      '150개국 이상 사용자가 이용하는 글로벌 실시간 서비스 운영 경험 확보',
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'WebRTC',
      'Janus',
      'TURN',
      'React Native',
      'Firebase',
      'AWS CloudWatch',
      'Grafana',
      'Kibana',
    ],
    images: [
      { src: '/assets/episoden/2026/01.png', caption: '메인 페이지' },
      { src: '/assets/episoden/2026/02.png', caption: '회원가입 — 인터뷰 룸 진입 전 단계' },
      { src: '/assets/episoden/2026/03.png', caption: '매칭 세팅' },
      { src: '/assets/episoden/2026/04.png', caption: '1:1 대화방' },
      { src: '/assets/episoden/2026/05.png', caption: '대화 주제 미리보기' },
      { src: '/assets/episoden/2026/06.png', caption: '친구와 대화하기' },
      { src: '/assets/episoden/2026/07.png', caption: '친구 대화 — 한 번 더 하기 기능' },
      { src: '/assets/episoden/2026/08.png', caption: '호스트 룸 (n:n 다인방)' },
      { src: '/assets/episoden/2026/09.png', caption: '호스트 룸 — 모바일 버전' },
      { src: '/assets/episoden/2026/10.png', caption: '매칭 기록' },
      { src: '/assets/episoden/2026/11.png', caption: '마이페이지 — 친구 창' },
      { src: '/assets/episoden/2026/12.png', caption: '초대 페이지' },
      { src: '/assets/episoden/kpi.png', caption: '주간 KPI 그래프 — 당시 기여 구간 평균 10~15% 상승' },
      { src: '/assets/episoden/kdb-award.jpg', caption: 'KDB Startup 2022 우수상' },
    ],
    note: '퇴사 이후 서비스가 변경·운영됐을 수 있어, 현재 사이트와 당시 기여 화면이 다를 수 있습니다.',
  },
  {
    id: 'ep-20',
    company: '에피소든',
    title: 'Episoden 2.0 — Next.js 전환과 글로벌 확장',
    period: '2022.02 ~ 2022.10',
    oneLine: 'Next.js·i18n·실시간 채팅·SEO 기반 글로벌 사용자 확보',
    role: 'Frontend (Next.js · Socket.io)',
    overview:
      'Next.js 기반으로 사용자 서비스를 재구축하고, 실시간 채팅·다국어·SEO·성능을 중심으로 고도화했습니다.',
    responsibilities: [
      'Next.js 기반 사용자 서비스 개발 및 화면 고도화',
      'Socket 기반 실시간 채팅 기능 개발',
      '사용자 인증·소셜 로그인·결제 기능 개선',
      '다국어 처리를 위한 i18n 적용, SEO·접근성 개선',
      'Lighthouse 기반 초기 로딩·웹 성능 개선',
    ],
    achievements: [
      '실시간 채팅·사용자 상태 동기화 구조 안정화',
      '다국어·SEO 개선으로 글로벌 사용자 접근성 향상',
      '로딩·렌더링 구조 개선으로 체감 성능 향상',
      '결제·인증·콘텐츠 흐름 개선으로 주요 사용자 경험 고도화',
    ],
    stack: ['Next.js', 'TypeScript', 'Socket.io', 'i18n'],
    images: [
      { src: '/assets/episoden/2022_01.png', caption: '2022.01 — 2.0 운영기' },
      { src: '/assets/episoden/2022_09.png', caption: '2022.09 — 2.0 운영기' },
    ],
    note: '퇴사 이후 서비스가 변경·운영됐을 수 있어, 현재 사이트와 당시 기여 화면이 다를 수 있습니다.',
  },
  {
    id: 'ep-10',
    company: '에피소든',
    title: 'Episoden 1.0 — Vue.js 초기 웹·어드민 구축',
    period: '2021.03 ~ 2022.01',
    oneLine: 'Vue.js 기반 웹/어드민, 결제·콘텐츠·운영 기반 구축',
    role: 'Frontend (Vue.js)',
    overview:
      'Vue.js 기반 웹 서비스와 관리자 페이지를 구축하고, 사용자/콘텐츠/결제/운영 데이터의 첫 흐름을 만들었습니다.',
    responsibilities: [
      'Vue.js 기반 웹 서비스 및 관리자 페이지 개발',
      '사용자·콘텐츠·게시판·결제 관련 기능 구현',
      'REST API 연동, SQL 기반 사용자/운영 데이터 추출',
      'AWS CloudWatch 기반 로그 모니터링, JMeter 부하·성능 테스트',
      '검색 유입을 고려한 게시판·콘텐츠 구조 개발',
    ],
    achievements: [
      '사용자·운영자 관리 기능을 포함한 초기 어드민 시스템 구축',
      '서비스 운영에 필요한 사용자·결제·콘텐츠 관리 기반 마련',
      '로그 모니터링으로 장애 원인을 빠르게 확인할 수 있는 운영 환경 구축',
      '트래픽 증가 상황의 병목 구간을 확인하고 서비스 안정성 개선',
      'SEO를 고려한 콘텐츠 기능으로 서비스 유입 기반 확보',
    ],
    stack: ['Vue.js', 'JavaScript', 'AWS CloudWatch', 'JMeter', 'SQL'],
    images: [
      { src: '/assets/episoden/2021-11.png', caption: '2021.11 — 1.0 운영기' },
      { src: '/assets/episoden/2021_12.png', caption: '2021.12 — 1.0 운영기' },
    ],
    note: '퇴사 이후 서비스가 변경·운영됐을 수 있어, 현재 사이트와 당시 기여 화면이 다를 수 있습니다.',
  },

  // ────────────────── 대학 ──────────────────
  {
    id: 'cocomeet',
    company: '대학',
    title: 'CoCoMeet — 실시간 협업 회의 보드',
    period: '대학 · 소프트웨어공학 팀 프로젝트 (Team #7, 5인)',
    oneLine: '채팅 말풍선이 곧 회의록 블록이 되는 — 트리 구조 실시간 회의 보조 플랫폼',
    role: 'Frontend (React · Tailwind CSS · Socket.io)',
    context:
      '"회의 내용을 실시간으로 도식화해 주는 플랫폼은 의외로 없다"는 문제 의식에서 출발했습니다. Zoom·Google Meet은 회의를, 카카오톡·LINE은 채팅을, Trello는 정리를 다루지만 — 회의 도중 오가는 아이디어를 시각화·구조화해 잡아두는 도구는 부재했습니다. CoCoMeet은 이 빈틈을 채우기 위한 회의 보조 플랫폼입니다.',
    overview:
      '회의 참여자들이 실시간으로 주제·아이디어를 트리 구조로 시각화하며 정리하는 협업 플랫폼입니다. 채팅 말풍선을 클릭 한 번에 보드 블록으로 전환하고, 여러 사용자가 동시에 같은 보드를 편집하며, 결과는 회의록 PDF로 자동 정리합니다. RDBMS 대신 Redis를 사용해 실시간 동기화 성능을 확보했습니다.',
    features: [
      {
        title: '채팅 ↔ 보드 변환',
        body:
          '채팅에서 흘러가던 말풍선을 클릭하면 즉시 보드의 블록으로 옮겨집니다. "정리하느라 회의 흐름을 끊는" 문제를 없애는 게 핵심 가치였습니다.',
      },
      {
        title: '트리 구조 보드 + 동시 편집',
        body:
          'react-sortable-tree·react-dnd 기반의 트리 보드. 여러 사용자가 서로 다른 트리에서 동시에 작업하고, 트리 간 블록 이동까지 지원합니다. (요구사항을 초과 구현)',
      },
      {
        title: 'PDF 회의록 자동 생성',
        body:
          '회의가 끝나면 @react-pdf/renderer 로 회의록 형식의 PDF를 한 번에 내보낼 수 있습니다. 트리별로 별도 PDF 추출 가능.',
      },
      {
        title: 'Redis Pub/Sub 실시간 동기화',
        body:
          'Redis를 메인 저장소로 사용하고 Pub/Sub으로 콜백 결과를 전파해, 모든 참가자의 화면이 즉시 동기화되도록 구현했습니다.',
      },
    ],
    responsibilities: [
      '프론트엔드 전반 개발 — Main / Chat / Board / Tool Box 컴포넌트 구조 설계',
      'Socket.io 기반 실시간 채팅 UI와 서버 직접 통신 구현',
      '트리 보드 UI(react-sortable-tree·react-dnd) — 블록 추가·삭제·이동·다중 선택, 트리 간 이동',
      '회의록 PDF 추출 기능(@react-pdf/renderer) — 트리별 회의록 형식 정리',
      '채널 생성·코드 입장 페이지, 코드 클립보드 복사 UX',
      '서버·DB 통합 단계 합류 — Redis 키 설계와 클라이언트 흐름 정합 작업',
    ],
    achievements: [
      'User Requirement 6개 중 6개 충족 — 채팅 말풍선 → 보드 블록, PDF 추출, 트리 디자인 변경 등 핵심 시나리오 검증 완료',
      '6명까지 동시 접속·실시간 보드 편집·트리 간 블록 이동을 안정적으로 시연',
      '"FE 먼저 → DB·서버 후 합치기" 흐름의 한계를 직접 부딪치며, 서비스 전체 흐름을 처음부터 고려해야 한다는 교훈을 얻은 첫 프로젝트',
      '훗날 에피소든 WebRTC 도메인으로 이어지는 실시간 통신·동기화 경험의 출발점',
    ],
    stack: [
      'React',
      'Tailwind CSS',
      'Socket.io',
      'Express.js',
      'Redis',
      'AWS',
      'react-sortable-tree',
      'react-dnd',
      '@react-pdf/renderer',
      'nginx',
      'pm2',
    ],
    images: [
      { src: '/assets/univ/cocomeet-logo.svg', caption: 'CoCoMeet — Team #7' },
    ],
    note: '실시간 협업 시연 영상은 파일 크기가 커 리포지토리에 포함되지 않습니다. 필요 시 별도 공유 가능합니다.',
  },
  {
    id: 'smartoopyo',
    company: '대학',
    title: '스마투표(Smartoopyo) — 위치 기반 지방선거 후보 안내',
    period: '대학 · 인터넷프로그래밍 수업 팀 프로젝트',
    oneLine: '내 위치 주변의 지방선거 후보를 찾고, 그 인물의 최신 뉴스를 한눈에 보는 시민용 도구',
    role: 'Frontend · API 연동 담당',
    context:
      '대학교 "인터넷프로그래밍" 수업의 팀 프로젝트로, 주어진 주제는 "위치". 그 학기는 마침 지방선거 기간이었고, "내 동네에 누가 출마했고 어떤 사람인지 빠르게 알 수 있다면 어떨까?"라는 질문에서 출발했습니다.',
    overview:
      '사용자의 현재 위치를 기준으로 근처 지방선거 후보자 명단을 보여주고, 각 후보의 최신 뉴스를 네이버 뉴스 검색 API로 가져와 표시합니다. 지도 위에서 위치를 직접 변경해 다른 지역 후보까지 탐색할 수 있어, 유권자가 후보 정보를 "내가 사는 곳" 기준으로 자연스럽게 접할 수 있도록 만들었습니다.',
    features: [
      {
        title: '위치 기반 후보자 명단',
        body:
          '공공데이터포털의 지방선거 후보자 OpenAPI를 활용해, 사용자의 현재 위치(또는 지도 선택 위치)의 선거구 후보 명단을 표시합니다.',
      },
      {
        title: '후보별 네이버 뉴스 연동',
        body:
          '각 후보의 이름을 키로 네이버 뉴스 검색 API를 호출해 최신 보도 내용을 후보 카드에 함께 보여줍니다. "이 사람이 최근 무슨 이슈에 있었지?"를 한 화면에서 확인할 수 있습니다.',
      },
      {
        title: '지도 기반 위치 변경',
        body:
          '지도 위에서 핀을 옮기면 즉시 해당 지역의 후보 명단·뉴스가 갱신됩니다. 출마 지역이 다른 가족·친구의 지역구도 손쉽게 살펴볼 수 있습니다.',
      },
      {
        title: '후보자 사진 보강',
        body:
          '공공데이터 API에서 누락된 후보자 사진은 별도의 사진 수집 로직으로 보강해 카드 시각 정보를 채웠습니다.',
      },
    ],
    responsibilities: [
      '프론트엔드 전반 — 메인 화면, 지도 검색, 후보·뉴스 카드 UI 구현',
      '공공데이터포털 지방선거 후보자 OpenAPI 연동',
      '네이버 뉴스 검색 API 연동 — 후보 이름 → 뉴스 데이터 매핑·표시',
      '누락된 후보 사진을 보강하는 사진 수집 로직 작성',
      '지도 위치 변경에 따른 선거구·후보 데이터 갱신 흐름 설계',
    ],
    achievements: [
      '"위치"라는 추상적 주제를 실제 시민 의사결정(지방선거 정보 탐색)에 연결한 기획·구현 경험',
      '여러 외부 OpenAPI(공공데이터·네이버)를 묶어 단일 사용자 경험으로 통합',
      '데이터 결손(후보 사진 누락 등)을 우회하는 보강 로직까지 직접 고민·구현',
    ],
    stack: ['Web', 'JavaScript', 'PHP', '공공데이터포털 OpenAPI', 'Naver Search API', 'Map API'],
    images: [
      { src: '/assets/univ/smartoopyo/01.png', caption: '메인 — 내 위치 기준 후보·뉴스 노출' },
      { src: '/assets/univ/smartoopyo/02.png', caption: '지도 검색 — 지역을 옮겨 다른 선거구 후보까지 탐색' },
      { src: '/assets/univ/smartoopyo/03.png', caption: '뉴스 — 후보별 네이버 뉴스 검색 결과 연동' },
      { src: '/assets/univ/smartoopyo-logo.png', caption: '스마투표 로고' },
    ],
  },
];

export function projectsByCompany(company: Company): Project[] {
  return projects.filter((p) => p.company === company);
}
