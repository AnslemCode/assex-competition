import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Calendar, Clock, DollarSign, Trophy, Users } from "lucide-react";
import { Button } from "./ui/button";

export const CompetitionCard: React.FC<{
  competition: Competition;
  onRegister: (competitionId: number) => void;
}> = ({ competition, onRegister }) => (
  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
    <CardHeader className="pb-3">
      <div className="flex justify-between items-start mb-2">
        <Badge
          variant={
            competition.status === "upcoming"
              ? "default"
              : competition.status === "inprogress"
              ? "destructive"
              : "secondary"
          }
          className="capitalize"
        >
          {competition.status === "inprogress"
            ? "In Progress"
            : competition.status}
        </Badge>
        <div className="flex items-center text-green-600 font-semibold">
          <DollarSign className="h-4 w-4 mr-1" />
          {competition.prizePool.toLocaleString()}
        </div>
      </div>
      <CardTitle className="text-xl group-hover:text-[#0dae94] transition-colors">
        {competition.title}
      </CardTitle>
      <CardDescription className="text-gray-600 dark:text-gray-300">
        {competition.description}
      </CardDescription>
    </CardHeader>

    <CardContent className="space-y-4">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2 text-[#0dae94]" />
          <div>
            <div className="font-medium">Start</div>
            <div className="text-gray-600">
              {new Date(competition.startDate).toLocaleDateString()}
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Clock className="h-4 w-4 mr-2 text-orange-500" />
          <div>
            <div className="font-medium">End</div>
            <div className="text-gray-600">
              {new Date(competition.endDate).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Users className="h-4 w-4 mr-2 text-purple-500" />
          <span className="text-sm">
            {competition.participants}/{competition.maxParticipants}{" "}
            participants
          </span>
        </div>
        <div className="text-sm font-medium">
          Entry: ${competition.entryFee}
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-gradient-to-r from-[#0dae94] to-teal-500 h-2 rounded-full transition-all duration-300"
          style={{
            width: `${
              (competition.participants / competition.maxParticipants) * 100
            }%`,
          }}
        ></div>
      </div>

      {competition.winner && (
        <div className="flex items-center bg-yellow-50 dark:bg-yellow-900/20 p-2 rounded-lg">
          <Trophy className="h-4 w-4 mr-2 text-yellow-600" />
          <span className="text-sm font-medium">
            Winner: {competition.winner}
          </span>
        </div>
      )}
    </CardContent>

    <CardFooter>
      {competition.status === "upcoming" && (
        <Button
          onClick={() => onRegister(competition.id)}
          className="w-full bg-gradient-to-r from-[#0dae94] to-teal-600 hover:from-teal-600 hover:to-[#0dae94]"
          disabled={competition.participants >= competition.maxParticipants}
        >
          {competition.participants >= competition.maxParticipants
            ? "Competition Full"
            : "Register Now"}
        </Button>
      )}
      {competition.status === "inprogress" && (
        <Button variant="outline" className="w-full" disabled>
          Competition in Progress
        </Button>
      )}
      {competition.status === "finished" && (
        <Button variant="secondary" className="w-full">
          View Results
        </Button>
      )}
    </CardFooter>
  </Card>
);
