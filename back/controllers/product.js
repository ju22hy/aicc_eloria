const pool = require('../database/database');
const express = require('express');
const router = express.Router();

router.get('/products', async (req, res) => {
  try {
    // 필요한 컬럼만 선택해서 데이터베이스 쿼리
    const result = await pool.query(
      'SELECT productname, productprice, productimage, productcategory FROM product'
    );
    // 결과를 JSON 형태로 반환
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
