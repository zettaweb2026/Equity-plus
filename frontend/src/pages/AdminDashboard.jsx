import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { user, logout } = useAuth();

  return (
    <section className="min-h-screen bg-slate-100 px-6 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-8 shadow-lg">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">Admin Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-900">Welcome, {user?.name || 'Admin'}</h1>
            <p className="mt-2 text-slate-600">You have access to the admin controls for Equity Plus.</p>
          </div>
          <button
            onClick={logout}
            className="rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Logout
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
