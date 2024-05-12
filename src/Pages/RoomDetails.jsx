import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { url } from '../Utils/url';

const RoomDetails = () => {
  const room = useLoaderData();
  const [reviews, setReviews] = useState([]);
  console.log(reviews);

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
      <div className='mx-auto max-w-7xl'>
        <div>
          <h2>{room?.room_name}</h2>
          <img className='h-72' src={room?.image} alt='' />
          <Link to={'/booking'} state={room._id}>
            <button className='btn btn-warning'>Book This Room</button>
          </Link>
          {reviews ? (
            reviews.map((review) => <p key={review._id}>{review.comment}</p>)
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
