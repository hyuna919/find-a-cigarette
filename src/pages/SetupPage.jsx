// src/pages/SetupPage.jsx
import React, { useState } from "react";
// import { Tooltip } from "radix-ui";
import * as Tooltip from "@radix-ui/react-tooltip";
import "../style/styles.css";


const numberOptions = ["전체", 30, 50, 100];
const brandOptions = ["전체", "에쎄", "말보루", "던힐", "메비우스"];  // 브랜드 보강해야

function SetupPage({ onNext, onBack, selectedLength, setSelectedLength, selectedBrand, setSelectedBrand }) {
  // const [selectedLength, setSelectedLength] = useState("전체");
  // const [selectedBrand, setSelectedBrand] = useState("전체");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white text-gray-800">
      <h1 className="text-2xl font-bold mb-6">퀴즈 설정</h1>

      {/* 퀴즈 수 설정 */}
      <div className="mb-6 w-full max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold">퀴즈 갯수</span>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="text-sm text-blue-500">ⓘ</button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="bg-gray-800 text-white text-sm p-2 rounded shadow-md">
                  풀고 싶은 문제 수를 선택하세요. 전체는 모든 문제를 포함합니다.
                  <Tooltip.Arrow className="fill-gray-800" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
        <div className="flex flex-wrap gap-2">
          {numberOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelectedLength(option);
                console.log(selectedLength);

              }
              }
              className={`px-4 py-2 rounded-full border ${selectedLength === option
                  ? "border-orange-500 text-orange-500 font-semibold"
                  : "border-gray-300 text-gray-600"
                } transition`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* 브랜드 선택 */}
      <div className="mb-8 w-full max-w-md">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-semibold">브랜드 선택</span>
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <button className="text-sm text-blue-500">ⓘ</button>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content className="bg-gray-800 text-white text-sm p-2 rounded shadow-md">
                  특정 브랜드만 골라서 퀴즈를 풀 수 있어요.
                  <Tooltip.Arrow className="fill-gray-800" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
        <div className="flex flex-wrap gap-2">
          {brandOptions.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 rounded-full border ${selectedBrand === brand
                  ? "border-green-500 text-green-500 font-semibold"
                  : "border-gray-300 text-gray-600"
                } transition`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onNext}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-xl"
      >
        퀴즈 시작
      </button>
    </div>
  );
}

export default SetupPage;
