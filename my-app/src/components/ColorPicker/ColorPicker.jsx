import React, { Component } from 'react';
import './ColorPicker.css';

export class ColorPicker extends Component {
    state = {
        activeOptionIdx: 3,
    };

    makeOptionClassName = (index) => {
        const optionClasses = ['ColorPicker__option'];

        if (index === this.state.activeOptionIdx) {
            optionClasses.push('ColorPicker__option--active');
        }

        return optionClasses.join(' ');
    };

    setActiveIndex = (index) => {
        this.setState({ activeOptionIdx: index});
    };

    render() {
        const { activeOptionIdx } = this.state;
        const { options } = this.props;
        const {label} = options[activeOptionIdx];

        return (

        <div className="ColorPicker">
            <h2 className="ColorPicker__title">Color Picker</h2>
            <p>Choose color: { label }</p>
            <div>
            {this.props.options.map(({ label, color }, index) => {

                return(
                    <button
                        key={label}
                        className={this.makeOptionClassName(index)}
                        style={{ backgroundColor: color }}
                        onClick={() => this.setActiveIndex(index)}
                    ></button>
                );
            })}
            </div>
        </div>
        );
    }
}

