import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CompetitionCard } from "./CompetitionCard";
import { CompetitionSkeleton } from "./CompetitionSkeleton";
export const CompetitionTabs: React.FC<{
  competitions: CompetitionsData;
  activeTab: string;
  onTabChange: (tab: string) => void;
  onRegister: (competitionId: number) => void;
  isLoading: boolean;
}> = ({ competitions, activeTab, onTabChange, onRegister, isLoading }) => (
  <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
    <TabsList className="grid w-full grid-cols-3 mb-8 bg-white dark:bg-gray-800 border">
      <TabsTrigger
        value="upcoming"
        className="data-[state=active]:bg-[#0dae94] data-[state=active]:text-white"
      >
        Upcoming ({competitions.upcoming.length})
      </TabsTrigger>
      <TabsTrigger
        value="inprogress"
        className="data-[state=active]:bg-orange-600 data-[state=active]:text-white"
      >
        In Progress ({competitions.inprogress.length})
      </TabsTrigger>
      <TabsTrigger
        value="finished"
        className="data-[state=active]:bg-gray-600 data-[state=active]:text-white"
      >
        Finished ({competitions.finished.length})
      </TabsTrigger>
    </TabsList>

    <TabsContent value="upcoming" className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Upcoming Competitions</h2>
        <p className="text-gray-600">
          Register now and secure your spot in these exciting trading challenges
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => (
              <CompetitionSkeleton key={i} />
            ))
          : competitions.upcoming.map((competition) => (
              <CompetitionCard
                key={competition.id}
                competition={competition}
                onRegister={onRegister}
              />
            ))}
      </div>
    </TabsContent>

    <TabsContent value="inprogress" className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Live Competitions</h2>
        <p className="text-gray-600">
          These competitions are currently running - registration is closed
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <CompetitionSkeleton key={i} />
            ))
          : competitions.inprogress.map((competition) => (
              <CompetitionCard
                key={competition.id}
                competition={competition}
                onRegister={onRegister}
              />
            ))}
      </div>
    </TabsContent>

    <TabsContent value="finished" className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Finished Competitions</h2>
        <p className="text-gray-600">
          Check out the results from our completed competitions
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <CompetitionSkeleton key={i} />
            ))
          : competitions.finished.map((competition) => (
              <CompetitionCard
                key={competition.id}
                competition={competition}
                onRegister={onRegister}
              />
            ))}
      </div>
    </TabsContent>
  </Tabs>
);
