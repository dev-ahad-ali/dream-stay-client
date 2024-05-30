import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ChooseView = () => {
  return (
    <section>
      <div className='px-5 text-center'>
        <h2 className='font-ooh-baby text-6xl font-bold leading-none md:text-[100px]'>
          Choose Your Favorite View
        </h2>
        <p className='mx-auto mt-4 max-w-4xl text-sm md:text-xl'>
          Get verities of different beautiful view of your liking, So you can
          have your dream holiday.
        </p>
      </div>

      <div className='mt-12'>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ChooseView;
