import React from 'react';
import './_statCard.scss'

interface StatCardProps {
  title: string;
  icon: string;
  value: string | number;
}

const StatCard: React.FC<StatCardProps> = ({ title, icon, value }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon">
        <img src={icon} alt={`${title.toLowerCase()} icon`} />
      </div>
      <div className="stat-content">
        <h3>{title}</h3>
        <p className="stat-number">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
