import React, {Component} from "react";
import style from './Gen.module.css'

class Gen extends Component {

    state = {
        xxx: null,
        stop: null,
        isStart: true
    };


    GEN = () => {
        if (document.getElementById('data')) {
            let data = {corrections: [12, 7, 10, 4], cells: [8, 4, 6, 8, 8]};
            let dataelement = document.getElementById('data');
            dataelement.innerText = JSON.stringify(data);
            let population = [];
            let maxPopultion = 10;
            let notUse = 0;
            let initial = 0;
            let initialTired = 0;
            let burn = 0;
            let burnTired = 0;
            // eslint-disable-next-line no-unused-vars
            let gen = 0;
            let result1;
            let result2;
            let result3;
            let result4;

            let init = (data) => {
                population = [];
                let randGen = (data) => {
                    let unit = [];
                    for (let j = 0; j < data.corrections.length; j++) {
                        unit.push(Math.floor(Math.random() * data.cells.length + 1))
                    }

                    notUse = data.cells.length;
                    return unit
                };

                let AddNewUnit = (data) => {
                    let firstEng = randGen(data);
                    let secondEng = randGen(data);
                    population = [...population, {
                        firstEng: firstEng,
                        secondEng: secondEng
                    }]
                };

                for (let i = 0; i < maxPopultion; i++) {
                    AddNewUnit(data)
                }
            };

            let naturalSelection = () => {
                firstSelection();
                secondSelection();

                if (population.length < 2) {
                    if (initial < 1) {
                        initial++;
                        // eslint-disable-next-line no-use-before-define
                        el2 = document.getElementById('status');
                        // eslint-disable-next-line no-use-before-define
                        el2.innerText = 'Попытка зародить жизнь. '
                    }

                    initialTired++;
                    const initialTiredelement = document.getElementById('initialTired');
                    initialTiredelement.innerText = initialTired;

                    init(data)
                } else {
                    if (burn < 1) {
                        gen++;
                        var el2 = document.getElementById('status');
                        el2.innerText = 'Жизнь родилась'
                    }
                    var burnTiredelement = document.getElementById('burnTired');
                    burnTiredelement.innerText = burnTired;
                    burnTired++;
                    sort();
                    cataclysm();
                    crossMut();
                }
                result();
            };


            let result = () => {
                var el1 = document.getElementById('result');

                result1 = [];
                result2 = [];
                result3 = 0;
                result4 = {};

                // eslint-disable-next-line array-callback-return
                population[0].firstEng.map(key => {
                    result1.push(key === notUse ? 0 : data.cells[key])
                });

                // eslint-disable-next-line array-callback-return
                population[0].secondEng.map(key => {
                    result2.push(key === notUse ? 0 : data.cells[key])
                });

                for (let o = 0; o < population[0].firstEng.length; o++) {
                    result3 = result3 + ((data.cells[population[0].firstEng[o]] === undefined) ? 0 : data.cells[population[0].firstEng[o]]) +
                        ((data.cells[population[0].secondEng[o]] === undefined) ? 0 : data.cells[population[0].secondEng[o]] / 2)
                }

                result4 = {
                    main_thruster: result1,
                    secondary_thruster: result2,
                    delta_velocity: result3
                };


                el1.innerText = JSON.stringify(result4)


            };
            let firstSelection = () => {
                let nd = [];

                for (let k = 0; k < population.length; k++) {
                    for (let l = 0; l < data.corrections.length; l++) {
                        if (
                            ((data.cells[population[k].firstEng[l]] === undefined) ? 0 : data.cells[population[k].firstEng[l]]) +
                            ((data.cells[population[k].secondEng[l]] === undefined) ? 0 : data.cells[population[k].secondEng[l]] / 2) >
                            data.corrections[l]) {
                            nd.unshift(k)
                            break
                        }
                    }
                }

                // eslint-disable-next-line array-callback-return
                nd.map(key => {population = population.filter((item, index) => index !== key)})
            };
            let secondSelection = () => {
                let nd = [];

                for (let k = 0; k < population.length; k++) {
                    let concatEng = population[k].firstEng.concat(population[k].secondEng)
                    outer:for (let p = 0; p < concatEng.length; p++) {
                        if (concatEng[p] !== notUse) {
                            for (let r = p + 1; r < concatEng.length; r++) {
                                if (concatEng[p] === concatEng[r]) {
                                    nd.unshift(k);
                                    break outer
                                }
                            }
                        }
                    }
                }

                // eslint-disable-next-line array-callback-return
                nd.map(key => {
                    population = population.filter((item, index) => index !== key)
                })
            };

            this.setState({
                xxx: () => {
                    // Каждые 0,02 сек рождается новое поколение
                    let stop = setInterval(naturalSelection, 1);
                    this.setState({
                        stop: stop
                    })
                    this.setState({
                        isStart: false
                    })
                }
            })

            let cataclysm = () => {
                while (population.length > 5) {
                    population.pop()
                }
            };

            let sort = () => {
                if (population.length > 1) {
                    population.sort((a, b) => {
                        let aa = 0;
                        let bb = 0;
                        for (let l = 0; l < a.firstEng.length; l++) {
                            aa = aa + ((data.cells[a.firstEng[l]] === undefined) ? 0 : data.cells[a.firstEng[l]]) +
                                ((data.cells[a.secondEng[l]] === undefined) ? 0 : data.cells[a.secondEng[l]] / 2)
                        }
                        for (let l = 0; l < b.firstEng.length; l++) {
                            bb = bb + ((data.cells[b.firstEng[l]] === undefined) ? 0 : data.cells[b.firstEng[l]]) +
                                ((data.cells[b.secondEng[l]] === undefined) ? 0 : data.cells[b.secondEng[l]] / 2)
                        }

                        return bb - aa
                    });
                }
            };

            let crossMut = () => {
                while (population.length < maxPopultion) {
                    if (Math.random() > 0.5) {
                        cross()
                    } else {
                        mut();
                        // cross()
                    }
                }
            };

            let mut = () => {
                let mutUnit = JSON.parse(JSON.stringify(population[Math.floor(Math.random() * population.length)]));
                for (let i = 0; i < Math.ceil(Math.random() * data.corrections.length); i++) {
                    if (Math.random() > 0.5) {
                        mutUnit.firstEng[Math.floor(Math.random() * mutUnit.firstEng.length)] = Math.floor(Math.random() * (data.cells.length + 1))
                    } else {
                        mutUnit.secondEng[Math.floor(Math.random() * mutUnit.secondEng.length)] = Math.floor(Math.random() * (data.cells.length + 1))
                    }
                }
                population.push(mutUnit)
            };

            let cross = () => {
                let motherUnit = JSON.parse(JSON.stringify(population[Math.floor(Math.random() * population.length)]));
                let fatherUnit = JSON.parse(JSON.stringify(population[Math.floor(Math.random() * population.length)]));
                for (let i = 0; i < fatherUnit.firstEng.length; i++) {
                    if (Math.random() > 0.5) {
                        motherUnit.firstEng[i] = fatherUnit.firstEng[Math.random() * fatherUnit.firstEng.length]
                    } else {
                        motherUnit.firstEng[i] = fatherUnit.secondEng[Math.random() * fatherUnit.firstEng.length]
                    }

                    if (Math.random() > 0.5) {
                        motherUnit.secondEng[i] = fatherUnit.firstEng[Math.random() * fatherUnit.firstEng.length]
                    } else {
                        motherUnit.secondEng[i] = fatherUnit.secondEng[Math.random() * fatherUnit.firstEng.length]
                    }

                }
                population.push(motherUnit)
            };
            init(data)
        }
    };

