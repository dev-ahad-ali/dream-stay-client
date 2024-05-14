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
      <div className='modal-box  h-[90%] max-w-[700px]'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='text-lg font-bold'>{room?.room_name}</h3>
        <DatePicker
          format='dd-MM-yyyy'
          onChange={(value) => setUpdateDate(value)}
          value={updateDate}
          minDate={moment().toDate()}
        />
        <p className='py-4'>Press ESC key or click on ✕ button to close</p>
        <form method='dialog'>
          <button onClick={handleDateUpdate} className='btn btn-success'>
            Update
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default UpdateDateModal;
