const Register = () => {
  return (
    <div className='mt-[120px] flex items-center justify-center pb-8'>
      <div className='mx-auto max-w-7xl px-5'>
        <div className='border-2 border-black p-5'>
          <h2 className='font-ooh-baby text-center text-4xl font-bold'>
            Create a new account
          </h2>
          <form onSubmit={''} className='mt-8'>
            <div className='mt-4'>
              <label
                className='mb-2 block text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Username
              </label>
              <input
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full rounded-lg border bg-white px-4 py-2 text-gray-700    focus:border-gray-400 focus:outline-none  focus:ring focus:ring-gray-300 focus:ring-opacity-40'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='mb-2 block text-sm font-medium text-gray-600 '
                htmlFor='photo'
              >
                Photo URL
              </label>
              <input
                id='photo'
                autoComplete='photo'
                name='photo'
                className='block w-full rounded-lg border bg-white px-4 py-2 text-gray-700    focus:border-gray-400 focus:outline-none  focus:ring focus:ring-gray-300 focus:ring-opacity-40'
                type='text'
              />
            </div>
            <div className='mt-4'>
              <label
                className='mb-2 block text-sm font-medium text-gray-600 '
                htmlFor='LoggingEmailAddress'
              >
                Email Address
              </label>
              <input
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full rounded-lg border bg-white px-4 py-2 text-gray-700    focus:border-gray-400 focus:outline-none  focus:ring focus:ring-gray-300 focus:ring-opacity-40'
                type='email'
              />
            </div>

            <div className='mt-4'>
              <div className='flex justify-between'>
                <label
                  className='mb-2 block text-sm font-medium text-gray-600 '
                  htmlFor='loggingPassword'
                >
                  Password
                </label>
              </div>

              <input
                id='loggingPassword'
                autoComplete='current-password'
                name='password'
                className='block w-full rounded-lg border bg-white px-4 py-2 text-gray-700    focus:border-gray-400 focus:outline-none  focus:ring focus:ring-gray-300 focus:ring-opacity-40'
                type='password'
              />
            </div>
            <div className='mt-6'>
              <button
                type='submit'
                className='w-full transform  bg-gray-800 px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
