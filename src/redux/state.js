let state = {
    profilePage:{
        posts: [//Данные для Profile->All posts->Posts (Посты)
            {id:1, name: 'Tanya', message: 'My first post', likesCount: 100},
            {id:2, name: 'Anya', message: 'Slava, wat a u doing???', likesCount: 4},
            {id:3, name: 'Manya', message: 'And right now я пишу на великом и могучем', likesCount: 8},
            {id:4, name: 'Sanya', message: 'WOAW я тоже могу на русском писать!!! Слава, что ты сделал???', likesCount: 8},
            {id:5, name: 'Vanya', message: 'Ладно, норм соц сетка, красавчик', likesCount: 9999},
        ],
    },
    dialogsPage: {
        dialogs: [//Данные для Dialogs->dialogsItems (Список контактов)
            {id:1, name: 'Tanya'},
            {id:2, name: 'Polina'},
            {id:3, name: 'Vlad'},
            {id:4, name: 'Max'},
        ],
        messages: [//Данные для Dialogs->dialogsMessages (Сообщения)
            {id:1, message: 'Это первые сообщения на русском'},
            {id:2, message: 'Вау, до чего дошёл прогресс'},
            {id:3, message: 'Это ещё что, то ли ещё будет'},
            {id:4, message: 'Вау, какой я гений...<3'},
        ],
    },
    friendsPage: {
        friendsInfo: [//Данные для Friends (Друзья)
            {id:1, name: 'Tanya', surname: 'Martynova', status: 'Я - жена создателя', img: 'https://sun1-15.userapi.com/s/v1/if1/hPGKje0DQVaTZ15L1HiEyBvscTEy4vgQ0RE3EgiInsl8_APv0YNQ8r3_5Yha7Lb8SApEZkAu.jpg?size=400x0&quality=96&crop=0,326,1218,1218&ava=1'},
            {id:2, name: 'Polina', surname: 'Bezlapova', status: 'My eng status', img: 'https://html5css.ru/howto/img_avatar2.png'},
            {id:3, name: 'Vladislav', surname: 'Kantaria', status: 'А это мой статусс на русском', img: 'https://html5css.ru/w3css/img_avatar3.png'},
        ],
    },
}

export default state;