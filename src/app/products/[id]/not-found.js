import Link from 'next/link';

export default function ProductNotFound() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold text-red-500 mb-3">제품을 찾을 수 없습니다</h1>
      <p className="mb-5">
        요청하신 제품이 존재하지 않거나 삭제되었습니다.
      </p>
      <Link href="/products" className="text-blue-500 hover:underline">
        제품 목록으로 돌아가기
      </Link>
    </div>
  );
}