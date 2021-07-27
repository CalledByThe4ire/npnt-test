import { config } from 'react-spring';

export const ANIMATION = {
  sperm1: (isViewActive, cnfg = config.default) => ({
    from: { top: 238, left: 636, opacity: 0 },
    to: async (next, cancel) => {
      await next({ top: 98, left: 366, opacity: 1 });
    },
    delay: 400,
    config: { ...cnfg, duration: 1350 },
    pause: isViewActive,
  }),
  sperm2: (isViewActive, cnfg = config.default) => ({
    from: { top: 185, left: 765, opacity: 0 },
    to: async (next, cancel) => {
      await next({ top: 95, left: 585, opacity: 1 });
    },
    delay: 500,
    config: { ...cnfg, duration: 1250 },
    pause: isViewActive,
  }),
  sperm3: (isViewActive, cnfg = config.default) => ({
    from: { top: 155, left: 880, opacity: 0 },
    to: async (next, cancel) => {
      await next({ top: 75, left: 710, opacity: 1 });
    },
    delay: 600,
    config: { ...cnfg, duration: 1150 },
    pause: isViewActive,
  }),
  sperm4: (isViewActive, cnfg = config.default) => ({
    from: { bottom: -35, right: -735, opacity: 0 },
    to: async (next, cancel) => {
      await next({ bottom: 15, right: -595, opacity: 1 });
    },
    delay: 700,
    config: { ...cnfg, duration: 1050 },
    pause: isViewActive,
  }),
  sperm5: (isViewActive, cnfg = config.default) => ({
    from: { bottom: -35, right: -330, opacity: 0 },
    to: async (next, cancel) => {
      await next({ bottom: 95, right: -190, opacity: 1 });
    },
    delay: 800,
    config: { ...cnfg, duration: 950 },
    pause: isViewActive,
  }),
};
