
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Search } from 'lucide-react';
import ResultsList from './ResultsList';

// Mock results - in a real app, these would come from the Supabase vector search
const MOCK_RESULTS = [
  { 
    id: 1, 
    text: "Semantic search is a search technique that understands the context of search terms rather than just matching keywords.", 
    similarity: 0.92 
  },
  { 
    id: 2, 
    text: "Unlike traditional search that matches exact keywords, semantic search can find related concepts even if they use different words.", 
    similarity: 0.87 
  },
  { 
    id: 3, 
    text: "Vector embeddings transform text into numerical representations that capture semantic meaning.", 
    similarity: 0.78 
  },
  { 
    id: 4, 
    text: "OpenAI's embedding models convert text into high-dimensional vectors that represent the meaning of the content.", 
    similarity: 0.72 
  },
  { 
    id: 5, 
    text: "Supabase combined with pgvector allows for efficient similarity searches across vector embeddings.", 
    similarity: 0.65 
  }
];

const SearchForm = () => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [searched, setSearched] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!query.trim()) return;
    
    setLoading(true);
    
    try {
      // This is a placeholder for the actual API call to search embeddings
      // In a real app, you would connect to Supabase here
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setResults(MOCK_RESULTS);
      setSearched(true);
    } catch (error) {
      console.error('Error searching:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="flex w-full items-center space-x-2">
        <Input
          placeholder="Search your semantic vault..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1"
        />
        <Button type="submit" disabled={loading}>
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </Button>
      </form>
      
      {searched && (
        <div className="animate-fade-in">
          <ResultsList results={results} />
        </div>
      )}
    </div>
  );
};

export default SearchForm;
