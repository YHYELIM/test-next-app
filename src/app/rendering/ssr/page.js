import Link from 'next/link';

// 서버 사이드 렌더링 (SSR)
// 기본적으로 dynamic = true 이므로 매 요청마다 실행됨
export const dynamic = 'force-dynamic';

async function getData() {
  // 현재 시간을 가져와 매 요청마다 다른 값을 보여줌
  const time = new Date().toLocaleTimeString();
  return { time };
}

export default async function SSRPage() {
  const data = await getData();
  
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">서버 사이드 렌더링 (SSR)</h1>
      <div className="border p-4 rounded mb-5">
        <p>현재 서버 시간: <strong>{data.time}</strong></p>
        <p className="text-sm text-gray-500 mt-2">
          페이지를 새로고침하면 시간이 업데이트됩니다. 이는 매 요청마다 
          서버에서 페이지가 새롭게 렌더링되기 때문입니다.
        </p>
      </div>
      
      <Link href="/rendering" className="text-blue-500 hover:underline">
        돌아가기
      </Link>
    </div>
  );
}