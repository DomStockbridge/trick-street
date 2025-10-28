import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Trick } from "@/data/tricks";

interface TrickCardProps {
  trick: Trick;
  onClick?: () => void;
}

const difficultyColors = {
  beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
  intermediate: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  advanced: 'bg-accent/20 text-accent border-accent/30',
  expert: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export const TrickCard = ({ trick, onClick }: TrickCardProps) => {
  return (
    <Card 
      className="group cursor-pointer hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors">
            {trick.name}
          </CardTitle>
          <Badge className={`${difficultyColors[trick.difficulty]} capitalize shrink-0`}>
            {trick.difficulty}
          </Badge>
        </div>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {trick.culturalInfo}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="text-sm font-semibold text-foreground/80 mb-2">Best Obstacles</h4>
          <div className="flex flex-wrap gap-2">
            {trick.bestObstacles.map((obstacle, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {obstacle}
              </Badge>
            ))}
          </div>
        </div>
        {trick.prerequisites.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-foreground/80 mb-2">Prerequisites</h4>
            <div className="flex flex-wrap gap-2">
              {trick.prerequisites.map((prereq, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {prereq}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
