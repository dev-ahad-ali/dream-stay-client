import { Link, useLoaderData } from 'react-router-dom';

const RoomDetails = () => {
  const room = useLoaderData();
  return (
    <>
      <div className='mx-auto max-w-7xl'>
        <div>
          <h2>{room?.room_name}</h2>
          <img src={room?.image} alt='' />
          <Link to={'/booking'} state={room._id}>
            <button className='btn btn-warning'>Book This Room</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default RoomDetails;
