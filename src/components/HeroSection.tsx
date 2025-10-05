import { useEffect, useRef, useState } from "react";

export const HeroSection = () => {
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && cardRef.current) {
        setDragPosition({
          x: e.clientX - cardRef.current.offsetWidth / 2,
          y: e.clientY - cardRef.current.offsetHeight / 2,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
      <div className="max-w-7xl mx-auto text-center z-10">
        {/* Large Name */}
        <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] font-black leading-none mb-8 select-none">
          <span className="inline-block text-secondary text-outline">AAKASH</span>
          <br />
          <span className="inline-block text-secondary text-outline">MOKANI</span>
        </h1>

        {/* Draggable ID Card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            ref={cardRef}
            className="draggable relative"
            style={
              isDragging || dragPosition.x !== 0
                ? {
                    position: "fixed",
                    left: `${dragPosition.x}px`,
                    top: `${dragPosition.y}px`,
                    zIndex: 50,
                  }
                : {}
            }
            onMouseDown={() => setIsDragging(true)}
          >
            <div className="w-80 h-48 bg-card border-4 border-foreground rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
              <div className="p-4 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-xs font-bold text-muted-foreground mb-1">Name</div>
                    <div className="text-lg font-bold">AAKASH MOKANI</div>
                  </div>
                  <div className="w-20 h-24 bg-gray-300 border-2 border-foreground rounded overflow-hidden">
                    <img 
                      src="https://www.mokanichokani.me/profile3.jpg" 
                      alt="Aakash Mokani"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground mb-1">DOB</div>
                  <div className="text-sm font-bold">01 - 01 - 2004</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-muted-foreground mb-1">EXP</div>
                  <div className="text-sm font-bold">01 - 01 - 2030</div>
                </div>
              </div>
            </div>
            
            {/* Rainbow overlay on card */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 opacity-30 rounded-lg mix-blend-overlay pointer-events-none"></div>
            
            {/* Text below card */}
            <div className="text-center mt-4 text-cyan-600 font-bold text-sm">
              TRY DRAGGING THE CARD
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
