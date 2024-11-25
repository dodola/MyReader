import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Header from './components/Header';
import NewsGrid from './components/NewsGrid';
import RecentUpdates from './pages/RecentUpdates';
import { featuredNews } from './data';

function App() {
  const [showAllNews, setShowAllNews] = useState(false);

  if (showAllNews) {
    return <RecentUpdates />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Stay Informed, Stay Ahead
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Your trusted source for the latest news, curated stories, and in-depth analysis from around the globe.
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Trending Stories</h2>
          <button 
            onClick={() => setShowAllNews(true)}
            className="flex items-center text-red-600 hover:text-red-700"
          >
            View All
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
        </div>
        <NewsGrid articles={featuredNews} />
      </div>
    </div>
  );
}

export default App;