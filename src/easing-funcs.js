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

export const easeInExpo = t => t === 0 ? 0 : 2 ** (10 * (t - 1));

export const easeOutExpo = t => t === 1 ? 1 : 1 - (2 ** (-10 * t));

export const easeInOutExpo = t => t === 0 || t === 1
                                    ? t
                                    : t < 0.5
                                        ? 0.5 * (2 ** (10 * 2 * (t - 0.5)))
                                        : 0.5 * (2 - Math.abs(2 ** (-10 * 2 * (t - 0.5))));
