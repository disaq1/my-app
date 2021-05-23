import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


const Dialogs = (props) => {

    let dialogsData = [
        {id:1, name: 'Tanya'},
        {id:2, name: 'Polina'},
        {id:3, name: 'Vlad'},
        {id:4, name: 'Max'},
    ]

    let messagesData = [
        {id:1, message: 'Это первые сообщения на русском'},
        {id:2, message: 'Вау, до чего дошёл прогресс'},
        {id:3, message: 'Это ещё что, то ли ещё будет'},
        {id:4, message: 'Вау, какой я гений...<3'},
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.name}>Dialogs</div>
            <div className={s.search}><input type="search" placeholder="Start searching in Dialogs"/></div>
            <div className={s.conference}>New&nbsp;dialog</div>
            <div className={s.dialogsItems}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={s.dialogsMessage}>
                <Message message={messagesData[0].message} />
                <YourMessage message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
                <YourMessage message={messagesData[3].message} />
            </div>
        </div>
    )
}

const Dialog = (props) => {
    return (
        <NavLink to={"/dialogs/id" + props.id}>
                <div className={s.dialog}>
                    <img src="https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231712/thesomeday123171200008.jpg" />
                        <span>{props.name}</span>
                </div>
        </NavLink>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            <img src="https://images.assetsdelivery.com/compings_v2/thesomeday123/thesomeday1231712/thesomeday123171200008.jpg" />
            {props.message}
        </div>
    )
}

const YourMessage = (props) => {
    return (
        <div className={s.message + ' ' + s.yourMessage}>
        <img src="https://thumbs.dreamstime.com/z/default-avatar-profile-icon-grey-photo-placeholder-male-default-profile-gray-person-picture-isolated-white-background-good-man-102846161.jpg" />
        {props.message}
    </div>
    )
}


export default Dialogs;