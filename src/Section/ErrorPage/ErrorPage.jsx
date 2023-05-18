import React from 'react'
import { Link, useRouteError } from 'react-router-dom';
import image from '../../assets/duck.gif'

const ErrorPage = () => {
  const { error, status } = useRouteError()
  return (
    <section className='d-flex align-items-center justify-content-center vh-100 p-16 bg-gray-100 text-gray-900'>
      <div className='container d-flex flex-column align-items-center justify-content-center px-5 mx-auto my-8'>
        <div><img src={image} alt="" /></div>
        <div className='max-w-md text-center'>
          <h2 className='mb-8 font-bold text-5xl text-blue-600'>
            <span className='sr-only'>Error</span> {status || 404}
          </h2>
          <p className='text-2xl font-semibold md:text-xl mb-8'>
            {error?.message}
          </p>
          <Link
            to='/'
            className='btn-primary'
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ErrorPage
