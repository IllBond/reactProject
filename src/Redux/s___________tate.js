// import {dialogReducer} from "./dialogReducer";
//
//
// let store = {
//     _state : {
//         dialogs: {
//             message: [
//                 {
//                     photo: 'http://dl4.joxi.net/drive/2020/05/24/0028/3272/1866952/52/6f84020ab1.jpg',
//                     name: 'Вы',
//                     adress: false,
//                     time: '15.05.2020 12:00',
//                     message: 'Какой то тестовый текст'
//                 },
//                 {
//                     photo: 'http://dl4.joxi.net/drive/2020/05/24/0028/3272/1866952/52/6f84020ab1.jpg',
//                     name: 'Игорь',
//                     adress: true,
//                     time: '15.05.2020 12:01',
//                     message: 'Какой то тестовый текст'
//                 },
//             ],
//             users: [
//                 {id: '1', name: 'Лера'},
//                 {id: '2', name: 'Валера'},
//                 {id: '3', name: 'Иброгим'},
//                 {id: '4', name: 'Стас'},
//             ],
//             textMessage: '2'
//         },
//         profile: {}
//     },
//     getState(){
//         return this._state
//     },
//     reRender  () {
//         return
//     },
//     subscribe (observer) {
//         this.reRender = observer
//     },
//
//     dispatch(action){
//         debugger
//         dialogReducer(action, this._state.dialogs);
//         this.reRender(this._state)
//     },
// };
//
//
// export default store;
// window.store = store;