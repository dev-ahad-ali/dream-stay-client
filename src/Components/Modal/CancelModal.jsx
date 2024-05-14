import axios from 'axios';
import { url } from '../../Utils/url';
import { toast } from 'react-toastify';

const CancelModal = ({ myBooking, refetch }) => {
  const { room, _id } = myBooking;

  const handleCancel = async () => {
    await axios
      .delete(`${url}/bookings/${_id}`)
      .then(async (res) => {
        if (res.data?.deletedCount > 0) {
          await axios
            .patch(`${url}/rooms/${room._id}`, { booking: false })
            .then((res) => {
              if (res.data?.modifiedCount > 0) {
                toast.success('Booking Canceled');
                refetch();
              }
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <dialog id={`cancel${_id}`} className='modal'>
      <div className='modal-box'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='text-lg font-bold'>{room?.room_name}</h3>
        <p className='py-4'>Are you sure you wanna cancel booking</p>
        <form method='dialog'>
          <button onClick={handleCancel} className='btn btn-error'>
            Yes
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default CancelModal;
