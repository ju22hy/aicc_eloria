const database = require('../database/database'); // database 불러오기
const bcrypt = require('bcrypt');

async function signUp(req, res) {
  const { nickname, email, password, phone_number } = req.body;
  const user_key = 'basket_key';
  try {
    // 비밀번호 암호화
    const hashedPassword = await bcrypt.hash(password, 10);

    // 데이터베이스에 사용자 정보 저장
    const result = await database.query(
      'INSERT INTO aicc_5team (user_key, nickname, email, password, phone_number) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user_key, nickname, email, hashedPassword, phone_number]
    );

    const user = result.rows[0];
    res.status(201).json({
      password: user.password,
      user_key: user.user_key,
      nickname: user.nickname,
      email: user.email,
      phone_number: user.phone_number,
    });
  } catch (error) {
    console.error('Error inserting data:', error);
    if (error.code === '23505') {
      // Unique violation error code
      res.status(400).json({ error: '이메일이 이미 존재합니다.' });
    } else {
      res.status(500).json({ error: '서버 오류' });
    }
  }
}

module.exports = { signUp };
