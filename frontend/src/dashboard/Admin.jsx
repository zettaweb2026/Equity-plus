import  { useState } from 'react';
import { FiSearch, FiLogOut, FiUsers, FiBarChart2, FiDollarSign, FiUserPlus, FiMenu } from 'react-icons/fi';

const Admin = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('overview');
  const [activeAside, setActiveAside] = useState('overview');

  const signups = [
    { id: 1, name: 'Jane Doe', email: 'jane@example.com', joined: '2026-07-01', plan: 'Pro' },
    { id: 2, name: 'John Smith', email: 'john@example.com', joined: '2026-06-29', plan: 'Basic' },
    { id: 3, name: 'Alex Roe', email: 'alex@example.com', joined: '2026-06-25', plan: 'Pro' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 flex flex-col">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              className="md:hidden p-2 rounded hover:bg-gray-100"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
            >
              <FiMenu size={18} />
            </button>
            <div className="text-xl font-bold">Equity Plus</div>
            <nav className="hidden sm:flex gap-3 text-sm text-gray-600">
              <button
                className={`flex items-center gap-1 px-2 py-1 rounded ${activeNav === 'overview' ? 'text-indigo-600 bg-indigo-50' : 'hover:text-gray-900'}`}
                onClick={() => setActiveNav('overview')}
              ><FiBarChart2 />Overview</button>
              <button
                className={`flex items-center gap-1 px-2 py-1 rounded ${activeNav === 'users' ? 'text-indigo-600 bg-indigo-50' : 'hover:text-gray-900'}`}
                onClick={() => setActiveNav('users')}
              ><FiUsers />Users</button>
              <button
                className={`flex items-center gap-1 px-2 py-1 rounded ${activeNav === 'calculators' ? 'text-indigo-600 bg-indigo-50' : 'hover:text-gray-900'}`}
                onClick={() => setActiveNav('calculators')}
              ><FiUserPlus />Calculators</button>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center border border-gray-200 rounded px-2 py-1 text-sm text-gray-600">
              <FiSearch className="mr-2" />
              <input className="outline-none" placeholder="Search..." />
            </div>
            <button className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-1 rounded text-sm"><FiLogOut />Logout</button>
          </div>
        </div>
      </header>

    
      <div className={`fixed inset-0 z-30 transition-opacity ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)}></div>
        <aside className={`absolute left-0 top-0 bottom-0 w-64 bg-white p-4 transform transition-transform ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex items-center justify-between mb-4">
            <div className="font-bold">Equity Plus</div>
            <button className="p-2" onClick={() => setMobileOpen(false)}>Close</button>
          </div>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>
              <button className={`w-full text-left py-2 px-2 rounded ${activeAside === 'overview' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`} onClick={() => { setActiveAside('overview'); setMobileOpen(false); }}>
                Overview
              </button>
            </li>
            <li>
              <button className={`w-full text-left py-2 px-2 rounded ${activeAside === 'users' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`} onClick={() => { setActiveAside('users'); setMobileOpen(false); }}>
                Users
              </button>
            </li>
            <li>
              <button className={`w-full text-left py-2 px-2 rounded ${activeAside === 'calculators' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`} onClick={() => { setActiveAside('calculators'); setMobileOpen(false); }}>
                Calculators
              </button>
            </li>
            <li>
              <button className={`w-full text-left py-2 px-2 rounded ${activeAside === 'settings' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`} onClick={() => { setActiveAside('settings'); setMobileOpen(false); }}>
                Settings
              </button>
            </li>
          </ul>
        </aside>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 w-full py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <aside className="hidden md:block md:w-56 bg-white p-4 rounded shadow-sm">
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <button className={`w-full text-left py-2 px-2 rounded ${activeAside === 'overview' ? 'bg-indigo-50 text-indigo-700 font-medium' : 'hover:bg-gray-50'}`} onClick={() => setActiveAside('overview')}>Overview</button>
              </li>
              <li>
                <button className={`w-full text-left py-2 px-2 rounded ${activeAside === 'users' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`} onClick={() => setActiveAside('users')}>Users</button>
              </li>
              <li>
                <button className={`w-full text-left py-2 px-2 rounded ${activeAside === 'calculators' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`} onClick={() => setActiveAside('calculators')}>Calculators</button>
              </li>
              <li>
                <button className={`w-full text-left py-2 px-2 rounded ${activeAside === 'settings' ? 'bg-indigo-50 text-indigo-700' : 'hover:bg-gray-50'}`} onClick={() => setActiveAside('settings')}>Settings</button>
              </li>
            </ul>
          </aside>

          <section className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">Manage users, view activity and site stats</p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded shadow flex items-center gap-4">
                <div className="p-3 rounded bg-indigo-50 text-indigo-600"><FiUsers size={20} /></div>
                <div>
                  <div className="text-sm text-gray-500">Users</div>
                  <div className="mt-2 text-xl font-bold">1,234</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow flex items-center gap-4">
                <div className="p-3 rounded bg-green-50 text-green-600"><FiBarChart2 size={20} /></div>
                <div>
                  <div className="text-sm text-gray-500">Active Sessions</div>
                  <div className="mt-2 text-xl font-bold">42</div>
                </div>
              </div>
              <div className="bg-white p-4 rounded shadow flex items-center gap-4">
                <div className="p-3 rounded bg-yellow-50 text-yellow-600"><FiDollarSign size={20} /></div>
                <div>
                  <div className="text-sm text-gray-500">Revenue</div>
                  <div className="mt-2 text-xl font-bold">$12,345</div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-medium">Recent Signups</h2>
                <button className="text-sm text-indigo-600 hover:underline">View all</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {signups.map(s => (
                  <div key={s.id} className="bg-white rounded shadow p-4 flex items-center gap-4 transition-transform hover:-translate-y-1">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center font-semibold">
                      {s.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{s.name}</div>
                          <div className="text-xs text-gray-500">{s.email}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-semibold">{s.plan}</div>
                          <div className="text-xs text-gray-400">{s.joined}</div>
                        </div>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <button className="text-xs px-2 py-1 rounded bg-indigo-50 text-indigo-600">Message</button>
                        <button className="text-xs px-2 py-1 rounded border text-gray-600">Profile</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-white border-t text-sm text-gray-500 py-4 text-center">
        © {new Date().getFullYear()} Equity Plus
      </footer>
    </div>
  );
};

export default Admin;