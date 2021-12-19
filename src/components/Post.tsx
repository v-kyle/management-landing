import React from 'react';
import { IPost } from '../Models';

const Post = ({ post }: { post: IPost }) => {
  return (
    <div className="post">
      <div className="post-title" id={`title-${post.id}`}>{post.title}</div>
      <div className="post-body">
        {post.image && (
          <img
            className={post.bigImage ? `post-image _${post.bigImage}` : 'post-image'}
            src={post.image}
            alt="Post"
          />
        )}
        <div className="post-text" dangerouslySetInnerHTML={{ __html: post.text }} />
      </div>
    </div>
  );
};

export default Post;
