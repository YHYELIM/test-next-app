import StatsSection from './components/StatsSection';
import NotificationsSection from './components/NotificationsSection.js';

export default function DashboardPage() {
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">대시보드</h1>
      <p className="mb-6">대시보드 메인 콘텐츠입니다.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatsSection />
        <NotificationsSection />
      </div>
    </div>
  );
}