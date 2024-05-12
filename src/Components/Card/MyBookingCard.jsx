import UpdateDateModal from '../Modal/UpdateDateModal';

const MyBookingCard = ({ myBooking, refetch }) => {
  const { room } = myBooking;

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
                document.getElementById('updateDate-modal').showModal()
              }
              className='btn btn-warning'
            >
              Update Date
            </button>
            <button className='btn btn-error'>Cancel</button>
          </div>
        </div>
      </div>
      {/* Update Modal */}
      <UpdateDateModal myBooking={myBooking} refetch={refetch} />
    </>
  );
};

export default MyBookingCard;
