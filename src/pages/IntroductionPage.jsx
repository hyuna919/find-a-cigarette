import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";


function IntroductionPage({ onNext }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4 text-green-600">담배를 찾아라</h1>
      <img src={img1} alt="괴로워하는 알바생" className="w-48 mx-auto my-4" />
      <p className="text-center text-gray-600 mb-6">
        시중 편의점에서 팔고있는 담배 종류만 140종 이상!<br />
        거기에 전자담배까지?<br />
        편의점 알바 살려~!~!<br />
      </p>

      <img src={img2} alt="퀴즈화면" className="w-48 mx-auto my-4" />
      <p className="text-center text-gray-600 mb-6">
        담배를 찾아라에서는 담배의 이름과 별명을 통해 담배 위치를 찾을 수 있도록 도와주는 퀴즈를 제공합니다.<br />
      </p>

      <img src={img3} alt="괴로워하는 알바생" className="w-48 mx-auto my-4" />
      <p className="text-center text-gray-600 mb-6">
        (마쎄 갑으로 주세요)<br />
        (네?)<br />
        (마쎼가 메비우스 블루라고?)<br />

      </p>



      {/* </p> */}
      <button
        onClick={onNext}
        className="px-6 py-2 bg-orange-400 text-white rounded-lg hover:bg-orange-500"
      >
        시작하기
      </button>
    </div >
  );
}


export default IntroductionPage;
