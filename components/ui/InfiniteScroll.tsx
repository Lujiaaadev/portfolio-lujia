import React from 'react';

const InfiniteScroll = () => {
  const roles = [
    'WEB DEVELOPMENT SERVICES',
    'FRONT-END DESIGN AND DEVELOPMENT',
    'BACKEND DEVELOPMENT AND INTEGRATION',
    'ANDROID APP DEVELOPMENT',
    'MOBILE APP DEVELOPMENT SERVICES',
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