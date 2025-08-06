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
} from "lucide-react";
import { useRouter } from "next/navigation";
import { LoaderOne } from "@/components/ui/loader";

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

interface Competition {
  id: string;
  title: string;
  participants?: number;
}

interface User {
  id: string;
  name: string;
}

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);
  const [competition, setCompetition] = useState<Competition | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTournament = localStorage.getItem("activeTournament");
      const storedUser = localStorage.getItem("user");

      if (storedTournament) {
        setCompetition(JSON.parse(storedTournament));
      }

      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }

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

  // Mock leaderboard
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
    // ... more entries
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

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoaderOne />
        {/* <p className="text-gray-600">Loading tournament dashboard...</p> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-gray-200/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="secondary" onClick={handleBackToCompetitions}>
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Competitions</span>
              </Button>
              <div className="h-6 w-px bg-gray-300" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {competition?.title || "Trading Competition"}
                </h1>
                <p className="text-sm text-gray-600">{getTimeRemaining()}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="destructive" className="animate-pulse">
                <Activity className="h-3 w-3 mr-1" />
                Live
              </Badge>
              <div className="text-right">
                <div className="text-2xl font-bold text-green-600">
                  {formatCurrency(tournamentStats.currentProfit)}
                </div>
                <div className="text-sm text-gray-600">Current P&L</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-8"
        >
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white dark:bg-gray-800 border">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-[#0dae94] data-[state=active]:text-white"
            >
              <BarChart3 className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="trades"
              className="data-[state=active]:bg-[#0dae94] data-[state=active]:text-white"
            >
              <Activity className="h-4 w-4" />
              Trade History
            </TabsTrigger>
            <TabsTrigger
              value="leaderboard"
              className="data-[state=active]:bg-[#0dae94] data-[state=active]:text-white"
            >
              <Trophy className="h-4 w-4" />
              Leaderboard
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-green-600">
                        Portfolio Value
                      </p>
                      <p className="text-2xl font-bold text-green-700">
                        {formatCurrency(tournamentStats.portfolioValue)}
                      </p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-blue-600">
                        Current Rank
                      </p>
                      <p className="text-2xl font-bold text-blue-700">
                        #{tournamentStats.currentRank}
                      </p>
                      <p className="text-xs text-blue-600">
                        of {tournamentStats.totalParticipants}
                      </p>
                    </div>
                    <Medal className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-purple-600">
                        Win Rate
                      </p>
                      <p className="text-2xl font-bold text-purple-700">
                        {tournamentStats.winRate}%
                      </p>
                      <p className="text-xs text-purple-600">
                        {tournamentStats.totalTrades} trades
                      </p>
                    </div>
                    <Target className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-orange-600">
                        Days Left
                      </p>
                      <p className="text-2xl font-bold text-orange-700">
                        {tournamentStats.daysRemaining}
                      </p>
                      <p className="text-xs text-orange-600">
                        Until competition ends
                      </p>
                    </div>
                    <Clock className="h-8 w-8 text-orange-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Performance Chart & Recent Trades */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2 text-[#0dae94]" />
                    Performance Overview
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600 font-medium">
                        Best Trade
                      </p>
                      <p className="text-lg font-bold text-green-700">
                        {formatCurrency(tournamentStats.bestTrade)}
                      </p>
                    </div>
                    <div className="text-center p-4 bg-red-50 rounded-lg">
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
                    <Progress value={tournamentStats.winRate} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
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
                        className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`p-1 rounded-full ${
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
            <Card>
              <CardHeader>
                <CardTitle>Complete Trade History</CardTitle>
                <CardDescription>
                  All your trades in this competition
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
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
                        <div className="text-sm text-gray-500">
                          {formatDate(trade.timestamp)}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2 text-[#0dae94]" />
                  Tournament Leaderboard
                </CardTitle>
                <CardDescription>
                  Current standings in the competition
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="border-b bg-gray-50/50">
                      <tr>
                        <th className="text-left py-4 px-6 font-semibold text-gray-700 w-16">
                          Rank
                        </th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-700 min-w-[200px]">
                          Trader
                        </th>
                        <th className="text-right py-4 px-6 font-semibold text-gray-700 min-w-[120px]">
                          P&L
                        </th>
                        <th className="text-right py-4 px-6 font-semibold text-gray-700 min-w-[100px]">
                          Return %
                        </th>
                        <th className="text-center py-4 px-6 font-semibold text-gray-700 min-w-[80px]">
                          Trades
                        </th>
                        <th className="text-center py-4 px-6 font-semibold text-gray-700 min-w-[90px]">
                          Win Rate
                        </th>
                        <th className="text-center py-4 px-6 font-semibold text-gray-700 w-16">
                          Award
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {leaderboard.map((entry) => (
                        <tr
                          key={entry.rank}
                          className={`border-b transition-colors hover:bg-gray-50/50 ${
                            entry.isCurrentUser
                              ? "bg-[#0dae94]/5 hover:bg-[#0dae94]/10 border-[#0dae94]/20"
                              : ""
                          }`}
                        >
                          <td className="py-4 px-6">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                                entry.rank === 1
                                  ? "bg-yellow-100 text-yellow-700 ring-2 ring-yellow-300"
                                  : entry.rank === 2
                                  ? "bg-gray-100 text-gray-700 ring-2 ring-gray-300"
                                  : entry.rank === 3
                                  ? "bg-orange-100 text-orange-700 ring-2 ring-orange-300"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {entry.rank}
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center space-x-3 min-w-0">
                              <Avatar className="flex-shrink-0">
                                <AvatarFallback className="bg-gradient-to-br from-[#0dae94]/20 to-teal-500/20 text-[#0dae94] font-semibold">
                                  {entry.trader.charAt(0).toUpperCase()}
                                </AvatarFallback>
                              </Avatar>
                              <div className="min-w-0 flex-1">
                                <p className="font-semibold text-gray-900 truncate">
                                  {entry.trader}
                                </p>
                                {entry.isCurrentUser && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs mt-1 bg-[#0dae94]/10 text-[#0dae94] border-[#0dae94]/30"
                                  >
                                    You
                                  </Badge>
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
                            <div className="font-medium text-gray-900 text-lg">
                              {entry.winRate}%
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            {entry.rank <= 3 && (
                              <Medal
                                className={`h-6 w-6 mx-auto ${
                                  entry.rank === 1
                                    ? "text-yellow-500"
                                    : entry.rank === 2
                                    ? "text-gray-500"
                                    : "text-orange-500"
                                }`}
                              />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Table Footer with Summary */}
                <div className="border-t bg-gray-50/30 px-6 py-4">
                  <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-6">
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        Total Participants:{" "}
                        <span className="font-semibold ml-1">
                          {tournamentStats.totalParticipants}
                        </span>
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        Time Left:{" "}
                        <span className="font-semibold ml-1">
                          {getTimeRemaining()}
                        </span>
                      </span>
                    </div>
                    <div className="text-xs text-gray-500">
                      Rankings update in real-time
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
