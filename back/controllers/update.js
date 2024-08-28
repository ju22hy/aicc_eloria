// const bcrypt = require('bcrypt');
// const pool = require('../database/database');

// exports.update = async (req, res) => {
//   const { password, contact } = req.body;
//   const email = req.user.email; // 세션에서 현재 사용자의 이메일 가져오기

//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // 데이터베이스 업데이트
//     const result = await pool.query(
//       'UPDATE aicc_5team SET password = $1, phone_number = $2 WHERE email = $3 RETURNING *',
//       [hashedPassword, contact, email]
//     );

//     const updatedUser = result.rows[0];
//     return res.status(200).json({
//       message: '구글로 회원가입이 완료되었습니다.',
//       user: updatedUser,
//     });
//   } catch (error) {
//     return res.status(500).json({ message: '서버 오류', error: error.message });
//   }
// };
