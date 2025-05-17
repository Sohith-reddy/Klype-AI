const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const adminRoutes = require('./routes/admin');

const app = express();

app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: 'klype_secret',
    resave: false,
    saveUninitialized: true
}));

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/admin', adminRoutes);
// Import WaitlistUser model
const WaitlistUser = require('./models/WaitlistUser');

// API to handle waitlist form submission
app.post('/api/waitlist', async (req, res) => {
  const { name, email, linkedin } = req.body;

  if (!name || !email || !linkedin) {
    return res.status(404).json({ message: 'Please provide name, email, and LinkedIn URL' });
  }

  try {
    await WaitlistUser.create({ name, email, linkedin });
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Error saving waitlist user:', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
});

// Example admin routes file (optional, remove if not used)
// const adminRoutes = require('./routes/admin');
// app.use('/admin', adminRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
