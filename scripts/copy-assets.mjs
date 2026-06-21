#!/usr/bin/env node
// 허용 목록만 복사. 와일드카드/탐색 미사용 — 명시된 파일만 옮긴다.
// 부모 디렉토리(monorepo)에서 자산을 읽어 portfolio/public/assets로 복사.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORTFOLIO_ROOT = path.resolve(__dirname, '..');
const PARENT_ROOT = path.resolve(PORTFOLIO_ROOT, '..');
const ASSETS_OUT = path.join(PORTFOLIO_ROOT, 'public', 'assets');

/**
 * Map of {source path under PARENT_ROOT → destination path under ASSETS_OUT}
 * 절대로 와일드카드 사용 X. 사용자가 명시적으로 승인한 파일만 추가.
 */
const COPY_MAP = [
  // 에피소든 - 1.0/2.0 시기 버전 타임라인 (ep-10, ep-20 사용)
  ['에피소든-versions', '추가자료/에피소든/버전/2021-11.png', 'episoden/2021-11.png'],
  ['에피소든-versions', '추가자료/에피소든/버전/2021_12.png', 'episoden/2021_12.png'],
  ['에피소든-versions', '추가자료/에피소든/버전/2022_01.png', 'episoden/2022_01.png'],
  ['에피소든-versions', '추가자료/에피소든/버전/2022_09.png', 'episoden/2022_09.png'],
  ['에피소든-misc', '추가자료/에피소든/KPI_그래프.png', 'episoden/kpi.png'],
  ['에피소든-misc', '추가자료/에피소든/kdb_startup_2022_우수상.jpg', 'episoden/kdb-award.jpg'],

  // 에피소든 - 2026 자료 (ep-25 갤러리, 익명 슬러그)
  ['에피소든-2026', '추가자료/2026/Episoden/메인페이지.png', 'episoden/2026/01.png'],
  ['에피소든-2026', '추가자료/2026/Episoden/회원가입페이지.png', 'episoden/2026/02.png'],
  ['에피소든-2026', '추가자료/2026/Episoden/매칭세팅.png', 'episoden/2026/03.png'],
  ['에피소든-2026', '추가자료/2026/Episoden/1대1대화방.png', 'episoden/2026/04.png'],
  ['에피소든-2026', '추가자료/2026/Episoden/대화주제미리보기.png', 'episoden/2026/05.png'],
  ['에피소든-2026', '추가자료/2026/Episoden/친구랑대화하기.png', 'episoden/2026/06.png'],
  ['에피소든-2026', '추가자료/2026/Episoden/친구대화한번더하기기능.png', 'episoden/2026/07.png'],
  ['에피소든-2026', '추가자료/2026/Episoden/호스트룸(다인방).png', 'episoden/2026/08.png'],
  ['에피소든-2026', '추가자료/2026/Episoden/호스트룸(다인방)모바일버전.png', 'episoden/2026/09.png'],
  ['에피소든-2026', '추가자료/2026/Episoden/매칭기록.png', 'episoden/2026/10.png'],
  ['에피소든-2026', '추가자료/2026/Episoden/마이페이지친구창.png', 'episoden/2026/11.png'],
  ['에피소든-2026', '추가자료/2026/Episoden/초대페이지.png', 'episoden/2026/12.png'],

  // 라이너스 - Kiwi (브랜드 자산)
  ['라이너스-kiwi', '추가자료/라이너스/kiwi/kiwi_logo/20250916_KIWI_BI.svg', 'linus/kiwi-bi.svg'],
  ['라이너스-kiwi', '추가자료/라이너스/kiwi/kiwi_logo/nKiwi logo_middle1000.png', 'linus/kiwi-logo.png'],

  // 라이너스 - T-Link (브랜드 로고: primary만 사용. white는 삭제)
  ['라이너스-tlink', '추가자료/라이너스/tlink/tlink_디자인요청/tlink_로고/35_T link/T link_png/T link_primary.png', 'linus/tlink-primary.png'],

  // 라이너스 - KiwiStandard 2026 캡처 (학생/유저 데이터 보호를 위해 _마스킹 버전 사용)
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/로그인페이지.png', 'linus/kiwi-lms/01.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/학생_대시보드_마스킹.png', 'linus/kiwi-lms/02.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/교수_대시보드_마스킹.png', 'linus/kiwi-lms/03.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/교수_대시보드_커스텀버전_마스킹.png', 'linus/kiwi-lms/04.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/교수_강의목록_마스킹.png', 'linus/kiwi-lms/05.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/교수_강의목록2_마스킹.png', 'linus/kiwi-lms/06.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/교수_강의현황_마스킹.png', 'linus/kiwi-lms/07.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/교수_강의현황2_마스킹.png', 'linus/kiwi-lms/08.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/교수_학생성적페이지_마스킹.png', 'linus/kiwi-lms/09.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/달력_마스킹.png', 'linus/kiwi-lms/10.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/달력_일정추가_마스킹.png', 'linus/kiwi-lms/11.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/관리자_과목관리_마스킹.png', 'linus/kiwi-lms/12.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/관리자_유저관리_마스킹.png', 'linus/kiwi-lms/13.png'],
  ['라이너스-lms-2026', '추가자료/2026/KiwiStandard/faq페이지_마스킹.png', 'linus/kiwi-lms/14.png'],

  // 라이너스 - T-Link 2026 캡처 (이름 익명화)
  ['라이너스-tlink-2026', '추가자료/2026/T-Link/메인페이지_상단.png', 'linus/tlink/01.png'],
  ['라이너스-tlink-2026', '추가자료/2026/T-Link/메인페이지_하단.png', 'linus/tlink/02.png'],
  ['라이너스-tlink-2026', '추가자료/2026/T-Link/설명페이지.png', 'linus/tlink/03.png'],

  // 라이너스 - Kiwi LXP 2026 캡처 (이름 익명화)
  ['라이너스-lxp-2026', '추가자료/2026/KiwiPro/로그인페이지.png', 'linus/kiwi-lxp/01.png'],
  ['라이너스-lxp-2026', '추가자료/2026/KiwiPro/메인페이지.png', 'linus/kiwi-lxp/02.png'],
  ['라이너스-lxp-2026', '추가자료/2026/KiwiPro/달력.png', 'linus/kiwi-lxp/03.png'],
  ['라이너스-lxp-2026', '추가자료/2026/KiwiPro/교수_러닝저널.png', 'linus/kiwi-lxp/04.png'],
  ['라이너스-lxp-2026', '추가자료/2026/KiwiPro/교수_퍼스널그룹.png', 'linus/kiwi-lxp/05.png'],
  ['라이너스-lxp-2026', '추가자료/2026/KiwiPro/교수_미팅허브.png', 'linus/kiwi-lxp/06.png'],
  ['라이너스-lxp-2026', '추가자료/2026/KiwiPro/관리자_권한세팅.png', 'linus/kiwi-lxp/07.png'],

  // 페어리테일 - 티팟 로고
  ['페어리테일-teapot', '페어리테일/teapot-next-web/public/images/logo.svg', 'teapot/logo.svg'],
  ['페어리테일-teapot', '페어리테일/teapot-next-web/public/images/logo-dark.svg', 'teapot/logo-dark.svg'],

  // 페어리테일 - 티팟 2026 자료 (BEFORE: 입사 전 25_)
  ['페어리테일-teapot-before', '추가자료/2026/Teapotchat/25_메인페이지.png', 'teapot/before/01.png'],
  ['페어리테일-teapot-before', '추가자료/2026/Teapotchat/25_검색페이지.png', 'teapot/before/02.png'],
  ['페어리테일-teapot-before', '추가자료/2026/Teapotchat/25_채팅페이지.png', 'teapot/before/03.png'],
  ['페어리테일-teapot-before', '추가자료/2026/Teapotchat/25_채팅_뷰어설정.png', 'teapot/before/04.png'],
  ['페어리테일-teapot-before', '추가자료/2026/Teapotchat/25_제작페이지1.png', 'teapot/before/05.png'],
  ['페어리테일-teapot-before', '추가자료/2026/Teapotchat/25_제작페이지2.png', 'teapot/before/06.png'],
  ['페어리테일-teapot-before', '추가자료/2026/Teapotchat/25_제작페이지3.png', 'teapot/before/07.png'],
  ['페어리테일-teapot-before', '추가자료/2026/Teapotchat/25_출석체크.png', 'teapot/before/08.png'],

  // 페어리테일 - 티팟 2026 자료 (AFTER: 본인 작업 26_)
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_메인페이지.png', 'teapot/after/01.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_검색페이지.png', 'teapot/after/02.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_검색페이지_필터.png', 'teapot/after/03.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_채팅페이지.png', 'teapot/after/04.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_채팅_모델선택.png', 'teapot/after/05.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_채팅_뷰어설정_1.png', 'teapot/after/06.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_채팅_뷰어설정_2.png', 'teapot/after/07.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_채팅_대화캡처기능.png', 'teapot/after/08.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_채팅_대화캡처_편집모달.png', 'teapot/after/09.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_나의채팅방목록관리.png', 'teapot/after/10.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_제작자팔로우페이지.png', 'teapot/after/11.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_출석체크페이지.png', 'teapot/after/12.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_캐릭터제작_시작단계.png', 'teapot/after/13.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_캐릭터제작_설명.png', 'teapot/after/14.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_캐릭터제작_프롬프트.png', 'teapot/after/15.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_캐릭터제작_이미지_그리드타입.png', 'teapot/after/16.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_캐릭터제작_이미지_리스트타입.png', 'teapot/after/17.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_캐릭터제작_저장목록.png', 'teapot/after/18.png'],
  ['페어리테일-teapot-after', '추가자료/2026/Teapotchat/26_캐릭터제작_등록.png', 'teapot/after/19.png'],

  // 대학 - CoCoMeet 시연 영상 + 로고 (영상 화이트리스트 통과)
  ['대학-cocomeet', 'CoCoMeet/public/logo512.png', 'univ/cocomeet-logo.png'],
  ['대학-cocomeet', '추가자료/2026/CoCoMeet/cocomeet시연영상.mp4', 'univ/cocomeet-demo.mp4'],

  // 대학 - 스마투표 2026 캡처 (이름 익명화)
  ['대학-smartoopyo', 'smartoopyo/public_html/image/blacklogo.png', 'univ/smartoopyo-logo.png'],
  ['대학-smartoopyo-2026', '추가자료/2026/Smartoopyo/메인페이지.png', 'univ/smartoopyo/01.png'],
  ['대학-smartoopyo-2026', '추가자료/2026/Smartoopyo/지도검색.png', 'univ/smartoopyo/02.png'],
  ['대학-smartoopyo-2026', '추가자료/2026/Smartoopyo/뉴스페이지.png', 'univ/smartoopyo/03.png'],
];

