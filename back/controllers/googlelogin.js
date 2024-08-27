const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const pool = require('../database/database');

// Passport 설정
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, displayName, emails, photos } = profile;
        const email = emails[0].value;

        const results = await pool.query(
          'INSERT INTO aicc_5team (user_key, nickname, email, password, phone_number) VALUES ($1, $2, $3, $4, $5) RETURNING *',
          [id, displayName, email, null, null]
        );
        const user = results.rows[0];
        return done(null, user);
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

function googleLoginRoutes(app) {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      res.redirect('/googleinfo'); // 로그인 성공 후 리디렉션할 경로
    }
  );
}

module.exports = googleLoginRoutes;
