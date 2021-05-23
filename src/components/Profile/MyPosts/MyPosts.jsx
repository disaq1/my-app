import './MyPosts.css'
import Post from './Post/Post'

const MyPosts = () => {

    let postsData = [
        {id:1, message: 'My first post', likesCount: 1},
        {id:2, message: 'Slava, wat a u doing???', likesCount: 4},
        {id:3, message: 'And right now я пишу на великом и могучем', likesCount: 8},
        {id:4, message: 'WOAW я тоже могу на русском писать!!! Слава, что ты сделал???', likesCount: 8},
    ]

    let authorsData = [
        {id:1, name: 'Tanya'},
        {id:2, name: 'Polina'},
        {id:3, name: 'Vlad'},
        {id:4, name: 'Max'},
    ]

    return (
            <div className="profile__posts">

                <div className="profile__posts--new_post">
                    <span>
                        Creat new post
                    </span>
                    <textarea id="new_post__textarea" cols="10" rows="5" placeholder="Write what is going on with you..."></textarea>
                    <button>Add post</button>
                </div>

                <div className="profile__posts--posts">
                    <span>
                        All posts
                    </span>

                    <Post name={authorsData[0].name} message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                    <Post name={authorsData[1].name} message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                    <Post name={authorsData[2].name} message={postsData[2].message} likesCount={postsData[2].likesCount}/>
                    <Post name={authorsData[3].name} message={postsData[3].message} likesCount={postsData[3].likesCount}/>
                </div>

            </div>
    )
}

export default MyPosts;