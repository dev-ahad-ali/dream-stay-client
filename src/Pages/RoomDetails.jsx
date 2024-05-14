import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { url } from '../Utils/url';
import ReviewCard from '../Components/Card/ReviewCard';
import { MdOutlineDoneOutline } from 'react-icons/md';
import { PiArrowElbowRightDown } from 'react-icons/pi';
import { Helmet } from 'react-helmet';

const RoomDetails = () => {
  const room = useLoaderData();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { data } = await axios.get(`${url}/reviews/${room._id}`);
        setReviews(data);
      } catch {
        (err) => console.log(err);
      }
    };
    getReviews();
  }, [room._id]);
  {
    /* <Link to={'/booking'} state={room._id}>
            <button className='btn btn-warning'>Book This Room</button>
          </Link> */
  }
  return (
    <>
      <Helmet>
        <title>{room?.room_name}</title>
      </Helmet>
      <div className='mx-auto max-w-7xl px-5 pt-16'>
        <div className='grid  gap-8 md:grid-cols-2'>
          <div className=' relative  max-h-[650px]'>
            <img className='block h-full w-full' src={room?.image} alt='' />
            <span className='absolute left-2 top-3 rounded-none bg-white px-2 py-1 text-2xl font-medium uppercase'>
              ${room?.price}/Night
            </span>
            {room?.offers > 0 && (
              <div className='mask mask-heart absolute right-3 top-3 grid h-16 w-16 place-items-center bg-green-500 text-white'>
                <p className=' font-ooh-baby text-2xl font-bold'>
                  -{room?.offers}%
                </p>
              </div>
            )}
            {!room?.available && (
              <div className='absolute left-1/2 top-1/2  grid -translate-x-1/2 -translate-y-1/2  bg-red-500 px-6 py-3 text-white'>
                <h2 className='font-ooh-baby text-6xl font-bold uppercase'>
                  Booked
                </h2>
              </div>
            )}
          </div>
          <div>
            <h2 className='mb-3 border-b border-black pb-2 text-4xl font-medium'>
              {room?.room_name}
            </h2>
            <p>{room?.description}</p>
            <p className='mt-4 text-2xl font-bold uppercase'>
              Size : {room?.size}
              <sup>2</sup>ft
            </p>
            <div className='mt-6'>
              <h4 className='border-b border-black pb-2 text-3xl'>
                Facilities :{' '}
              </h4>
              <ul>
                {room?.facilities.map((facility, idx) => (
                  <li
                    className='mt-2 flex items-center gap-3 border-b-2 pb-1 text-xl'
                    key={idx}
                  >
                    <MdOutlineDoneOutline className='text-green-500' />
                    {facility}
                  </li>
                ))}
              </ul>
            </div>
            <p className='mt-24 flex items-center justify-center gap-3 text-xl font-bold capitalize'>
              Check Out the available reviews{' '}
              <PiArrowElbowRightDown className='text-4xl' />{' '}
            </p>
          </div>
        </div>
        <div className='mx-auto my-8 max-w-96 px-5'>
          <Link
            className={`${!room?.available && `pointer-events-none`}`}
            to={'/booking'}
            state={room._id}
          >
            <button
              disabled={room?.available ? false : true}
              className='btn w-full rounded-none border-slate-400 bg-slate-400 font-bold uppercase shadow-xl'
            >
              Book This Room
            </button>
          </Link>
        </div>
      </div>
      <div className='mx-auto max-w-7xl px-5 pb-16'>
        <div className='divider my-10 font-ooh-baby text-4xl font-bold'>
          Reviews : {reviews?.length}
        </div>
        <div className='grid gap-3 md:grid-cols-2'>
          {reviews ? (
            reviews.map((review) => (
              <ReviewCard key={review._id} review={review} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
