import { ParallaxBanner } from 'react-scroll-parallax';

const Banner = () => {
  return (
    <ParallaxBanner
      layers={[{ image: '/banner.jpg', speed: -20 }]}
      className='aspect-[2/1]'
    >
      <div className='absolute inset-0 flex items-center justify-center bg-black/20'>
        <div>
          <h1 className='font-ooh-baby text-[120px] text-white'>
            Escape to Elegance
          </h1>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Banner;
