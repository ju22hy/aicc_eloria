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

// Correct routes
app.use('/basket', require('./routes/basketroutes'));
app.use('/login', require('./routes/loginroutes'));
app.use('/signup', require('./routes/signUproutes'));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); // 서버 실행 시 메시지