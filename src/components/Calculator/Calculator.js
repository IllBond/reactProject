import React from 'react';
import newData from './../../JSON/data'
import ValueArray from "./ValueArray";
import './Calculator.css';

class Calculator extends React.Component {

    state = {
        data: {
            m: {
                "name": "Метр",
                "value": 1
            },
            sm: {
                "name": "Сантиметр",
                "value": 100
            },
            in: {
                "name": "Дюйм",
                "value": 0.0254
            },
            ft: {
                "name": "Фут",
                "value": 3.2
            },
        },
        request: null,
        response: null,
        requestCoefficient: 1,
        responseCoefficient: 1,
    };


    componentDidMount() {
        this.setState({
            data: {...this.state.data, ...newData}
        })
    }

    changeRequest = (e) => {
        this.setState({
            request: e.currentTarget.value
        });
        this.setState({
            response: +((e.currentTarget.value / this.state.requestCoefficient) * this.state.responseCoefficient).toFixed(2) ||  '0'
        })
    };

    changeResponse = (e) => {
        this.setState({
            response: e.currentTarget.value
        });
        this.setState({
            request: +((e.currentTarget.value / this.state.responseCoefficient) * this.state.requestCoefficient).toFixed(2) ||   '0'
        })
    };

    setUnitRequest = (val) => {
        this.setState({
            requestCoefficient: this.state.data[val.currentTarget.value].value
        });
        this.setState({
            response: +((this.state.request / this.state.data[val.currentTarget.value].value) * this.state.responseCoefficient).toFixed(2)  ||   '0'
        })
    };

    setUnitResponse = (val) => {
        this.setState({
            responseCoefficient: this.state.data[val.currentTarget.value].value
        });
        this.setState({
            response: +((this.state.request / this.state.requestCoefficient) * this.state.data[val.currentTarget.value].value).toFixed(2) ||  '0'
        })
    }

    render() {

        let options = Object.keys(this.state.data).map(key => <option key={key}
                                                                      value={key}>{this.state.data[key].name}</option>);
        return <>

            <div className={'request'}>
                <div className={'request-padding'}>
                    <h3>Запрос</h3>
                    <div>
                        <ValueArray change={this.changeRequest} val={this.state.request}/>
                    </div>
                    <select onChange={(e) => {
                        this.setUnitRequest(e)
                    }}>
                        {options}
                    </select>
                </div>
            </div>

            <div className={'response'}>
                <div className={'response-padding'}>
                    <h3>Результат</h3>
                    <div>
                        <ValueArray change={this.changeResponse} val={this.state.response}/>
                    </div>
                    <select onChange={(e) => {
                        this.setUnitResponse(e)
                    }}>
                        {options}
                    </select>
                </div>
            </div>
        </>
    }
}

export default Calculator