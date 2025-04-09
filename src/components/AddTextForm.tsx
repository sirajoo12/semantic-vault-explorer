
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const AddTextForm = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!text.trim()) {
      toast.error('Please enter some text');
      return;
    }

    setLoading(true);
    
    try {
      // This is a placeholder for the actual API call to store text and embeddings
      // In a real app, you would connect to Supabase here
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Text added successfully!');
      setText('');
    } catch (error) {
      console.error('Error adding text:', error);
      toast.error('Failed to add text. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea
        placeholder="Paste your text here (paragraph, note, idea, etc.)"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        className="w-full p-4 border rounded-md focus:ring-primary focus:border-primary"
      />
      <Button 
        type="submit" 
        disabled={loading}
        className="w-full"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          'Add to Vault'
        )}
      </Button>
      <p className="text-sm text-gray-500 mt-2">
        Your text will be processed into embeddings and stored securely.
      </p>
    </form>
  );
};

export default AddTextForm;
