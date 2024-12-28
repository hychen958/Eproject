const express = require('express');
const app = express();
const port = 3000;

// 處理 JSON 和 URL-encoded 請求
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 基本路由
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('這是關於頁面');
});

// 處理 POST 請求
app.post('/submit', (req, res) => {
  res.json({ message: '收到的數據', data: req.body });
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`伺服器正在 http://localhost:${port} 運行`);
});



22222