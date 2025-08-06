interface User {
  email: string;
  name: string;
}

interface Competition {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  participants: number;
  maxParticipants: number;
  entryFee: number;
  prizePool: number;
  status: "upcoming" | "inprogress" | "finished";
  winner?: string;
}

interface CompetitionsData {
  upcoming: Competition[];
  inprogress: Competition[];
  finished: Competition[];
}
