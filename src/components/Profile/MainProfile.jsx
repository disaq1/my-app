import './MainProfile.css'
import MyPosts from './MyPosts/MyPosts'

const MainProfile = () => {
    return (
        <main className="main">
            <div className="profile">
                <div className="profile__avatar">
                    <img src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png" />
                </div>
                <div className="profile__description">
                    <div className="info__block">
                        <AccountName value="Name Surname" />
                        <AccountDescription value1="Gender" value2="Male" />
                        <AccountDescription value1="Age" value2="9000" />
                        <AccountDescription value1="Date of Birth" value2="01.01.01" />
                        <AccountDescription value1="Family status" value2="Married" />
                        <AccountDescription value1="Your city" value2="Moscow" />
                    </div>
                    <div className="info__block">
                        <AccountDescription value1="Mobile phone" value2="79198015981" />
                        <AccountDescription value1="Additional Phone" value2="2478390" />
                        <AccountDescription value1="Telegram" value2="@disaq1" />
                        <AccountDescription value1="Vk" value2="disaq1" />
                        <AccountDescription value1="Personal site" value2="this-site.com" />
                    </div>
                    <div className="info__block">
                        <AccountDescription value1="Favorite music" value2="Classic" />
                        <AccountDescription value1="Favorite musician" value2="Queenie" />
                        <AccountDescription value1="Favorite movie" value2="Star Wars" />
                        <AccountDescription value1="Favorite actor" value2="Floid" />
                        <AccountDescription value1="Favorite book" value2="Play to live" />
                        <AccountDescription value1="Favorite quote" value2="Love is dead" />
                        <AccountDescription value1="Favorite game" value2="S.T.A.L.K.E.R. 2" />
                    </div>
                    <div className="info__block">
                        <AccountDescription value1="The main thing in life" value2="Money and family" />
                        <AccountDescription value1="Your inspiration" value2="Laziness" />
                    </div>
                    <div className="info__block">
                        <AccountDescription value1="Shortly about myself" value2="IT-deacon" />
                    </div>
                </div>
                <MyPosts />
            </div>
        </main>
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

export default MainProfile;