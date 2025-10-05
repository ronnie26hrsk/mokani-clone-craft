import { useEffect, useState } from "react";

export const AnimatedBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Sun */}
      <div className="absolute top-12 left-12 w-24 h-24 bg-yellow-400 rounded-full animate-pulse">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-8 bg-yellow-400"></div>
        <div className="absolute top-1/2 -left-2 -translate-y-1/2 w-8 h-1 bg-yellow-400"></div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-8 bg-yellow-400"></div>
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-8 h-1 bg-yellow-400"></div>
        <div className="absolute top-3 left-3 w-1 h-6 bg-yellow-400 rotate-45"></div>
        <div className="absolute top-3 right-3 w-1 h-6 bg-yellow-400 -rotate-45"></div>
        <div className="absolute bottom-3 left-3 w-1 h-6 bg-yellow-400 -rotate-45"></div>
        <div className="absolute bottom-3 right-3 w-1 h-6 bg-yellow-400 rotate-45"></div>
      </div>

      {/* Rocket */}
      <div 
        className="absolute top-20 animate-float"
        style={{ 
          left: '20%',
          animation: 'float 6s ease-in-out infinite'
        }}
      >
        <div className="relative">
          <div className="text-6xl">🚀</div>
          <div className="absolute -top-4 -right-8 bg-primary text-foreground px-3 py-1 rounded-full text-xs font-bold border-2 border-foreground">
            HEY! I AM
          </div>
        </div>
      </div>

      {/* Airship */}
      <div 
        className="absolute bottom-32 left-12 animate-float"
        style={{ 
          animationDelay: '1s',
          animationDuration: '8s'
        }}
      >
        <div className="relative">
          <div className="w-48 h-24 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full border-4 border-foreground relative">
            <div className="absolute inset-0 flex items-center justify-center gap-2">
              <a href="https://github.com/mokanichokani" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-xs">GH</span>
                </div>
              </a>
              <a href="https://linkedin.com/in/mokanichokani" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">in</span>
                </div>
              </a>
              <a href="https://youtube.com/@ganduchutney" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">YT</span>
                </div>
              </a>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-8 bg-teal-600 border-4 border-foreground rounded-b-full"></div>
          </div>
        </div>
      </div>

      {/* Plane */}
      <div 
        className="absolute top-1/2 right-0 animate-slide-in"
        style={{ 
          animation: 'slideAcross 20s linear infinite'
        }}
      >
        <div className="text-6xl">✈️</div>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground/20"></div>
      </div>

      {/* Floating tag */}
      <div 
        className="absolute bottom-48 right-48 animate-float"
        style={{ 
          animationDelay: '2s',
          animationDuration: '7s'
        }}
      >
        <div className="bg-primary text-foreground px-6 py-3 rounded-lg text-sm font-bold border-4 border-foreground shadow-lg transform -rotate-6">
          CREATIVE DEVELOPER CRAFTING ENGAGING DIGITAL<br/>
          EXPERIENCES THROUGH CODE DESIGN AND STORYTELLING<br/>
          THAT CONNECT WITH PEOPLE
        </div>
      </div>

      {/* Clouds */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-float"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${5 + i}s`,
          }}
        >
          <div className="text-4xl opacity-70">☁️</div>
        </div>
      ))}

      {/* Birds */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`bird-${i}`}
          className="absolute text-2xl animate-float"
          style={{
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          {i % 2 === 0 ? '🐦' : '🕊️'}
        </div>
      ))}
    </div>
  );
};
