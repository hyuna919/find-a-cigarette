function ResultPage({ onBack }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">퀴즈 완료!</h1>
      <p className="text-gray-700 mb-6">수고하셨습니다! 다시 도전해볼까요?</p>
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500"
      >
        처음으로 돌아가기
      </button>
    </div>
  );
}

export default ResultPage;
