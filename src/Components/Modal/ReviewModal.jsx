import { useState } from 'react';
import useAuth from '../../Hooks/useAuth';
import axios from 'axios';
import { toast } from 'react-toastify';
import { url } from '../../Utils/url';

const ReviewModal = ({ room }) => {
  const { user } = useAuth();
  const [ratings, setRatings] = useState(0);
  const postDate = new Date().toDateString();

  const handleReview = async () => {
    const comment = document.getElementById(`reviewComment${room?._id}`).value;

    const review = {
      roomId: room._id,
      user: user?.displayName,
      ratings: ratings,
      comment: comment,
      timeStamp: postDate,
    };

    await axios
      .post(`${url}/reviews`, review)
      .then((res) => {
        if (res.data?.insertedId) {
          toast.success('Review posted successfully');
        }
      })
      .catch((err) => console.log(err));

    setRatings(0);
    document.getElementById(`review-form${room?._id}`).reset();
  };

  return (
    <dialog id={`review${room?._id}`} className='modal'>
      <div className='modal-box max-w-[700px] rounded-none bg-white/80 backdrop-blur-sm'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2 text-red-500'>
            ✕
          </button>
        </form>
        <h2 className='mb-4 text-center text-4xl font-bold'>Add Your Review</h2>
        <h3 className='text-lg font-bold'>
          Room Name : <span className='font-normal'>{room?.room_name}</span>
        </h3>
        <form
          onSubmit={() => {
            handleReview();
          }}
          id={`review-form${room?._id}`}
          method='dialog'
        >
          <div>
            <p className='mt-4 font-bold'>Your Ratings: {ratings}</p>
            <div className='mt-2 space-x-2'>
              <input
                className='btn btn-circle'
                type='radio'
                name='options'
                aria-label='1'
                onClick={() => setRatings(1)}
              />
              <input
                className='btn btn-circle'
                type='radio'
                name='options'
                aria-label='2'
                onClick={() => setRatings(2)}
              />
              <input
                className='btn btn-circle'
                type='radio'
                name='options'
                aria-label='3'
                onClick={() => setRatings(3)}
              />
              <input
                className='btn btn-circle'
                type='radio'
                name='options'
                aria-label='4'
                onClick={() => setRatings(4)}
              />
              <input
                className='btn btn-circle'
                type='radio'
                name='options'
                aria-label='5'
                onClick={() => setRatings(5)}
              />
            </div>
          </div>
          <div>
            <label className='mt-4 block font-bold'>Add A Comment :</label>
            <textarea
              className='h-36 w-full resize-none border-2 p-1 focus:outline-1'
              id={`reviewComment${room?._id}`}
              required={true}
            ></textarea>
          </div>
          <p className='text-end'>
            <span className='font-bold'>Posting Date</span> : {postDate || ''}
          </p>
          <p className='text-end'>
            <span className='font-bold'>User Name:</span> {user?.displayName}
          </p>
          <button className='btn btn-success mt-8 w-1/3 rounded-none text-white'>
            Post
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default ReviewModal;
