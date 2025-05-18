import Link from 'next/link';

// 정적 데이터 페칭 (빌드 시점에 실행)
export const dynamic = 'force-static';

async function getPosts() {
  // 실제 API 호출
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  
  if (!res.ok) {
    throw new Error('포스트 데이터를 가져오는데 실패했습니다');
  }
  
  return res.json();
}

export default async function StaticFetching() {
  const posts = await getPosts();
  const fetchTime = new Date().toLocaleTimeString();
  
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">정적 데이터 페칭</h1>
      
      <div className="bg-yellow-50 p-4 rounded-lg mb-5">
        <p className="text-yellow-800">
          이 데이터는 빌드 시점에 페칭됩니다. 현재 시간: <strong>{fetchTime}</strong>
          <br />
          <span className="text-sm">(개발 환경에서는 새로고침 시 업데이트될 수 있습니다)</span>
        </p>
      </div>
      
      <div className="space-y-4 mb-5">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">
              {post.id}. {post.title}
            </h2>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
      
      <Link href="/data-fetching" className="text-blue-500 hover:underline">
        돌아가기
      </Link>
    </div>
  );
}