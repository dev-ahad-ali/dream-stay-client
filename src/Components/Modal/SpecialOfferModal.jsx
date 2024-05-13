import { Link } from 'react-router-dom';
import modalBg from '../../assets/img/offer-bg.jpg';
const SpecialOfferModal = () => {
  return (
    <dialog id='offer-modal' className='modal'>
      <div className='modal-box h-1/2 max-w-2xl bg-white/10 p-0 backdrop-blur-md'>
        <form method='dialog'>
          {/* if there is a button in form, it will close the modal */}
          <button className='btn btn-circle btn-sm absolute right-2 top-2 bg-red-600 font-bold text-white hover:bg-red-800'>
            ✕
          </button>
        </form>
        <div className=' grid h-full grid-cols-2'>
          <div
            className='bg-cover bg-center'
            style={{
              backgroundImage: `url(${modalBg})`,
            }}
          ></div>
          <div>
            <div className='hero-content mt-12 text-center text-black'>
              <div className='max-w-md text-white'>
                <h1 className='mb-5 text-4xl font-bold uppercase'>
                  <span className='text-green-600'>40%</span> off this{' '}
                  <span className='text-blue-600'>winter</span>
                </h1>
                <p className='mb-5'>
                  Discover a world of luxury and relaxation with our carefully
                  curated hotel offers,
                </p>
                <Link
                  to={'/ourRooms'}
                  className='btn btn-outline btn-wide rounded-none border-white text-white'
                >
                  View Rooms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default SpecialOfferModal;
