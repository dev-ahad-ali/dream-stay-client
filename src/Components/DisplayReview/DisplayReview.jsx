import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { url } from '../../Utils/url';
import ReviewCard from '../Card/ReviewCard';
import { EffectCoverflow } from 'swiper/modules';

const DisplayReview = () => {
  const { data: reviews, isLoading } = useQuery({
    queryKey: ['myBookings'],
    queryFn: async () => {
      const { data } = await axios.get(`${url}/reviews`);
      return data;
    },
  });

  if (isLoading) {
    return <span className='loading loading-spinner text-warning'></span>;
  }

  return (
    <section className='bg-blue-50 py-32'>
      <h2 className='px-5 text-center font-ooh-baby text-7xl font-bold'>
        What people say About us ....
      </h2>
      <div className='mt-20'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className='mySwiper'
        >
          {reviews?.map((review) => (
            <SwiperSlide className='flex max-w-2xl' key={review?._id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DisplayReview;
