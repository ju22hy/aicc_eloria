const database = require('../database/database');

exports.checkBasket = async (req, res) => {
  try {
    const { rows } = await database.query(
      'SELECT * FROM aicc_5team WHERE user_key = $1',
      [req.body.user_key]
    );

    const user_key = rows[0].user_key;
    if (user_key !== 'basket_key') {
      return res.status(404).json({
        message: '장바구니 권한이 없습니다. 회원가입 후 이용해주세요.',
      });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
