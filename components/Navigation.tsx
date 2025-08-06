import Image from "next/image";
import { LogOut, TrendingUp, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const Navigation: React.FC<{
  user: User | null;
  onSignIn: () => void;
  onSignOut: () => void;
}> = ({ user, onSignIn, onSignOut }) => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/30 shadow-lg">
    <div className="absolute inset-0 bg-gradient-to-r from-[#0dae94]/5 via-teal-500/5 to-cyan-500/5 backdrop-blur-xl"></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <Image
              src="/assets/assexxlogo.png"
              alt="AssexMarket Logo"
              width={40}
              height={40}
              className="object-contain"
              priority
              onError={() => {
                // Fallback handled by Next.js Image component
              }}
            />
            <TrendingUp className="h-8 w-8 text-white hidden" />
            <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-[#0dae94] bg-clip-text text-transparent">
              AssexMarket
            </span>
          </div>
          <span className="hidden sm:inline-flex bg-[#0dae94]/10 text-[#0dae94] border border-[#0dae94]/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-medium">
            Trading Competitions
          </span>
        </div>

        <div className="flex items-center space-x-4">
          {user ? (
            <div className="flex items-center space-x-3">
              <Avatar className="ring-2 ring-[#0dae94]/30">
                <AvatarFallback className="bg-gradient-to-br from-[#0dae94]/20 to-teal-500/20 backdrop-blur-sm text-[#0dae94] font-semibold border border-[#0dae94]/20">
                  {user.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="hidden sm:block text-gray-700">
                <div className="text-sm font-medium">{user.name}</div>
                <div className="text-xs text-gray-500">{user.email}</div>
              </div>
              <button
                onClick={onSignOut}
                className="text-gray-600 hover:bg-gray-100/50 backdrop-blur-sm border border-transparent hover:border-gray-200/50 px-3 py-2 inline-flex items-center justify-center rounded-md font-medium transition-colors"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <button
              onClick={onSignIn}
              className="bg-gradient-to-r from-[#0dae94] to-teal-600 text-white hover:from-[#0dae94]/90 hover:to-teal-600/90 font-semibold px-4 py-2 inline-flex items-center justify-center rounded-md transition-colors shadow-lg hover:shadow-[#0dae94]/25 border border-white/20 backdrop-blur-sm"
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  </nav>
);
