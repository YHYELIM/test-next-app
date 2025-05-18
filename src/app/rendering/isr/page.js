import Link from 'next/link';

// 증분 정적 재생성 (ISR)
// 10초마다 페이지 재생성
export const revalidate = 10;

async function getData() {
  // 현재 시간을 가져옴
  const time = new Date().toLocaleTimeString();
  return { time };
}

export default async function ISRPage() {
  const data = await getData();
  
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">증분 정적 재생성 (ISR)</h1>
      <div className="border p-4 rounded mb-5">
        <p>현재 시간: <strong>{data.time}</strong></p>
        <p className="text-sm text-gray-500 mt-2">
          이 페이지는 10초마다 재생성됩니다. 10초 이내에 새로고침하면 
          같은 시간이 표시되지만, 10초 후 새로고침하면 업데이트됩니다.
        </p>
      </div>
      
      <Link href="/rendering" className="text-blue-500 hover:underline">
        돌아가기
      </Link>
    </div>
  );
}