import React, {Component} from 'react';
import Car from "./components/car/car";

class App extends Component {
    cars = [
        {title : 'Mersedes', model : '25lk85-52', year : '2015', power : 1.6, color : 'black'},
        {title : 'BMW', model : '25lk85-52', year : '2015', power : 2.6, color : 'black'},
        {title : 'Volkswagen', model : 'Toureg', year : '2012', power : 2.5, color : 'red'},
        {title : 'Shkoda', model : 'Fabia', year : '2015', power : 1.6, color : 'white'},
        {title : 'Volkswagen', model : 'Golf 4', year : '2001', power : 1.6, color : 'silver'},
    ]
    render() {
        return (
            <div>
                {
                    this.cars.map((value, index) => {
                        let name = 'target'
                        if (index % 2) {
                            name = 'other'
                        }
                        return (<Car item = {value} key ={index} clsName = {name}/>)
                    })
                }
            </div>
        );
    }
}

export default App;