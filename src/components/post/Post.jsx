import './Post.css'

const userId = localStorage.getItem("userId");

function Post({postcontent}){
    return(
        <div className="post">
            <h3>{postcontent.title}</h3>
            <p>{postcontent.posttext}</p>
            <button onClick={() => console.log(postcontent.postId, userId)}>Klikmij</button>
        </div>
    )
}

export default Post;