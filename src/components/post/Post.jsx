import './Post.css'
import axios from "axios";
import {useState} from "react";
import RegionNamesTranslator from "../../helper/RegionNamesTranslator.js";
import { ArrowFatUp } from '@phosphor-icons/react'

const userId = localStorage.getItem("userId");

function Post({postcontent}) {
    const [upvoted, setUpvoted] = useState(false);
    const [buttonDown, setButtonDown] = useState(false);
    const postid = postcontent.postid;
    const upvotedata = {
        postId: postid, userId: userId,
    }

    async function handleUpvotePost() {
        try {
            const response = await axios.post(`http://localhost:8080/api/posts/${postid}/upvote`, upvotedata);
            console.log(response.data);
            console.log("success")
            setButtonDown(true);
            console.log("buttonDown: ", buttonDown)
        } catch (error) {
            console.log(error);
        }
    }

    async function handleUpvoteDelete() {
        try {
            const response = await axios.delete(`http://localhost:8080/api/posts/${postid}/delete`);
            console.log(response.data);
            console.log("success")
            setButtonDown(false);
            console.log("buttonDown: ", buttonDown);
        } catch (error) {
            console.log(error);
        }
    }

    async function handleUpvote() {
        console.log("Dit wordt er verzonden:" + upvotedata);
        console.log("Dit is de postid: " + postid);
        console.log(`Naar deze url: http://localhost:8080/api/posts/${postid}/upvote`)
        console.log(postcontent);
        if (!upvoted) {
            try {
                const response = await axios.post(`http://localhost:8080/api/posts/${postid}/upvote`, upvotedata)
                console.log(response.data);
                setUpvoted(true);
                console.log(upvoted);
            } catch (error) {
                console.error("Error Upvote posten", error);
            }
        } else {
            const response = await axios.delete(`http://localhost:8080/api/posts/${postid}/upvote`);
            // const response = await axios.delete(`http://localhost:8080/api/posts/${postid}/upvote`, {
            //     headers: {
            //         Authorization: `Bearer ${localStorage.getItem('token')}`
            //     }
            // })
            console.log("upvote deleted", response.data)
            setUpvoted(false);
            console.log(upvoted);
        }
    }

    return (<div className="post">
            <p className="postreg">{RegionNamesTranslator[postcontent.region] || postcontent.region}</p>
            <h3 className="postTitle">{postcontent.title}</h3>
            <p>{postcontent.posttext}</p>
        <div className="upvoteButtonAndCount">
            <button className='upvoteButton' onClick={() => handleUpvote()}>
                {!upvoted && <ArrowFatUp className='upvoteButtonNeutral' size={25}/>}
                {upvoted && <ArrowFatUp className='upvoteButtonClicked' size={25} weight='fill'/>}</button>
            {/*<button onClick={() => handleUpvotePost()}>UpvotePost</button>*/}
            {/*<button onClick={() => handleUpvoteDelete()}>UpvoteDelete</button>*/}
            <p>{postcontent.upvoteCount} Upvotes</p>
        </div>
    </div>)
}

export default Post;