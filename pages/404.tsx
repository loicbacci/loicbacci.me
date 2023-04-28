import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';

const Custom404 = () => (
  <Layout noHeader>
    <div className="m-auto p-0 text-center align-middle">
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <div>Go home</div>
      </Link>
    </div>
  </Layout>
);

export default Custom404;
