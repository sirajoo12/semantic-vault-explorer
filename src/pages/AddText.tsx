
import React from 'react';
import { Database } from 'lucide-react';
import AddTextForm from '@/components/AddTextForm';

const AddText = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block bg-primary/10 rounded-full p-3 mb-4">
            <Database className="h-6 w-6 text-primary" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Add to Your Vault</h1>
          <p className="text-gray-600">
            Save text snippets to your semantic search database
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <AddTextForm />
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4">
          <h3 className="font-medium text-blue-800 mb-2">How it works</h3>
          <ol className="text-sm text-blue-700 space-y-2 pl-5 list-decimal">
            <li>Paste any text you want to save</li>
            <li>We generate vector embeddings using OpenAI</li>
            <li>Both the text and embeddings are stored in your vault</li>
            <li>You can then search for similar content semantically</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AddText;
