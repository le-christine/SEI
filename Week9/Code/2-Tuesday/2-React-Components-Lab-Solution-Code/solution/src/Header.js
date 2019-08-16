import React, {Component} from 'react';
import Button from './Button';

class Header extends Component {
    render() {
        return (
            <div className="header">
                {this.props.tabs.map((tab, index) => {
                    return <Button
                        key={index}
                        text={tab}
                    />
                })}
            </div>
        )
    }
}

export default Header;
