const LogoAutoVibe = () => {
    return (
      <svg
        width="50"
        height="50"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* Cercle extérieur */}
        <circle cx="50" cy="50" r="48" stroke="#e60000" strokeWidth="4" fill="none" />
  
        {/* Icône volant */}
        <circle cx="50" cy="50" r="20" stroke="black" strokeWidth="3" fill="none" />
        <line x1="50" y1="30" x2="50" y2="70" stroke="black" strokeWidth="3" />
        <line x1="30" y1="50" x2="70" y2="50" stroke="black" strokeWidth="3" />
  
        {/* Trait dynamique pour la vitesse */}
        <path
          d="M 75 15 L 90 30 M 80 10 L 95 25"
          stroke="#e60000"
          strokeWidth="3"
          strokeLinecap="round"
        />
  
        {/* Texte "AutoVibe" en bas */}
        <text x="20" y="90" fontSize="12" fill="black" fontWeight="bold">
          Auto
        </text>
        <text x="50" y="90" fontSize="12" fill="#e60000" fontWeight="bold">
          Vibe
        </text>
      </svg>
    );
  };
  
  export { LogoAutoVibe };

  
  const LogoAutoVibe2 = () => {
    return (
      <svg
        width="80"
        height="50"
        viewBox="0 0 100 50"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* Silhouette de voiture */}
        <path
          d="M10 30 Q 40 10, 70 30 T 100 30"
          stroke="#e60000"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
  
        {/* Vibrations */}
        <path d="M 15 40 L 20 35 M 25 42 L 30 37 M 35 44 L 40 39" stroke="black" strokeWidth="3" strokeLinecap="round" />
  
        {/* Texte AutoVibe */}
        <text x="20" y="50" fontSize="14" fill="black" fontWeight="bold">
          Auto
        </text>
        <text x="55" y="50" fontSize="14" fill="#e60000" fontWeight="bold">
          Vibe
        </text>
      </svg>
    );
  };
  export { LogoAutoVibe2 };

  const LogoAutoVibe3 = () => {
    return (
      <svg
        width="160"
        height="40"
        viewBox="0 0 160 40"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* Texte AutoVibe */}
        <text x="10" y="30" fontSize="24" fill="black" fontWeight="bold">
          Auto
        </text>
        <text x="70" y="30" fontSize="24" fill="#e60000" fontWeight="bold">
          Vibe
        </text>
  
        {/* Effet d’accélération sur le "V" */}
        <path d="M 110 10 L 120 30" stroke="black" strokeWidth="4" strokeLinecap="round" />
        <path d="M 120 10 L 130 30" stroke="#e60000" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  };
  export {LogoAutoVibe3} ;
  
  const LogoAutoVibe4 = () => {
    return (
      <svg
        width="60"
        height="60"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        {/* Contour du volant */}
        <circle cx="50" cy="50" r="40" stroke="#e60000" strokeWidth="5" fill="none" />
        
        {/* Volant */}
        <circle cx="50" cy="50" r="20" stroke="black" strokeWidth="4" fill="none" />
        <line x1="50" y1="30" x2="50" y2="70" stroke="black" strokeWidth="3" />
        <line x1="30" y1="50" x2="70" y2="50" stroke="black" strokeWidth="3" />
  
        {/* Lignes de vitesse */}
        <path d="M 75 15 L 90 30 M 80 10 L 95 25" stroke="#e60000" strokeWidth="3" strokeLinecap="round" />
  
        {/* Texte AutoVibe */}
        <text x="22" y="95" fontSize="14" fill="black" fontWeight="bold">
          Auto
        </text>
        <text x="55" y="95" fontSize="14" fill="#e60000" fontWeight="bold">
          Vibe
        </text>
      </svg>
    );
  };
  export {LogoAutoVibe4} ;
  