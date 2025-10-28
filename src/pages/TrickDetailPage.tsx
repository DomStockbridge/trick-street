import { useParams, useNavigate } from "react-router-dom";
import { getTrickById } from "@/data/tricks";
import { TrickDetail } from "@/components/TrickDetail";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TrickDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const trick = id ? getTrickById(id) : undefined;

  if (!trick) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Trick Not Found</h1>
          <Button onClick={() => navigate('/')} variant="default">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <Button 
          onClick={() => navigate('/')} 
          variant="ghost" 
          className="mb-8 hover:text-accent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to All Tricks
        </Button>
        
        <TrickDetail trick={trick} />
      </div>
    </div>
  );
};

export default TrickDetailPage;
