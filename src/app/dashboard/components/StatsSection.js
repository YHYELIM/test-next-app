'use client';
export default function StatsSection() {
    // 원래 @stats/page.js의 내용
    const stats = [
      { id: 1, label: '총 사용자', value: '1,204' },
      { id: 2, label: '월간 활성 사용자', value: '843' },
      { id: 3, label: '총 판매액', value: '₩12,430,000' },
      { id: 4, label: '평균 체류 시간', value: '2분 34초' },
    ];
    
    return (
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-3">통계</h2>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.id} className="border rounded p-3">
              <p className="text-sm text-gray-500">{stat.label}</p>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }