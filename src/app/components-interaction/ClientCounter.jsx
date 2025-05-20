'use client';

import { useState } from 'react';

export default function ClientCounter({ initialCount = 0, userName = '사용자' }) {
  const [count, setCount] = useState(initialCount);
  
  return (
    <div>
      {userName && (
        <p className="mb-3 text-blue-600">안녕하세요, {userName}님!</p>
      )}
      
      <p className="text-lg mb-3">현재 카운트: <span className="font-bold">{count}</span></p>
      
      <div className="flex space-x-2">
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          감소
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          증가
        </button>
        <button 
          onClick={() => setCount(initialCount)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          리셋
        </button>
      </div>
    </div>
  );
}