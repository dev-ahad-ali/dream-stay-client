import moment from 'moment';
import CancelModal from '../Modal/CancelModal';
import ReviewModal from '../Modal/ReviewModal';
import UpdateDateModal from '../Modal/UpdateDateModal';
import { useEffect, useState } from 'react';
import { MdOutlineReviews, MdOutlineUpdate } from 'react-icons/md';
import { FcCancel } from 'react-icons/fc';

const MyBookingCard = ({ myBooking, refetch }) => {
  const { room, date } = myBooking;
  const [disabled, setDisabled] = useState(false);
  const cancelDate = moment(new Date(date)).subtract(1, 'days');
  const lastCancelDate = cancelDate?._d;

  useEffect(() => {
    if (
      lastCancelDate.toDateString() === new Date().toDateString() ||
      new Date(date).toDateString() === new Date().toDateString()
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [lastCancelDate, date]);

  return (
    <>
      <div className='card card-side max-h-[300px] gap-6 rounded-none bg-white p-4 shadow-xl'>
        <figure>
          <img className='rounded-none' src={room?.image} />
        </figure>
        <div className='card-body p-0'>
          <h2 className='card-title'>{room?.room_name}</h2>
          <p className='text-sm'>{room?.description}</p>
          <p>
            <span className='font-medium'>Booked For</span> : {date || ''}
          </p>
          <div className='flex items-center justify-between gap-2'>
            <button
              onClick={() =>
                document.getElementById(`review${room._id}`).showModal()
              }
              className='btn btn-outline btn-success btn-xs rounded-none'
            >
              <MdOutlineReviews />
              Add Review
            </button>
            <button
              onClick={() =>
                document.getElementById(`update${myBooking._id}`).showModal()
              }
              className='btn btn-outline btn-warning btn-xs rounded-none'
            >
              <MdOutlineUpdate />
              Update Date
            </button>
            <button
              onClick={() =>
                document.getElementById(`cancel${myBooking._id}`).showModal()
              }
              className={`btn btn-outline btn-error btn-xs rounded-none`}
              disabled={disabled}
            >
              <FcCancel />
              Cancel
            </button>
          </div>
        </div>
      </div>
      {/* Update Modal */}
      <UpdateDateModal myBooking={myBooking} refetch={refetch} />
      {/* Cancel Modal */}
      <CancelModal myBooking={myBooking} refetch={refetch} />
      {/* Review Modal */}
      <ReviewModal room={room} />
    </>
  );
};

export default MyBookingCard;
