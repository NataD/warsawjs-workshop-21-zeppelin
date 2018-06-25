import React from 'react'
import { connect } from 'react-redux'
import { PostCard } from '../../../components'
import { Link } from 'react-router-dom';

import './List.css'
let PostsList = ({posts = []}) => {
    return (
        <div className="PostsList display-flex">
            {posts.map(post => (
                <Link to={`/posts/${post.id}`}>
                    <PostCard key={post.id} className='flex-1' {...post} />
                </Link>
            ))}
        </div>
    )
};
PostsList = connect(({posts}) => ({
    posts: posts.list
}))(PostsList);
export default PostsList