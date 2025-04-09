
import React from 'react';
import { Book, BrainCircuit, Database } from 'lucide-react';
import TabsComponent from '@/components/TabsComponent';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-primary rounded-full p-3">
              <BrainCircuit className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4">Semantic Search Vault</h1>
          <p className="text-xl text-gray-600 mb-6">
            Store and search your text using AI-powered semantic search
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <FeatureCard 
              icon={<Book className="h-6 w-6 text-primary" />}
              title="Save Text"
              description="Store important paragraphs, ideas, or notes with one click"
            />
            <FeatureCard 
              icon={<BrainCircuit className="h-6 w-6 text-primary" />}
              title="AI Embeddings"
              description="Text is processed into vector embeddings using OpenAI"
            />
            <FeatureCard 
              icon={<Database className="h-6 w-6 text-primary" />}
              title="Semantic Search"
              description="Find similar content by meaning, not just keywords"
            />
          </div>
        </div>
        
        <TabsComponent />
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default Index;
