import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sign = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await login(formData.email, formData.password);
      if (result.user.role === 'admin') {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-dashboard');
      }
    } catch (err) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-5xl flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_60px_-20px_rgba(15,23,42,0.22)] lg:flex-row">
        <div className="flex flex-1 flex-col justify-center bg-gradient-to-b from-slate-900 to-slate-800 px-6 py-12 text-slate-100 sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Welcome back
          </p>

          <div className="mt-8 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
            <p className="text-sm font-medium">Demo credentials</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-200">
              <li>• Admin: admin@equityplus.com / admin123</li>
              <li>• User: user@equityplus.com / user123</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center px-6 py-12 sm:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">Equity Plus</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Log in to your account</h1>
          </div>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Email address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                />
              </div>

              {error && <p className="text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-500"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Sign;