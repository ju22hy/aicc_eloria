try {
  // 데이터베이스에서 사용자 조회
  const result = await pool.query('SELECT * FROM users WHERE email = $1', [
    email,
  ]);
  const user = result.rows[0];

  if (!user) {
    return res.status(401).json({ error: '가입되지 않은 회원입니다.' });
  }

  // 비밀번호 비교
  const match = await bcrypt.compare(password, user.password);

  if (match) {
    res.status(200).json({
      email: user.email,
      password: user.password,
    });
  } else {
    res.status(401).json({ error: '이메일 또는 비밀번호가 잘못되었습니다.' });
  }
} catch (error) {
  console.error('Error during login:', error);
  res.status(500).json({ error: '서버 오류' });
}