    componentWillUnmount() {
        clearInterval(this.state.stop)
    }

    componentDidMount() {
        this.GEN()
    }

    render() {
        return <div>
            {this.state.isStart ?  <input type="button" value="Начать естественный отбор" onClick={this.state.xxx}/> : ''}

            <div>
                <div>
                    <div>
                        <h3>Генетический Алгоритм (одно из тестовых заданий)</h3>
                        1) Есть космический корабыль. <br/>
                        2) У коробля есть 2 двигателя которые толкают корабль вперед.<br/>
                        3) В корабле есть топлевыне капулы с надписями 2, 4, 6, 8 или 10 м/с (Они могут давать ускорение в 2, 4, 6, 8 или 10 м/с.)<br/>
                        4) Двигатель №1 ускоряет корабль на X, где X - это ускореие конкретной топлевной капсулы.<br/>
                        5) Двигатель №2 работает не корректно и ускоряет корабль на X/2, где X - это ускореие конкретной топлевной капсулы.<br/>
                        6) Нам нужно определить порядок задействования топливных капсул ионных двигателей спутника для совершения заранее заданного ряда<br/>
                        маневров.<br/>
                        7) Нам предоставляют список маневров котоыре мы должны совершить<br/>
                        8) Нам предоставляют список топлевных капсул которые есть в наличии<br/><br/>
                        P.S<br/>
                        a) Для совершения одного маневра запускать каждый двигатель можно максимум один раз.<br/>
                        b) Также, для одного маневра, допускается суммарный прирост скорости меньше
                        требуемого (например если запаса капсул недостаточно), но превышение заданного
                        приращения скорости запрещено. <br/>
                        c) Капсулы невозможно использовать повторно.
                        d) Алгоритм должен определять такой порядок использования капсул, при котором сумма
                        приращений скорости по всем маневрам, и при соблюдении всех условий, будет
                        максимальной, задавая таким образом наиболее точную траекторию. Количество
                        маневров, допустимое приращение скорости на каждом из них, а также доступный набор
                        капсул может быть произвольным.


                    </div>
                    <div>
                        <h3>Входящие параметры</h3>
                        <div>corrections - Маневры которые нужно совершить;</div>
                        <div>cells - Капсулы которые есть в наличии </div>
                        <pre className={style.border} id='data'>
                        </pre>
                    </div>
                    <h3>Выполнение</h3>

                    <div  className={style.border}>
                    <div>Попыток родить жизнь - <span id="initialTired">0</span></div>
                    <div>Ген (Попыток решить задачу) - <span id="burnTired">0</span></div>
                    <div><span className={style.red}>Статус</span> - <span id="status">Пока ничего не началось</span></div>
                    </div>

                    <div>
                        <h3>Результат</h3>
                        main_thruster - Двигатель 1,<br/>
                        secondary_thruster - Двигатель 2 (испорченный, скорсоть снижена в 2 раза ),<br/>
                        delta_velocity - Сумарный присрост скорости
                        <pre className={style.border + ' ' + style.big} id='result'>

                        </pre>
                    </div>
                    <h3>Описание</h3>
                    <li>Пробуем создать жизнеспособную популяцию</li>
                    <li>Популяция должна удовлетворять условиям <br/>1. Не использовать один и тот же топлевный бак <br/>2.
                        Ускорение должно быть равным или меньше скорости маневра. Иначе отчищаем и содаем новую
                        популяцю
                    </li>
                    <li>Если слишком много особей выжило мы убираем половину для того что бы остальные могли
                        мутировать
                    </li>
                    <li>Если особей больше 2 и меньше 5 мы мутируем их или спариваем друг с другом</li>
                    <li>Снова сортируем и если потомки более сильное чем предки, то первые вытеснят вторых и более
                        слабые погибнут
                    </li>
                    <li>Критерий силыой популяции это максимальная обзая скорость вместе с удовлетворенными условиями</li>
                    {/*<div>*/}
                    {/*    <h3>Информация</h3>*/}
                    {/*    <li>Чем больше позволено развивать скорость на маневре тем скорее получится результат [1, 12, 7,*/}
                    {/*        1]*/}
                    {/*        > [12, 12, 7, 12]*/}
                    {/*    </li>*/}
                    {/*    <li>При текущей конфигурации параметров среднее число попыток родить жизнь 15000</li>*/}
                    {/*</div>*/}


                </div>
                <div>
                    <canvas id="can" width="400" height="400">

                    </canvas>
                </div>
            </div>
        </div>
    }
}

export default Gen