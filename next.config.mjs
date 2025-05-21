/** @type {import('next').NextConfig} */
const nextConfig = {
  // 개발 모드일 때는 SSR 활성화, 프로덕션에서는 정적 내보내기
  ...(process.env.NODE_ENV === 'development' 
    ? {
        // 개발 모드 설정
        // (output: 'export'를 설정하지 않음)
        // 여기에 개발 모드에서만 필요한 설정 추가
      } 
    : {
        // 프로덕션 모드 설정 (Capacitor용)
        output: 'export',
        images: {
          unoptimized: true,
        },
      }
  ),
  
  // 공통 설정 (모든 모드에 적용)
  distDir: 'out',
  trailingSlash: true,
  basePath: '',
  
  // 웹팩 설정
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;