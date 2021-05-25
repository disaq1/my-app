import Friend from './Friend/Friend'
import s from './Friends.module.css'

const Friends = (props) => {

    let friends = props.friendsInfo.map ( 
                                        friendInfo => 
                                            <Friend 
                                                name={friendInfo.name} 
                                                surname={friendInfo.surname} 
                                                status={friendInfo.status} 
                                                img={friendInfo.img}
                                            /> 
                                        )

    return (
        <div className={s.friends}>
            <div className={s.search}>
                <input type="search" placeholder="Start searching in Friends"/>
            </div>
            {friends}
        </div>
    )
}


export default Friends;