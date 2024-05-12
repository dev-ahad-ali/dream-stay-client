import { useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import SpecialOfferModal from '../Components/Modal/SpecialOfferModal';

const Home = () => {
  useEffect(() => {
    document.getElementById('offer-modal').showModal();
  }, []);

  return (
    <>
      <div>
        <Banner />
      </div>

      {/* special offer modal */}
      <SpecialOfferModal />
    </>
  );
};

export default Home;
