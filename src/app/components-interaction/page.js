import ClientCounter from './ClientCounter';
import CurrentTime from './CurrentTime';

// 서버에서 가져오는 데이터
async function getUserData() {
  // 실제로는 DB나 외부 API에서 가져옴
  return {
    name: '김철수',
    role: '개발자',
    lastLogin: new Date().toISOString()
  };
}

export default async function ComponentsInteraction() {
  const userData = await getUserData();
  
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">서버 & 클라이언트 컴포넌트 상호작용</h1>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">서버 컴포넌트에서 가져온 데이터</h2>
        <div className="space-y-2">
          <p><strong>이름:</strong> {userData.name}</p>
          <p><strong>역할:</strong> {userData.role}</p>
          <p><strong>마지막 로그인:</strong> {new Date(userData.lastLogin).toLocaleString()}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 클라이언트 컴포넌트 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">클라이언트 컴포넌트 (상태 관리)</h2>
          <ClientCounter initialCount={5} />
        </div>
        
        {/* 서버 컴포넌트 */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">서버 컴포넌트 (서버 시간)</h2>
          <CurrentTime />
        </div>
      </div>
      
      {/* 클라이언트 컴포넌트에 서버 데이터 전달 */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4">서버 데이터를 클라이언트 컴포넌트로 전달</h2>
        <ClientCounter initialCount={10} userName={userData.name} />
      </div>
    </div>
  );
}