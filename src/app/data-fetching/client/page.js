'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ClientFetching() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function fetchPhotos() {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=8');
        
        if (!res.ok) {
          throw new Error('사진 데이터를 가져오는데 실패했습니다');
        }
        
        const data = await res.json();
        setPhotos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchPhotos();
  }, []);
  
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">클라이언트 측 데이터 페칭</h1>
      
      <div className="bg-purple-50 p-4 rounded-lg mb-5">
        <p className="text-purple-800">
          이 데이터는 클라이언트(브라우저)에서 페칭됩니다.
          <br />
          <span className="text-sm">(useState와 useEffect 훅을 사용)</span>
        </p>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center py-10">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : error ? (
        <div className="bg-red-100 p-4 rounded-lg text-red-700">
          에러: {error}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
          {photos.map((photo) => (
            <div key={photo.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img 
                src={photo.thumbnailUrl} 
                alt={photo.title} 
                className="w-full h-24 object-cover"
              />
              <div className="p-3">
                <p className="text-sm truncate" title={photo.title}>
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <Link href="/data-fetching" className="text-blue-500 hover:underline">
        돌아가기
      </Link>
    </div>
  );
}