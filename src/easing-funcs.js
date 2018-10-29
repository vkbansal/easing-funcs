export const linear = t => t;

export const easeIn = power => t => t ** power;

export const easeOut = power => t => 1 - Math.abs((t - 1) ** power);

export const easeInOut = power => t => t < 0.5 ? easeIn(power)(t * 2) * 0.5 : (easeOut(power)((t * 2) - 1) * 0.5) + 0.5;

export const easeInSine = t => 1 - Math.cos(t * Math.PI * 0.5);

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

export const easeOutExpo = t => t === 1 ? 1 : 1 - 2 ** (-10 * t);

export const easeInOutExpo = t => t === 0 || t === 1
                                    ? t
                                    : t < 0.5
                                        ? 0.5 * (2 ** (10 * 2 * (t - 0.5)))
                                        : 0.5 * (2 - Math.abs(2 ** (-10 * 2 * (t - 0.5))));

export const easeInCirc = t => Math.abs(Math.sqrt(1 - (t ** 2)) - 1);

export const easeOutCirc = t => Math.sqrt(1 - ((t - 1) ** 2));

export const easeInOutCirc = t => t < 0.5
                                    ? -0.5 * (Math.sqrt(1 - (2 * t) ** 2) - 1)
                                    : 0.5 * (Math.sqrt(1 - (2 * t - 2) ** 2) + 1);

export function easeInElastic(t, magnitude = 0.7) {
    if (t === 0 || t === 1) {
        return t;
    }

    const scaledTime = t - 1;

    const p = 1 - magnitude;
    const s = p / (2 * Math.PI) * Math.asin(1);

    return -1 * 2 ** (10 * scaledTime ) * Math.sin((scaledTime - s) * (2 * Math.PI) / p);
}

export function easeOutElastic(t, magnitude = 0.7) {
    const p = 1 - magnitude;
    const scaledTime = t * 2;

    if ( t === 0 || t === 1 ) {
        return t;
    }

    const s = p / (2 * Math.PI) * Math.asin(1);
    return 2 ** (-10 * scaledTime) * Math.sin((scaledTime - s) * (2 * Math.PI) / p) + 1;
}

export function easeInOutElastic(t, magnitude = 0.65) {
    const p = 1 - magnitude;

    if (t === 0 || t === 1) {
        return t;
    }

    const scaledTime = t * 2;
    const scaledTime1 = scaledTime - 1;

    const s = p / (2 * Math.PI) * Math.asin(1);

    if (scaledTime < 1) {
        return -0.5 * (
            Math.pow( 2, 10 * scaledTime1 ) *
            Math.sin( ( scaledTime1 - s ) * ( 2 * Math.PI ) / p )
        );
    }

    return (Math.pow(2, -10 * scaledTime1) * Math.sin(( scaledTime1 - s) * (2 * Math.PI) / p) * 0.5) + 1;

}