// 금지 패턴 — COPY_MAP의 출발지가 이 패턴에 걸리면 즉시 에러
// 참고: mp4는 화이트리스트로 명시적으로 허용된 데모 영상만 통과한다 (mp4 → 별도 화이트리스트 검사)
const FORBIDDEN_PATTERNS = [
  /추가자료\/라이너스\/kumoh\//,
  /\.(pem|key|crt|csv|xlsx|xls|hwp|docx|pptx|mov)$/i,
  /AutoDocs\//,
];

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function copyOne(src, dst, group) {
  for (const pat of FORBIDDEN_PATTERNS) {
    if (pat.test(src)) {
      throw new Error(`[copy-assets] 금지된 경로/확장자 (${group}): ${src}`);
    }
  }
  const absSrc = path.join(PARENT_ROOT, src);
  const absDst = path.join(ASSETS_OUT, dst);
  await ensureDir(path.dirname(absDst));
  try {
    await fs.copyFile(absSrc, absDst);
    return { ok: true, src, dst };
  } catch (err) {
    return { ok: false, src, dst, error: err.code || String(err) };
  }
}

async function main() {
  await ensureDir(ASSETS_OUT);

  // CI/배포 환경처럼 원본 자산이 없는 경우엔 조용히 종료
  // (자산은 미리 portfolio/public/assets/ 에 커밋되어 있는 것이 정상)
  const marker = path.join(PARENT_ROOT, 'CAREER.md');
  try {
    await fs.access(marker);
  } catch {
    console.log('[copy-assets] 부모 디렉토리에 원본 자산이 없습니다. 이미 커밋된 public/assets/만 사용합니다.');
    await ensureDir(path.join(ASSETS_OUT, 'teapot', 'captures'));
    return;
  }

  const results = [];
  for (const [group, src, dst] of COPY_MAP) {
    const r = await copyOne(src, dst, group);
    results.push({ group, ...r });
  }

  const ok = results.filter((r) => r.ok);
  const fail = results.filter((r) => !r.ok);

  console.log(`[copy-assets] copied ${ok.length}/${results.length}`);
  if (fail.length) {
    console.warn('[copy-assets] missing or failed:');
    for (const r of fail) {
      console.warn(`  · ${r.group}: ${r.src} (${r.error})`);
    }
    console.warn('  (사용자가 직접 추가/캡처해야 하는 파일이 있을 수 있음)');
  }

  // teapot 캡처 placeholder 디렉토리 보장
  await ensureDir(path.join(ASSETS_OUT, 'teapot', 'captures'));
}

main().catch((err) => {
  console.error('[copy-assets] FAILED:', err);
  process.exit(1);
});
