import React from 'react';
import './PostsLoading.css'

const PostsLoading = () => {
    return (
            <div className="posts-skeleton-container">
                <div className="posts-skeleton"/>
                <div className="posts-skeleton"/>
                <div className="posts-skeleton"/>
                <div className="posts-skeleton"/>
                <div className="posts-skeleton"/>
                <div className="posts-skeleton"/>
            </div>
    );
};

export default PostsLoading;