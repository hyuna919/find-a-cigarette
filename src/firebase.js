const API_URL =
  "https://us-central1-cigarette-quiz-dc8e1.cloudfunctions.net/getCigarettes";

export const fetchCigarettes = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
