import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import Layout from '../components/layout';
import usePosts from '../hooks/use-posts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();

  return (
    <Layout
      css={css`
        border-bottom: 1px solid #ddd;
        margin-top: 0.75rem;
        padding-bottom: 1rem;
        :first-of-type {
          margin-top: 1rem;
        }
      `}
    >
      <div>Hello Frontend Masters!</div>
      <Link to="/about">About Me</Link>

      <h2>Read My Blog</h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
