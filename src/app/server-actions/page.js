import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

export default function ServerActionsPage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">서버 액션 예제: ToDo 앱</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">할 일 추가</h2>
          <AddTodoForm />
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">할 일 목록</h2>
          <TodoList />
        </div>
      </div>
      
      <div className="mt-8 bg-blue-50 p-4 rounded-lg">
        <h3 className="font-semibold text-blue-800 mb-2">서버 액션이란?</h3>
        <p className="text-blue-700">
          서버 액션은 클라이언트에서 서버의 함수를 직접 호출할 수 있게 해주는 Next.js 기능입니다.
          폼 제출, 데이터 변경 등의 작업을 API 라우트 없이 처리할 수 있습니다.
        </p>
      </div>
    </div>
  );
}