import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { url } from '../Utils/url';
import ReviewCard from '../Components/Card/ReviewCard';

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

  return (
    <>
      <div className='mx-auto max-w-7xl px-5 py-12'>
        <div>
          <h2>{room?.room_name}</h2>
          <img className='h-72' src={room?.image} alt='' />
          <Link to={'/booking'} state={room._id}>
            <button className='btn btn-warning'>Book This Room</button>
          </Link>
          <div className='grid grid-cols-2 gap-3'>
            {reviews ? (
              reviews.map((review) => (
                <ReviewCard key={review._id} review={review} />
              ))
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
