import React, { forwardRef } from 'react';

const HeroHeadline = forwardRef(({ headline, lettersRef }, ref) => {
  return (
        <div ref={ref} className="absolute top-[18%] md:top-[22%] flex flex-col items-center z-20 w-full px-4">
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-[0.3em] md:tracking-[0.6em] uppercase text-center flex justify-center flex-wrap overflow-hidden mb-10 md:mb-16">
        {headline.split(' ').map((word, wordIndex) => (
          <div key={wordIndex} className="w-full flex justify-center mb-4 md:mb-6">
            {word.split('').map((char, i) => {
              const index = wordIndex === 0 ? i : word.length + i;
              return (
                <span
                  key={index}
                  ref={el => lettersRef.current[index] = el}
                  className="inline-block origin-bottom opacity-0"
                >
                  {char}
                </span>
              );
            })}
          </div>
        ))}
      </h1>
    </div>
  );
});

export default HeroHeadline;
