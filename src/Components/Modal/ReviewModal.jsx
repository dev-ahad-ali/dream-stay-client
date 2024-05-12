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
    const comment = document.getElementById('reviewComment').value;

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
  };

  return (
    <dialog id='review-modal' className='modal'>
      <div className='modal-box  h-[90%] max-w-[700px]'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-circle btn-ghost btn-sm absolute right-2 top-2'>
            ✕
          </button>
        </form>
        <h3 className='text-lg font-bold'>{room?.room_name}</h3>
        <form id='review-form' method='dialog'>
          <p>
            <span className='font-bold'>Name</span> : {user?.displayName}
          </p>
          <div>
            <p className='font-bold'>Ratings: {ratings}</p>
            <div className='space-x-2'>
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
            <label className='block'>Comment</label>
            <textarea
              className='h-36 w-full resize-none border border-black'
              id='reviewComment'
            ></textarea>
          </div>
          <p className='text-end'>Posting Date : {postDate}</p>
          <button
            onClick={() => {
              handleReview();
              document.getElementById('review-form').reset();
              setRatings(0);
            }}
            className='btn btn-success'
          >
            Post
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default ReviewModal;
