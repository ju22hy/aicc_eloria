const express = require('express');
const session = require('express-session');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const authRoutes = require('./routes/auth');
const PORT = 8080;
const app = express();
const productRoutes = require('./controllers/product');
const path = require('path');

app.use(
  session({
    secret: 'process.env.SECRET_KEY',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, httpOnly: true, maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.use((req, res, next) => {
  next();
});
// Passport 초기화
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes); // 구글 라우트
app.use('/api', productRoutes); // 상품 라우트
app.use('/img/back/img', express.static(path.join(__dirname, '/img')));

// 기존 라우트 설정
app.use('/basket', require('./routes/basketroutes'));
app.use('/login', require('./routes/loginroutes'));
app.use('/signup', require('./routes/signUproutes'));

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
}); // 서버 실행 시 메시지
