// export const HeroBanner: React.FC = () => (
//   <div className="relative overflow-hidden bg-gradient-to-r from-[#0dae94] via-teal-600 to-cyan-600 text-white">
//     <div className="absolute inset-0 bg-black/10"></div>
//     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
//       <div className="text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-6">
//           Trading Competitions
//           <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
//             Win Big Prizes
//           </span>
//         </h1>
//         <p className="text-xl md:text-2xl mb-8 text-teal-50 max-w-3xl mx-auto">
//           Compete with traders worldwide, showcase your skills, and win
//           substantial cash prizes. Standard entry fee of $100 with prize pools
//           up to $50,000.
//         </p>
//         <div className="flex flex-wrap justify-center gap-8 text-center">
//           <div>
//             <div className="text-3xl font-bold text-yellow-400">$150,000+</div>
//             <div className="text-teal-100">Total Prize Pool</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-yellow-400">2,000+</div>
//             <div className="text-teal-100">Active Traders</div>
//           </div>
//           <div>
//             <div className="text-3xl font-bold text-yellow-400">15</div>
//             <div className="text-teal-100">Live Competitions</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

import { ChevronDown } from "lucide-react";

const TrophySVG = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="trophyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ffd700", stopOpacity: 1 }} />
        <stop offset="30%" style={{ stopColor: "#ffed4e", stopOpacity: 1 }} />
        <stop offset="70%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#f59e0b", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="baseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#9ca3af", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#6b7280", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="goldGlow">
        <feGaussianBlur stdDeviation="2" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Trophy cup */}
    <path
      d="M30 25 L70 25 L68 55 C68 62 62 68 55 68 L45 68 C38 68 32 62 32 55 L30 25 Z"
      fill="url(#trophyGradient)"
      filter="url(#goldGlow)"
    />

    {/* Trophy handles */}
    <path
      d="M25 30 C20 30 16 34 16 39 C16 44 20 48 25 48 L30 48 L30 30 L25 30 Z"
      fill="url(#trophyGradient)"
    />
    <path
      d="M75 30 C80 30 84 34 84 39 C84 44 80 48 75 48 L70 48 L70 30 L75 30 Z"
      fill="url(#trophyGradient)"
    />

    {/* Trophy base */}
    <rect
      x="35"
      y="68"
      width="30"
      height="8"
      rx="4"
      fill="url(#baseGradient)"
    />
    <rect
      x="25"
      y="76"
      width="50"
      height="10"
      rx="5"
      fill="url(#baseGradient)"
    />

    {/* Trophy shine */}
    <ellipse cx="45" cy="40" rx="8" ry="15" fill="rgba(255,255,255,0.3)" />

    {/* Dollar symbol in trophy */}
    <text
      x="50"
      y="50"
      textAnchor="middle"
      fontSize="16"
      fill="white"
      fontWeight="bold"
    >
      $
    </text>

    {/* Sparkles */}
    <circle
      cx="20"
      cy="20"
      r="1.5"
      fill="#ffd700"
      opacity="0.8"
      className="animate-pulse"
    />
    <circle
      cx="80"
      cy="25"
      r="2"
      fill="#ffd700"
      opacity="0.6"
      className="animate-ping"
    />
    <circle
      cx="85"
      cy="65"
      r="1"
      fill="#ffd700"
      opacity="0.7"
      className="animate-pulse"
    />
  </svg>
);

