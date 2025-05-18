import Link from 'next/link';
import { notFound } from 'next/navigation';

// 제품 데이터 가져오기 (실제로는 API나 DB에서 가져옴)
async function getProduct(id) {
  // 1초 지연 (로딩 상태 보여주기 위함)
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // 샘플 제품 목록
  const products = [
    { id: '1', name: '스마트폰', price: 1000000, description: '최신 기능을 탑재한 스마트폰입니다.' },
    { id: '2', name: '노트북', price: 1500000, description: '가볍고 성능이 좋은 노트북입니다.' },
    { id: '3', name: '태블릿', price: 800000, description: '휴대성이 뛰어난 태블릿입니다.' },
  ];
  
  const product = products.find(p => p.id === id);
  return product;
}

export default async function ProductDetail({ params }) {
  // 에러 페이지 테스트
  if (params.id === '999') {
    throw new Error("서버에서 오류가 발생했습니다.");
  }
  
  const product = await getProduct(params.id);
  
  // 제품이 없으면 404 페이지 표시
  if (!product) {
    notFound();
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-3">{product.name}</h1>
      <div className="bg-white rounded-lg shadow-md p-4 mb-5">
        <p className="text-lg font-semibold text-green-600 mb-2">
          {product.price.toLocaleString()}원
        </p>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <div className="border-t pt-3">
          <p className="text-sm text-gray-500">제품 ID: {params.id}</p>
        </div>
      </div>
      <Link href="/products" className="text-blue-500 hover:underline">
        제품 목록으로
      </Link>
    </div>
  );
}