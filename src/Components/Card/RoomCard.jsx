import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  // const { room_name, price, available, description, image, _id } = room;
  return (
    <div>
      <div className='relative'>
        <Link to={`/roomDetails/${room._id}`}>
          {' '}
          <img className='h-[400px] w-full' src={room?.image} alt='' />
        </Link>
        <span className='absolute left-2 top-3 rounded-none bg-white px-2 py-1 text-sm font-medium uppercase'>
          ${room?.price}/Night
        </span>
        {room?.offers > 0 && (
          <div className='mask mask-heart absolute right-3 top-3 grid h-12 w-12 place-items-center bg-green-500 text-white'>
            <p className=' font-ooh-baby text-xl font-bold'>-{room?.offers}%</p>
          </div>
        )}
        {!room?.available && (
          <div className='absolute left-1/2 top-1/2  grid -translate-x-1/2 -translate-y-1/2  bg-red-500 px-6 py-3 text-white'>
            <h2 className='font-ooh-baby text-4xl font-bold uppercase'>
              Booked
            </h2>
          </div>
        )}
        <Link
          className={`${!room?.available && `pointer-events-none`}`}
          to={'/booking'}
          state={room._id}
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
        <div className='text-end'>
          <Link
            to={`/roomDetails/${room._id}`}
            className='mt-2 flex items-center justify-end gap-2 font-medium text-blue-400 hover:underline'
          >
            View Details <BsArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
