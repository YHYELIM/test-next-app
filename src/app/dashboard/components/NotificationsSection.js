'use client';
export default function NotificationsSection() {
  // 원래 @notifications/page.js의 내용
  const notifications = [
    { id: 1, message: '새로운 주문이 접수되었습니다.', time: '방금 전' },
    { id: 2, message: '재고가 부족합니다: 스마트폰', time: '1시간 전' },
    { id: 3, message: '월간 보고서가 준비되었습니다.', time: '3시간 전' },
  ];
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-lg font-semibold mb-3">알림</h2>
      <div className="space-y-3">
        {notifications.map((notification) => (
          <div key={notification.id} className="border-b pb-2 last:border-0">
            <p>{notification.message}</p>
            <p className="text-xs text-gray-500">{notification.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}