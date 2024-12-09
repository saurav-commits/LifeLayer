const express = require('express');
const { 
  getUserProfile, 
  updateUserProfile 
} = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// GET /api/users/profile (Protected Route)
router.get('/profile', authMiddleware, getUserProfile);

// PUT /api/users/profile (Protected Route)
router.put('/profile', authMiddleware, updateUserProfile);

module.exports = router;