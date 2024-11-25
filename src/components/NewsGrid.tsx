import React from 'react';
import { Clock, Eye } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  category: string;
  image: string;
  date: string;
  views: number;
}

interface NewsGridProps {
  articles: Article[];
}

const NewsGrid: React.FC<NewsGridProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article) => (
        <div
          key={article.id}
          className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {article.category}
            </span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2 hover:text-red-600">
              {article.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500 space-x-4">
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {article.date}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {article.views}k views
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsGrid;