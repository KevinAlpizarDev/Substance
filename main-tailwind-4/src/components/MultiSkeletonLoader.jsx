// src/components/skeletons/MultiSkeletonLoader.jsx
import React from 'react';

const SkeletonCard = ({ 
  variant = 'default',
  color = 'gray',
  height = 'h-48',
  showBadge = false,
  showAvatar = false,
  horizontal = false
}) => {
  const colorClasses = {
    gray: { bgLight: 'bg-gray-100', bgMedium: 'bg-gray-200', text: 'bg-gray-100' },
    blue: { bgLight: 'bg-blue-50', bgMedium: 'bg-blue-200', text: 'bg-blue-100' },
    purple: { bgLight: 'bg-purple-50', bgMedium: 'bg-purple-200', text: 'bg-purple-100' },
    amber: { bgLight: 'bg-amber-50', bgMedium: 'bg-amber-200', text: 'bg-amber-100' },
    emerald: { bgLight: 'bg-emerald-50', bgMedium: 'bg-emerald-200', text: 'bg-emerald-100' }
  };

  const { bgLight, bgMedium, text } = colorClasses[color] || colorClasses.gray;

  const renderContent = () => (
    <div className="p-6">
      {showAvatar && (
        <div className={`absolute -top-8 left-6 h-16 w-16 rounded-full ${bgMedium} border-4 border-white`}></div>
      )}
      <div className={`h-5 ${bgMedium} rounded w-3/4 mb-3`}></div>
      <div className={`h-3 ${text} rounded w-full mb-2`}></div>
      <div className={`h-3 ${text} rounded w-5/6 mb-2`}></div>
      {variant === 'withActions' && (
        <div className="flex justify-between mt-4">
          <div className={`h-8 ${text} rounded w-20`}></div>
          <div className={`h-8 ${bgMedium} rounded w-24`}></div>
        </div>
      )}
      {variant === 'minimal' && (
        <div className={`h-3 ${text} rounded w-4/6`}></div>
      )}
    </div>
  );

  return (
    <div className={`w-full bg-white rounded-lg shadow-md overflow-hidden animate-pulse ${
      horizontal ? 'flex' : ''
    }`}>
      <div className={`${horizontal ? 'w-1/3' : 'w-full'} ${bgLight} ${height}`}>
        {showBadge && (
          <div className={`absolute top-4 right-4 h-6 w-16 ${bgMedium} rounded-full`}></div>
        )}
      </div>
      {horizontal ? (
        <div className="w-2/3">
          {renderContent()}
        </div>
      ) : (
        renderContent()
      )}
    </div>
  );
};

const MultiSkeletonLoader = ({ 
  cols = 3, 
  items = 6,
  config = [
    { variant: 'default', color: 'gray' },
    { variant: 'withAvatar', color: 'blue', showAvatar: true },
    { variant: 'withActions', color: 'purple' },
    { variant: 'minimal', color: 'gray' },
    { variant: 'withBadge', color: 'amber', showBadge: true },
    { variant: 'horizontal', color: 'emerald', horizontal: true }
  ]
}) => {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridClasses[cols] || gridClasses[3]} gap-6 p-6`}>
      {Array.from({ length: items }).map((_, index) => {
        const itemConfig = config[index % config.length] || {};
        return (
          <SkeletonCard 
            key={index}
            variant={itemConfig.variant}
            color={itemConfig.color}
            height={itemConfig.height}
            showBadge={itemConfig.showBadge}
            showAvatar={itemConfig.showAvatar}
            horizontal={itemConfig.horizontal}
          />
        );
      })}
    </div>
  );
};

export default MultiSkeletonLoader;