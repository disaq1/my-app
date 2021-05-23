import './Post.css'

const Post = (props) => {
    return (
        <div className="profile__posts--post post">
            <div className="post__avatar">
                <img src="https://img2.freepng.ru/20180521/ocp/kisspng-computer-icons-user-profile-avatar-french-people-5b0365e4f1ce65.9760504415269493489905.jpg" alt=""/>
            </div>
            <div className="post__author">
                Name Surname
            </div>
            <div className="post__text">
                {props.message}
            </div>
            <div className="post__btns">
                <button className="post__btn">
                    Like {props.likesCount}
                </button>
                <button className="post__btn">
                    Repost
                </button>
                <button className="post__btn">
                    Reply
                </button>
            </div>
        </div>
    )
}

export default Post;