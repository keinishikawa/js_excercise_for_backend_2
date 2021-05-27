const axios = require("axios");

axios
  .get("https://opentdb.com/api.php?amount=10")
  .then(response => {
    console.log("クイズデータ：", response.data.results);
  })
  .catch(error => {
    console.log("エラー：", error);
  });
