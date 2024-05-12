import moment from 'moment';
import CancelModal from '../Modal/CancelModal';
import ReviewModal from '../Modal/ReviewModal';
import UpdateDateModal from '../Modal/UpdateDateModal';
import { useEffect, useState } from 'react';

const MyBookingCard = ({ myBooking, refetch }) => {
  const { room, date } = myBooking;
  const [disabled, setDisabled] = useState(false);
  const cancelDate1 = moment(new Date(date)).subtract(2, 'days');
  const cancelDate2 = moment(new Date(date)).subtract(1, 'days');
  const lastCancelDate1 = cancelDate1?._d;
  const lastCancelDate2 = cancelDate2?._d;

  useEffect(() => {
    if (
      lastCancelDate1.toDateString() === new Date().toDateString() ||
      lastCancelDate2.toDateString() === new Date().toDateString()
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [lastCancelDate1, lastCancelDate2]);

  return (
    <>
      <div className='card h-[300px] bg-base-100 shadow-xl lg:card-side'>
        <figure>
          <img src={room?.image} alt='Album' />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>{room?.room_name}</h2>
          <p>{myBooking?.date}</p>
          <div className='card-actions justify-end'>
            <button
              onClick={() =>
                document.getElementById('review-modal').showModal()
              }
              className='btn btn-primary'
            >
              Add Review
            </button>
            <button
              onClick={() =>
                document.getElementById('updateDate-modal').showModal()
              }
              className='btn btn-warning'
            >
              Update Date
            </button>
            <button
              onClick={() =>
                document.getElementById('cancel-modal').showModal()
              }
              className={`btn btn-error`}
              disabled={disabled}
            >
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
