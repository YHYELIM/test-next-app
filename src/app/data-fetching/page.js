import Link from 'next/link';

export default function DataFetchingExamples() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Next.js 데이터 페칭 방법</h1>
      
      <div className="space-y-4">
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">1. 서버 컴포넌트에서 데이터 페칭</h2>
          <p>서버에서 직접 데이터를 가져오고 HTML로 렌더링</p>
          <Link href="/data-fetching/server" className="text-blue-500 hover:underline">
            예제 보기
          </Link>
        </div>
        
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">2. 정적 데이터 페칭</h2>
          <p>빌드 시점에 데이터를 가져오고 캐싱</p>
          <Link href="/data-fetching/static" className="text-blue-500 hover:underline">
            예제 보기
          </Link>
        </div>
        
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">3. 동적 데이터 페칭</h2>
          <p>매 요청마다 새로운 데이터 가져오기</p>
          <Link href="/data-fetching/dynamic" className="text-blue-500 hover:underline">
            예제 보기
          </Link>
        </div>
        
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">4. 클라이언트에서 데이터 페칭</h2>
          <p>useState, useEffect를 사용한 브라우저 측 페칭</p>
          <Link href="/data-fetching/client" className="text-blue-500 hover:underline">
            예제 보기
          </Link>
        </div>
      </div>
      
      <div className="mt-8">
        <Link href="/" className="text-blue-500 hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}