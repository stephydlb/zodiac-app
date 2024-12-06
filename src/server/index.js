const express = require('express');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const db = new sqlite3.Database('./zodiac.db');

app.post('/api/signup', async (req, res) => {
  const { email, password, zodiacSign } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  
  db.run('INSERT INTO users (email, password_hash, zodiac_sign) VALUES (?, ?, ?)',
    [email, passwordHash, zodiacSign],
    (err) => {
      if (err) return res.status(400).json({ error: 'Email already exists' });
      res.status(201).json({ message: 'User created successfully' });
    });
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  
  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) return res.status(401).json({ error: 'Invalid credentials' });
    
    const token = jwt.sign({ userId: user.id }, 'your-secret-key');
    res.json({ token });
  });
});
