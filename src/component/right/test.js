const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// Connect to MongoDB (you need to have MongoDB running)
mongoose.connect('mongodb://localhost:27017/your-database-name', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;


const userService = require('../services/userService');

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    const userId = req.params.id;
    try {
      const user = await userService.getUserById(userId);
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createUser(req, res) {
    const userData = req.body;
    try {
      const newUser = await userService.createUser(userData);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateUser(req, res) {
    const userId = req.params.id;
    const updatedData = req.body;
    try {
      const updatedUser = await userService.updateUser(userId, updatedData);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteUser(req, res) {
    const userId = req.params.id;
    try {
      await userService.deleteUser(userId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();


const UserModel = require('../models/userModel');

class UserService {
  async getAllUsers() {
    return await UserModel.find();
  }

  async getUserById(userId) {
    return await UserModel.findById(userId);
  }

  async createUser(userData) {
    return await UserModel.create(userData);
  }

  async updateUser(userId, updatedData) {
    return await UserModel.findByIdAndUpdate(userId, updatedData, { new: true });
  }

  async deleteUser(userId) {
    return await UserModel.findByIdAndDelete(userId);
  }
}

module.exports = new UserService();


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;


const mongoose = require('mongoose');

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/your-database-name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the process if unable to connect to MongoDB
  }
};

module.exports = { connectToDatabase };
