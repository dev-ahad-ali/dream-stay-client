import { toast } from 'react-toastify';
import loginImg from '../assets/img/login-img.jpg';
import useAuth from '../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Login = () => {
  const { signInUser, setLoading, googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { Email, Password } = data;

    // Login user
    signInUser(Email, Password)
      .then((result) => {
        if (result.user) {
          toast.success('Login successfully');
          if (result.user) {
            navigate(from);
          }
        }
      })
      .catch(() => {
        setLoading(false);
        setLoginError(
          'Please check if you have entered a valid email or password',
        );
      });
  };

  // Social login
  const handleSocialLogin = (socialProvider) => {
    socialProvider()
      .then((result) => {
        if (result.user) {
          navigate(from);
        }
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // Show hide password
  const handleShow = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className='mt-12 flex items-center justify-center pb-8'>
        <div className='mx-auto max-w-7xl px-5'>
          <div className='grid-cols-2 gap-20 border-2 border-black p-5 md:grid'>
            <div className='hidden border bg-white p-5 shadow-xl md:block '>
              <img className='h-[500px] w-[400px]' src={loginImg} alt='' />
            </div>
            <div>
              <h2 className='text-center font-ooh-baby text-4xl font-bold md:my-8 md:text-6xl'>
                Login Now
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className='md:mt-20'>
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
                    <p className='text-sm font-semibold text-red-500'>
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

                  <div className='relative '>
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
                      })}
                    />
                    <span
                      className='absolute right-2 top-1/2 -translate-y-1/2 text-xl'
                      onClick={handleShow}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>
                  {errors.Password ? (
                    <p className='font-noto text-sm font-semibold text-red-500'>
                      {errors.Password.message}
                    </p>
                  ) : loginError ? (
                    <p className='font-noto text-sm font-semibold text-red-500'>
                      {loginError}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
                <div
                  onClick={() => handleSocialLogin(googleSignIn)}
                  className='mt-4 flex transform cursor-pointer items-center justify-center rounded-lg border bg-green-100 text-gray-600 transition-colors duration-300 hover:bg-gray-300'
                >
                  <div className='px-4 py-2'>
                    <svg className='h-6 w-6' viewBox='0 0 40 40'>
                      <path
                        d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                        fill='#FFC107'
                      />
                      <path
                        d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                        fill='#FF3D00'
                      />
                      <path
                        d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                        fill='#4CAF50'
                      />
                      <path
                        d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                        fill='#1976D2'
                      />
                    </svg>
                  </div>

                  <span className='w-5/6 px-4 py-3 text-center font-bold'>
                    Sign in with Google
                  </span>
                </div>
                <div className='mt-6'>
                  <button
                    type='submit'
                    className='w-full transform  bg-gray-800 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                  >
                    LogIn
                  </button>
                </div>
              </form>
              <div className='mt-12 flex items-center gap-4'>
                <span className='h-[2px] w-[50px] bg-black md:w-1/2'></span>
                <Link
                  to={'/register'}
                  className='font-bold text-teal-600 hover:underline'
                >
                  {`<`} Create New Account {`>`}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
