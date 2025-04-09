
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Database, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="w-6 h-6 text-primary" />
          <span className="text-lg font-semibold">Semantic Search Vault</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link 
            to="/add" 
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <Database className="w-4 h-4" />
            <span>Add Text</span>
          </Link>
          <Link 
            to="/search" 
            className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
