'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './LoginForm.module.css';
import { login } from '@/app/lib/actions/auth';

export default function LoginForm(){
    const [userId, setUserId] = useState ('');
    const [passwd, setPasswd] = useState ('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        
        const formData = new FormData(e.target);
      // 객체로 변환하여 전달
    const data = {
      userId: formData.get('userId'),
      passwd: formData.get('passwd'),
      userType:'users'
      
    };
     const result = await login(data);
        
        if (result?.error){
            setError(result.error);
        }
        // 유효성 검사
        if (!userId || !passwd) {
            setError('아이디와 비밀번호를 모두 입력해주세요');
            return;
        }

        // 추후 서버 연결 
        console.log ('로그인 시도:', {userId, passwd});

    };

    return(
        <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='userId' className='form-label'>아이디</label>
                <input
                    id = "userId"
                    name='userId' // 서버 액션에서 접근
                    type = "userId"
                    className='form-input'
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
            </div>
             <div className="form-group">
                <label htmlFor="passwd" className="form-label">비밀번호</label>
                <input
                    id="passwd"
                    name='passwd' // 서버 액션에서 접근
                    type="passwd"
                    className="form-input"
                    value={passwd}
                    onChange={(e) => setPasswd(e.target.value)}
                    required
                />
            </div>
            <div className={styles.rememberMe}>
                <input type='checkbox' id='remember'/>
                <label htmlFor='remember'>로그인 상태 유지</label>
            </div>
            {error && <p className='error-message'>{error}</p>}
            
            <button type='submit' className='form-button'>
                로그인
            </button>
            <div>
                계정이 없으신가요? <Link href="/join">회원가입</Link>
            </div>
        </form>
    );
}