const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_TEXT = 'CHANGE_TEXT';

let initialState = {
    message: [
        {
            photo: 'http://dl4.joxi.net/drive/2020/05/24/0028/3272/1866952/52/6f84020ab1.jpg',
            name: 'Вы',
            address: false,
            time: '15.05.2020 12:00',
            message: 'Какой то тестовый текст'
        },
        {
            photo: 'http://dl4.joxi.net/drive/2020/05/24/0028/3272/1866952/52/6f84020ab1.jpg',
            name: 'Игорь',
            address: true,
            time: '15.05.2020 12:01',
            message: 'Какой то тестовый текст'
        },
    ],
    users: [
        {id: '1', name: 'Лера'},
        {id: '2', name: 'Валера'},
        {id: '3', name: 'Иброгим'},
        {id: '4', name: 'Стас'},
    ],
    textMessage: '2'
};

export let dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {...state,
                message: [...state.message, {
                    photo: 'http://dl4.joxi.net/drive/2020/05/24/0028/3272/1866952/52/6f84020ab1.jpg',
                    name: 'Игорь',
                    address: true,
                    time: '15.05.2020 12:02',
                    message:  action.message
                }],
                textMessage: ''
            };
        case CHANGE_TEXT:
            return {...state, textMessage: action.text};
        default:
            return state
    }
};

export const addMessageAC = (textMessage) =>
    ({
        type: ADD_MESSAGE,
        message: textMessage
    });

