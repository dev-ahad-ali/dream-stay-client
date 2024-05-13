import { useEffect, useState } from 'react';
import { url } from '../../Utils/url';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import FeaturedCard from '../Card/FeaturedCard';

const Featured = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${url}/rooms`);
        setRooms(data);
      } catch {
        (error) => console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className='py-14'>
      <div className='px-5 text-center'>
        <h2 className='font-ooh-baby text-[100px] font-bold'>Our Rooms</h2>
        <p className='mx-auto max-w-4xl text-xl'>
          Get ready to carve through pristine powder and conquer the slopes of
          varying difficulty levels. Our resort boasts a diverse range of ski
          and snowboard trails, ensuring there’s something for everyone, from
          beginners to seasoned experts.
        </p>
      </div>
      <div className='mt-12'>
        <Swiper
          slidesPerView={3}
          spaceBetween={40}
          freeMode={true}
          modules={[FreeMode]}
          className='mySwiper !ps-[88px]'
        >
          {rooms.slice(0, 6).map((room) => (
            <SwiperSlide className='!w-[415px]' key={room._id}>
              <FeaturedCard room={room} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Featured;
