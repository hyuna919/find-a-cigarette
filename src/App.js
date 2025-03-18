import React, { useEffect, useState } from "react";
import { fetchCigarettes } from "./firebase";

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
  const [currentIndex, setCurrentIndex] = useState(1);
  const [fullname, setFullname] = useState(false);

  useEffect(() => {
    // 데이터 가져오기
    fetchCigarettes().then((data) => {
      // 별칭과 줄임말을 이용해 문제 만들기
      data = data.map((item) => {
        const question = item.nickname.filter((el) => el && String(el).trim());
        question.push(item.short_name);

        return {
          ...item,
          question,
          qLength: question.length,
        };
      });

      shuffle(data); // 순서 섞기
      setCigarettes(data);

      setLength(data.length);
    }, []);
  }, []);

  const handleNext = () => {
    if (!fullname) {
      setFullname(true);
    } else {
      setFullname(false);
      setCurrentIndex(currentIndex + 1);
    }
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
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">담배 퀴즈</h1>
        <p className="text-lg text-gray-200">
          담배의 이름과 별명을 보고 매대에서 담배를 찾으세요!
        </p>
        <p className="text-lg text-gray-200">
          ({currentIndex} / {length})
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
      <p className="mt-4 text-sm text-gray-300">화면을 터치하여 진행하세요</p>
    </div>
  );
}

export default App;
