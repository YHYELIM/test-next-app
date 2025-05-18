import Link from 'next/link';

// 정적 사이트 생성 (SSG)
// 빌드 시에만 실행됨
export const dynamic = 'force-static';

function getData() {
  // 빌드 시점의 시간을 가져옴
  const time = new Date().toLocaleTimeString();
  return { time, buildTime: true };
}

export default function SSGPage() {
  const data = getData();
  
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">정적 사이트 생성 (SSG)</h1>
      <div className="border p-4 rounded mb-5">
        <p>빌드 시점 시간: <strong>{data.time}</strong></p>
        <p className="text-sm text-gray-500 mt-2">
          이 시간은 빌드할 때 생성되며 페이지를 새로고침해도 
          변경되지 않습니다. (개발 환경에서는 새로고침 시 업데이트될 수 있음)
        </p>
      </div>
      
      <Link href="/rendering" className="text-blue-500 hover:underline">
        돌아가기
      </Link>
    </div>
  );
}