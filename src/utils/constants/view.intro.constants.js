import { config } from 'react-spring';

export const ANIMATION = {
  cell1: (isViewActive, cnfg = config.default) => ({
    from: { top: 65, right: 215, transform: 'scale(1)' },
    to: async (next, cancel) => {
      await next({ top: 35, right: 125, transform: 'scale(0.8)' });
      await next({ top: 65, right: 215, transform: 'scale(1)' });
    },
    config: { ...cnfg, duration: 10000 },
    loop: true,
    pause: isViewActive,
  }),
  cell2: (isViewActive, cnfg = config.default) => ({
    from: { top: 200, right: 50, transform: 'rotate(0deg) scale(1)' },
    to: async (next, cancel) => {
      await next({ top: 250, right: 170, transform: 'rotate(90deg) scale(1.2)' });
      await next({ top: 150, right: 300, transform: 'rotate(225deg) scale(0.8)' });
      await next({ top: 200, right: 50, transform: 'rotate(360deg) scale(1)' });
    },
    config: { ...cnfg, duration: 6000 },
    loop: true,
    pause: isViewActive,
  }),
  cell3: (isViewActive, cnfg = config.default) => ({
    from: { bottom: -100, right: 255, transform: 'scale(1)' },
    to: async (next, cancel) => {
      await next({ bottom: -130, right: 305, transform: 'scale(1.5)' });
      await next({ bottom: -100, right: 385, transform: 'scale(1)' });
      await next({ bottom: -130, right: 305, transform: 'scale(1.5)' });
      await next({ bottom: -100, right: 255, transform: 'scale(1)' });
    },
    config: { ...cnfg, duration: 8000 },
    loop: true,
    pause: isViewActive,
  }),
  sperm: (isViewActive, cnfg = config.default) => ({}),
  cell4: (isViewActive, cnfg = config.default) => ({
    from: { left: 20, bottom: 190, transform: 'rotate(-45deg)' },
    to: async (next, cancel) => {
      await next({ left: -10, bottom: 230, transform: 'rotate(45deg)' });
      await next({ left: 90, bottom: 245, transform: 'rotate(135deg)' });
      await next({ left: 90, bottom: 90, transform: 'rotate(225deg)' });
      await next({ left: 20, bottom: 190, transform: 'rotate(-45deg)' });
    },
    config: { ...cnfg, duration: 8000 },
    loop: true,
    pause: isViewActive,
  }),
};
