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
                    <div className="profile__description--name_amd_surname">
                        Name Surname
                    </div>
                    <div className="profile__description--age">
                        Age: 23 y.o.
                    </div>
                    <div className="profile__description--birthday">
                        Date of Birth: 01.01.01
                    </div>
                    <div className="profile__description--city">
                        City: Moscow
                    </div>
                    <div className="profile__description--marital_status">
                        Marital status: married
                    </div>
                </div>
                <MyPosts />
            </div>
        </main>
    )
}

export default MainProfile;