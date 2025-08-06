import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";
export const CompetitionSkeleton: React.FC = () => (
  <Card className="border-0 bg-gradient-to-br from-white to-gray-50">
    <CardHeader>
      <div className="flex justify-between items-start mb-2">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-16" />
      </div>
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-2 w-full" />
    </CardContent>
    <CardFooter>
      <Skeleton className="h-10 w-full" />
    </CardFooter>
  </Card>
);
