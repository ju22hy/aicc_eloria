const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');

const app = express();

// 세션 설정
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);

// Passport 초기화
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
      callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, displayName, emails, photos } = profile;
        const email = emails[0].value;
        const profilePhoto = photos[0].value;

        const results = await pool.query(
          `INSERT INTO google (google_id, display_name, email, profile_photo) 
       VALUES ($1, $2, $3, $4) 
       ON CONFLICT (google_id) 
       DO UPDATE SET display_name = $2, email = $3, profile_photo = $4 
       RETURNING *`,
          [id, displayName, email, profilePhoto]
        );
        const users = results.rows[0];
        res.status(201).json({
          id: users.id,
          displayName: users.displayName,
          email: users.email,
          profilePhoto: users.profilePhoto,
        });
      } catch (err) {
        return done(err, null);
      }
    }
  )
);

// 라우트 설정
app.get('/', (req, res) => {
  res.send('<a href="/auth/google"></a>');
});

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
