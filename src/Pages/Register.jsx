import { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Register = () => {
  const { createUser, logOut, updateUserProfile } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { Email, Password, PhotoURL, Name } = data;
    // crate user and add photo and name
    createUser(Email, Password).then(() => {
      updateUserProfile(Name, PhotoURL).then(() => {
        toast.success('Account created successfully,Login Now!');
        reset();
        logOut();
      });
    });
  };

  // Show hide password
  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className='mt-[120px] flex items-center justify-center pb-8'>
        <div className='mx-auto max-w-7xl px-5'>
          <div className='border-2 border-black p-5'>
            <h2 className='text-center font-ooh-baby text-4xl font-bold'>
              Create a new account
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className='mt-8'>
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
                  {...register('Name', {
                    required: {
                      value: true,
                      message: 'Must enter a Name',
                    },
                  })}
                />
                {errors.Name && (
                  <p className='font-noto text-sm font-semibold text-red-500'>
                    {errors.Name.message}
                  </p>
                )}
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
                  {...register('PhotoURL', {
                    required: {
                      value: true,
                      message: 'Must enter a Photo Url',
                    },
                  })}
                />
                {errors.PhotoURL && (
                  <p className='font-noto text-sm font-semibold text-red-500'>
                    {errors.PhotoURL.message}
                  </p>
                )}
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
                  {...register('Email', {
                    required: {
                      value: true,
                      message: 'Must enter an Email',
                    },
                  })}
                />
                {errors.Email && (
                  <p className='font-noto text-sm font-semibold text-red-500'>
                    {errors.Email.message}
                  </p>
                )}
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

                <div className='relative'>
                  <input
                    id='loggingPassword'
                    autoComplete='current-password'
                    name='password'
                    className='block w-full rounded-lg border bg-white px-4 py-2 text-gray-700    focus:border-gray-400 focus:outline-none  focus:ring focus:ring-gray-300 focus:ring-opacity-40'
                    type={showPassword ? 'text' : 'password'}
                    {...register('Password', {
                      required: {
                        value: true,
                        message: 'Must enter a password',
                      },
                      minLength: {
                        value: 6,
                        message: 'Password must be 6 characters long',
                      },
                      validate: {
                        includesUppercase: (v) => {
                          const pattern = /(?=.*[A-Z])/;
                          if (!pattern.test(v)) {
                            return 'Password must include 1 uppercase letter';
                          }
                        },
                        includeLowercase: (v) => {
                          const pattern = /(?=.*[a-z])/;
                          if (!pattern.test(v)) {
                            return 'Password must include 1 lowercase letter';
                          }
                        },
                      },
                    })}
                  />
                  <span
                    className='absolute right-2 top-1/2 -translate-y-1/2 text-xl'
                    onClick={handleShow}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
                {errors.Password && (
                  <p className='font-noto text-sm font-semibold text-red-500'>
                    {errors.Password.message}
                  </p>
                )}
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
            <div className='mt-12 grid grid-cols-3 items-center gap-2'>
              <span className='h-[2px] bg-black'></span>
              <Link
                to={'/login'}
                className='text-center font-bold text-teal-600 hover:underline'
              >
                {`<`} Login {`>`}
              </Link>
              <span className='h-[2px] bg-black'></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
