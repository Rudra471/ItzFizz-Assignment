import React, { forwardRef } from 'react';

const CarVisual = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="absolute top-[48%] md:top-[40%] w-full flex justify-center items-center pointer-events-none z-10 opacity-0">
      <div className="relative w-[90vw] md:w-[70vw] max-w-[1200px]">
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600&auto=format&fit=crop"
          alt="Performance Vehicle"
          className="w-full h-auto object-contain mix-blend-screen opacity-90 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_30%,transparent_100%)] filter brightness-110 contrast-125"
        />
      </div>
    </div>
  );
});

export default CarVisual;
