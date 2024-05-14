import axios from 'axios';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import { url } from '../../Utils/url';
import { toast } from 'react-toastify';
import moment from 'moment';

const UpdateDateModal = ({ myBooking, refetch }) => {
  const { room, date } = myBooking;
  const [updateDate, setUpdateDate] = useState(new Date(date));

  const handleDateUpdate = async () => {
    const dateString = updateDate.toDateString();

    await axios
      .patch(`${url}/bookings/${myBooking._id}`, { dateString })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          refetch();
          toast.success('Date updated successfully');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <dialog id={`update${myBooking?._id}`} className='modal'>
      <div className='modal-box h-[75%] rounded-none bg-white/80 backdrop-blur-sm'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2 text-red-500'>
            ✕
          </button>
        </form>
        <h3 className='text-center text-xl font-bold'>
          Updating Booking Date For :
        </h3>
        <h3 className='mt-4 text-lg font-medium'>
          <span className='font-bold'>Room </span>: {room?.room_name}
        </h3>
        <h3 className='mt-2 text-lg font-medium'>
          <span className='font-bold'> Currently Booked For</span> : {date}
        </h3>
        <h3 className='mt-2 text-lg font-bold'>Change The Date :</h3>
        <DatePicker
          className={' h-[40px] w-4/5'}
          format='dd-MM-yyyy'
          onChange={(value) => setUpdateDate(value)}
          value={updateDate}
          minDate={moment().toDate()}
        />
        <form method='dialog' className='mt-56 text-center'>
          <button
            onClick={handleDateUpdate}
            className='btn btn-warning w-1/2 rounded-none text-white'
          >
            Update
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateDateModal;
