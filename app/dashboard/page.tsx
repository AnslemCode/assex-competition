"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  ArrowLeft,
  Trophy,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Clock,
  Target,
  BarChart3,
  Medal,
  Zap,
  Users,
  Star,
  Crown,
  Award,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { LoaderOne } from "@/components/ui/loader";
import { useRouter } from "next/navigation";

interface Trade {
  id: number;
  symbol: string;
  type: "BUY" | "SELL";
  quantity: number;
  price: number;
  timestamp: string;
  profit: number;
  status: "open" | "closed";
}

interface LeaderboardEntry {
  rank: number;
  trader: string;
  avatar?: string;
  profit: number;
  profitPercentage: number;
  trades: number;
  winRate: number;
  isCurrentUser?: boolean;
}

interface TournamentStats {
  currentProfit: number;
  currentRank: number;
  totalTrades: number;
  winRate: number;
  totalParticipants: number;
  daysRemaining: number;
  portfolioValue: number;
  bestTrade: number;
  worstTrade: number;
}

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [competition] = useState({
    id: "1",
    title: "Q3 Trading Championship 2025",
    participants: 234,
  });
  const [user] = useState({
    id: "user123",
    name: "Alex Trader",
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Mock tournament stats
  const [tournamentStats] = useState<TournamentStats>({
    currentProfit: 2847.5,
    currentRank: 23,
    totalTrades: 47,
    winRate: 68,
    totalParticipants: competition?.participants || 234,
    daysRemaining: 12,
    portfolioValue: 12847.5,
    bestTrade: 1250.0,
    worstTrade: -340.0,
  });

  // Mock trade history
  const [tradeHistory] = useState<Trade[]>([
    {
      id: 1,
      symbol: "EURUSD",
      type: "BUY",
      quantity: 10000,
      price: 1.0842,
      timestamp: "2025-08-06T09:30:00Z",
      profit: 185.5,
      status: "closed",
    },
    {
      id: 2,
      symbol: "GBPJPY",
      type: "SELL",
      quantity: 5000,
      price: 189.45,
      timestamp: "2025-08-06T11:15:00Z",
      profit: -67.2,
      status: "closed",
    },
    {
      id: 3,
      symbol: "BTCUSD",
      type: "BUY",
      quantity: 0.5,
      price: 42350.0,
      timestamp: "2025-08-06T14:20:00Z",
      profit: 892.3,
      status: "open",
    },
    {
      id: 4,
      symbol: "AAPL",
      type: "BUY",
      quantity: 100,
      price: 185.42,
      timestamp: "2025-08-05T16:45:00Z",
      profit: 324.8,
      status: "closed",
    },
    {
      id: 5,
      symbol: "TSLA",
      type: "SELL",
      quantity: 25,
      price: 248.9,
      timestamp: "2025-08-05T10:30:00Z",
      profit: -156.75,
      status: "closed",
    },
  ]);

  // Enhanced leaderboard with more professional design
  const [leaderboard] = useState<LeaderboardEntry[]>([
    {
      rank: 1,
      trader: "TradeMaster2024",
      profit: 8945.5,
      profitPercentage: 89.46,
      trades: 142,
      winRate: 87,
    },
    {
      rank: 2,
      trader: "ForexKing",
      profit: 7632.2,
      profitPercentage: 76.32,
      trades: 98,
      winRate: 82,
    },
    {
      rank: 3,
      trader: "CryptoWizard",
      profit: 6891.75,
      profitPercentage: 68.92,
      trades: 76,
      winRate: 79,
    },
    {
      rank: 4,
      trader: "StockGuru",
      profit: 5234.8,
      profitPercentage: 52.35,
      trades: 89,
      winRate: 71,
    },
    {
      rank: 5,
      trader: "DayTraderPro",
      profit: 4567.3,
      profitPercentage: 45.67,
      trades: 103,
      winRate: 68,
    },
    {
      rank: 6,
      trader: "AlgoMaster",
      profit: 4012.8,
      profitPercentage: 40.13,
      trades: 67,
      winRate: 74,
    },
    {
      rank: 7,
      trader: "QuantAnalyst",
      profit: 3789.2,
      profitPercentage: 37.89,
      trades: 85,
      winRate: 69,
    },
    {
      rank: 8,
      trader: "RiskManager",
      profit: 3456.7,
      profitPercentage: 34.57,
      trades: 92,
      winRate: 65,
    },
    {
      rank: 23,
      trader: user?.name || "You",
      profit: 2847.5,
      profitPercentage: 28.48,
      trades: 47,
      winRate: 68,
      isCurrentUser: true,
    },
  ]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getTimeRemaining = () => {
    const days = tournamentStats.daysRemaining;
    if (days > 1) return `${days} days left`;
    if (days === 1) return "1 day left";
    return "Ending soon";
  };

  const handleBackToCompetitions = () => {
    // Navigate back to home page
    router.push("/");
    // Scroll to top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) {
      return (
        <div className="relative">
          <Crown className="h-6 w-6 text-yellow-500 absolute -top-1 -left-1 z-10" />
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-200 border-2 border-yellow-300 flex items-center justify-center font-bold text-yellow-800 shadow-lg">
            1
          </div>
        </div>
      );
    } else if (rank === 2) {
      return (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300 flex items-center justify-center font-bold text-gray-700 shadow-md">
          2
        </div>
      );
    } else if (rank === 3) {
      return (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-orange-200 border-2 border-orange-300 flex items-center justify-center font-bold text-orange-700 shadow-md">
          3
        </div>
      );
    } else {
      return (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 flex items-center justify-center font-bold text-blue-700">
          {rank}
        </div>
      );
    }
  };

  const getTraderBadge = (
    trader: string,
    isCurrentUser?: boolean,
    rank?: number
  ) => {
    const baseClasses =
      "inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold transition-all duration-200";

    if (isCurrentUser) {
      return (
        <Badge
          className={`${baseClasses} bg-gradient-to-r from-[#0dae94] to-teal-600 text-white shadow-lg border-0 hover:shadow-xl`}
        >
          <Star className="h-3 w-3 mr-1" />
          {trader}
        </Badge>
      );
    }

    if (rank === 1) {
      return (
        <Badge
          className={`${baseClasses} bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-300 shadow-md`}
        >
          <Trophy className="h-3 w-3 mr-1" />
          {trader}
        </Badge>
      );
    }

    if (rank && rank <= 3) {
      return (
        <Badge
          className={`${baseClasses} bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border-orange-300 shadow-sm`}
        >
          <Medal className="h-3 w-3 mr-1" />
          {trader}
        </Badge>
      );
    }

    if (rank && rank <= 10) {
      return (
        <Badge
          className={`${baseClasses} bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-300`}
        >
          <Award className="h-3 w-3 mr-1" />
          {trader}
        </Badge>
      );
    }

    return (
      <Badge
        variant="secondary"
        className={`${baseClasses} bg-gray-100 text-gray-700 border-gray-300`}
      >
        {trader}
      </Badge>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoaderOne />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Button
                variant="secondary"
                onClick={handleBackToCompetitions}
                className="self-start"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Back to Competitions</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <div className="hidden sm:block h-6 w-px bg-gray-300" />
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {competition?.title || "Trading Competition"}
                </h1>
                <p className="text-sm text-gray-600">{getTimeRemaining()}</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Badge variant="destructive" className="animate-pulse self-start">
                <Activity className="h-3 w-3 mr-1" />
                Live
              </Badge>
              <div className="text-left sm:text-right">
                <div className="text-xl lg:text-2xl font-bold text-green-600">
                  {formatCurrency(tournamentStats.currentProfit)}
                </div>
                <div className="text-sm text-gray-600">Current P&L</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-6 lg:space-y-8"
        >
          <TabsList className="grid w-full grid-cols-3 bg-white dark:bg-gray-800 border shadow-sm">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-[#0dae94] data-[state=active]:text-white flex items-center space-x-2"
            >
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Overview</span>
            </TabsTrigger>
            <TabsTrigger
              value="trades"
              className="data-[state=active]:bg-[#0dae94] data-[state=active]:text-white flex items-center space-x-2"
            >
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Trade History</span>
              <span className="sm:hidden">Trades</span>
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="data-[state=active]:bg-[#0dae94] data-[state=active]:text-white flex items-center space-x-2"
            >
              <Trophy className="h-4 w-4" />
              <span className="hidden sm:inline">Leaderboard</span>
              <span className="sm:hidden">Leaders</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-600">
                        Portfolio Value
                      </p>
                      <p className="text-xl lg:text-2xl font-bold text-green-700">
                        {formatCurrency(tournamentStats.portfolioValue)}
                      </p>
                    </div>
                    <DollarSign className="h-6 w-6 lg:h-8 lg:w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-600">
                        Current Rank
                      </p>
                      <p className="text-xl lg:text-2xl font-bold text-blue-700">
                        #{tournamentStats.currentRank}
                      </p>
                      <p className="text-xs text-blue-600">
                        of {tournamentStats.totalParticipants}
                      </p>
                    </div>
                    <Medal className="h-6 w-6 lg:h-8 lg:w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-600">
                        Win Rate
                      </p>
                      <p className="text-xl lg:text-2xl font-bold text-purple-700">
                        {tournamentStats.winRate}%
                      </p>
                      <p className="text-xs text-purple-600">
                        {tournamentStats.totalTrades} trades
                      </p>
                    </div>
                    <Target className="h-6 w-6 lg:h-8 lg:w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 hover:shadow-lg transition-shadow">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-600">
                        Days Left
                      </p>
                      <p className="text-xl lg:text-2xl font-bold text-orange-700">
                        {tournamentStats.daysRemaining}
                      </p>
                      <p className="text-xs text-orange-600">
                        Until competition ends
                      </p>
                    </div>
                    <Clock className="h-6 w-6 lg:h-8 lg:w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Chart & Recent Trades */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-[#0dae94]" />
                    Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
                      <p className="text-sm text-green-600 font-medium">
                        Best Trade
                      </p>
                      <p className="text-lg font-bold text-green-700">
                        {formatCurrency(tournamentStats.bestTrade)}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg border border-red-100">
                      <p className="text-sm text-red-600 font-medium">
                        Worst Trade
                      </p>
                      <p className="text-lg font-bold text-red-700">
                        {formatCurrency(tournamentStats.worstTrade)}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Win Rate Progress</span>
                      <span>{tournamentStats.winRate}%</span>
                    </div>
                    <Progress value={tournamentStats.winRate} className="h-3" />
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-[#0dae94]" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {tradeHistory.slice(0, 4).map((trade) => (
                      <div
                        key={trade.id}
                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-full ${
                              trade.type === "BUY"
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {trade.type === "BUY" ? (
                              <TrendingUp className="h-3 w-3" />
                            ) : (
                              <TrendingDown className="h-3 w-3" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium text-sm">
                              {trade.symbol}
                            </p>
                            <p className="text-xs text-gray-500">
                              {trade.type} {trade.quantity}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p
                            className={`font-semibold text-sm ${
                              trade.profit >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {trade.profit >= 0 ? "+" : ""}
                            {formatCurrency(trade.profit)}
                          </p>
                          <Badge
                            variant={
                              trade.status === "open" ? "default" : "secondary"
                            }
                            className="text-xs"
                          >
                            {trade.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Trade History Tab */}
          <TabsContent value="trades" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Complete Trade History</CardTitle>
                <CardDescription>
                  All your trades in this competition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tradeHistory.map((trade) => (
                    <div
                      key={trade.id}
                      className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-2 rounded-full ${
                              trade.type === "BUY"
                                ? "bg-green-100 text-green-600"
                                : "bg-red-100 text-red-600"
                            }`}
                          >
                            {trade.type === "BUY" ? (
                              <TrendingUp className="h-4 w-4" />
                            ) : (
                              <TrendingDown className="h-4 w-4" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold">{trade.symbol}</p>
                            <p className="text-sm text-gray-500">
                              {trade.type}
                            </p>
                          </div>
                        </div>
                        <div>
                          <p className="font-medium">
                            {trade.quantity.toLocaleString()}
                          </p>
                          <p className="text-sm text-gray-500">Quantity</p>
                        </div>
                        <div>
                          <p className="font-medium">
                            ${trade.price.toFixed(2)}
                          </p>
                          <p className="text-sm text-gray-500">Price</p>
                        </div>
                        <div>
                          <p
                            className={`font-semibold ${
                              trade.profit >= 0
                                ? "text-green-600"
                                : "text-red-600"
                            }`}
                          >
                            {trade.profit >= 0 ? "+" : ""}
                            {formatCurrency(trade.profit)}
                          </p>
                          <p className="text-sm text-gray-500">P&L</p>
                        </div>
                        <div>
                          <Badge
                            variant={
                              trade.status === "open" ? "default" : "secondary"
                            }
                          >
                            {trade.status}
                          </Badge>
                        </div>
                        <div className="text-sm text-gray-500 hidden md:block">
                          {formatDate(trade.timestamp)}
                        </div>
                      </div>
                      <div className="md:hidden mt-3 pt-3 border-t text-xs text-gray-500">
                        {formatDate(trade.timestamp)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Enhanced Leaderboard Tab */}
          <TabsContent value="leaderboard" className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                  <div>
                    <CardTitle className="flex items-center">
                      <Trophy className="h-5 w-5 mr-2 text-[#0dae94]" />
                      Tournament Leaderboard
                    </CardTitle>
                    <CardDescription>
                      Current standings in the competition
                    </CardDescription>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Live Updates</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {/* Desktop Table View */}
                <div className="hidden lg:block overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-gradient-to-r from-gray-50 to-gray-100">
                      <tr>
                        <th className="text-left py-4 px-6 font-semibold text-gray-700">
                          Rank
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-700 min-w-[200px]">
                          Trader
                        </th>
                        <th className="text-right py-4 px-6 font-semibold text-gray-700">
                          P&L
                        </th>
                        <th className="text-right py-4 px-6 font-semibold text-gray-700">
                          Return %
                        </th>
                        <th className="text-center py-4 px-6 font-semibold text-gray-700">
                          Trades
                        </th>
                        <th className="text-center py-4 px-6 font-semibold text-gray-700">
                          Win Rate
                        </th>
                        <th className="text-center py-4 px-6 font-semibold text-gray-700">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.map((entry, index) => (
                        <tr
                          key={entry.rank}
                          className={`border-b transition-all duration-200 hover:bg-gray-50/80 ${
                            entry.isCurrentUser
                              ? "bg-gradient-to-r from-[#0dae94]/5 via-teal-50/30 to-[#0dae94]/5 hover:from-[#0dae94]/10 hover:via-teal-50/50 hover:to-[#0dae94]/10 border-[#0dae94]/20"
                              : ""
                          }`}
                        >
                          <td className="py-4 px-6">
                            {getRankBadge(entry.rank)}
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-3">
                              <Avatar className="flex-shrink-0 h-10 w-10">
                                <AvatarFallback className="bg-gradient-to-br from-[#0dae94]/20 to-teal-500/20 text-[#0dae94] font-semibold text-lg">
                                  {entry.trader.charAt(0).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div className="min-w-0 flex-1">
                                {getTraderBadge(
                                  entry.trader,
                                  entry.isCurrentUser,
                                  entry.rank
                                )}
                                {entry.isCurrentUser && (
                                  <div className="mt-1">
                                    <Badge
                                      variant="outline"
                                      className="text-xs bg-[#0dae94]/10 text-[#0dae94] border-[#0dae94]/30"
                                    >
                                      <Star className="h-2 w-2 mr-1" />
                                      Your Position
                                    </Badge>
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div
                              className={`font-bold text-lg ${
                                entry.profit >= 0
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {formatCurrency(entry.profit)}
                            </div>
                            {entry.profit >= 0 && (
                              <ChevronUp className="h-4 w-4 text-green-500 inline ml-1" />
                            )}
                            {entry.profit < 0 && (
                              <ChevronDown className="h-4 w-4 text-red-500 inline ml-1" />
                            )}
                          </td>
                          <td className="py-4 px-6 text-right">
                            <div
                              className={`font-semibold text-lg ${
                                entry.profitPercentage >= 0
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {entry.profitPercentage >= 0 ? "+" : ""}
                              {entry.profitPercentage.toFixed(2)}%
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div className="font-medium text-gray-900 text-lg">
                              {entry.trades.toLocaleString()}
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <div className="flex flex-col items-center">
                              <div className="font-medium text-gray-900 text-lg">
                                {entry.winRate}%
                              </div>
                              <Progress
                                value={entry.winRate}
                                className="w-16 h-1 mt-1"
                              />
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            {entry.rank <= 3 && (
                              <div className="flex justify-center">
                                <Medal
                                  className={`h-6 w-6 ${
                                    entry.rank === 1
                                      ? "text-yellow-500"
                                      : entry.rank === 2
                                      ? "text-gray-500"
                                      : "text-orange-500"
                                  }`}
                                />
                              </div>
                            )}
                            {entry.rank > 3 && entry.rank <= 10 && (
                              <Badge
                                variant="secondary"
                                className="bg-blue-100 text-blue-700"
                              >
                                Top 10
                              </Badge>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Mobile Card View */}
                <div className="lg:hidden space-y-4 p-4">
                  {leaderboard.map((entry) => (
                    <Card
                      key={entry.rank}
                      className={`transition-all duration-200 hover:shadow-md ${
                        entry.isCurrentUser
                          ? "ring-2 ring-[#0dae94]/30 bg-gradient-to-r from-[#0dae94]/5 to-teal-50/30 hover:shadow-lg"
                          : "hover:shadow-md"
                      }`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            {getRankBadge(entry.rank)}
                            <Avatar className="h-12 w-12">
                              <AvatarFallback className="bg-gradient-to-br from-[#0dae94]/20 to-teal-500/20 text-[#0dae94] font-semibold text-lg">
                                {entry.trader.charAt(0).toUpperCase()}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              {getTraderBadge(
                                entry.trader,
                                entry.isCurrentUser,
                                entry.rank
                              )}
                              {entry.isCurrentUser && (
                                <div className="mt-1">
                                  <Badge
                                    variant="outline"
                                    className="text-xs bg-[#0dae94]/10 text-[#0dae94] border-[#0dae94]/30"
                                  >
                                    <Star className="h-2 w-2 mr-1" />
                                    You
                                  </Badge>
                                </div>
                              )}
                            </div>
                          </div>
                          {entry.rank <= 3 && (
                            <Medal
                              className={`h-6 w-6 ${
                                entry.rank === 1
                                  ? "text-yellow-500"
                                  : entry.rank === 2
                                  ? "text-gray-500"
                                  : "text-orange-500"
                              }`}
                            />
                          )}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <div>
                              <p className="text-xs text-gray-500 font-medium mb-1">
                                P&L
                              </p>
                              <div className="flex items-center">
                                <p
                                  className={`font-bold text-lg ${
                                    entry.profit >= 0
                                      ? "text-green-600"
                                      : "text-red-600"
                                  }`}
                                >
                                  {formatCurrency(entry.profit)}
                                </p>
                                {entry.profit >= 0 ? (
                                  <ChevronUp className="h-4 w-4 text-green-500 ml-1" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 text-red-500 ml-1" />
                                )}
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-medium mb-1">
                                Trades
                              </p>
                              <p className="font-semibold text-gray-900">
                                {entry.trades.toLocaleString()}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <div>
                              <p className="text-xs text-gray-500 font-medium mb-1">
                                Return
                              </p>
                              <p
                                className={`font-semibold text-lg ${
                                  entry.profitPercentage >= 0
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {entry.profitPercentage >= 0 ? "+" : ""}
                                {entry.profitPercentage.toFixed(2)}%
                              </p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500 font-medium mb-1">
                                Win Rate
                              </p>
                              <div className="flex items-center space-x-2">
                                <p className="font-semibold text-gray-900">
                                  {entry.winRate}%
                                </p>
                                <Progress
                                  value={entry.winRate}
                                  className="flex-1 h-2"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Enhanced Footer */}
                <div className="border-t bg-gradient-to-r from-gray-50 to-gray-100 px-4 lg:px-6 py-4">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:flex lg:items-center lg:space-x-8 lg:gap-0">
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-[#0dae94]" />
                        <span className="font-medium">
                          {tournamentStats.totalParticipants} Participants
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2 text-orange-500" />
                        <span className="font-medium">
                          {getTimeRemaining()}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Activity className="h-4 w-4 mr-2 text-green-500" />
                        <span className="font-medium">Real-time Rankings</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between lg:justify-end space-x-4">
                      <Badge
                        variant="outline"
                        className="bg-white border-[#0dae94]/30 text-[#0dae94]"
                      >
                        <Trophy className="h-3 w-3 mr-1" />
                        Prize Pool: $50,000
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-500">Live</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;
