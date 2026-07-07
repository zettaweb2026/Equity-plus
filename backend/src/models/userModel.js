const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

//just for testing purposes in case the database is not connected
const fallbackUsers = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@equityplus.com',
    password: 'admin123',
    role: 'admin',
  },
  {
    id: 2,
    name: 'Regular User',
    email: 'user@equityplus.com',
    password: 'user123',
    role: 'user',
  },
];

async function seedUsers() {
  if (mongoose.connection.readyState === 1) {
    const count = await User.countDocuments();

    if (count > 0) {
      return;
    }

    await User.create([
      {
        name: 'Admin User',
        email: 'admin@equityplus.com',
        password: 'admin123',
        role: 'admin',
      },
      {
        name: 'Regular User',
        email: 'user@equityplus.com',
        password: 'user123',
        role: 'user',
      },
    ]);
  }
}

async function findUserByEmail(email) {
  if (!email) {
    return null;
  }

  if (mongoose.connection.readyState === 1) {
    return User.findOne({ email: email.toLowerCase() }).lean();
  }

  return fallbackUsers.find((user) => user.email.toLowerCase() === email.toLowerCase()) || null;
}

module.exports = {
  User,
  seedUsers,
  findUserByEmail,
};
