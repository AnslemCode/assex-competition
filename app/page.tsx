"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AuthDialog } from "@/components/AuthenticationDialog";
import { CompetitionTabs } from "@/components/CompetitionTabs";
import { HeroBanner } from "@/components/HeroBanner";
import { RegistrationDialog } from "@/components/RegistrationDialog";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { TrendingUp } from "lucide-react";

const CompetitionPlatform: React.FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [isAuthDialogOpen, setIsAuthDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("upcoming");
  const [isRegistrationDialogOpen, setIsRegistrationDialogOpen] =
    useState(false);
  const [selectedCompetition, setSelectedCompetition] =
    useState<Competition | null>(null);
  const [activeTournament, setActiveTournament] = useState<Competition | null>(
    null
  );

  // Mock competitions data with standardized $100 entry fee
  const competitions: CompetitionsData = {
    upcoming: [
      {
        id: 1,
        title: "Q3 Forex Championship",
        description:
          "Test your forex trading skills in our quarterly championship",
        startDate: "2025-09-01",
        endDate: "2025-09-30",
        participants: 156,
        maxParticipants: 500,
        entryFee: 100,
        prizePool: 15000,
        status: "upcoming",
      },
      {
        id: 2,
        title: "Crypto Futures Challenge",
        description: "Advanced cryptocurrency futures trading competition",
        startDate: "2025-08-15",
        endDate: "2025-08-31",
        participants: 89,
        maxParticipants: 200,
        entryFee: 100,
        prizePool: 8000,
        status: "upcoming",
      },
      {
        id: 3,
        title: "Stock Market Sprint",
        description: "Fast-paced stock trading competition for beginners",
        startDate: "2025-08-20",
        endDate: "2025-09-05",
        participants: 234,
        maxParticipants: 300,
        entryFee: 100,
        prizePool: 5000,
        status: "upcoming",
      },
    ],
    inprogress: [
      {
        id: 4,
        title: "Summer Trading League",
        description: "Multi-Assex trading competition running all summer",
        startDate: "2025-06-01",
        endDate: "2025-08-31",
        participants: 445,
        maxParticipants: 500,
        entryFee: 100,
        prizePool: 25000,
        status: "inprogress",
      },
      {
        id: 5,
        title: "Day Trading Masters",
        description:
          "Intensive day trading competition for experienced traders",
        startDate: "2025-07-15",
        endDate: "2025-08-15",
        participants: 128,
        maxParticipants: 150,
        entryFee: 100,
        prizePool: 12000,
        status: "inprogress",
      },
    ],
    finished: [
      {
        id: 6,
        title: "Q2 Global Challenge",
        description:
          "Our biggest quarterly competition with global participation",
        startDate: "2025-04-01",
        endDate: "2025-06-30",
        participants: 789,
        maxParticipants: 1000,
        entryFee: 100,
        prizePool: 50000,
        status: "finished",
        winner: "TraderPro2025",
      },
      {
        id: 7,
        title: "Options Strategy Contest",
        description: "Advanced options trading strategy competition",
        startDate: "2025-03-01",
        endDate: "2025-05-31",
        participants: 267,
        maxParticipants: 300,
        entryFee: 100,
        prizePool: 18000,
        status: "finished",
        winner: "OptionsGuru",
      },
    ],
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleAuthenticate = (email: string, code?: string) => {
    const userName = email.split("@")[0];
    setUser({ email, name: userName });
    toast.success(`Welcome back, ${userName}!`);
  };

  const handleSignOut = () => {
    setUser(null);
    setActiveTournament(null);
    // Navigate to home and scroll to top
    router.push("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
    toast.success("You have been signed out successfully");
  };

  const handleRegister = (competitionId: number) => {
    if (!user) {
      setIsAuthDialogOpen(true);
      toast.error("Please sign in to register for competitions");
      return;
    }

    const competition = [
      ...competitions.upcoming,
      ...competitions.inprogress,
      ...competitions.finished,
    ].find((comp) => comp.id === competitionId);

    setSelectedCompetition(competition || null);
    setIsRegistrationDialogOpen(true);
  };

  const handleConfirmRegistration = (
    competitionId: number,
    entryAmount: number
  ) => {
    if (selectedCompetition) {
      // Set the active tournament
      setActiveTournament(selectedCompetition);

      // Store tournament data in localStorage for the dashboard page
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "activeTournament",
          JSON.stringify(selectedCompetition)
        );
        localStorage.setItem("user", JSON.stringify(user));
      }

      toast.success(
        `Successfully registered for ${selectedCompetition.title}!`,
        {
          description: `Entry fee: $${entryAmount} | Competition started!`,
          action: {
            label: "View Dashboard",
            onClick: () => navigateToDashboard(),
          },
        }
      );

      // Navigate to dashboard immediately
      navigateToDashboard();

      // Close the registration dialog
      setIsRegistrationDialogOpen(false);
      setSelectedCompetition(null);
    }
  };

  const navigateToDashboard = () => {
    // Use router.push to navigate to dashboard
    router.push("/dashboard");
    // Ensure page starts at top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "auto" });
    }, 100);
  };

  const EnhancedNavigation: React.FC = () => (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/30 shadow-lg">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0dae94]/5 via-teal-500/5 to-cyan-500/5 backdrop-blur-xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => {
                router.push("/");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              }}
            >
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
                {activeTournament && (
                  <button
                    onClick={navigateToDashboard}
                    className="bg-gradient-to-r from-[#0dae94]/10 to-teal-500/10 text-[#0dae94] border border-[#0dae94]/20 backdrop-blur-sm px-3 py-1.5 rounded-md text-sm font-medium hover:from-[#0dae94]/20 hover:to-teal-500/20 transition-all"
                  >
                    View Active Tournament
                  </button>
                )}
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0dae94]/20 to-teal-500/20 backdrop-blur-sm flex items-center justify-center text-[#0dae94] font-semibold border border-[#0dae94]/20">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div className="hidden sm:block text-gray-700">
                  <div className="text-sm font-medium">{user.name}</div>
                  <div className="text-xs text-gray-500">{user.email}</div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="text-gray-600 hover:bg-gray-100/50 backdrop-blur-sm border border-transparent hover:border-gray-200/50 px-3 py-2 inline-flex items-center justify-center rounded-md font-medium transition-colors"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthDialogOpen(true)}
                className="bg-gradient-to-r from-[#0dae94] to-teal-600 text-white hover:from-[#0dae94]/90 hover:to-teal-600/90 font-semibold px-4 py-2 inline-flex items-center justify-center rounded-md transition-colors shadow-lg hover:shadow-[#0dae94]/25 border border-white/20 backdrop-blur-sm"
              >
                <svg
                  className="h-4 w-4 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <EnhancedNavigation />

      <HeroBanner />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CompetitionTabs
          competitions={competitions}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          onRegister={handleRegister}
          isLoading={isLoading}
        />
      </div>

      <AuthDialog
        isOpen={isAuthDialogOpen}
        onClose={() => setIsAuthDialogOpen(false)}
        onAuthenticate={handleAuthenticate}
      />

      <RegistrationDialog
        isOpen={isRegistrationDialogOpen}
        onClose={() => setIsRegistrationDialogOpen(false)}
        competition={selectedCompetition}
        onConfirmRegistration={handleConfirmRegistration}
      />
    </div>
  );
};

export default CompetitionPlatform;
