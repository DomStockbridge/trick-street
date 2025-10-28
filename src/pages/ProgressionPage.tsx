import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { tricksDatabase, suggestNextTrick, getTrickById } from "@/data/tricks";
import { TrickCard } from "@/components/TrickCard";
import { ArrowLeft, TrendingUp } from "lucide-react";

const ProgressionPage = () => {
  const navigate = useNavigate();
  const [selectedTrick, setSelectedTrick] = useState<string>("");
  const [suggestions, setSuggestions] = useState<ReturnType<typeof suggestNextTrick>>([]);

  const handleTrickSelect = (trickId: string) => {
    setSelectedTrick(trickId);
    const nextTricks = suggestNextTrick(trickId);
    setSuggestions(nextTricks);
  };

  const currentTrick = selectedTrick ? getTrickById(selectedTrick) : null;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Button 
          onClick={() => navigate('/')} 
          variant="ghost" 
          className="mb-8 hover:text-accent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto space-y-8">
          <header className="text-center space-y-2">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black">PROGRESSION</h1>
            <p className="text-lg text-muted-foreground">
              Tell us what you can do, and we'll suggest what to learn next
            </p>
          </header>

          <Card>
            <CardHeader>
              <CardTitle>Select a Trick You Can Already Do</CardTitle>
              <CardDescription>
                We'll suggest the next tricks to level up your skating
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Select value={selectedTrick} onValueChange={handleTrickSelect}>
                <SelectTrigger className="w-full h-12">
                  <SelectValue placeholder="Choose a trick..." />
                </SelectTrigger>
                <SelectContent>
                  {tricksDatabase.map((trick) => (
                    <SelectItem key={trick.id} value={trick.id}>
                      {trick.name} ({trick.difficulty})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {currentTrick && (
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">
                  Nice! You can do <span className="text-accent">{currentTrick.name}</span>
                </h2>
                <p className="text-muted-foreground">
                  Here are the tricks you should learn next:
                </p>
              </div>

              {suggestions.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {suggestions.map((trick) => (
                    <TrickCard
                      key={trick.id}
                      trick={trick}
                      onClick={() => navigate(`/trick/${trick.id}`)}
                    />
                  ))}
                </div>
              ) : (
                <Card className="border-accent/50">
                  <CardContent className="py-12 text-center">
                    <p className="text-lg text-muted-foreground">
                      You've mastered this level! Try exploring other tricks at your difficulty level or challenge yourself with advanced tricks.
                    </p>
                    <Button 
                      onClick={() => navigate('/')}
                      className="mt-6"
                    >
                      Browse All Tricks
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressionPage;
