import { useEffect } from 'react';
import Banner from '../Components/Banner/Banner';
import SpecialOfferModal from '../Components/Modal/SpecialOfferModal';
import Featured from '../Components/Featured/Featured';
import NewsLetter from '../Components/NewsLetter/NewsLetter';
import FindUs from '../Components/FindUs/FindUs';
import DisplayReview from '../Components/DisplayReview/DisplayReview';
import { Helmet } from 'react-helmet';
import ChooseView from '../Components/ChooseView/ChooseView';

const Home = () => {
  useEffect(() => {
    document.getElementById('offer-modal').showModal();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dream Stay | Home</title>
      </Helmet>
      <div>
        <Banner />
      </div>
      <FindUs />
      <Featured />
      <ChooseView />
      <NewsLetter />
      <DisplayReview />
      {/* special offer modal */}
      <SpecialOfferModal />
    </>
  );
};

export default Home;
