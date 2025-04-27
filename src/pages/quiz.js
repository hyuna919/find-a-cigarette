import React, { useEffect, useState } from "react";
import { fetchCigarettes } from "../firebase";

// 피셔 에이츠 셔플
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 랜덤*(현위치 + 1), floor():소수점제거
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function App() {
  const [length, setLength] = useState([]);
  const [cigarettes, setCigarettes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullname, setFullname] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (!isFinished) {
      // 데이터 가져오기
      fetchCigarettes().then((data) => {
        // 별칭과 줄임말을 이용해 문제 만들기
        data = data.map((item) => {
          const question = item.nickname.filter(
            (el) => el && String(el).trim()
          ); // 빈값 제거
          question.push(item.short_name);

          return {
            ...item,
            question,
            qLength: question.length,
          };
        });

        shuffle(data); // 순서 섞기
        setCigarettes(data);

        // 문제 길이 기능 추가하게되면 주석 해제
        // setCigarettes(data.slice(0, 3)); // 10개만 가져오기
        setLength(data.length);
      }, []);
    }
  }, [isFinished]);

  const handleNext = () => {
    // 답안 표시 여부
    if (!fullname) {
      setFullname(true);
    } else {
      // 퀴즈 종료 여부
      if (currentIndex >= length - 1) {
        setIsFinished(true);
      } else {
        // 마지막이 아니면 다음 문제
        setFullname(false);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0); // 처음으로 돌아가기
    setFullname(false);
    setIsFinished(false);
  };

  if (cigarettes.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-indigo-700 text-white p-4">
      {isFinished ? ( // 퀴즈가 끝났을 때
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">퀴즈 완료!</h1>
          <button
            className="px-4 py-2 bg-white text-gray-900 font-semibold rounded-lg shadow-lg"
            onClick={handleRestart}
          >
            다시 시작하기
          </button>
        </div>
      ) : (
        // 퀴즈가 진행 중일 때
        <>
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold">담배 퀴즈</h1>
            <p className="text-lg text-gray-200">
              담배의 이름과 별명을 보고 매대에서 담배를 찾으세요!
            </p>
            <p className="text-lg text-gray-200">
              ({currentIndex + 1} / {length})
            </p>
          </div>
          <div
            className="p-6 bg-white text-gray-900 rounded-2xl shadow-lg text-center w-full max-w-xs cursor-pointer transition-transform transform active:scale-95"
            onClick={handleNext}
          >
            {/* 랜덤으로 하나 뽑아서 질문 */}
            <h1 className="text-2xl font-bold">
              {
                cigarettes[currentIndex].question[
                  Math.floor(Math.random() * cigarettes[currentIndex].qLength)
                ]
              }
            </h1>
            {fullname && (
              <h2 className="text-xl text-gray-600 mt-2">
                {cigarettes[currentIndex].full_name}
              </h2>
            )}
          </div>
          <p className="mt-4 text-sm text-gray-300">
            화면을 터치하여 진행하세요
          </p>
        </>
      )}
    </div>
  );
}

export default App;
