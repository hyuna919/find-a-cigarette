// Firebase SDK는 CommonJS 기반이라 require쓰는게 일반적.
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// CORS: 허용 URL
const cors = require("cors")({
  origin: ["https://cigarette-quiz-dc8e1.web.app", "http://localhost:3000"],
  credentials: true,
});

// Firebase Admin SDK 초기화
admin.initializeApp();

// Firestore에서 담배 데이터 가져오는 API
exports.getCigarettes = functions.https.onRequest(async (req, res) => {
  // CORS 설정
  cors(req, res, async () => {
    // 데이터 가져오기
    try {
      const snapshot = await admin.firestore().collection("cigarette").get();
      const data = snapshot.docs.map((doc) => doc.data());

      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Error fetching data" });
    }
  });
});
