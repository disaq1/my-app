import './MyPosts.css'
import Post from './Post/Post'

const MyPosts = () => {

    let posts = [
        {id:1, name: 'Tanya', message: 'My first post', likesCount: 100},
        {id:2, name: 'Anya', message: 'Slava, wat a u doing???', likesCount: 4},
        {id:3, name: 'Manya', message: 'And right now я пишу на великом и могучем', likesCount: 8},
        {id:4, name: 'Sanya', message: 'WOAW я тоже могу на русском писать!!! Слава, что ты сделал???', likesCount: 8},
    ]

    let postsElements = posts.map ( post => <Post name={post.name}  message={post.message} likesCount={post.likesCount}/> )

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