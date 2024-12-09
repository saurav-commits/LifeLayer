const User = require('../models/User');

// Get User Profile
exports.getUserProfile = async (req, res) => {
  try {
    // req.user is set by authMiddleware
    const user = await User.findById(req.user._id).select('-password');
    
    if (!user) {
      return res.status(404).json({ 
        message: 'User not found' 
      });
    }

    res.json({
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePicture: user.profilePicture
      }
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error retrieving profile', 
      error: error.message 
    });
  }
};

// Update User Profile
exports.updateUserProfile = async (req, res) => {
  try {
    const { firstName, lastName, profilePicture } = req.body;

    // Find and update user
    const user = await User.findByIdAndUpdate(
      req.user._id, 
      { 
        firstName, 
        lastName, 
        profilePicture 
      }, 
      { 
        new: true,  // Return updated document
        runValidators: true  // Run model validations
      }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ 
        message: 'User not found' 
      });
    }

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        profilePicture: user.profilePicture
      }
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error updating profile', 
      error: error.message 
    });
  }
};