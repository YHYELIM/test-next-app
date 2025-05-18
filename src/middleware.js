import { NextResponse } from 'next/server';

export function middleware(request) {
  // 현재 URL 가져오기
  const url = request.nextUrl.clone();
  
  // 관리자 페이지에 대한 간단한 권한 체크 (실제로는 쿠키나 헤더로 인증 처리)
  if (url.pathname.startsWith('/admin')) {
    // 쿼리 파라미터로 간단히 인증 체크 (실제로는 이렇게 하면 안 됨!)
    const isAdmin = url.searchParams.get('admin') === 'true';
    
    if (!isAdmin) {
      // 관리자가 아니면 홈페이지로 리다이렉트
      url.pathname = '/';
      url.searchParams.delete('admin');
      return NextResponse.redirect(url);
    }
  }
  
  // 특정 경로에 대한 헤더 추가
  if (url.pathname.startsWith('/api/')) {
    // API 응답에 사용자 정의 헤더 추가
    const response = NextResponse.next();
    response.headers.set('x-api-middleware', 'applied');
    return response;
  }
  
  return NextResponse.next();
}

// 미들웨어가 적용될 경로 지정
export const config = {
  matcher: ['/admin/:path*', '/api/:path*'],
};