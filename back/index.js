const express = require('express');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const googleLoginRoutes = require('./controllers/googlelogin'); // Google 로그인 경로

const PORT = 8080;
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// 세션 설정
app.use(
  session({
    secret: process.env.GOOGLE_CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

// Passport 초기화
app.use(passport.initialize());
app.use(passport.session());

// Google 로그인 라우트 설정
googleLoginRoutes(app);

// 기존 라우트 설정
app.use('/basket', require('./routes/basketroutes'));
app.use('/login', require('./routes/loginroutes'));
app.use('/signup', require('./routes/signUproutes'));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`)); // 서버 실행 시 메시지
