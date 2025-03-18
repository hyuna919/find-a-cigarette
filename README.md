# 🏪 담배를 찾아라

담배 위치를 빠르게 익히고 싶은 편의점 직원들을 위한 퀴즈 웹 애플리케이션입니다.
</br>
</br>

## 📌 프로젝트 개요

✅ 편의점 종사자는 **약 21만 명**, 전국 편의점 수는 **5만 4800개**에 달합니다.([2023년 프랜차이즈(가맹점)조사 결과(잠정)](https://kostat.go.kr/board.es?mid=a10301010000&bid=240&list_no=434465&act=view&mainXml=Y), 통계청)

✅ BGF리테일(CU운영)과 GS리테일(GS25 운영)의 분기보고서에 따르면 **담배 매출 비중은 30%대 중후반**으로 주요 상품군입니다.([BGF리테일 2024년 3분기 분기보고서](https://kind.krx.co.kr/common/disclsviewer.do?method=search&acptno=20241114002645&docno=&viewerhost=&viewerport=), [GS리테일 2024년 3분기 분기보고서](https://kind.krx.co.kr/common/disclsviewer.do?method=search&acptno=20241114002645&docno=&viewerhost=&viewerport=))

✅ 전자담배를 제외한 일반담배만 140개 이상, 매장마다 다른 배치로 아르바이트생들은 **제품명과 별칭을 익히는 데 어려움을 겪고 있습니다**.


이 프로젝트는 **담배 제품명을 빠르게 학습**할 수 있도록 **퀴즈 기반 학습 도구**를 제공합니다.

</br>


## 🎮 주요 기능

🔹 **퀴즈 모드**

  - 랜덤한 담배 이름이 표시되며, 한 번 클릭하면 브랜드명이 나타남
  - 담배를 부르는 다양한 별칭으로 문제를 제공(마쎄, 일번 등)
  - 다시 클릭하면 다음 문제로 이동

🔹 **사용자 친화적 인터페이스**
  - 모바일 최적화 UI
  - 간결하고 직관적인 인터랙션
</br>



## 🛠 기술 스택

- **프론트엔드:** React, Tailwind CSS
- **백엔드:** Firebase Cloud Functions, Firebase Firestore
- **배포:** Firebase Hosting

</br>

## 🎯 배운 점 & 기술적 도전

### 1️⃣ Firestore 보안의 한계

**문제:** Firestore의 보안 규칙은 인증/인가 방식으로 동작함. 비회원 서비스는 외부의 악의적 요청을 막을 방법이 없음.  
**해결:** Firebase Cloud Functions를 사용해 인증된 요청만 Firestore에 접근하도록 변경.  
**🔗작업 기록 블로그**

### 2️⃣ 상태 관리와 성능 최적화

**문제:** React에서 퀴즈 데이터 관리 시, 불필요한 렌더링이 발생해 성능 저하 문제 발생.    
**해결:** useState를 최적화하고, key 값 변경을 통해 렌더링을 최소화.    
**🔗작업 기록 블로그**

### 3️⃣ 구글 에드센스 절차 관련

**문제:** 구글 애드센스 심사 과정 중 호스팅 문제로 재심사로 넘어가면서 일정이 딜레이 됨. 프로젝트 명이 바뀌면서 url을 변경하고 싶었나 같은 이유로 변경 불가능한 상황을 겪음.  
**교훈:** 외부 마켓 등록, 애드센스 등 서비스에 대한 심사를 받게 된다면 일정에 여유가 필요하다.  
**🔗작업 기록 블로그**


</br>

## 🚀 배포 링크

👉 [🔗 프로젝트 체험하기](https://cigarette-quiz-dc8e1.web.app/)


</br>

## 📜 향후 개선 사항

✔️ 퀴즈 범위 조절 기능 추가  
✔️ OX선택을 통한 오답 목록 제공  
✔️ 퀴즈 난이도 조절 기능 추가  

---
(수정 중)

## Firestore 구성

컬렉션-도큐먼트
별칭관리

# 프로젝트 설치방법

- React설치법
- Firebase 배포방법(Firebase Cloud Functions때문에 Blaze 요금제로 설정해야함)

# 작업 기록

- 파이어스토어 처음 사용
- 규칙 + api
- 구글에드센스
