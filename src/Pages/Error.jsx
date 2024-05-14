import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <section className='bg-[#f1f0eb] '>
        <div className='container mx-auto min-h-screen px-6 py-12 lg:flex lg:items-center lg:gap-12'>
          <div className='wf-ull lg:w-1/2'>
            <p className='font-ooh-baby text-8xl font-medium text-red-500'>
              404 error
            </p>
            <h1 className='mt-3 text-2xl font-semibold text-gray-800 md:text-3xl'>
              Page not found
            </h1>
            <p className='mt-4 text-gray-500'>
              Sorry, the page you are looking for doesn`&apos;`t exist.Here are
              some helpful links:
            </p>

            <div className='mt-6 flex items-center gap-x-3'>
              <Link to='/'>
                <button className='w-full shrink-0 bg-green-500 px-5 py-2 text-lg tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 sm:w-auto '>
                  Take me home
                </button>
              </Link>
            </div>
          </div>

          <div className='relative mt-12 w-full lg:mt-0 lg:w-1/2'>
            <img className='w-full max-w-lg lg:mx-auto' src='/404.svg' alt='' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
