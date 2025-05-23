const express = require('express');
const router = express.Router();
const WaitlistUser = require('../models/WaitlistUser');

// Login Page
router.get('/login', (req, res) => {
  res.render('login');
});

// Login Handler
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
    req.session.loggedIn = true;
    return res.redirect('/admin/dashboard');    
  }
  res.redirect('/admin/login');
});
// Logout route
router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).send('Could not log out.');
    }
    res.redirect('/admin/login');
  });
});

// Dashboard
router.get('/dashboard', async (req, res) => {
  if (!req.session.loggedIn) return res.redirect('/admin/login');

  const users = await WaitlistUser.find().sort({ createdAt: -1 });
  res.render('dashboard', { users });
});

module.exports = router;
