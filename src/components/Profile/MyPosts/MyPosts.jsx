import './MyPosts.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map ( post => <Post name={post.name}  message={post.message} likesCount={post.likesCount}/> )

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
                    {postsElements}
                </div>

            </div>
    )
}

export default MyPosts;