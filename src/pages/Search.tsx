
import React from 'react';
import { Search as SearchIcon } from 'lucide-react';
import SearchForm from '@/components/SearchForm';

const Search = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-primary/10 rounded-full p-3 mb-4">
            <SearchIcon className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Search Your Vault</h1>
          <p className="text-gray-600">
            Find semantically similar content using AI-powered search
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
          <SearchForm />
        </div>
        
        <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4">
          <h3 className="font-medium text-yellow-800 mb-2">About Semantic Search</h3>
          <p className="text-sm text-yellow-700">
            Unlike traditional search that matches exact keywords, semantic search understands the 
            <strong> meaning </strong> 
            behind your query. This means you can find relevant content even when the exact words don't match.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Search;
