import { ParallaxBanner } from 'react-scroll-parallax';

const Banner = () => {
  return (
    <ParallaxBanner
      layers={[{ image: '/banner.jpg', speed: -30 }]}
      className='aspect-[2/1] min-h-screen'
    >
      <div className='absolute inset-0 flex items-center justify-center bg-black/20'>
        <div>
          <h1 className='font-ooh-baby text-4xl text-white md:text-[120px]'>
            Escape to Elegance
          </h1>
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default Banner;
