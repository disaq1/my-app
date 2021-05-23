import './MyPosts.css'
import Post from './Post/Post'

const MyPosts = () => {
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

                    <Post message="My first post" likesCount="4"/>
                    <Post message="Slava, wat a u doing???" likesCount="4"/>
                </div>

            </div>
    )
}

export default MyPosts;