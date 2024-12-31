import React from 'react';

const InfiniteScroll = () => {
  const roles = [
    'WEB DEVELOPMENT',
    'FRONT-END DEVELOPER',
    'BACKEND DEVELOPER',
    'ANDROID DEVELOPER',
    'MOBILE DEVELOPER',
  ];

  return (
    <div className="infinite-scroll-container">
    <div className="infinite-scroll-marquee">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="infinite-scroll-group">
          {roles.map((role, index) => (
            <div key={index} className="infinite-scroll-item">
              {role}
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
  );
};

export default InfiniteScroll;