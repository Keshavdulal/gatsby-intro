import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <h1>About me</h1>
    <span>This is my website</span> <br />
    <Link to="/">&larr; Home</Link>
  </Layout>
);
