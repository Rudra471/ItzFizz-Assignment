import React, { forwardRef } from 'react';

const SecondPhase = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full z-20 opacity-0 pointer-events-none px-4">
      <h2 className="text-5xl md:text-8xl font-black tracking-widest uppercase mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-500 to-red-600 drop-shadow-lg">
        Pure Adrenaline
      </h2>
      <p className="text-gray-300 tracking-[0.4em] uppercase text-sm md:text-xl font-light">
        Engineered for the absolute edge.
      </p>
    </div>
  );
});

export default SecondPhase;