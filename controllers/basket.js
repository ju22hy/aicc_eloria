async function checkBasket(req, res) {
  try {
    const result = await pool.query(
      'SELECT * FROM aicc_5team WHERE user_key = $user_key',
      [user_key]
    );

    const user = result.rows[0];
    if (user.user_key !== 'basket_key') {
      return res.status(403).json({
        message: '장바구니 권한이 없습니다. 회원가입 후 이용해주세요.',
      });
    }
  } catch (error) {
    res.status(500).json({ message: '서버 오류가 발생했습니다.' });
  }
}

module.exports = { checkBasket };
