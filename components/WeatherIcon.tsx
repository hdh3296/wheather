interface WeatherIconProps {
  condition: string;
  size?: 'small' | 'medium' | 'large';
}

export default function WeatherIcon({ condition, size = 'medium' }: WeatherIconProps) {
  const sizeClasses = {
    small: 'w-16 h-16',
    medium: 'w-24 h-24',
    large: 'w-32 h-32',
  };

  const icons: Record<string, JSX.Element> = {
    'clear-day': (
      <svg className={sizeClasses[size]} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="20" fill="#FFD700" className="animate-pulse-slow">
          <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite" />
        </circle>
        <g className="animate-spin-slow" style={{ transformOrigin: '50px 50px' }}>
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <rect
              key={angle}
              x="48"
              y="10"
              width="4"
              height="15"
              fill="#FFD700"
              transform={`rotate(${angle} 50 50)`}
            />
          ))}
        </g>
      </svg>
    ),
    
    'clear-night': (
      <svg className={sizeClasses[size]} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 35 20 Q 35 5, 50 5 Q 65 5, 65 20 Q 65 35, 50 35 Q 45 35, 42 32 Q 55 30, 55 18 Q 55 10, 45 10 Q 35 10, 35 20"
          fill="#E6E6FA"
          className="animate-pulse-slow"
        />
        <circle cx="70" cy="20" r="1" fill="#E6E6FA" className="animate-twinkle" />
        <circle cx="25" cy="30" r="1.5" fill="#E6E6FA" className="animate-twinkle-delayed" />
        <circle cx="75" cy="40" r="1" fill="#E6E6FA" className="animate-twinkle" />
        <circle cx="30" cy="50" r="1.5" fill="#E6E6FA" className="animate-twinkle-delayed" />
      </svg>
    ),
    
    'cloudy': (
      <svg className={sizeClasses[size]} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="animate-float">
          <ellipse cx="50" cy="45" rx="30" ry="20" fill="#B0C4DE" opacity="0.9" />
          <ellipse cx="35" cy="40" rx="20" ry="15" fill="#B0C4DE" />
          <ellipse cx="65" cy="40" rx="20" ry="15" fill="#B0C4DE" />
        </g>
      </svg>
    ),
    
    'rainy': (
      <svg className={sizeClasses[size]} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="animate-float">
          <ellipse cx="50" cy="35" rx="30" ry="20" fill="#708090" />
          <ellipse cx="35" cy="30" rx="20" ry="15" fill="#708090" />
          <ellipse cx="65" cy="30" rx="20" ry="15" fill="#708090" />
        </g>
        <g className="animate-rain">
          <rect x="30" y="50" width="2" height="10" fill="#4682B4" rx="1">
            <animate attributeName="y" values="50;80;50" dur="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur="1s" repeatCount="indefinite" />
          </rect>
          <rect x="45" y="55" width="2" height="10" fill="#4682B4" rx="1">
            <animate attributeName="y" values="55;85;55" dur="1s" begin="0.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.2s" repeatCount="indefinite" />
          </rect>
          <rect x="60" y="50" width="2" height="10" fill="#4682B4" rx="1">
            <animate attributeName="y" values="50;80;50" dur="1s" begin="0.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur="1s" begin="0.4s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>
    ),
    
    'snowy': (
      <svg className={sizeClasses[size]} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="animate-float">
          <ellipse cx="50" cy="35" rx="30" ry="20" fill="#E0E0E0" />
          <ellipse cx="35" cy="30" rx="20" ry="15" fill="#E0E0E0" />
          <ellipse cx="65" cy="30" rx="20" ry="15" fill="#E0E0E0" />
        </g>
        <g className="animate-snow">
          <circle cx="30" cy="50" r="2" fill="white">
            <animate attributeName="cy" values="50;80;50" dur="3s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50" cy="55" r="2.5" fill="white">
            <animate attributeName="cy" values="55;85;55" dur="3s" begin="1s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="70" cy="50" r="2" fill="white">
            <animate attributeName="cy" values="50;80;50" dur="3s" begin="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0;1;0" dur="3s" begin="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    ),
    
    'foggy': (
      <svg className={sizeClasses[size]} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="animate-fog">
          <rect x="10" y="35" width="80" height="4" fill="#C0C0C0" rx="2" opacity="0.6">
            <animate attributeName="x" values="10;15;10" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="15" y="45" width="70" height="4" fill="#C0C0C0" rx="2" opacity="0.7">
            <animate attributeName="x" values="15;10;15" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="10" y="55" width="80" height="4" fill="#C0C0C0" rx="2" opacity="0.6">
            <animate attributeName="x" values="10;15;10" dur="4s" repeatCount="indefinite" />
          </rect>
          <rect x="20" y="65" width="60" height="4" fill="#C0C0C0" rx="2" opacity="0.5">
            <animate attributeName="x" values="20;15;20" dur="4s" repeatCount="indefinite" />
          </rect>
        </g>
      </svg>
    ),
  };

  return icons[condition] || icons['cloudy'];
}