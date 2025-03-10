import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
function App() {
  const [cigarettes, setCigarettes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBrand, setShowBrand] = useState(false);

  // 담배 데이터 가져오기
  const fetchCigarettes = async () => {
    const querySnapshot = await getDocs(collection(db, "cigarette"));
    const data = querySnapshot.docs.map((doc) => doc.data());
    setCigarettes(data);
  };

  useEffect(() => {
    fetchCigarettes();
  }, []);

  const handleNext = () => {
    if (!showBrand) {
      setShowBrand(true);
    } else {
      setShowBrand(false);
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
          이름을 보고 브랜드를 맞혀보세요!
        </p>
      </div>
      <div
        className="p-6 bg-white text-gray-900 rounded-2xl shadow-lg text-center w-full max-w-xs cursor-pointer transition-transform transform active:scale-95"
        onClick={handleNext}
      >
        <h1 className="text-2xl font-bold">{cigarettes[currentIndex].name}</h1>
        {showBrand && (
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
//   // 데이터 호출
//   const [cigarettes, setCigarettes] = useState([]);

//   const getCigarettes = async () => {
//     const querySnapshot = await getDocs(collection(db, "cigarette"));
//     const list = querySnapshot.docs.map((doc) => doc.data());
//     setCigarettes(list);
//   };

//   useEffect(() => {
//     getCigarettes();
//   }, []);

//   return (
//     <div>
//       <h1>담배 퀴즈 앱</h1>
//       <ul>
//         {cigarettes.map((cigarette, index) => (
//           <li key={index}>
//             {cigarette.brand}-{cigarette.full_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
