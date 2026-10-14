export type SkillCategory = {
  label: string;
  items: string[];
};

export type IntroParagraph = {
  title?: string;
  body: string;
};

export type Profile = {
  name: string;
  role: string;
  tagline: string;
  intro: IntroParagraph[];
  philosophy: string;
  highlights: { title: string; body: string }[];
  contacts: {
    email: string;
    phone: string;
    github: string;
  };
  keywords: string[];
  skills: SkillCategory[];
};

export const profile: Profile = {
  name: '이선위',
  role: 'Frontend Developer',
  tagline:
    '웹과 앱을 만들고, 출시 뒤 생긴 문제까지 끝까지 따라가는 프론트엔드 개발자',
  intro: [
    {
      body:
        '화면을 만드는 데서 일을 끝내지 않습니다. 사용자가 어디서 막히는지 보고, 원인이 화면 밖에 있으면 로그와 데이터까지 따라갑니다.',
    },
    {
      body:
        '약 5년간 글로벌 영상통화, 대학 교육 플랫폼, AI 캐릭터 채팅 서비스를 만들었습니다. 최근에는 티팟의 웹 채팅과 제작 기능을 다듬고, React Native 앱을 처음부터 만들어 내부 테스트에 올렸습니다.',
    },
    {
      title: '에피소든 — 글로벌 WebRTC',
      body:
        '글로벌 WebRTC 기반 서비스 개발에 참여하며 다양한 브라우저와 네트워크 환경에서 발생하는 문제를 해결했습니다. 특히 재현이 어려운 장애 상황에서도 로그 분석과 데이터 추적을 통해 원인을 파악하고 구조적으로 개선하며 서비스 안정성을 높였습니다. 이를 통해 프론트엔드 개발자도 단순히 화면만 보는 것이 아니라 서비스 전체 흐름을 이해해야 한다는 점을 배웠습니다.',
    },
    {
      title: '라이너스 — 대학 LMS·LXP',
      body:
        'LMS·LXP 플랫폼 구축과 운영을 담당하며 공통 컴포넌트 설계, 데이터 구조 개선, SSO 인증 연동, 운영 기능 개발 등을 수행했습니다. 여러 이해관계자와 협업하며 요구사항을 기능으로 구체화했고, 현장에서 고객 담당자와 직접 소통하며 — 결국 좋은 서비스는 코드의 정교함만큼이나 고객의 말을 정확히 알아듣는 데서 시작된다는 것을 체감했습니다.',
    },
    {
      title: '페어리테일 — AI 캐릭터 채팅',
      body:
        '티팟에서는 채팅 화면, 캐릭터 제작, 검색과 보관함을 개발했습니다. 2026년 8월부터는 React Native·Expo 앱을 새로 만들었습니다. 출시 준비 중 안드로이드 발열 제보를 받고 실기기로 원인을 측정해 고쳤고, 채팅 중 앱을 내려도 답변을 이어 볼 수 있도록 백엔드와 함께 연결 흐름을 손봤습니다.',
    },
    {
      title: '서비스는 자식, 회사는 가족',
      body:
        '저에게 서비스는 자식이고 회사는 가족입니다. 아빠가 아들에게 화를 내며 가르치듯, 저도 제가 만든 서비스에 정확히 화를 낼 수 있어야 더 애정이 깊어지고 더 나은 품질로 다듬을 수 있다고 믿습니다. 기술을 위한 개발보다 사용자를 위한 개발을 우선하고, 사용자 경험과 서비스 품질을 같이 고민하며 더 많은 사람이 편리하게 이용할 수 있는 서비스를 만드는 프론트엔드 개발자로 성장하고 싶습니다.',
    },
  ],
  philosophy:
    '서비스는 자식이고 회사는 가족이다. 내 서비스에 정확히 화낼 수 있어야 더 애정이 깊어지고, 더 나은 품질로 다듬을 수 있다.',
  highlights: [
    {
      title: '글로벌 실시간 통신',
      body:
        '150개국 사용자가 이용하는 WebRTC 서비스에서, 재현하기 어려운 장애를 로그와 데이터로 추적해 구조적으로 개선했습니다.',
    },
    {
      title: '티팟 웹과 앱',
      body:
        '웹 채팅과 제작 기능을 맡고, React Native 앱을 처음부터 구축해 내부 테스트에 배포했습니다. 안드로이드 발열은 실기기에서 원인을 찾아 대기 CPU를 약 230%에서 15%로 낮췄습니다.',
    },
    {
      title: '대학 LMS — 고객과의 소통',
      body:
        '여러 대학·이해관계자와 직접 소통하며 요구사항을 기능으로 구체화했습니다. 좋은 코드만큼이나 고객의 말을 정확히 알아듣는 것이 중요하다는 것을 배웠습니다.',
    },
  ],
  contacts: {
    email: 'ricklee1998@naver.com',
    phone: '010-6289-2548',
    github: 'https://github.com/ricklee1998',
  },
  keywords: ['Next.js', 'TypeScript', 'React Native', '채팅 UX', '성능 분석'],
  skills: [
    {
      label: 'Frontend',
      items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Zustand', 'TanStack Query', 'PWA'],
    },
    {
      label: 'Mobile',
      items: ['React Native', 'Expo', 'Reanimated', 'Android', 'iOS'],
    },
    {
      label: 'Realtime · Media',
      items: ['WebRTC', 'Janus', 'TURN', 'Socket.io'],
    },
    {
      label: 'Backend (보조)',
      items: ['NestJS', 'Spring Boot', 'Node.js', 'Python'],
    },
    {
      label: 'Infra · Quality',
      items: [
        'GCP',
        'Firebase / Firestore',
        'AWS CloudWatch',
        'Grafana',
        'Kibana',
        'JMeter',
        'CI/CD',
        'Playwright',
        'Crashlytics',
      ],
    },
  ],
};
