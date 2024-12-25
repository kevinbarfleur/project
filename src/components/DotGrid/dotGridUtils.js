import { Noise } from './noiseUtils';

const noise = new Noise(Math.random() * 65535);

export function createDotGrid(ctx, width, height, time) {
  const spacing = 20;
  const dotSize = 1.2;
  const noiseScale = 0.01;
  const timeScale = 0.21;
  
  // Adjusted wave parameters with increased amplitude (+20%) and speed (+40%)
  const primaryWave = {
    scale: 0.015,
    amplitude: 9.6,
    speed: 1.68
  };
  const secondaryWave = {
    scale: 0.008,
    amplitude: 7.2,
    speed: 0.98
  };
  
  for (let x = spacing; x < width - spacing; x += spacing) {
    for (let y = spacing; y < height - spacing; y += spacing) {
      const distanceToCenter = Math.sqrt(
        Math.pow((x - width / 2) / (width / 2), 2) + 
        Math.pow((y - height / 2) / (height / 2), 2)
      );
      
      // Enhanced wave motion with phase shifts
      const wave1 = Math.sin(x * primaryWave.scale + time * primaryWave.speed) * 
                   Math.sin(y * primaryWave.scale + time * primaryWave.speed * 0.8) * 
                   primaryWave.amplitude;
                   
      const wave2 = Math.sin(x * secondaryWave.scale - time * secondaryWave.speed) * 
                   Math.cos(y * secondaryWave.scale + time * secondaryWave.speed * 1.3) * 
                   secondaryWave.amplitude;
      
      // Add subtle circular motion
      const angle = Math.atan2(y - height/2, x - width/2);
      const circularMotion = Math.sin(angle + time * 0.7) * 2.4;
      
      const combinedWave = (wave1 + wave2 + circularMotion) * (1 - distanceToCenter * 0.5);
      
      const noiseValue = noise.noise(
        x * noiseScale, 
        y * noiseScale, 
        time * timeScale
      );
      
      // Combine noise and wave movement
      const elevation = noiseValue * 2;
      const offsetX = Math.sin(elevation * Math.PI) * 4 + combinedWave;
      const offsetY = Math.cos(elevation * Math.PI) * 4 + combinedWave * 0.9;
      
      // More dynamic opacity variation
      const baseAlpha = Math.max(0.1, 0.6 - distanceToCenter * 0.4);
      const waveInfluence = (Math.sin(x * primaryWave.scale + time) + 1) * 0.15;
      const dynamicFactor = Math.sin(time * 0.5) * 0.1 + 0.9;
      const alpha = baseAlpha * (0.3 + Math.pow(noiseValue, 1.5) + waveInfluence) * dynamicFactor;
      
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
      ctx.beginPath();
      ctx.arc(
        x + offsetX,
        y + offsetY,
        dotSize,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
  }
}