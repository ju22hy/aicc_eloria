const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const pool = require('../database/database'); // 데이터베이스 연결

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:8080/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, displayName, emails } = profile;
        const email = emails[0].value;
        const password = '';
        const contact = '';

        const results = await pool.query(
          'INSERT INTO aicc_5team (user_key, nickname, email, password, phone_number) VALUES ($1, $2, $3, $4, $5) ON CONFLICT (email) DO UPDATE SET nickname = $2 RETURNING *',
          [id, displayName, email, password, contact]
        );
        const user = results.rows[0];
        return done(null, user);
      } catch (err) {
        done(err, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.email); // 세션에 저장할 데이터
});

passport.deserializeUser(async (email, done) => {
  try {
    const results = await pool.query(
      'SELECT * FROM aicc_5team WHERE email = $1',
      [email]
    );
    const user = results.rows[0];
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

module.exports = passport;
