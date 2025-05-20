export default function CurrentTime() {
  const currentTime = new Date().toLocaleTimeString();
  
  return (
    <div>
      <p className="text-lg">현재 서버 시간: <span className="font-bold">{currentTime}</span></p>
      <p className="text-sm text-gray-500 mt-2">
        이 시간은 페이지가 렌더링될 때 서버에서 생성됩니다. 새로고침 해야 업데이트됩니다.
      </p>
    </div>
  );
}