import React from 'react';

interface CompassRoseProps {
  className?: string;
  size?: number;
  variant?: 'light' | 'dark';
}

export const CompassRose: React.FC<CompassRoseProps> = ({
  className = '',
  size = 40,
  variant = 'light'
}) => {
  const primaryColor = variant === 'light' ? '#14283F' : '#F4EFE5';
  const secondaryColor = variant === 'light' ? '#BF693D' : '#BF693D';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer Ring */}
      <circle cx="50" cy="50" r="44" stroke={primaryColor} strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      <circle cx="50" cy="50" r="40" stroke={primaryColor} strokeWidth="0.75" opacity="0.6" />
      <circle cx="50" cy="50" r="28" stroke={primaryColor} strokeWidth="0.5" opacity="0.3" />

      {/* Cardinal Direction Marks */}
      <text x="50" y="8" textAnchor="middle" fill={secondaryColor} fontSize="9" fontFamily="Manrope" fontWeight="700">N</text>
      <text x="94" y="53" textAnchor="middle" fill={primaryColor} fontSize="8" fontFamily="Manrope" opacity="0.7">E</text>
      <text x="50" y="97" textAnchor="middle" fill={primaryColor} fontSize="8" fontFamily="Manrope" opacity="0.7">S</text>
      <text x="6" y="53" textAnchor="middle" fill={primaryColor} fontSize="8" fontFamily="Manrope" opacity="0.7">W</text>

      {/* Degree ticks */}
      <line x1="50" y1="12" x2="50" y2="16" stroke={primaryColor} strokeWidth="1" opacity="0.5" />
      <line x1="50" y1="84" x2="50" y2="88" stroke={primaryColor} strokeWidth="1" opacity="0.5" />
      <line x1="12" y1="50" x2="16" y2="50" stroke={primaryColor} strokeWidth="1" opacity="0.5" />
      <line x1="84" y1="50" x2="88" y2="50" stroke={primaryColor} strokeWidth="1" opacity="0.5" />

      {/* Main Compass Needle Points */}
      {/* North Needle */}
      <polygon points="50,18 45,50 50,50" fill={secondaryColor} />
      <polygon points="50,18 55,50 50,50" fill="#A85830" opacity="0.85" />

      {/* South Needle */}
      <polygon points="50,82 45,50 50,50" fill={primaryColor} opacity="0.5" />
      <polygon points="50,82 55,50 50,50" fill={primaryColor} opacity="0.7" />

      {/* East Needle */}
      <polygon points="82,50 50,45 50,50" fill={primaryColor} opacity="0.6" />
      <polygon points="82,50 50,55 50,50" fill={primaryColor} opacity="0.8" />

      {/* West Needle */}
      <polygon points="18,50 50,45 50,50" fill={primaryColor} opacity="0.4" />
      <polygon points="18,50 50,55 50,50" fill={primaryColor} opacity="0.6" />

      {/* Center Pivot Pin */}
      <circle cx="50" cy="50" r="3.5" fill="#FFFDFA" stroke={primaryColor} strokeWidth="1.5" />
      <circle cx="50" cy="50" r="1.5" fill={secondaryColor} />
    </svg>
  );
};
