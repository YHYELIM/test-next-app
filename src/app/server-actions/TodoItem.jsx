'use client';

import { useTransition } from 'react';

export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  const [isPending, startTransition] = useTransition();
  
  // 디버깅
  console.log('TodoItem 렌더링:', { 
    todoId: todo.id, 
    todoTitle: todo.title,
    hasToggleFunction: typeof toggleTodo === 'function',
    hasDeleteFunction: typeof deleteTodo === 'function' 
  });
  
  function handleToggle() {
    startTransition(async () => {
      try {
        await toggleTodo(todo.id);
      } catch (error) {
        console.error('Toggle 오류:', error);
      }
    });
  }
  
  function handleDelete() {
    startTransition(async () => {
      try {
        await deleteTodo(todo.id);
      } catch (error) {
        console.error('Delete 오류:', error);
      }
    });
  }
  
  return (
    <li className="flex items-center justify-between gap-2 p-3 border rounded bg-white">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          disabled={isPending}
          className="h-5 w-5"
        />
        <span className={todo.completed ? 'line-through text-gray-400' : ''}>
          {todo.title}
        </span>
      </div>
      
      <button 
        onClick={handleDelete}
        disabled={isPending}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
      >
        삭제
      </button>
    </li>
  );
}