import { config } from 'react-spring';

export const ITEMS_PER_PAGE = 3;

export const ANIMATION = {
  bubble1: (isViewActive, cnfg = config.default) => ({
    from: { top: 215, left: 75, transform: 'rotate(0deg) scale(1)' },
    to: async (next, cancel) => {
      await next({
        top: 185,
        left: 55,
        transform: 'rotate(180deg) scale(0.5)',
      });
      await next({ top: 215, left: 75, transform: 'rotate(360deg) scale(1)' });
    },
    config: { ...cnfg, duration: 5000 },
    loop: true,
    pause: isViewActive,
  }),
  bubble2: (isViewActive, cnfg = config.default) => ({
    from: { top: 320, left: 185, transform: 'rotate(0deg) scale(1)' },
    to: async (next, cancel) => {
      await next({
        top: 300,
        left: 215,
        transform: 'rotate(180deg) scale(1.5)',
      });
      await next({ top: 320, left: 185, transform: 'rotate(360deg) scale(1)' });
    },
    config: { ...cnfg, duration: 6000 },
    loop: true,
    pause: isViewActive,
  }),
  bubble3: (isViewActive, cnfg = config.default) => ({
    from: { top: 65, left: 200, transform: 'rotate(0deg) scale(1)' },
    to: async (next, cancel) => {
      await next({ top: 45, left: 180, transform: 'rotate(90deg) scale(0.8)' });
      await next({
        top: 55,
        left: 230,
        transform: 'rotate(225deg) scale(0.8)',
      });
      await next({ top: 65, left: 200, transform: 'rotate(360deg) scale(1)' });
    },
    config: { ...cnfg, duration: 5000 },
    loop: true,
    pause: isViewActive,
  }),
  bubble4: (isViewActive, cnfg = config.default) => ({}),
  bubble5: (isViewActive, cnfg = config.default) => ({
    from: { top: 155, left: 185, transform: 'rotate(0deg)' },
    to: async (next, cancel) => {
      await next({
        top: 125,
        left: 155,
        transform: 'rotate(135deg)',
      });
      await next({
        top: 125,
        left: 215,
        transform: 'rotate(225deg)',
      });
      await next({ top: 155, left: 185, transform: 'rotate(360deg) scale(1)' });
    },
    config: { ...cnfg, duration: 5000 },
    loop: true,
    pause: isViewActive,
  }),
  bubble6: (isViewActive, cnfg = config.default) => ({
    from: { bottom: -80, left: 185, transform: 'rotate(0deg) scale(1)' },
    to: async (next, cancel) => {
      await next({
        bottom: -100,
        left: 225,
        transform: 'rotate(180deg) scale(2)',
      });
      await next({
        bottom: -80,
        left: 185,
        transform: 'rotate(360deg) scale(1)',
      });
    },
    config: { ...cnfg, duration: 10000 },
    loop: true,
    pause: isViewActive,
  }),
  bubble7: (isViewActive, cnfg = config.default) => ({
    from: { bottom: 280, left: 10, transform: 'rotate(0deg) scale(1)' },
    to: async (next, cancel) => {
      await next({
        bottom: 300,
        left: 50,
        transform: 'rotate(180deg) scale(0.8)',
      });
      await next({
        bottom: 280,
        left: 10,
        transform: 'rotate(360deg) scale(1)',
      });
    },
    config: { ...cnfg, duration: 5000 },
    loop: true,
    pause: isViewActive,
  }),
  bubble8: (isViewActive, cnfg = config.default) => ({
    from: { bottom: 140, left: 25, transform: 'rotate(0deg) scale(0.8)' },
    to: async (next, cancel) => {
      await next({
        bottom: 180,
        left: 65,
        transform: 'rotate(180deg) scale(0.5)',
      });
      await next({
        bottom: 140,
        left: 25,
        transform: 'rotate(360deg) scale(0.8)',
      });
    },
    config: { ...cnfg, duration: 10000 },
    loop: true,
    pause: isViewActive,
  }),
};