// const DollarSVG = ({ className }: { className: string }) => (
//   <svg
//     className={className}
//     viewBox="0 0 100 100"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <defs>
//       <linearGradient id="dollarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" style={{ stopColor: "#22c55e", stopOpacity: 1 }} />
//         <stop offset="50%" style={{ stopColor: "#16a34a", stopOpacity: 1 }} />
//         <stop offset="100%" style={{ stopColor: "#15803d", stopOpacity: 1 }} />
//       </linearGradient>
//       <linearGradient id="coinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//         <stop offset="0%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />
//         <stop offset="100%" style={{ stopColor: "#f59e0b", stopOpacity: 1 }} />
//       </linearGradient>
//     </defs>
//     {/* Outer golden ring */}
//     <circle cx="50" cy="50" r="42" fill="url(#coinGradient)" />
//     <circle cx="50" cy="50" r="38" fill="url(#dollarGradient)" />
//     {/* Inner highlight */}
//     <circle
//       cx="50"
//       cy="50"
//       r="34"
//       fill="none"
//       stroke="rgba(255,255,255,0.3)"
//       strokeWidth="2"
//     />
//     {/* Dollar sign */}
//     <path
//       d="M47 25v8m0 34v8m-8-25h16c4 0 7-3 7-7s-3-7-7-7H43c-4 0-7 3-7 7s3 7 7 7h14c4 0 7 3 7 7s-3 7-7 7H43"
//       stroke="white"
//       strokeWidth="5"
//       strokeLinecap="round"
//       fill="none"
//     />
//     {/* Sparkle effects */}
//     <circle cx="25" cy="30" r="2" fill="white" opacity="0.8" />
//     <circle cx="75" cy="25" r="1.5" fill="white" opacity="0.6" />
//     <circle cx="80" cy="60" r="2" fill="white" opacity="0.7" />
//     <circle cx="20" cy="70" r="1" fill="white" opacity="0.5" />
//   </svg>
// );

// Beautiful animated crown instead of trophy
const CrownSVG = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 120 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ffd700", stopOpacity: 1 }} />
        <stop offset="30%" style={{ stopColor: "#ffed4e", stopOpacity: 1 }} />
        <stop offset="60%" style={{ stopColor: "#fbbf24", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#f59e0b", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="gemGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#dc2626", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#b91c1c", stopOpacity: 1 }} />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>

    {/* Crown base */}
    <path
      d="M20 65 L30 45 L45 55 L60 30 L75 55 L90 45 L100 65 L95 75 L25 75 Z"
      fill="url(#crownGradient)"
      filter="url(#glow)"
    />

    {/* Crown band */}
    <rect
      x="20"
      y="65"
      width="80"
      height="15"
      rx="3"
      fill="url(#crownGradient)"
    />

    {/* Gems */}
    <circle cx="35" cy="55" r="4" fill="url(#gemGradient)" />
    <circle cx="60" cy="40" r="5" fill="url(#gemGradient)" />
    <circle cx="85" cy="55" r="4" fill="url(#gemGradient)" />

    {/* Sparkles */}
    <g className="animate-pulse">
      <path
        d="M25 35 L27 40 L32 38 L27 43 L25 48 L23 43 L18 38 L23 40 Z"
        fill="white"
        opacity="0.8"
      />
      <path
        d="M95 40 L97 45 L102 43 L97 48 L95 53 L93 48 L88 43 L93 45 Z"
        fill="white"
        opacity="0.6"
      />
      <path
        d="M60 15 L62 20 L67 18 L62 23 L60 28 L58 23 L53 18 L58 20 Z"
        fill="white"
        opacity="0.9"
      />
    </g>

    {/* Inner crown details */}
    <rect
      x="25"
      y="67"
      width="70"
      height="3"
      rx="1"
      fill="rgba(255,255,255,0.3)"
    />
    <circle cx="35" cy="55" r="2" fill="rgba(255,255,255,0.4)" />
    <circle cx="60" cy="40" r="2.5" fill="rgba(255,255,255,0.4)" />
    <circle cx="85" cy="55" r="2" fill="rgba(255,255,255,0.4)" />
  </svg>
);

const UsersSVG = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="usersGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#8b5cf6", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#7c3aed", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="35" cy="30" r="12" fill="url(#usersGradient)" />
    <circle cx="65" cy="30" r="12" fill="url(#usersGradient)" opacity="0.8" />
    <path
      d="M15 70c0-11.046 8.954-20 20-20s20 8.954 20 20v10H15V70z"
      fill="url(#usersGradient)"
    />
    <path
      d="M45 70c0-11.046 8.954-20 20-20s20 8.954 20 20v10H45V70z"
      fill="url(#usersGradient)"
      opacity="0.8"
    />
  </svg>
);

