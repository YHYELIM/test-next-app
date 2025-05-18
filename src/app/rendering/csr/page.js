'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CSRPage() {
  const [time, setTime] = useState('로딩 중...');
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // 클라이언트 측에서 시간 가져오기
    setTime(new Date().toLocaleTimeString());
    
    // 1초마다 시간 업데이트
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">클라이언트 사이드 렌더링 (CSR)</h1>
      <div className="border p-4 rounded mb-5">
        <p>현재 브라우저 시간: <strong>{time}</strong></p>
        <p className="mt-3">
          카운터: <strong>{count}</strong>{' '}
          <button 
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            증가
          </button>
        </p>
        <p className="text-sm text-gray-500 mt-2">
          이 페이지는 클라이언트 측에서 렌더링됩니다. 시간은 자동으로 
          업데이트되며, 버튼을 클릭하면 페이지 새로고침 없이 상태가 변경됩니다.
        </p>
      </div>
      
      <Link href="/rendering" className="text-blue-500 hover:underline">
        돌아가기
      </Link>
    </div>
  );
}