
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink, Star } from 'lucide-react';
import { toast } from 'sonner';

interface Result {
  id: number;
  text: string;
  similarity: number;
}

interface ResultsListProps {
  results: Result[];
}

const ResultsList: React.FC<ResultsListProps> = ({ results }) => {
  const [expandedResult, setExpandedResult] = useState<Result | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.info('Copied to clipboard!');
  };

  // Function to truncate text
  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  // Format similarity score as percentage
  const formatSimilarity = (score: number) => {
    return `${(score * 100).toFixed(0)}%`;
  };

  if (results.length === 0) {
    return <p className="text-center p-6 text-gray-500">No matching results found.</p>;
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Search Results</h3>
      
      <div className="grid gap-4 md:grid-cols-2">
        {results.map((result) => (
          <Card key={result.id} className="h-full flex flex-col transition-shadow hover:shadow-md">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge className="bg-accent text-accent-foreground">
                  Match: {formatSimilarity(result.similarity)}
                </Badge>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => copyToClipboard(result.text)}
                  className="h-8 w-8 p-0"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="flex-grow pb-4">
              <p className="text-sm">{truncateText(result.text)}</p>
            </CardContent>
            <CardFooter className="pt-0 flex justify-between">
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => setExpandedResult(result)}
                    className="text-xs"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View Full
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Detailed View</DialogTitle>
                  </DialogHeader>
                  <div className="mt-4 space-y-4">
                    <Badge className="bg-accent text-accent-foreground">
                      Match: {formatSimilarity(result.similarity)}
                    </Badge>
                    <p>{expandedResult?.text}</p>
                    <div className="flex justify-end space-x-2">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => expandedResult && copyToClipboard(expandedResult.text)}
                      >
                        <Copy className="h-4 w-4 mr-1" />
                        Copy
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => toast.info('Favorite functionality coming soon!')}
                      >
                        <Star className="h-4 w-4 mr-1" />
                        Favorite
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toast.info('Favorite functionality coming soon!')}
                className="text-xs"
              >
                <Star className="h-3 w-3 mr-1" />
                Favorite
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResultsList;
