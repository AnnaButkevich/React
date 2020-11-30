import React, {Component} from 'react';
import './Car style.css'

class Car extends Component {
    render() {
        let {item, clsName} = this.props
        return (
            <div className={clsName}>
                <h3>
                    {item.title}
                </h3>
                <p>
                    {item.model} -{item.color} - {item.year} - {item.power}
                </p>
            </div>
        );
    }
}

export default Car;