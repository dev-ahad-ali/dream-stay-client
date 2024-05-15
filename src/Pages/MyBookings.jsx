import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { url } from '../Utils/url';
import MyBookingCard from '../Components/Card/MyBookingCard';
import { Helmet } from 'react-helmet';

const MyBookings = () => {
  const { email } = useParams();
  const {
    data: myBookings,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['myBookings'],
    queryFn: async () => {
      const { data } = await axios.get(`${url}/bookings/${email}`, {
        withCredentials: true,
      });
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className='inset-0 z-20 grid min-h-screen w-full place-items-center bg-transparent'>
        {' '}
        <span className='loading loading-infinity w-[48px] text-success'></span>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>My Bookings</title>
      </Helmet>
      <div className='py-16'>
        <h2 className='mb-16 px-5 text-center font-ooh-baby text-6xl font-bold md:text-8xl'>
          my bookings
        </h2>
        <div className='mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2'>
          {myBookings?.map((myBooking) => (
            <MyBookingCard
              key={myBooking._id}
              refetch={refetch}
              myBooking={myBooking}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyBookings;
