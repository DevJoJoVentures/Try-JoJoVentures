import React from 'react';
import { Waveform } from '@uiball/loaders';

function LoadingScreen() {
  return (
    <div className="absolute inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center z-50 rounded-[38px]">
      <div className="flex flex-col items-center justify-center">
        <Waveform 
          size={40}
          lineWeight={3.5}
          speed={1} 
          color="white" 
        />
        <p className="text-base mt-4 font-medium text-center">JoJo Magic in Progress</p>
      </div>
    </div>
  );
}

export default LoadingScreen;