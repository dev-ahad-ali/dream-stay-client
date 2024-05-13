import { useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import SpecialOfferModal from '../Components/Modal/SpecialOfferModal';
import Featured from '../Components/Featured/Featured';
import NewsLetter from '../Components/NewsLetter/NewsLetter';

const Home = () => {
  useEffect(() => {
    document.getElementById('offer-modal').showModal();
  }, []);

  return (
    <>
      <div>
        <Banner />
      </div>
      <Featured />
      <NewsLetter />

      {/* special offer modal */}
      <SpecialOfferModal />
    </>
  );
};

export default Home;
