import Link from 'next/link';

// 서버 컴포넌트에서 데이터 페칭
async function getUsers() {
  // 실제 API 호출
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
  if (!res.ok) {
    throw new Error('사용자 데이터를 가져오는데 실패했습니다');
  }
  
  return res.json();
}

export default async function ServerFetching() {
  const users = await getUsers();
  
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">서버 컴포넌트 데이터 페칭</h1>
      
      <div className="bg-white shadow-md rounded-lg overflow-hidden mb-5">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이름</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">이메일</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">회사</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg mb-5">
        <h2 className="font-semibold text-blue-800 mb-2">서버 컴포넌트 데이터 페칭의 장점:</h2>
        <ul className="list-disc pl-5 text-blue-700 space-y-1">
          <li>SEO에 유리 - 완전히 렌더링된 HTML</li>
          <li>API 키 등 민감한 정보가 클라이언트에 노출되지 않음</li>
          <li>초기 로딩 성능 향상</li>
          <li>서버에서 한 번만 API 호출</li>
        </ul>
      </div>
      
      <Link href="/data-fetching" className="text-blue-500 hover:underline">
        돌아가기
      </Link>
    </div>
  );
}