import DatePicker from 'react-date-picker';
import { useLocation } from 'react-router-dom';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import { url } from '../Utils/url';
import { toast } from 'react-toastify';
import moment from 'moment';
import { Helmet } from 'react-helmet';

const Booking = () => {
  const [room, setRoom] = useState({});
  const [refetch, setRefetch] = useState(true);
  const location = useLocation();
  const id = location.state;
  const [date, setDate] = useState(new Date());
  const { user } = useAuth();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${url}/rooms/${id}`);
        data;
        setRoom(data);
      } catch {
        (error) => console.log(error);
      }
    };
    getData();
  }, [id, refetch]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBooking = async () => {
    const dateString = date.toDateString();
    const booking = {
      room: room,
      userName: user?.displayName,
      email: user?.email,
      date: dateString,
    };

    await axios
      .patch(`${url}/rooms/${room._id}`, { booking: true })
      .then(async (res) => {
        if (res.data?.modifiedCount > 0) {
          await axios
            .post(`${url}/bookings`, booking)
            .then((res) => {
              if (res.data?.insertedId) {
                toast.success('booking successful');
                setRefetch(!refetch);
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Helmet>
        <title>Booking</title>
      </Helmet>
      <h2 className='mt-12 px-5 text-center font-ooh-baby text-6xl font-bold'>
        Book Your Room Now
      </h2>
      <div className='mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-28'>
        <div className=' h-[80%] border-2 border-black p-4'>
          <form onSubmit={handleSubmit}>
            <div className='mt-4'>
              <label
                className='mb-2 block text-sm font-medium text-gray-600 '
                htmlFor='name'
              >
                Username
              </label>
              <input
                disabled={true}
                value={user?.displayName}
                id='name'
                autoComplete='name'
                name='name'
                className='block w-full border bg-white px-4 py-2 text-gray-700    focus:border-gray-400 focus:outline-none  focus:ring focus:ring-gray-300 focus:ring-opacity-40'
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
                disabled={true}
                value={user?.email}
                id='LoggingEmailAddress'
                autoComplete='email'
                name='email'
                className='block w-full  border bg-white px-4 py-2 text-gray-700    focus:border-gray-400 focus:outline-none  focus:ring focus:ring-gray-300 focus:ring-opacity-40'
                type='email'
              />
            </div>
            <div className='mt-6'>
              <p>Pick A Date</p>
              <DatePicker
                className={'mt-2 h-[48px] w-full bg-white'}
                format='dd-MM-yyyy'
                onChange={(value) => setDate(value)}
                value={date}
                minDate={moment().toDate()}
              />
            </div>
            <div className='mt-40'>
              <input
                disabled={room?.available ? false : true}
                onClick={() =>
                  document.getElementById('booking_modal').showModal()
                }
                type='submit'
                value='Book Now'
                className='btn btn-success w-full rounded-none text-white'
              />
            </div>
          </form>
        </div>
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
      </div>

      {/* Booking Modal */}
      <dialog id='booking_modal' className='modal'>
        <div className='modal-box rounded-none bg-white/80 backdrop-blur-sm'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2 text-red-600'>
              ✕
            </button>
          </form>
          <h2 className='text-center text-2xl font-bold'>Booking Summery</h2>
          <h3 className=' mt-2 text-lg'>
            <span className='font-bold'>ROOM </span>: {room?.room_name}
          </h3>
          <p className='mt-2  text-lg'>
            <span className='font-bold'>Price</span> : ${room?.price}/night
          </p>
          <p className='mt-2  text-lg'>
            <span className='font-bold'>Booked For</span> :{' '}
            {date?.toDateString()}
          </p>
          <p className='mb-1 mt-4 text-center text-sm'>
            Please Confirm Your Booking
          </p>
          <div className='text-center'>
            <form method='dialog'>
              <button
                onClick={handleBooking}
                className='btn btn-success btn-sm rounded-none uppercase text-white'
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Booking;
