import DatePicker from 'react-date-picker';
import { useLocation } from 'react-router-dom';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import { url } from '../Utils/url';
import { toast } from 'react-toastify';

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
      <div className='mx-auto grid max-w-7xl grid-cols-2 gap-5'>
        <div>
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
                className='block w-full rounded-lg border bg-white px-4 py-2 text-gray-700    focus:border-gray-400 focus:outline-none  focus:ring focus:ring-gray-300 focus:ring-opacity-40'
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
                className='block w-full rounded-lg border bg-white px-4 py-2 text-gray-700    focus:border-gray-400 focus:outline-none  focus:ring focus:ring-gray-300 focus:ring-opacity-40'
                type='email'
              />
            </div>
            <DatePicker
              format='dd-MM-yyyy'
              onChange={(value) => setDate(value)}
              value={date}
            />
            <div className='mt-4'>
              <input
                onClick={() =>
                  document.getElementById('booking_modal').showModal()
                }
                type='submit'
                value='Book Now'
                className='btn btn-success'
              />
            </div>
          </form>
        </div>
        <div>
          <h2>{room?.room_name}</h2>
          <img src={room?.image} alt='' />
          <p>Available : {room?.available ? 'Yes' : 'No'}</p>
        </div>
      </div>

      {/* Booking Modal */}
      <dialog id='booking_modal' className='modal'>
        <div className='modal-box'>
          <form method='dialog'>
            {/* if there is a button in form, it will close the modal */}
            <button className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2 text-red-600'>
              ✕
            </button>
          </form>
          <h3 className='text-lg font-bold'>{room?.room_name}</h3>
          <p className='py-4'>Please Confirm Your Booking</p>
          <div className='text-center'>
            <form method='dialog'>
              <button
                onClick={handleBooking}
                className='btn btn-success text-white'
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
