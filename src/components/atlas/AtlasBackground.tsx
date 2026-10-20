import React from 'react';

interface AtlasBackgroundProps {
  variant?: 'paper' | 'navy' | 'card';
  showContour?: boolean;
  showGrid?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const AtlasBackground: React.FC<AtlasBackgroundProps> = ({
  variant = 'paper',
  showContour = true,
  showGrid = true,
  className = '',
  children,
}) => {
  const isNavy = variant === 'navy';

  return (
    <div
      className={`relative overflow-hidden ${
        isNavy ? 'bg-atlas-navyDeep text-atlas-paper' : 'bg-atlas-paper text-atlas-text'
      } ${className}`}
    >
      {/* Paper Grain Effect */}
      <div className="absolute inset-0 pointer-events-none paper-texture opacity-80" />

      {/* Cartographic Grid */}
      {showGrid && (
        <div
          className={`absolute inset-0 pointer-events-none ${
            isNavy ? 'atlas-grid-bg-dark opacity-40' : 'atlas-grid-bg opacity-70'
          }`}
        />
      )}

      {/* Topographic Contour Lines SVG layer */}
      {showContour && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <svg
            className={`w-full h-full object-cover opacity-${isNavy ? '15' : '20'}`}
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Organic contour curves */}
            <path
              d="M-100,200 C300,150 500,320 850,220 C1200,120 1350,300 1550,250"
              stroke={isNavy ? '#F4EFE5' : '#14283F'}
              strokeWidth="0.85"
              strokeDasharray="4 4"
              opacity="0.35"
            />
            <path
              d="M-80,260 C320,210 520,380 870,280 C1220,180 1370,360 1570,310"
              stroke={isNavy ? '#F4EFE5' : '#14283F'}
              strokeWidth="0.75"
              opacity="0.25"
            />
            <path
              d="M-60,320 C340,270 540,440 890,340 C1240,240 1390,420 1590,370"
              stroke={isNavy ? '#F4EFE5' : '#14283F'}
              strokeWidth="1.1"
              strokeDasharray="8 6"
              opacity="0.3"
            />
            <path
              d="M-40,380 C360,330 560,500 910,400 C1260,300 1410,480 1610,430"
              stroke={isNavy ? '#F4EFE5' : '#14283F'}
              strokeWidth="0.65"
              opacity="0.2"
            />

            {/* Southern elevation contours */}
            <path
              d="M-50,650 C250,550 600,750 950,600 C1300,450 1450,700 1600,640"
              stroke={isNavy ? '#BF693D' : '#BF693D'}
              strokeWidth="0.7"
              strokeDasharray="5 5"
              opacity="0.3"
            />
            <path
              d="M-30,710 C270,610 620,810 970,660 C1320,510 1470,760 1620,700"
              stroke={isNavy ? '#F4EFE5' : '#14283F'}
              strokeWidth="0.75"
              opacity="0.2"
            />

            {/* Latitude/Longitude coordinate tick marks */}
            <g opacity={isNavy ? '0.4' : '0.55'} stroke={isNavy ? '#F4EFE5' : '#14283F'} strokeWidth="1">
              <path d="M120,40 L120,48 M116,44 L124,44" />
              <path d="M480,40 L480,48 M476,44 L484,44" />
              <path d="M840,40 L840,48 M836,44 L844,44" />
              <path d="M1200,40 L1200,48 M1196,44 L1204,44" />
              
              <path d="M120,860 L120,868 M116,864 L124,864" />
              <path d="M480,860 L480,868 M476,864 L484,864" />
              <path d="M840,860 L840,868 M836,864 L844,864" />
              <path d="M1200,860 L1200,868 M1196,864 L1204,864" />
            </g>
          </svg>
        </div>
      )}

      {/* Content wrapper */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
