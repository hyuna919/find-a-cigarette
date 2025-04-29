import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";


function IntroductionPage({ onNext }) {
  return (
    <div>
      {/* 타이틀 */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-100 to-white px-6">
        <h1 className="text-6xl font-extrabold text-green-600 mb-4">담배를 찾아라</h1>
        <p className="text-center text-gray-700 mb-8 leading-relaxed">
          편의점 알바생의 필수 앱!<br />
          상품명과 자주 쓰이는 별명으로 140종 담배를 금세 찾을 수 있어요.
        </p>
        <button
          onClick={onNext}
          className="px-8 py-3 bg-orange-400 text-white rounded-2xl hover:bg-orange-500 transition"
        >
          퀴즈 시작하기
        </button>
      </section>

      {/* 설명 */}
      <section className="py-16 bg-white px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[img1, img2, img3].map((src, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg p-6">
              <img src={src} alt={`feature-${i}`} className="w-1/2 mb-4" />
              <p className="text-gray-600">
                {i === 0 && "마쎄가 뭐죠? 레인보우 부스트가 어디 있더라?"}
                {i === 1 && "이름·별명 퀴즈로 위치 찾기 연습!"}
                {i === 2 && "담배, 이제 두렵지 않아!"}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



export default IntroductionPage;
