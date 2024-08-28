const express = require('express');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const authRoutes = require('./routes/auth');

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(
  session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Passport 초기화
app.use(passport.initialize());
app.use(passport.session());

// 기존 라우트 설정
app.use('/auth', authRoutes); // 구글 라우트
app.use('/basket', require('./routes/basketroutes'));
app.use('/login', require('./routes/loginroutes'));
app.use('/signup', require('./routes/signUproutes'));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); // 서버 실행 시 메시지
