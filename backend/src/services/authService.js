const crypto = require('crypto');
const { findUserByEmail, seedUsers } = require('../models/userModel');

const SECRET = process.env.JWT_SECRET || 'equity-plus-dev-secret';

function base64UrlEncode(value) {
  return Buffer.from(value).toString('base64url');
}

function base64UrlDecode(value) {
  return Buffer.from(value, 'base64url').toString('utf8');
}

function createToken(payload) {
  const header = base64UrlEncode(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = base64UrlEncode(JSON.stringify(payload));
  const signature = crypto.createHmac('sha256', SECRET).update(`${header}.${body}`).digest('base64url');

  return `${header}.${body}.${signature}`;
}

function verifyToken(token) {
  if (!token) {
    return null;
  }

  const parts = token.split('.');
  if (parts.length !== 3) {
    return null;
  }

  const [header, body, signature] = parts;
  const expectedSignature = crypto.createHmac('sha256', SECRET).update(`${header}.${body}`).digest('base64url');

  if (signature !== expectedSignature) {
    return null;
  }

  try {
    return JSON.parse(base64UrlDecode(body));
  } catch (error) {
    return null;
  }
}

async function loginUser(email, password) {
  await seedUsers();
  const user = await findUserByEmail(email);

  if (!user || user.password !== password) {
    return {
      success: false,
      message: 'Invalid email or password',
    };
  }

  const token = createToken({ sub: user.id || user._id.toString(), email: user.email, role: user.role, name: user.name });

  return {
    success: true,
    token,
    user: {
      id: user.id || user._id.toString(),
      email: user.email,
      name: user.name,
      role: user.role,
    },
  };
}

module.exports = {
  loginUser,
  verifyToken,
};
