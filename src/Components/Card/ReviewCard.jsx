const ReviewCard = ({ review }) => {
  const { user, ratings, comment, timeStamp } = review;
  const stars = [];
  for (let i = 0; i < ratings; i++) {
    stars.push(i);
  }
  return (
    <div className='flex min-h-[260px] flex-col  justify-between border-2 border-amber-300 bg-white p-4'>
      <p className=' text-gray-500'>“{comment}”.</p>
      <div className='mt-6'>
        <div className='flex items-center justify-between'>
          <h1 className='font-semibold text-blue-500'>
            <span className='text-black'>From</span> : {user}
          </h1>
          <div className='flex items-center gap-3'>
            <span className='font-medium text-black'>Ratings-{ratings} : </span>
            <div className='flex items-center gap-1'>
              {stars?.map((star) => (
                <div
                  key={star}
                  className='mask mask-star-2 w-[20px] bg-amber-500 text-amber-500'
                >
                  1
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='mt-2 text-end '>
        <span className='text-xs text-gray-500'>
          <span className='text-black'>Posted On : </span>
          {timeStamp}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
