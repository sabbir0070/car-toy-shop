import React from 'react';
import UseTitle from '../../Hooks/UseTitle';

const Blog = () => {
UseTitle('Blog')
  return (
    <div className='space-y-10 text-base-100 border-8 p-10 my-7 bg-gray-700  border-gray-300'>
      <h2 className='text-center text-green-500 font-bold text-4xl'>Question Answer</h2>
<div className=''>
<h2 className='text-2xl font-bold text-red-500'>1.  What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
<p className='text-xl font-semibold'><span className='text-green-400 text-2xl'>Answer: </span> An access token is a credential that is issued to a client after successful authentication with an identity provider or authorization server. The access token is used to authenticate the client and grant it access to protected resources, such as APIs or specific routes in a web application.</p>
<p className='text-xl font-semibold'><span className='text-green-400 text-2xl'>Refresh:</span> A refresh token is a long-lived credential that is also issued to the client during the authentication process. The purpose of the refresh token is to obtain a new access token when the current access token expires.</p>
<p className='text-xl font-semibold'><span className='text-green-400 text-2xl'>Work process:</span>Access tokens should be stored in memory on the client-side, typically in a variable. This allows easy access and retrieval for including the token in API requests. Refresh tokens, on the other hand, should be stored securely on the server-side.</p>
</div>
<div>
<h2 className='text-2xl font-bold text-red-500'>2. Compare SQL and NoSQL databases?</h2>
<p className='text-xl font-semibold'><span className='text-green-400 text-2xl'>Answer:</span> SQL databases are relational, use structured schemas, and provide strong data consistency. NoSQL databases are non-relational, have flexible schemas, and prioritize scalability and performance over strict consistency.</p>
</div>

<div>
<h2 className='text-2xl font-bold text-red-500'>3.  What is express js? What is Nest JS?</h2>
<p className='text-xl font-semibold'><span className='text-green-400 text-2xl'>Answer:</span>Express.js is a minimal and flexible web application framework for Node.js. It provides a simple and intuitive set of features for building web servers and APIs. Express.js allows developers to handle HTTP requests, define routes, and implement middleware to handle various aspects of request processing. </p>
<p className='text-xl font-semibold'><span className='text-green-400 text-2xl'>Next JS</span>is a progressive Node.js framework for building scalable and efficient server-side applications. It is built on top of Express.js and adds additional features and architectural patterns inspired by Angular, such as dependency injection, modules, decorators, and TypeScript support.</p>
</div>
<div>
<h2 className='text-2xl font-bold text-red-500'>4. What is MongoDB aggregate and how does it work?</h2>
<p className='text-xl font-semibold'><span className='text-green-400 text-2xl'>Answer:</span>MongoDB's aggregate is a method for performing data aggregation operations on collections. It uses a pipeline of stages to process and transform data, allowing operations like filtering, grouping, sorting, and reshaping of documents.</p>
</div>
    </div>
  );
};

export default Blog;