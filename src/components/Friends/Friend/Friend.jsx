import s from './Friend.module.css'

const Friend = (props) => {

    return (
        <div className={s.friend}>
            <img src={props.img} />
            <div className={s.description}>
                <span className={s.name}>
                    {props.name} {props.surname}
                </span>
                <span className={s.status}>
                    {props.status}
                </span>
            </div>
            <div className={s.btns}>
                <button className={s.btn}>
                    <span>Write message</span>
                </button>
                <button className={s.btn}>
                    <span>Edit friend lists</span>
                </button>
                <button className={s.btn}>
                    <span>Unfriend</span>
                </button>
            </div>
        </div>
    )
}

export default Friend;