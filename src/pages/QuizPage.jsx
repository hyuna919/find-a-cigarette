// src/pages/QuizPage.jsx
import React, { useEffect, useState } from "react";
import { fetchCigarettes } from "../firebase";

// 피셔 에이츠 셔플
function shuffle(array) {
  console.log("s: " + array[0].full_name);
  for (let i = array.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // 랜덤*(현위치 + 1), floor():소수점제거
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log("e: " + array[0].full_name);
}

function QuizPage({
  selectedLength = "전체",
  selectedBrand = "전체",
  onNext,
  onBack
}) {
  const [questions, setQuestions] = useState([]);
  const [length, setLength] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    // 데이터 가져오기
    fetchCigarettes().then((data) => {
      // 1. 브랜드 자르기
      if (selectedBrand !== "전체") {
        data = data.filter(item => item.brand === selectedBrand);
      }

      // 2. 셔플
      shuffle(data);

      // 3. 갯수만큼 자르기
      if (selectedLength !== "전체" && /^\d+$/.test(selectedLength)) {  // 숫자만 체크
        console.log("selectedLength", selectedLength);

        const cnt = parseInt(selectedLength, 10);
        data = data.slice(0, cnt);
      }

      // 4. 별칭과 줄임말을 이용해 문제 만들기
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

      setQuestions(data);

      // 문제 길이 기능 추가하게되면 주석 해제
      // setCigarettes(data.slice(0, 3)); // 10개만 가져오기
      setLength(data.length);

    }, []);
  }, []);

  const handleNext = () => {
    if (!showAnswer) {  // 답안 표시 여부
      setShowAnswer(true);
    } else if (currentIndex >= length - 1) { // 퀴즈 종료 여부
      // 문제 끝났다고 할까?
      onNext();     // 다음 페이지로
    } else {
      setShowAnswer(false);
      setCurrentIndex(prev => prev + 1);
    }
  };



  // 로딩 상태 표시
  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-lg font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-white text-gray-800">
      <button className="absolute top-4 left-4 text-orange-500" onClick={onBack}>
        ← 뒤로가기
      </button>

      <div className="text-center mb-4">
        <h2 className="text-lg text-gray-500">
          문제 ({currentIndex + 1} / {questions.length})
        </h2>
      </div>

      <div
        className="p-6 bg-white text-gray-900 rounded-2xl shadow-lg cursor-pointer w-full max-w-xs text-center transition-transform transform active:scale-95"
        onClick={handleNext}
      >
        <h1 className="text-2xl font-bold">
          {
            questions[currentIndex].question[Math.floor(Math.random() * questions[currentIndex].qLength)]}</h1>
        {showAnswer && (
          <p className="text-xl text-gray-600 mt-2">{questions[currentIndex].full_name}</p>
        )}
      </div>

      <p className="mt-4 text-sm text-gray-500 text-center">
        화면을 터치하여 정답을 확인하고 다음 문제로 이동하세요
      </p>
    </div>
  );
}

export default QuizPage;
