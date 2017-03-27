import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as easings from '../src/easing-funcs';

const easingsGroups = [
    ['linear'],
    ['easeInSine', 'easeOutSine', 'easeInOutSine'],
    ['easeInQuad', 'easeOutQuad', 'easeInOutQuad'],
    ['easeInCubic', 'easeOutCubic', 'easeInOutCubic'],
    ['easeInQuart', 'easeOutQuart', 'easeInOutQuart'],
    ['easeInQuint', 'easeOutQuint', 'easeInOutQuint'],
    ['easeInExpo', 'easeOutExpo', 'easeInOutExpo']
];
const WIDTH = 200;
const HEIGHT = 200;
const STEP_SIZE = 0.5;
const ANIM_DUR = 1200;
const STEPS = (function () {
    let value = 0;
    let steps = [];

    while (value < WIDTH) {
        steps.push(value);
        value += STEP_SIZE;
    }

    return steps;
})();

class EasingCurve extends Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <div className='easing-curve'>
            {STEPS.map((step, i) => {
                const style = {
                    left: `${step}px`,
                    bottom: `${this.props.easingFunc(step)}px`
                };
                return <div className='dot' key={i} style={style}/>;
            })}
            </div>
        );
    }
}

class EasingPreview extends Component {
    constructor(props) {
        super(props);

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.animate = this.animate.bind(this);
        this.playDotRef = this.playDotRef.bind(this);
        this.timeRef = this.timeRef.bind(this);
    }

    animate(currentTime) {
        this.startTime = this.startTime || currentTime;
        this.position = (WIDTH * (currentTime - this.startTime) / ANIM_DUR) % WIDTH

        const y = HEIGHT - this.easingFunc(this.position);

        this.playDot.style.transform = `translate(${this.position}px, ${y}px)`;
        this.time.style.transform = `translateY(${y}px)`;

        this.animationId = window.requestAnimationFrame(this.animate);
    }

    handleMouseEnter() {
        this.playDot.style.opacity = 1;
        this.time.style.opacity = 1;
        this.animationId = window.requestAnimationFrame(this.animate);
    }

    handleMouseLeave() {
        this.playDot.style.opacity = 0;
        this.time.style.opacity = 0;
        this.playDot.style.transform = `translate(0px, ${WIDTH}px)`;

        window.cancelAnimationFrame(this.animationId);
        this.position = 0;
        this.startTime = null;
    }

    playDotRef(c) {
        this.playDot = c;
    }

    timeRef(c) {
        this.time = c;
    }

    render() {
        const easing = easings[this.props.type];

        if (!easing) return null;

        this.easingFunc = x => easing(x / WIDTH) * HEIGHT;

        return (
            <div className='easing-preview'>
                <div className="preview" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <EasingCurve easingFunc={this.easingFunc} />
                    <div ref={this.timeRef} className='time' />
                    <div ref={this.playDotRef} className='play-dot' />
                </div>
                <div className="title">
                    {this.props.type}
                </div>
            </div>
        );
    }
}

class EasingFuncs extends Component {
    render() {
        return (
            <div>
                {easingsGroups.map((group, i) => (
                    <div key={i} className='pure-g easing-row'>
                    {group.map(easing => (
                        <div key={easing} className={`pure-u-1-${group.length}`}>
                            <EasingPreview type={easing} />
                        </div>
                    ))}
                    </div>
                ))}
            </div>
        )
    }
}

ReactDOM.render(<EasingFuncs/>, document.getElementById('root'));
