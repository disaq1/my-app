import './MainProfile.css'
import MyPosts from './MyPosts/MyPosts'

const MainProfile = (props) => {

    let profifleInfos = {
            nameAndSurname:'Name Surname',
            gender:'Male',
            age:'23',
            dateOfBirth:'01.01.01',
            familyStatus:'Married',
            yourCity:'Moscow',

            mobilePhone:'79198015981',
            additionalPhone:'2478390',
            telegram:'@disaq1',
            vk:'disaq1',
            personalSite:'tise-site.com',

            favoriteMusic:'Classic',
            favoriteMusician:'Queenie',
            favoriteMovie:'Star Wars',
            favoriteActor:'',
            favoriteBook:'Play to live',
            favoriteQuote:'Love is dead',
            favoritegame:'S.T.A.L.K.E.R. 2',

            theMainThingInLife:'Money and family',
            yourinspiration:'Laziness',

            shortlyAboutMyself:'IT-deacon'
    }

    

    return (
        <main className="main">
            <div className="profile">
                <div className="profile__name">
                    <AccountName nameAndSurname={profifleInfos.nameAndSurname} />
                </div>
                <div className="profile__extraMenu">
                    <button>Help</button>
                    <button>Exit</button>
                </div>
                <div className="profile__avatar">
                    <img src="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png" />
                </div>
                <div className="profile__description">
                    <div className="profile__description--title">
                        Profile description
                    </div>
                    <div className="info__block">
                        <AccountDescription value1="Gender" value2={profifleInfos.gender} />
                        <AccountDescription value1="Age" value2={profifleInfos.age} />
                        <AccountDescription value1="Date of Birth" value2={profifleInfos.dateOfBirth} />
                        <AccountDescription value1="Family status" value2={profifleInfos.familyStatus} />
                        <AccountDescription value1="Your city" value2={profifleInfos.yourCity} />
                    </div>
                </div>
                <MyPosts 
                    posts={props.posts} 
                    addPost={props.addPost} 
                    newPostText={props.newPostText}
                    updateNewPostText={props.updateNewPostText}
                />
            </div>
        </main>
    )
}

const AccountName = (props) => {
    return (
            <div className="profile__desc--name">
                {props.nameAndSurname}
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