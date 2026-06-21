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
    '사용자가 자연스럽고 편리하게 서비스를 이용할 수 있도록 고민하는 프론트엔드 개발자',
  intro: [
    {
      body:
        '저는 사용자가 자연스럽고 편리하게 서비스를 이용할 수 있도록 고민하는 프론트엔드 개발자입니다. 단순히 화면을 구현하는 것을 넘어 서비스 구조를 이해하고, 사용자 경험과 운영 효율성을 함께 고려하는 개발을 지향합니다.',
    },
    {
      body:
        '약 5년간 글로벌 영상 커뮤니케이션 서비스, 교육 플랫폼, AI 캐릭터 채팅 서비스 개발을 경험하며 React·Next.js·TypeScript 기반의 다양한 웹 서비스를 구축해왔습니다. 개발 과정에서는 기능 구현뿐 아니라 서비스 안정성·성능·유지보수성까지 함께 고려하며 사용자에게 더 나은 경험을 제공하기 위해 노력해왔습니다.',
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
        '페어리테일에서는 LLM 기반 AI 캐릭터 채팅 서비스 개발에 참여하며 사용자 입력부터 모델 응답, 메모리 데이터 연결, UI 렌더링까지 복잡한 데이터 흐름을 구현했습니다. 새로운 기술을 빠르게 학습하고 서비스에 적용하는 과정에서 문제 해결 능력과 개발 역량을 더욱 성장시킬 수 있었습니다.',
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
      title: 'AI 기반 서비스',
      body:
        'LLM·메모리·UI 렌더링이 얽힌 복잡한 데이터 흐름을 새로 학습하며 빠르게 서비스에 녹였습니다. 변화에 적응하는 속도가 강점입니다.',
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
  keywords: ['WebRTC', 'AI Chat', 'LMS', 'Next.js', 'TypeScript'],
  skills: [
    {
      label: 'Frontend',
      items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'PWA'],
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
      label: 'Infra · Tooling',
      items: [
        'GCP',
        'Firebase / Firestore',
        'AWS CloudWatch',
        'Grafana',
        'Kibana',
        'JMeter',
        'CI/CD',
      ],
    },
  ],
};
