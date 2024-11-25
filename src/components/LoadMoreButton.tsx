import React from 'react';
import { ChevronDown } from 'lucide-react';

interface LoadMoreButtonProps {
  onClick: () => void;
  loading?: boolean;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick, loading }) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="w-full mt-8 flex items-center justify-center px-4 py-3 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors disabled:opacity-50"
    >
      {loading ? (
        <span className="animate-pulse">Loading...</span>
      ) : (
        <>
          Load More
          <ChevronDown className="ml-2 h-4 w-4" />
        </>
      )}
    </button>
  );
};

export default LoadMoreButton;