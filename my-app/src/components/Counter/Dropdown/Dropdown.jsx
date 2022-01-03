import React from 'react';
import './Dropdown.css';

export class Dropdown extends React.Component {
    state = {
        visible: false,
    };

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible,
        }))
    };

    render() {
        const { visible } = this.state;

        return (
        <div className="Dropdown">
            <button type="button"
             className="Dropdown__toggle"
             onClick={this.toggle}>
                 {visible ? 'Hide' : 'Show'}
            </button>
            
            {visible && (<div className="Dropdown__menu">Выпадающее меню</div>)}  
        </div>
        );
  }
}

