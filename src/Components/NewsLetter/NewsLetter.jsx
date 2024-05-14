import { ParallaxBanner } from 'react-scroll-parallax';

const NewsLetter = () => {
  return (
    <ParallaxBanner
      layers={[{ image: '/newsletterbg.jpg', speed: -40 }]}
      className='aspect-[2/1] max-h-[390px]'
    >
      <div className='absolute inset-0 flex '>
        <div className='w-full bg-black/50 py-4 text-center md:py-10'>
          <h1 className='font-ooh-baby text-4xl leading-none text-white md:text-[120px]'>
            Newsletter
          </h1>
          <p className='text-white md:text-lg'>
            Subscribe to our newsletter to get all the latest offers and news
            first
          </p>
          <div className=' mx-auto  max-w-xl px-4 md:mt-12'>
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
            <p className='mt-2 text-xs font-bold uppercase text-white md:mt-8 md:text-lg'>
              Current available <span className='text-green-600'>25%</span> off
              on first room
            </p>
          </div>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default NewsLetter;
