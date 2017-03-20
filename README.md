# JavaScript Easing Functions

A collection of easing functions for JavaScript.

## Install
Using npm

```
npm install --save easing-funcs
```

Using yarn

```
yarn add easing-funcs
```

## Usage

### ES6

```js
import { easeInCubic, easeInCubic } from 'easing-funcs';

// Pass value between 0 - 1
const easeValue = easeInCubic(0.5);
```

### CommonJS

```js
const easingFuncs = require('easing-funcs');

// Pass value between 0 - 1
const easeValue = easingFuncs.easeInCubic(0.5);
```

## API

The following functions are available. Each function takes a value between 0 - 1 and returns the easing value.

- `number: linear(t: number)`
- `number: easeInSine(t: number)`
- `number: easeOutSine(t: number)`
- `number: easeInOutSine(t: number)`
- `number: easeInQuad(t: number)`
- `number: easeOutQuad(t: number)`
- `number: easeInOutQuad(t: number)`
- `number: easeInCubic(t: number)`
- `number: easeOutCubic(t: number)`
- `number: easeInOutCubic(t: number)`
- `number: easeInQuart(t: number)`
- `number: easeOutQuart(t: number)`
- `number: easeInOutQuart(t: number)`
- `number: easeInQuint(t: number)`
- `number: easeOutQuint(t: number)`
- `number: easeInOutQuint(t: number)`
