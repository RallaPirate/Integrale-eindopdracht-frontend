import './MyPosts.css'
import axios from "axios";
import {useState} from "react";
import RegionNamesTranslator from "../../helper/RegionNamesTranslator.js";

const userId = localStorage.getItem("userId");

function MyPosts({mypostcontent}) {
    // const postid = mypostcontent.postid;
    //
    // return (<div className="mypost">
    //         <p className="mypostreg">{RegionNamesTranslator[mypostcontent.region] || mypostcontent.region}</p>
    //         <h3 className="mypostTitle">{mypostcontent.title}</h3>
    //         <p>{mypostcontent.text}</p>
    //         <p>{mypostcontent.upvoteCount} Upvotes</p>
    //     </div>)
}

export default MyPosts;