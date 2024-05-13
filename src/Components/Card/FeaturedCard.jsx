import { Link } from 'react-router-dom';

const FeaturedCard = ({ room }) => {
  return (
    <div className=''>
      <div className='relative'>
        <img className='h-[595px]' src={room?.image} alt='' />
        <span className='absolute left-2 top-3 rounded-none bg-white px-2 py-1 text-sm font-medium uppercase'>
          ${room?.price}/Night
        </span>
        {!room?.available && (
          <div className='absolute left-1/2 top-1/2  grid -translate-x-1/2 -translate-y-1/2  bg-red-500 px-6 py-3 text-white'>
            <h2 className='font-ooh-baby text-4xl font-bold uppercase'>
              Booked
            </h2>
          </div>
        )}
        <Link
          to={'/booking'}
          state={room._id}
          aria-disabled={room?.available ? false : true}
        >
          <button
            disabled={room?.available ? false : true}
            className='btn absolute -bottom-5 right-2 rounded-none border-slate-400 bg-slate-400'
          >
            Book Now
          </button>
        </Link>
      </div>
      <div className='mt-2'>
        <h3 className='text-2xl'>{room?.room_name}</h3>
        <div>
          <p className='font-bold'>Facilities : </p>
          {room?.facilities.map((facility, idx) => (
            <span className='me-2 text-sm' key={idx}>
              {facility}/
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
