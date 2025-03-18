import React, { useEffect, useState } from "react";
import { fetchCigarettes } from "./firebase";

function App() {
  const [cigarettes, setCigarettes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fullname, setFullname] = useState(false);

  useEffect(() => {
    fetchCigarettes().then((data) => {
      data = data.map((item) => {
        const question = item.nickname.filter((el) => el && String(el).trim());
        question.push(item.short_name);

        return {
          ...item,
          question,
          qLength: question.length, // 여기서 바로 question.length 사용
        };
      });

      setCigarettes(data);
    }, []);
  }, []);

  const handleNext = () => {
    if (!fullname) {
      setFullname(true);
    } else {
      setFullname(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cigarettes.length);
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
      </div>
      <div
        className="p-6 bg-white text-gray-900 rounded-2xl shadow-lg text-center w-full max-w-xs cursor-pointer transition-transform transform active:scale-95"
        onClick={handleNext}
      >
        {/* 랜덤으로 하나 뽑아서 질문 */}
        <h1 className="text-2xl font-bold">
          {
            /* {cigarettes[currentIndex].name + */
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
