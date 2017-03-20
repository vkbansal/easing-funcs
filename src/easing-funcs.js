export const linear = t => t;

export const easeIn = power => t => t ** power;

export const easeOut = power => t => 1 - Math.abs((t - 1) ** power);

export const easeInOut = power => t => t < 0.5 ? easeIn(power)(t * 2) * 0.5 : (easeOut(power)((t * 2) - 1) * 0.5) + 0.5

export const easeInSine = t => (-1 * Math.cos(t * Math.PI * 0.5)) + 1;

export const easeOutSine = t => Math.sin(t * Math.PI * 0.5);

export const easeInOutSine = t => -0.5 * (Math.cos(t * Math.PI) - 1);

export const easeInQuad = easeIn(2);

export const easeOutQuad = easeOut(2);

export const easeInOutQuad = easeInOut(2);

export const easeInCubic = easeIn(3);

export const easeOutCubic = easeOut(3);

export const easeInOutCubic = easeInOut(3);

export const easeInQuart = easeIn(4);

export const easeOutQuart = easeOut(4);

export const easeInOutQuart = easeInOut(4);

export const easeInQuint = easeIn(5);

export const easeOutQuint = easeOut(5);

export const easeInOutQuint = easeInOut(5);

