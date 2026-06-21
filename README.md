# about-me

이선위 · Frontend Developer 포트폴리오

- **GitHub Pages:** https://ricklee1998.github.io/about-me/
- **Vercel:** (연결 후 `*.vercel.app` 또는 커스텀 도메인)
- **스택:** React · TypeScript · Vite · Tailwind CSS

## 로컬 개발

```bash
npm install
npm run dev
```

기본(GitHub Pages 경로): `http://localhost:5173/about-me/`

Vercel과 동일하게 루트에서 보려면:

```bash
VITE_BASE=/ npm run dev
# http://localhost:5173/
```

## 빌드

```bash
npm run build          # GitHub Pages용 (/about-me/)
VITE_BASE=/ npm run build   # Vercel·루트 배포용
npm run preview
```

## GitHub Pages

`main` 브랜치 push → `.github/workflows/deploy.yml` 자동 배포

Repository Settings → Pages → Source: **GitHub Actions**

## Vercel (무료 Hobby)

1. [vercel.com](https://vercel.com) 로그인 → **Add New Project**
2. GitHub `ricklee1998/about-me` 레포 Import
3. Framework Preset: **Vite** (자동 감지)
4. `vercel.json`에 `VITE_BASE=/` 가 설정되어 있어 추가 설정 없이 Deploy

Git LFS(mp4)는 Vercel이 GitHub 연동 시 자동으로 pull합니다.

CLI로 배포하려면:

```bash
vercel login
vercel --prod
```
