import { QrCode, Star, Download } from "lucide-react";
import appMockup from "../assets/images/app_mockup_3d.png";
import { NavLink } from "react-router-dom";

const AppDownloadBanner = () => {
  return (
    <div className="w-full bg-slate-950 py-20 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden border-t border-slate-900">
      {/* Radial blur backgrounds */}
      <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950/40 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Download the <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">Equity Plus Mobile App</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                Experience ultra-fast order execution, live market quotes, one-touch SIP investments, and instant notification alerts on iOS and Android.
              </p>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-b border-slate-800 py-4">
                <div>
                  <div className="flex items-center gap-1 text-emerald-400 font-extrabold text-lg sm:text-xl">
                    <span>4.8</span>
                    <Star className="h-4 w-4 fill-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-400 font-semibold">Play Store Rating</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-white">500K+</div>
                  <div className="text-xs text-slate-400 font-semibold">Active Downloads</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-extrabold text-emerald-400">99.99%</div>
                  <div className="text-xs text-slate-400 font-semibold">System Uptime</div>
                </div>
              </div>

              {/* Download Buttons & QR Code Container */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
                <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                  <NavLink
                    to="/sign"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-extrabold text-sm transition-all duration-300 shadow-lg"
                  >
                    <Download className="h-4 w-4" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold text-slate-500">Download for</div>
                      <div className="text-sm font-extrabold text-slate-900 leading-none">Android APK</div>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/sign"
                    className="flex-1 sm:flex-none flex items-center justify-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-sm border border-slate-700 transition-all duration-300 shadow-lg"
                  >
                    <Download className="h-4 w-4 text-emerald-400" />
                    <div className="text-left">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Download for</div>
                      <div className="text-sm font-extrabold text-white leading-none">iOS App Store</div>
                    </div>
                  </NavLink>
                </div>

                {/* QR Code Scanner Badge */}
                <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900 border border-slate-800">
                  <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                    <QrCode className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Scan to Install</div>
                    <div className="text-[11px] text-slate-400">Instant QR Mobile Link</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Graphic Mockup Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-emerald-500 to-indigo-500 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <img
                  src={appMockup}
                  alt="Equity Plus Mobile App"
                  className="relative h-[420px] sm:h-[480px] object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadBanner;
