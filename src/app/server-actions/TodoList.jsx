import { getTodos, toggleTodo, deleteTodo } from './actions';
import TodoItem from './TodoItem';

export default async function TodoList() {
  const todos = await getTodos();
  
  if (todos.length === 0) {
    return (
      <div className="text-gray-500 italic">
        할 일이 없습니다. 새로운 할 일을 추가해보세요!
      </div>
    );
  }
  
  return (
    <ul className="space-y-3">
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </ul>
  );
}