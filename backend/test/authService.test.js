const test = require('node:test');
const assert = require('node:assert/strict');
const { loginUser, verifyToken } = require('../src/services/authService');

test('loginUser returns a valid token and role for an admin user', async () => {
  const result = await loginUser('admin@equityplus.com', 'admin123');

  assert.equal(result.success, true);
  assert.equal(result.user.role, 'admin');
  assert.match(result.token, /^[A-Za-z0-9._-]+$/);

  const payload = verifyToken(result.token);
  assert.equal(payload.email, 'admin@equityplus.com');
  assert.equal(payload.role, 'admin');
});

test('loginUser rejects invalid credentials', async () => {
  const result = await loginUser('unknown@example.com', 'wrong');

  assert.equal(result.success, false);
  assert.equal(result.message, 'Invalid email or password');
});
