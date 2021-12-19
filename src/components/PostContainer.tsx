import React from 'react';
import { posts } from '../posts';
import Post from './Post';

const PostContainer = () => {
  const clickHandler = (id: string) => {
    const el = document.getElementById(`title-${id}`);
    if (el) {
      el.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  };

  return (
    <>
      <div style={{ fontWeight: 'bold', marginBottom: '6px' }}>
        Содержание страницы:
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {posts.map((post) => (
          <div className="scroll-title" onClick={() => clickHandler(post.id)}>
            {post.title}
          </div>
        ))}
      </div>
      {posts.map((post) => <Post post={post} key={post.id} />)}
    </>
  );
};

export default PostContainer;
