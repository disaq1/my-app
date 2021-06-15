import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


const Dialogs = (props) => {

    // let dialogName = props.dialogs.map ( dialog => <DialogName name={dialog.name} /> )
    let dialogElements = props.dialogs.map ( dialog => <Dialog name={dialog.name} id={dialog.id}/> )
    let messageElements = props.messages.map ( message => <Message message={message.message}/> )


    let newMessage = React.createRef();
    let sendMessage = () => {
        let text = newMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
                <div className={s.thisPage}>
                    Dialogs
                </div>
                <div className={s.extraMenu}>
                    <button>Help</button>
                    <button>Exit</button>
                </div>
            <div className={s.dialogsItems}>
                <div className={s.search}><input type="search" placeholder="Start searching in Dialogs"/></div>
                {dialogElements}
            </div>
            <div className={s.dialogsMessage}>
                {/* {dialogName} */}
                <span>Name Surname</span>
                {messageElements}
                <textarea ref={ newMessage } cols="49" rows="2"></textarea>
                <button onClick={ sendMessage }>Send message</button>
            </div>
        </div>
    )
}

// const DialogName = (props) => {
//     return (
//             <span>{props.name}</span>
//     )
// }

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

export default Dialogs;