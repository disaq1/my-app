import s from './Friends.module.css'

const Friends = (props) => {
    return (
        <div className={s.friends}>
            <div className={s.friend}>
                <img src="https://cdn4.vectorstock.com/i/1000x1000/06/18/male-avatar-profile-picture-vector-10210618.jpg" />
                <div className={s.name}>
                    <AccountName value="Name Surname" />
                </div>
                <div className={s.friend__desc}>
                    <AccountDescription value1="Gender" value2="Male" />
                    <AccountDescription value1="Age" value2="9000" />
                    <AccountDescription value1="Date of Birth" value2="01.01.01" />
                    <AccountDescription value1="Family status" value2="Married" />
                    <AccountDescription value1="Your city" value2="Moscow" />
                </div>
                <div className={s.btns}>
                    <button className={s.btn}>White a message</button>
                    <button className={s.btn}>Go to personal page</button>
                    <button className={s.btn}>Remove from friends</button>
                </div>
            </div>
        </div>
    )
}


const AccountName = (props) => {
    return (
            <div className="profile__desc--name">
                {props.value}
            </div>
    )
}

const AccountDescription = (props) => {
    return (
            <div className="profile__desc">
                <span className="span1">{props.value1}:</span>
                <span className="span2">{props.value2}</span>
            </div>
    )
}

export default Friends;