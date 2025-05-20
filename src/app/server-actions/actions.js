'use server'; // 서버 액션 정의

import path from 'path';
import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';

// 실제로는 DB 사용, 예제에서는 JSON 파일로 대체
const todosFilePath = path.join(process.cwd(), 'src/app/server-actions/todos.json');

// 할일 목록 가져오기
export async function getTodos(){
    try{
        const fileExists = await fs.stat(todosFilePath).catch(()=> false)
        if (!fileExists){
            await fs.writeFile(todosFilePath, JSON.stringify([]));
            return [];
        }
      const data = await fs.readFile(todosFilePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('할 일을 가져오는 중 오류 발생:', error);
    return [];
  }
}
// 할 일 추가하기
export async function addTodo(formData) {
  const title = formData.get('title');
  
  if (!title || typeof title !== 'string') {
    return { error: '할 일을 입력해주세요.' };
  }
  
  try {
    const todos = await getTodos();
    
    const newTodo = {
      id: Date.now().toString(),
      title,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    const updatedTodos = [...todos, newTodo];
    await fs.writeFile(todosFilePath, JSON.stringify(updatedTodos, null, 2));
    
    // 캐시된 데이터 갱신
    revalidatePath('/server-actions');
    
    return { success: true };
  } catch (error) {
    console.error('할 일을 추가하는 중 오류 발생:', error);
    return { error: '할 일을 추가하는 중 오류가 발생했습니다.' };
  }
}

// 할 일 완료 상태 토글하기
export async function toggleTodo(id) {
  try {
    const todos = await getTodos();
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    
    await fs.writeFile(todosFilePath, JSON.stringify(updatedTodos, null, 2));
    
    // 캐시된 데이터 갱신
    revalidatePath('/server-actions');
    
    return { success: true };
  } catch (error) {
    console.error('할 일 상태를 변경하는 중 오류 발생:', error);
    return { error: '할 일 상태를 변경하는 중 오류가 발생했습니다.' };
  }
}

// 할 일 삭제하기
export async function deleteTodo(id) {
  try {
    const todos = await getTodos();
    const updatedTodos = todos.filter(todo => todo.id !== id);
    
    await fs.writeFile(todosFilePath, JSON.stringify(updatedTodos, null, 2));
    
    // 캐시된 데이터 갱신
    revalidatePath('/server-actions');
    
    return { success: true };
  } catch (error) {
    console.error('할 일을 삭제하는 중 오류 발생:', error);
    return { error: '할 일을 삭제하는 중 오류가 발생했습니다.' };
  }
}