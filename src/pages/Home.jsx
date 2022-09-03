import React from 'react';

export default function Home() {
  return (
    <div className='container-fluid bg-white'>
      <div className='container'>
        <Overlay />
        <Steps />
        <JobAdvertsList size={6} pagination={false} />
        <div className='text-center mb-5'>
          <Link to='/jobadvert' className='btn btn-primary rounded shadow'>
            Browse All
          </Link>
        </div>
        <CreateAccountBanner />
      </div>
    </div>
  );
}