import DatePicker from 'react-date-picker';
import { useLoaderData } from 'react-router-dom';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';

const RoomDetails = () => {
  const room = useLoaderData();
  const [date, setDate] = useState(new Date());
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBooking = () => {
    const dateString = date.toDateString();
    const booking = {
      room: room,
      userName: user?.displayName,
      email: user?.email,
      date: dateString,
    };
    console.log(booking);
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
          <img src={room?.image} alt='' />
        </div>
      </div>
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

export default RoomDetails;
