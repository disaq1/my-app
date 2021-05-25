import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


const Dialogs = (props) => {

    let dialogElements = props.dialogs.map ( dialog => <Dialog name={dialog.name} id={dialog.id}/> )
    let messageElements = props.messages.map ( message => <Message message={message.message}/> )

    return (
        <div className={s.dialogs}>
            <div className={s.name}>Dialogs</div>
            <div className={s.search}><input type="search" placeholder="Start searching in Dialogs"/></div>
            <div className={s.conference}>New&nbsp;dialog</div>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.dialogsMessage}>
                {messageElements}
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

export default Dialogs;