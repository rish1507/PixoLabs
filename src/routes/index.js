// src/routes/index.js
const express = require('express');
const router = express.Router();
const authRoutes = require('./auth.routes');
const emailRoutes = require('./email.routes');
const aiRoutes = require('./ai.routes');

router.use('/auth', authRoutes);
router.use('/emails', emailRoutes);
router.use('/ai', aiRoutes);

module.exports = router;

