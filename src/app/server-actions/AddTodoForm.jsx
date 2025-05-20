'use client';

import { useRef } from 'react';
import { addTodo } from './actions';

export default function AddTodoForm() {
  const formRef = useRef(null);
  
  async function handleSubmit(formData) {
    const result = await addTodo(formData);
    
    if (result.success) {
      // 폼 초기화
      formRef.current?.reset();
    } else if (result.error) {
      alert(result.error);
    }
  }
  
  return (
    <form action={handleSubmit} ref={formRef} className="space-y-3">
      <div>
        <input 
          type="text" 
          name="title" 
          placeholder="할 일을 입력하세요" 
          className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      
      <button 
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        추가하기
      </button>
    </form>
  );
}