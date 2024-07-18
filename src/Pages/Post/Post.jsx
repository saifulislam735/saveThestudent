import { useState } from "react";

const Post = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState("");
    const [location, setLocation] = useState("");
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setBody(event.target.value);
    };

    const handleTagsChange = (event) => {
        setTags(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleImageChange = (event) => {
        const files = event.target.files;
        setImages([...images, ...files]);
    };

    const handleVideoChange = (event) => {
        const files = event.target.files;
        setVideos([...videos, ...files]);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Prepare data to send to backend
        const formData = new FormData();
        formData.append("title", title);
        formData.append("body", body);
        formData.append("tags", tags);
        formData.append("location", location);

        // Append images and videos to formData
        for (let i = 0; i < images.length; i++) {
            formData.append("images", images[i]);
        }
        for (let i = 0; i < videos.length; i++) {
            formData.append("videos", videos[i]);
        }

        // Log formData for demonstration
        console.log('post', title, body, tags, location, images, videos);

        // Clear form fields after submission
        setTitle("");
        setBody("");
        setTags("");
        setLocation("");
        setImages([]);
        setVideos([]);
    };

    return (
        <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-semibold mb-4 text-center">Create Post</h2>
            <form onSubmit={handleSubmit} className="mx-auto max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                {/* Title field */}
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleTitleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        required
                    />
                </div>

                {/* Body field */}
                <div className="mb-4">
                    <label htmlFor="body" className="block text-sm font-medium text-gray-700">
                        Body
                    </label>
                    <textarea
                        id="body"
                        name="body"
                        value={body}
                        onChange={handleBodyChange}
                        rows={4}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
                        required
                    />
                </div>

                {/* Tags field */}
                <div className="mb-4">
                    <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                        Tags (comma-separated)
                    </label>
                    <input
                        type="text"
                        id="tags"
                        name="tags"
                        value={tags}
                        onChange={handleTagsChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Location field */}
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={location}
                        onChange={handleLocationChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                {/* Upload images */}
                <div className="mb-4">
                    <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                        Upload Images
                    </label>
                    <input
                        type="file"
                        id="images"
                        name="images"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        className="mt-1 block"
                    />
                </div>

                {/* Upload videos */}
                <div className="mb-4">
                    <label htmlFor="videos" className="block text-sm font-medium text-gray-700">
                        Upload Videos
                    </label>
                    <input
                        type="file"
                        id="videos"
                        name="videos"
                        accept="video/*"
                        multiple
                        onChange={handleVideoChange}
                        className="mt-1 block"
                    />
                </div>

                {/* Submit button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create Post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Post;
