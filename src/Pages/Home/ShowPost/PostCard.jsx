import { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";

const PostCard = ({ post }) => {
    const { author_image, author_name, post_content, post_image, post_like_count, post_time } = post;

    // Time passed calculation
    function timeSincePost(postTime) {
        const now = new Date();
        const postDate = new Date(postTime);
        const diffInMilliseconds = now - postDate;

        const seconds = Math.floor(diffInMilliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) {
            return `${days} days ago`;
        } else if (hours > 0) {
            return `${hours} hours ago`;
        } else if (minutes > 0) {
            return `${minutes} minutes ago`;
        } else {
            return `just now`;
        }
    }

    const timePassed = timeSincePost(post_time);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(post_like_count);
    
    const handleLiked = () => {
        setLiked(true);
        setLikeCount(prevLikeCount => prevLikeCount + 1);
    };

    const handleDisliked = () => {
        setLiked(false);
        setLikeCount(prevLikeCount => prevLikeCount - 1);
    };

    return (
        <div className="flex bg-white shadow-lg rounded-lg mx-4 md:mx-auto my-2 max-w-md md:max-w-2xl">
            <div className="flex items-start px-4 py-6">
                <img className="w-12 h-12 rounded-full object-cover mr-4 shadow" src={author_image} alt="author_image" />
                <div className="">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-gray-900 -mt-1">{author_name} </h2>
                        <small className="text-sm text-gray-700">{timePassed || 'unknown time'}</small>
                    </div>
                    <p className="text-gray-700">{ }</p>
                    <p className="mt-3 text-gray-700 text-sm">
                        {post_content}
                    </p>
                    <img className="" src={post_image} alt="post image" />
                    <div className="mt-4 flex items-center">
                        <div className="flex text-gray-700 text-sm mr-4">
                            {liked ? (
                                <div className="flex">
                                    <AiFillLike onClick={handleDisliked} className="text-xl mx-1 text-red-500" />{likeCount}
                                </div>
                            ) : (
                                <div className="flex">
                                    <AiOutlineLike onClick={handleLiked} className="text-xl mx-1" /> {likeCount}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
