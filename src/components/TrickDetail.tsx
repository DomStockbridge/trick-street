import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trick } from "@/data/tricks";
import { CheckCircle2 } from "lucide-react";

interface TrickDetailProps {
  trick: Trick;
}

const difficultyColors = {
  beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
  intermediate: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  advanced: 'bg-accent/20 text-accent border-accent/30',
  expert: 'bg-red-500/20 text-red-400 border-red-500/30',
};

export const TrickDetail = ({ trick }: TrickDetailProps) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-4">
          <h1 className="text-4xl md:text-5xl font-bold">{trick.name}</h1>
          <Badge className={`${difficultyColors[trick.difficulty]} capitalize text-sm`}>
            {trick.difficulty}
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground">{trick.culturalInfo}</p>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>How to Perform</CardTitle>
          <CardDescription>Step-by-step instructions</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-3">
            {trick.howTo.map((step, index) => (
              <li key={index} className="flex gap-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-semibold shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <p className="text-foreground/90 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Best Obstacles</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {trick.bestObstacles.map((obstacle, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                  <span>{obstacle}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {trick.prerequisites.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Prerequisites</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {trick.prerequisites.map((prereq, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span className="capitalize">{prereq.replace('-', ' ')}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};
