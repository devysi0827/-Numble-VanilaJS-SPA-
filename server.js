const express = require("express");
const path = require("path");

const app = express();

// middleware 설정 앞으로 모든 파일은 /src 경로를 기준으로 찾아올 것임
app.use("/src", express.static(path.resolve(__dirname, "src",)));

// express route
// get method
app.get("/*", (req, res) => {
  // dirname === 현재폴더 (numble_vanila_spa)
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// // server 띄우기
app.listen(process.env.PORT || 4000, () => console.log("Server running ...."));
