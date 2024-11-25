import React, { useState } from 'react';
import Header from '../components/Header';
import CategoryFilter from '../components/CategoryFilter';
import NewsGrid from '../components/NewsGrid';
import LoadMoreButton from '../components/LoadMoreButton';
import { categories, allNews } from '../data';

const RecentUpdates: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState(9);

  const filteredArticles = activeCategory === 'All'
    ? allNews
    : allNews.filter(article => article.category === activeCategory);

  const displayedArticles = filteredArticles.slice(0, visibleArticles);
  const hasMore = displayedArticles.length < filteredArticles.length;

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleArticles(prev => prev + 6);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onCategoryClick={setActiveCategory}
        activeCategory={activeCategory}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Recent Updates</h1>
          <CategoryFilter
            categories={['All', ...categories]}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>

        <NewsGrid articles={displayedArticles} />
        
        {hasMore && (
          <LoadMoreButton onClick={handleLoadMore} loading={loading} />
        )}
      </div>
    </div>
  );
};

export default RecentUpdates;