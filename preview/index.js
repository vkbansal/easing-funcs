import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import * as easings from '../src/easing-funcs';

const easingsGroups = [
    [{ type: 'linear' }],
    [{ type: 'easeInSine' }, { type: 'easeOutSine' }, { type: 'easeInOutSine' }],
    [{ type: 'easeInQuad' }, { type: 'easeOutQuad' }, { type: 'easeInOutQuad' }],
    [{ type: 'easeInCubic' }, { type: 'easeOutCubic' }, { type: 'easeInOutCubic' }],
    [{ type: 'easeInQuart' }, { type: 'easeOutQuart' }, { type: 'easeInOutQuart' }],
    [{ type: 'easeInQuint' }, { type: 'easeOutQuint' }, { type: 'easeInOutQuint' }],
    [{ type: 'easeInExpo' }, { type: 'easeOutExpo' }, { type: 'easeInOutExpo' }],
    [{ type: 'easeInCirc' }, { type: 'easeOutCirc' }, { type: 'easeInOutCirc' }],
    [{ type: 'easeInElastic', magnitude: true }, { type: 'easeOutElastic', magnitude: true }, { type: 'easeInOutCirc' }]
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
    shouldComponentUpdate(nextProps) {
        return this.props.magnitude !== nextProps.magnitude;
    }

    render() {
        return (
            <div className='easing-curve'>
            {STEPS.map((step, i) => {
                const style = {
                    left: `${step}px`,
                    bottom: `${this.props.easingFunc(step, this.props.magnitude)}px`
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

        this.state = {
            magnitude: 0.5
        };

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(e) {
        this.setState({ magnitude: parseFloat(e.target.value, 10) });
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

        this.easingFunc = x => easing(x / WIDTH, this.state.magnitude) * HEIGHT;

        return (
            <div className='easing-preview'>
                <div className="preview" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <EasingCurve easingFunc={this.easingFunc} magnitude={this.state.magnitude} />
                    <div ref={this.timeRef} className='time' />
                    <div ref={this.playDotRef} className='play-dot' />
                </div>
                <div className="title">
                    <h4>{this.props.type}</h4>
                </div>
                {this.props.hasMagnitude && (
                    <div>
                        <p>Magnitude</p>
                        0&nbsp;
                        <input type='range' min={0} max={1} step={0.01} value={this.state.magnitude}
                            onChange={this.handleChange} />
                        &nbsp;1
                    </div>
                )}
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
                        <div key={easing.type} className={`pure-u-1-${group.length}`}>
                            <EasingPreview type={easing.type} hasMagnitude={easing.magnitude} />
                        </div>
                    ))}
                    </div>
                ))}
            </div>
        )
    }
}

ReactDOM.render(<EasingFuncs/>, document.getElementById('root'));
