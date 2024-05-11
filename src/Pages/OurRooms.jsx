import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../Utils/url';
import { ImMenu2 } from 'react-icons/im';
import RoomCard from '../Components/Card/RoomCard';

const OurRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [maxRange, setMaxRange] = useState(0);
  const [minRange, setMinRange] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${url}/allRooms?maxRange=${maxRange}&minRange=${minRange}`,
        );
        setRooms(data);
      } catch {
        (error) => console.log(error);
      }
    };
    getData();
  }, [maxRange, minRange]);

  return (
    <div>
      <h2 className='text-2xl'>our rooms</h2>
      <div className='mt-4 flex justify-center'>
        <div className='dropdown dropdown-end'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-outline m-1 bg-gray-700 dark:text-white'
          >
            Sort By Price <ImMenu2 className='text-xl' />
          </div>
          <ul
            tabIndex={0}
            className='menu dropdown-content rounded-box bg-base-100 z-[1] w-52 border p-2 shadow-md dark:text-black'
          >
            <li
              onClick={() => {
                setMaxRange(0), setMinRange(0);
              }}
            >
              <label className='flex items-center justify-between'>
                {' '}
                <span>All</span>{' '}
                <input name='customization' type='radio' aria-label='All' />
              </label>
            </li>
            <li
              onClick={() => {
                setMaxRange(150), setMinRange(100);
              }}
            >
              <label className='flex items-center justify-between'>
                {' '}
                <span>100$ - 150$</span>{' '}
                <input name='customization' type='radio' aria-label='All' />
              </label>
            </li>
            <li
              onClick={() => {
                setMaxRange(200), setMinRange(140);
              }}
            >
              <label className='flex items-center justify-between'>
                {' '}
                <span>150$ - 200$ </span>{' '}
                <input name='customization' type='radio' aria-label='All' />
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div className='grid grid-cols-3'>
        {rooms.map((room) => (
          <RoomCard key={room?._id} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default OurRooms;
