import { useState } from "react";
import { Input } from "@/components/ui/input";
import { TrickCard } from "@/components/TrickCard";
import { searchTricks, tricksDatabase } from "@/data/tricks";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const navigate = useNavigate();
  
  const filteredTricks = searchQuery ? searchTricks(searchQuery) : tricksDatabase;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <header className="text-center mb-12 space-y-4">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight">
            <span className="text-foreground">Title</span>
            <span className="text-accent">Change</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your ultimate skateboarding tricks encyclopedia. Search, learn, and progress.
          </p>
        </header>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search tricks by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg border-border focus:border-accent"
            />
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">
              {searchQuery ? `Search Results (${filteredTricks.length})` : 'All Tricks'}
            </h2>
            <button
              onClick={() => navigate('/progression')}
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              Get Progression Suggestions →
            </button>
          </div>
        </div>

        {filteredTricks.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No tricks found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTricks.map((trick) => (
              <TrickCard
                key={trick.id}
                trick={trick}
                onClick={() => navigate(`/trick/${trick.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
