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
    <div>
      <h2 className='text-2xl'>my bookings: {email}</h2>
      {myBookings.map((myBooking) => (
        <MyBookingCard
          key={myBooking._id}
          refetch={refetch}
          myBooking={myBooking}
        />
      ))}
    </div>
  );
};

export default MyBookings;
