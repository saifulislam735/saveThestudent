import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const ShowPost = () => {

    const [posts, setPosts] = useState([])
    // console.log(posts)

    useEffect(() => {
        fetch('post.json')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            {
                posts.map(post =>
                    <PostCard key={post._id} post={post}></PostCard>
                )
            }
        </div>
    );
};

export default ShowPost;