const MyBookingCard = ({ myBooking, refetch }) => {
  const { room } = myBooking;
  return (
    <div className='card h-[300px] bg-base-100 shadow-xl lg:card-side'>
      <figure>
        <img src={room?.image} alt='Album' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{room?.room_name}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Listen</button>
        </div>
      </div>
    </div>
  );
};

export default MyBookingCard;
