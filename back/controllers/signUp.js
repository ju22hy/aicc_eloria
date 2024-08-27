const database = require('../database/database'); // database 불러오기
const bcrypt = require('bcrypt');

async function signUp(req, res) {
  const { nickname, email, password, phone_number } = req.body;
  const user_key = 'basket_key';
  try {
    const existingUser = await database.query(
      'SELECT * FROM aicc_5team WHERE email = $1 OR nickname = $2 OR phone_number = $3',
      [email, nickname, phone_number]
    );

    if (existingUser.rows.length > 0) {
      return res
        .status(400)
        .json({ error: '이미 존재하는 이메일, 닉네임 또는 전화번호입니다.' });
    }

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
    } else {
      res.status(500).json({ error: '서버 오류' });
    }
  }
}

module.exports = { signUp };
