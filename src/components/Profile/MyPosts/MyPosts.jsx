import React from 'react'
import './MyPosts.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    let postsElements = props.posts.map ( post => <Post name={post.name}  message={post.message} likesCount={post.likesCount}/> )

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChance = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
            <div className="profile__posts">
                <div className="profile__posts--new_post">
                    <span>
                        Creat new post
                    </span>
                    <textarea 
                        onChange={onPostChance}
                        ref={newPostElement} 
                        id="new_post__textarea" 
                        cols="10" rows="5" 
                        placeholder="Write what is going on with you..." 
                        value={props.newPostText}
                    />
                    <div className="new_post--btns">
                        <button>Add a photo</button>
                        <button>Add a video</button>
                        <button>Add a music</button>
                    </div>
                    <button className="new_post--addPostBtn" onClick={ addPost }>Add post</button>
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