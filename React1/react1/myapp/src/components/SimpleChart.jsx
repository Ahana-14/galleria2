import React from 'react';
import { motion } from 'framer-motion';

const SimpleChart = ({ data, type = 'line', color = 'blue', height = 200 }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  const minValue = Math.min(...data.map(d => d.value));

  const getBarHeight = (value) => {
    return ((value - minValue) / (maxValue - minValue)) * (height - 40);
  };

  const getLinePath = () => {
    const width = 300;
    const stepX = width / (data.length - 1);
    
    let path = `M 0 ${height - 20 - getBarHeight(data[0].value)}`;
    
    data.forEach((point, index) => {
      if (index > 0) {
        const x = index * stepX;
        const y = height - 20 - getBarHeight(point.value);
        path += ` L ${x} ${y}`;
      }
    });
    
    return path;
  };

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      red: 'from-red-500 to-red-600',
      orange: 'from-orange-500 to-orange-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="w-full">
      <svg width="100%" height={height} viewBox={`0 0 300 ${height}`} className="overflow-visible">
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => (
          <line
            key={index}
            x1="0"
            y1={20 + ratio * (height - 40)}
            x2="300"
            y2={20 + ratio * (height - 40)}
            stroke="#f3f4f6"
            strokeWidth="1"
          />
        ))}

        {/* Chart content */}
        {type === 'bar' ? (
          // Bar Chart
          data.map((item, index) => {
            const barHeight = getBarHeight(item.value);
            const barWidth = 300 / data.length - 4;
            const x = index * (300 / data.length) + 2;
            
            return (
              <motion.rect
                key={index}
                x={x}
                y={height - 20 - barHeight}
                width={barWidth}
                height={barHeight}
                fill={`url(#gradient-${color})`}
                initial={{ height: 0, y: height - 20 }}
                animate={{ height: barHeight, y: height - 20 - barHeight }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              />
            );
          })
        ) : (
          // Line Chart
          <>
            <motion.path
              d={getLinePath()}
              fill="none"
              stroke={`url(#gradient-${color})`}
              strokeWidth="3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
            {data.map((point, index) => {
              const x = index * (300 / (data.length - 1));
              const y = height - 20 - getBarHeight(point.value);
              
              return (
                <motion.circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="4"
                  fill={`url(#gradient-${color})`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 + 0.5 }}
                />
              );
            })}
          </>
        )}

        {/* Gradient definitions */}
        <defs>
          <linearGradient id={`gradient-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={`var(--tw-${color}-500)`} />
            <stop offset="100%" stopColor={`var(--tw-${color}-600)`} />
          </linearGradient>
        </defs>
      </svg>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        {data.map((item, index) => (
          <span key={index} className="text-center">
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SimpleChart;



