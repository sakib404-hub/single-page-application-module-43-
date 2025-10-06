import React, { useEffect, useState } from 'react';
import PostCard from '../PostCard/PostCard';

const Posts = () => {
    // loading data using useEffect 
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then((res) => res.json())
            .then((data) => setPost(data))
            .catch((err) => console.log(err));
    }, [])
    // console.log(posts);
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center mt-10'>Read Some Post From The User</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 p-10'>
                {
                    posts.map((post) => {
                        return <PostCard key={post.id}
                            post={post}></PostCard>
                    })
                }
            </div>
        </div>
    );
};

export default Posts;