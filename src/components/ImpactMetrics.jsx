
import React, { forwardRef } from 'react';

const ImpactMetrics = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="absolute top-[35%] md:top-[52%] flex gap-8 sm:gap-16 md:gap-32 z-20 text-center px-4 w-full justify-center">
      <div className="flex flex-col items-center opacity-0">
        <p className="text-3xl md:text-5xl font-light text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">1.9s</p>
        <p className="text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase mt-2">0-100 km/h</p>
      </div>
      <div className="flex flex-col items-center opacity-0">
        <p className="text-3xl md:text-5xl font-light text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">98%</p>
        <p className="text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase mt-2">Aero Efficiency</p>
      </div>
      <div className="flex flex-col items-center opacity-0">
        <p className="text-3xl md:text-5xl font-light text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">400+</p>
        <p className="text-xs md:text-sm tracking-[0.2em] text-gray-400 uppercase mt-2">Top Speed</p>
      </div>
    </div>
  );
});

export default ImpactMetrics;
