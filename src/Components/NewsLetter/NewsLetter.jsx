import { ParallaxBanner } from 'react-scroll-parallax';

const NewsLetter = () => {
  return (
    <ParallaxBanner
      layers={[{ image: '/newsletterbg.jpg', speed: -40 }]}
      className='aspect-[2/1] max-h-[390px]'
    >
      <div className='absolute inset-0 flex '>
        <div className='w-full bg-black/50 py-10 text-center'>
          <h1 className='font-ooh-baby text-[120px] leading-none text-white'>
            Newsletter
          </h1>
          <p className='text-lg text-white'>
            Subscribe to our newsletter to get all the latest offers and news
            first
          </p>
          <div className=' mx-auto  mt-12 max-w-xl px-4'>
            <div className='flex items-center'>
              <input
                type='email'
                placeholder='Enter Your Email'
                className='input w-full rounded-none'
              />
              <button className='btn btn-primary rounded-none'>
                Subscribe
              </button>
            </div>
            <p className='mt-8 text-lg font-bold uppercase text-white'>
              Current available <span className='text-green-600'>40%</span> off
              on first room
            </p>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default NewsLetter;
