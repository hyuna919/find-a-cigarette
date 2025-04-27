// App.jsx
import React, { useState } from "react";
import IntroductionPage from "./pages/IntroductionPage";
import SetupPage from "./pages/SetupPage";
import QuizPage from "./pages/QuizPage";
import ResultPage from "./pages/ResultPage";

function App() {
  const [step, setStep] = useState(1);
  const [selectedLength, setSelectedLength] = useState("전체");
  const [selectedBrand, setSelectedBrand] = useState("전체");

  const goNext = () => setStep((prev) => Math.min(prev + 1, 4));
  const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const renderPage = () => {
    switch (step) {
      case 1:
        return <SetupPage
        selectedLength={selectedLength}
        setSelectedLength={setSelectedLength}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          onNext={goNext}
          onBack={goBack}
        />;
      case 2:
        return <QuizPage
        selectedLength={selectedLength}
          selectedBrand={selectedBrand}
          onNext={goNext}
          onBack={goBack}
        />;
      case 3:
        return <QuizPage onNext={goNext} onBack={goBack} />;
      case 4:
        return <ResultPage onBack={goBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {step > 1 && (
        <button
          className="absolute top-4 left-4 text-orange-500"
          onClick={goBack}
        >
          ← 뒤로가기
        </button>
      )}
      {renderPage()}
    </div>
  );
}

export default App;
