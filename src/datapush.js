/*
  0) npm i dotenv
    dotenv 설치(나중에 꼭 지워야/react내부의 dotenv랑 충돌하기 때문에)
  1) .env파일이 이 파일과 같은 위치에 있어야...
  2) package.json에 "type": "module", 추가
  3) src위치에서 node 파일명.js 명령 입력

  FB문서 구조
  컬렉션: cigarette
  도큐먼트 : 자동생성 아이디
*/

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const jsonFile = fs.readFileSync("./data/CigaretteList.json", "utf8");

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 연결 테스트용 데이터 가져오기

let TARGET_COLLECTION = "tmp";
const getCigarettes = async () => {
  const querySnapshot = await getDocs(collection(db, TARGET_COLLECTION));
  const cigarettesData = querySnapshot.docs.map((doc) => doc.data());
  console.log(cigarettesData);
};
getCigarettes();

// json 읽기
const getJSON = async () => {
  return JSON.parse(jsonFile);
};

// Firestore에 데이터 업로드
const uploadData = async () => {
  const dataList = await getJSON();

  let cnt = 0;
  for (const item of dataList) {
    await addDoc(collection(db, "cigarette"), {
      brand: item.brand,
      line: item.line,
      name: item.name,
      full_name: item.full_name,
    });
    cnt++;
    console.log(`Added: (${cnt})${item.full_name}`);
  }
  console.log("✅ 데이터 업로드 완료!");
};

uploadData();
