'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// 로그인 서버 액션
export async function login(data) {
     const { userId, passwd, userType} = data;
    console.log('로그인 시도 시작');
    
    try {
        // formData에서 값 추출
        // const userId = formData.get('userId');
        // const password = formData.get('password');
        
        console.log('사용자 ID:', userId);
        console.log('비밀번호 길이:', passwd?.length);
        console.log('API 요청 시작:', `http://localhost:8080/rest/auth/signin`);
        
        const response = await fetch(`http://localhost:8080/rest/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, passwd, userType }),
            credentials: 'include',
        });
        
        console.log('응답 상태:', response.status);
        
        // 응답 본문 가져오기 (한 번만!)
        const responseText = await response.text();
        console.log('응답 본문:', responseText);
        
        // 응답이 JSON인지 확인
        let data;
        try {
            // responseText를 JSON으로 파싱
            data = JSON.parse(responseText);
        } catch (parseError) {
            console.error('JSON 파싱 오류:', parseError);
            return { 
                success: false, 
                error: '서버 응답을 처리할 수 없습니다.' 
            };
        }
        
        // 응답 처리
        if (!response.ok) {
            return {
                success: false,
                error: data?.message || `로그인 실패: ${response.status}`
            };
        }
        
        // 로그인 성공 처리
        if (data.token) {
            console.log('토큰 수신 성공, 쿠키 설정');
            cookies().set({
                name: 'authToken',
                value: data.token,
                httpOnly: true,
                path: '/',
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7,
            });
        }
        
        console.log('로그인 성공, 리다이렉트 준비');
        redirect('/');
        
    } catch (error) {
        // 자세한 오류 정보 로깅
        console.error('로그인 오류:', error);
        console.error('오류 스택:', error.stack);
        
        return {
            success: false,
            error: `서버 연결 중 오류: ${error.message}`
        };
    }
}
