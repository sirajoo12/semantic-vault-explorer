
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Search } from 'lucide-react';
import AddTextForm from './AddTextForm';
import SearchForm from './SearchForm';

const TabsComponent = () => {
  return (
    <Tabs defaultValue="add" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="add" className="flex items-center justify-center gap-2">
          <Database className="w-4 h-4" />
          <span>Add Text</span>
        </TabsTrigger>
        <TabsTrigger value="search" className="flex items-center justify-center gap-2">
          <Search className="w-4 h-4" />
          <span>Search</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="add">
        <AddTextForm />
      </TabsContent>
      <TabsContent value="search">
        <SearchForm />
      </TabsContent>
    </Tabs>
  );
};

export default TabsComponent;
