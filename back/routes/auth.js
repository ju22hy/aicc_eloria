const express = require('express');
const router = express.Router();
const passport = require('../controllers/google'); // Google Passport 설정 불러오기
const bcrypt = require('bcrypt');
const pool = require('../database/database');

router.post('/googleinfo', async (req, res) => {
  const { email, password, contact } = req.body;
  try {
    const user_key = 'basket_key';
    const hashedPassword = await bcrypt.hash(password, 10);

    // 데이터베이스 업데이트
    await pool.query(
      `INSERT INTO aicc_5team (user_key, nickname, email, password, phone_number) 
       VALUES ($1, $2, $3, $4, $5)
       ON CONFLICT (email) 
       DO UPDATE SET user_key = EXCLUDED.user_key, password = EXCLUDED.password, phone_number = EXCLUDED.phone_number
       RETURNING *`,
      [user_key, null, email, hashedPassword, contact]
    );

    res.status(200).json({
      message: '구글로 회원가입이 완료되었습니다.',
    });
  } catch (error) {
    console.error('Database error:', error.stack);
    res.status(500).json({ message: '서버 오류', error: error.message });
  }
});

// Google 로그인 경로
router.get(
  '/google',
  (req, res, next) => {
    // console.log('Google login initiated');
    next();
  },
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

// Google 로그인 콜백 경로
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    res.redirect('http://localhost:3000/googleinfo'); // 로그인 성공 후 리디렉션할 경로
  }
);

module.exports = router;
