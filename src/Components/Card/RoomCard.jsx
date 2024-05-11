import { Link } from 'react-router-dom';

const RoomCard = ({ room }) => {
  const { room_name, price, available, description, image, _id } = room;
  return (
    <div className='card card-compact bg-base-100 w-96 shadow-xl'>
      <figure>
        <img src={image} alt='Shoes' />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{room_name}</h2>
        <p>{description}</p>
        <div className='card-actions justify-end'>
          <Link to={`/roomDetails/${_id}`}>
            <button className='btn btn-primary'>Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
