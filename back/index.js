const express = require('express');
const cors = require('cors');
const PORT = '8080';
const cookieParser = require('cookie-parser');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use(require('./routes/postRoutes'));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); // 서버 실행 시 메시지
