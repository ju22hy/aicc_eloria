const database = require('../database/database');

// 장바구니 권한 조회
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

// 장바구니 추가
exports.addToBasket = async (req, res) => {
  const email = req.body.email;
  const { productid } = req.body;

  try {
    // 장바구니에 같은 상품이 이미 있는지 확인
    const checkExist = await database.query(
      'SELECT * FROM basket WHERE email = $1 AND productid = $2',
      [email, productid]
    );

    if (checkExist.rows.length > 0) {
      return res
        .status(400)
        .json({ message: '이미 장바구니에 있는 상품입니다.' });
    }

    // 장바구니에 상품 추가
    await database.query(
      'INSERT INTO basket (email, productid) VALUES ($1, $2)',
      [email, productid]
    );

    res.status(200).json({ message: '상품이 장바구니에 추가되었습니다.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 사용자 별 장바구니 조회
exports.getBasket = async (req, res) => {
  const email = req.body.email;

  try {
    const result = await database.query(
      `SELECT 
         product.productid,
         product.productname,
         product.productprice,
         product.productimage
       FROM 
         basket
       JOIN 
         product ON basket.productid = product.productid
       WHERE 
         basket.email = $1`,
      [email]
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 장바구니 삭제
exports.removeFromBasket = async (req, res) => {
  const email = req.body.email;
  const { productid } = req.body;

  try {
    // 장바구니에서 특정 상품 삭제
    const result = await database.query(
      'DELETE FROM basket WHERE email = $1 AND productid = $2',
      [email, productid]
    );

    if (result.rowCount === 0) {
      return res
        .status(404)
        .json({ message: '장바구니에 해당 상품이 없습니다.' });
    }

    res.status(200).json({ message: '상품이 장바구니에서 삭제되었습니다.' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
