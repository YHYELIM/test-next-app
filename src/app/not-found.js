import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">페이지를 찾을 수 없습니다</h2>
      <p className="text-gray-600 mb-8 max-w-md">
        찾으시는 페이지가 이동되었거나 삭제되었을 수 있습니다.
        또는 입력하신 주소가 정확하지 않을 수 있습니다.
      </p>
      <Link 
        href="/" 
        className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
      >
        홈으로 돌아가기
      </Link>
    </div>
  );
}