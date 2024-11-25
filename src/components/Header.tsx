import React from 'react';
import { Newspaper, Search, User } from 'lucide-react';

interface HeaderProps {
  onCategoryClick?: (category: string) => void;
  activeCategory?: string;
}

const Header: React.FC<HeaderProps> = ({ onCategoryClick, activeCategory }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Newspaper className="h-8 w-8 text-red-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">GuGuDu</span>
          </div>
          
          <nav className="hidden md:flex">
            <button
              onClick={() => onCategoryClick?.('Latest')}
              className={`text-sm font-medium px-3 py-2 transition-colors ${
                activeCategory === 'Latest'
                  ? 'text-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Latest
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-600 hover:text-gray-900">
              <Search className="h-5 w-5" />
            </button>
            <button className="flex items-center space-x-1 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors">
              <User className="h-4 w-4" />
              <span>Sign In</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;