const ChartSVG = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="chartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#1d4ed8", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect
      x="20"
      y="60"
      width="12"
      height="30"
      fill="url(#chartGradient)"
      rx="2"
    />
    <rect
      x="38"
      y="45"
      width="12"
      height="45"
      fill="url(#chartGradient)"
      rx="2"
    />
    <rect
      x="56"
      y="30"
      width="12"
      height="60"
      fill="url(#chartGradient)"
      rx="2"
    />
    <rect
      x="74"
      y="20"
      width="12"
      height="70"
      fill="url(#chartGradient)"
      rx="2"
    />
    <path
      d="M15 25l15 10 15-8 15-12 15-5"
      stroke="#3b82f6"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
    />
    <circle cx="15" cy="25" r="3" fill="#1d4ed8" />
    <circle cx="30" cy="35" r="3" fill="#1d4ed8" />
    <circle cx="45" cy="27" r="3" fill="#1d4ed8" />
    <circle cx="60" cy="15" r="3" fill="#1d4ed8" />
    <circle cx="75" cy="10" r="3" fill="#1d4ed8" />
  </svg>
);

const CalendarSVG = ({ className }: { className: string }) => (
  <svg
    className={className}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="calendarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#ef4444", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#dc2626", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect
      x="20"
      y="25"
      width="60"
      height="55"
      rx="8"
      fill="url(#calendarGradient)"
    />
    <rect x="25" y="15" width="50" height="20" rx="4" fill="#f3f4f6" />
    <rect x="35" y="5" width="4" height="20" rx="2" fill="#6b7280" />
    <rect x="61" y="5" width="4" height="20" rx="2" fill="#6b7280" />
    <rect x="30" y="40" width="8" height="6" rx="1" fill="white" />
    <rect x="46" y="40" width="8" height="6" rx="1" fill="white" />
    <rect x="62" y="40" width="8" height="6" rx="1" fill="white" />
    <rect x="30" y="52" width="8" height="6" rx="1" fill="white" />
    <rect x="46" y="52" width="8" height="6" rx="1" fill="white" />
    <rect x="62" y="52" width="8" height="6" rx="1" fill="white" />
    <rect x="30" y="64" width="8" height="6" rx="1" fill="white" />
    <rect x="46" y="64" width="8" height="6" rx="1" fill="white" />
  </svg>
);

export const HeroBanner = () => {
  const scrollToNextSection = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-cyan-50 text-gray-800 min-h-[90vh]">
      {/* Dynamic Exciting Background */}
      <div className="absolute inset-0">
        {/* Animated geometric shapes */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-200/30 to-indigo-300/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-32 right-16 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-300/20 rounded-full blur-xl animate-float delay-300"></div>
        <div className="absolute bottom-32 left-32 w-28 h-28 bg-gradient-to-br from-purple-200/30 to-pink-300/20 rounded-full blur-lg animate-ping delay-700"></div>
        <div className="absolute bottom-40 right-40 w-36 h-36 bg-gradient-to-br from-yellow-200/30 to-orange-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>

        {/* Floating trading symbols */}
        <div className="absolute top-1/4 left-1/4 text-6xl text-emerald-300/20 animate-float delay-1000 font-bold">
          $
        </div>
        <div className="absolute top-1/3 right-1/4 text-5xl text-blue-300/20 animate-bounce delay-1500 font-bold">
          ₿
        </div>
        <div className="absolute bottom-1/3 left-1/3 text-4xl text-purple-300/20 animate-pulse delay-2000 font-bold">
          €
        </div>
        <div className="absolute bottom-1/4 right-1/3 text-7xl text-cyan-300/20 animate-float delay-2500 font-bold">
          ¥
        </div>

        {/* Moving chart lines */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10"
          viewBox="0 0 1000 800"
        >
          <path
            className="animate-dash"
            d="M50 400 Q250 200 450 300 T850 250"
            stroke="#0dae94"
            strokeWidth="3"
            fill="none"
            strokeDasharray="10,5"
          />
          <path
            className="animate-dash-reverse"
            d="M100 500 Q300 300 500 400 T900 350"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
          />
          <path
            className="animate-dash"
            d="M0 600 Q200 400 400 500 T800 450"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6,3"
          />
        </svg>

        {/* Floating particles */}
        <div className="absolute top-16 left-1/2 w-3 h-3 bg-emerald-400/40 rounded-full animate-ping delay-100"></div>
        <div className="absolute top-24 left-1/3 w-2 h-2 bg-blue-400/40 rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-40 right-1/4 w-4 h-4 bg-purple-400/40 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-yellow-400/40 rounded-full animate-ping delay-700"></div>
        <div className="absolute bottom-32 right-1/3 w-3 h-3 bg-pink-400/40 rounded-full animate-pulse delay-900"></div>

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col justify-center min-h-[90vh]">
        <div className="text-center">
          {/* Animated Crown */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-20 h-20 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl border border-gray-200/60 group-hover:scale-105 transition-all duration-300">
                <CrownSVG className="w-16 h-16 animate-pulse" />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-ping" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-emerald-300 to-teal-400 rounded-full animate-pulse delay-500" />
            </div>
          </div>

          {/* Professional Main Heading */}
          <div className="space-y-4 mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight">
              <span className="block bg-gradient-to-r from-[#0dae94] via-teal-600 to-cyan-600 bg-clip-text text-transparent drop-shadow-sm">
                AssexMarket Trading Competitions
              </span>
              {/* <span className="block bg-gradient-to-r from-[#0dae94] via-teal-600 to-cyan-600 bg-clip-text text-transparent mt-2">
                CHAMPIONSHIP
              </span> */}
            </h1>

            {/* Pulsing Prize Badge */}
            <div className="flex justify-center mt-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-500 rounded-full opacity-75 group-hover:opacity-100 animate-pulse blur-sm"></div>
                <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-3 rounded-full text-sm shadow-md">
                  <span className="flex items-center space-x-2">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Win Substantial Prizes</span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Subheading */}
          <p className="text-base md:text-lg mt-4 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Compete against elite traders worldwide. $100 entry fee. Prize pool
            up to $50,000.
          </p>

          {/* Enhanced Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
            {[
              {
                icon: <TrophySVG className="w-12 h-12" />,
                value: "$150,000+",
                label: "Total Prize Pool",
              },
              {
                icon: <UsersSVG className="w-12 h-12" />,
                value: "2,000+",
                label: "Active Traders",
              },
              {
                icon: <ChartSVG className="w-12 h-12" />,
                value: "15",
                label: "Live Competitions",
              },
              {
                icon: <CalendarSVG className="w-12 h-12" />,
                value: "$100",
                label: "Entry Fee",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="group bg-white/70 backdrop-blur-sm rounded-3xl p-6 border border-gray-200/80 hover:bg-white/90 hover:shadow-xl hover:border-gray-300/80 transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-gray-900 mb-1 text-center">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-sm text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Indicators with glow effect */}
          <div className="mt-16 flex justify-center items-center space-x-6">
            {[
              "bg-[#0dae94] shadow-[#0dae94]/30",
              "bg-blue-500 shadow-blue-500/30",
              "bg-purple-500 shadow-purple-500/30",
              "bg-pink-500 shadow-pink-500/30",
              "bg-indigo-500 shadow-indigo-500/30",
            ].map((color, idx) => (
              <div
                key={idx}
                className={`w-3 h-3 ${color} rounded-full animate-pulse shadow-lg`}
                style={{ animationDelay: `${idx * 200}ms` }}
              />
            ))}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="mt-12 flex justify-center">
            <button
              onClick={scrollToNextSection}
              className="animate-bounce hover:scale-110 transition-all duration-300 cursor-pointer group"
              aria-label="Scroll to explore more"
            >
              <div className="flex flex-col items-center text-gray-500 group-hover:text-gray-700 transition-colors duration-300 bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-gray-200/60 group-hover:border-gray-300/60 shadow-lg">
                <span className="text-xs font-medium mb-1">
                  Scroll to explore
                </span>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(1deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }

        @keyframes dash-reverse {
          to {
            stroke-dashoffset: 100;
          }
        }

        .animate-dash {
          animation: dash 15s linear infinite;
        }

        .animate-dash-reverse {
          animation: dash-reverse 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
