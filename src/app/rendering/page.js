import Link from 'next/link';

export default function RenderingExamples() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Next.js 렌더링 방식</h1>
      
      <div className="space-y-4">
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">1. 서버 사이드 렌더링 (SSR)</h2>
          <p>매 요청마다 서버에서 페이지를 렌더링합니다.</p>
          <Link href="/rendering/ssr" className="text-blue-500 hover:underline">
            SSR 예제 보기
          </Link>
        </div>
        
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">2. 정적 사이트 생성 (SSG)</h2>
          <p>빌드 시점에 페이지를 생성합니다.</p>
          <Link href="/rendering/ssg" className="text-blue-500 hover:underline">
            SSG 예제 보기
          </Link>
        </div>
        
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">3. 증분 정적 재생성 (ISR)</h2>
          <p>정적 페이지를 주기적으로 재생성합니다.</p>
          <Link href="/rendering/isr" className="text-blue-500 hover:underline">
            ISR 예제 보기
          </Link>
        </div>
        
        <div className="border p-4 rounded">
          <h2 className="text-xl font-semibold">4. 클라이언트 사이드 렌더링 (CSR)</h2>
          <p>클라이언트에서 데이터를 가져와 렌더링합니다.</p>
          <Link href="/rendering/csr" className="text-blue-500 hover:underline">
            CSR 예제 보기
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