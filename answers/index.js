const axios = require("axios");
const API_URL = "https://opentdb.com/api.php?amount=10";

(async () => {
  try {
    const response = await axios.get(API_URL);
    const results = response.data.results;
    console.log("クイズデータ : ", results);
  } catch (error) {
    console.log("エラー : ", error);
  }
})();
