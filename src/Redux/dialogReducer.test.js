import React from "react";
import dialogReducer, {addMessageAC} from "./dialogReducer";

let state = {
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
    ]
};

it('Проверка добавления новых сообзений', () => {
    let action = addMessageAC('Новое сообщение');

    let newState = dialogReducer(state, action);
    expect(newState.message[newState.message.length-1].message).toBe('Новое сообщение');
});




