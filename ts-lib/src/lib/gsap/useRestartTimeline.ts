'use client';
import { useEffect } from 'react';

export const useRestartTimeline = (tl: gsap.core.Timeline) => {
  useEffect(() => {
    const button = document.createElement('button');
    button.innerText = 'Click me';
    button.style.position = 'fixed';
    button.style.top = '100px';
    button.style.left = '100px';
    button.style.zIndex = `1000`;
    document.body.appendChild(button);
    button.addEventListener('click', () => {
      tl.restart();
    });
  }, []);
};
