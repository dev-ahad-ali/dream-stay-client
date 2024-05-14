import axios from 'axios';
import { useEffect, useState } from 'react';
import { url } from '../Utils/url';
import { ImMenu2 } from 'react-icons/im';
import RoomCard from '../Components/Card/RoomCard';
import { Helmet } from 'react-helmet';

const OurRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [maxRange, setMaxRange] = useState(0);
  const [minRange, setMinRange] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          `${url}/rooms?maxRange=${maxRange}&minRange=${minRange}`,
        );
        setRooms(data);
      } catch {
        (error) => console.log(error);
      }
    };
    getData();
  }, [maxRange, minRange]);

  return (
    <>
      <Helmet>
        <title>Dreams Stay | Our Rooms</title>
      </Helmet>
      <div className='py-12'>
        <h2 className='mb-12 text-center font-ooh-baby text-2xl text-[100px] capitalize'>
          our rooms
        </h2>
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
              className='menu dropdown-content z-[1] w-52 rounded-box border bg-base-100 p-2 shadow-md dark:text-black'
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
        <div className='mx-auto mt-12 grid max-w-7xl grid-cols-3 gap-6 px-5'>
          {rooms.map((room) => (
            <RoomCard key={room?._id} room={room}></RoomCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurRooms;
