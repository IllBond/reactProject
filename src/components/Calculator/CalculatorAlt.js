import React from 'react';
import newData from './../../JSON/data';
import Request from './../.././JSON/request';
import './Calculator.css';


class CalculatorAlt extends React.Component {

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
    };


    componentDidMount() {
        this.setState({
            data: {...this.state.data, ...newData},
            request: Request
        })
    }


    render() {
        if (this.state.request) {
            let calculate = () => {
                let unit = this.state.request.distance.unit;
                let value = this.state.request.distance.value;
                let convertTo = this.state.request.convert_to;
                let calc = +(value / this.state.data[unit].value * this.state.data[convertTo].value).toFixed(2)
                console.log('Выходные данные >')
                console.log({unit: convertTo, value: calc})
                console.log('< Выходные данные')
                return {unit: convertTo, value: calc}
            };
            if (!!calculate) {
                return null
            }
            return <>
                <h3> </h3>
                <div>
                    <div> - По умолчанию доступны Метр, Сантиметр, Дюйм, Фут </div>
                    {/*<div> - Входящие параметры: - src\JSON\request.json </div>*/}
                    <div> - Расширение списка - src\JSON\data.json</div>
                    {/*<div> - Выходные данные в консоли</div>*/}
                </div>
                <div id={'pd'}>
                    {/*<div>*/}
                    {/*    <h3>JSON Обьект</h3>*/}
                    {/*    <pre>{JSON.stringify(Request)}</pre>*/}
                    {/*</div>*/}
                    {/*<div>*/}
                    {/*    <h3>Выходные данные:</h3>*/}
                    {/*    <pre>{JSON.stringify(calculate())}</pre>*/}
                    {/*</div>*/}
                </div>

            </>
        } else {
            return ''
        }
    }
}

export default CalculatorAlt