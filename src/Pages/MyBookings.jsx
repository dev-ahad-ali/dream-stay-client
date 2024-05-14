import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { url } from '../Utils/url';
import MyBookingCard from '../Components/Card/MyBookingCard';

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
    return <span className='loading loading-spinner text-warning'></span>;
  }

  return (
    <div className='py-16'>
      <h2 className='mb-16 px-5 text-center font-ooh-baby text-8xl font-bold'>
        my bookings
      </h2>
      <div className='mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5'>
        {myBookings.map((myBooking) => (
          <MyBookingCard
            key={myBooking._id}
            refetch={refetch}
            myBooking={myBooking}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
