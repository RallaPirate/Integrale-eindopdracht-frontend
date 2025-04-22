import './Post.css'

function Post({postcontent}){
    return(
        <div className="post">
            <h3>{postcontent.title}</h3>
            <p>{postcontent.posttext}</p>
            <button onClick={() => console.log(postcontent)}>Klikmij</button>
        </div>
    )
}

export default Post;