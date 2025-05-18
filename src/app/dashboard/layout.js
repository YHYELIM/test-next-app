export default function DashboardLayout({ children }) {
    return (
      <div className="container mx-auto px-4 py-6">
        {/* 여기서는 children만 렌더링하면 됩니다 */}
        {children}
      </div>
    );
  }