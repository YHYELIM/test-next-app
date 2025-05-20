import Link from "next/link"

export default function Home() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-3">홈페이지</h1>
      <p className="mb-5">Next.js 라우팅 예제에 오신 것을 환영합니다!</p>
      <div className="space-y-2">
        <div><Link href="/about" className="text-blue-500 hover:underline">소개 페이지로 이동</Link></div>
        <div><Link href="/products" className="text-blue-500 hover:underline">제품 목록 페이지로 이동</Link></div>
        <div><Link href="/rendering" className="text-blue-500 hover:underline">렌더링 방식 예제로 이동</Link></div>
        <div><Link href="/dashboard" className="text-blue-500 hover:underline">대시보드로 이동</Link></div>
        <div><Link href="/data-fetching" className="text-blue-500 hover:underline">데이터 페칭 예제로 이동</Link></div>
        <div><Link href="/server-actions" className="text-blue-500 hover:underline">서버 액션 예제로 이동</Link></div>
      </div>
    </div>
  )
}