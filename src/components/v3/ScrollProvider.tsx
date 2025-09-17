import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

type ScrollContextValue = { progress: number };

const ScrollContext = createContext<ScrollContextValue>({ progress: 0 });

export const useScrollProgress = () => useContext(ScrollContext).progress;

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrolled = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const p = height > 0 ? Math.min(1, Math.max(0, scrolled / height)) : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const value = useMemo(() => ({ progress }), [progress]);
  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
};

