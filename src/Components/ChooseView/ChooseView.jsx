import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { url } from '../../Utils/url';
import ChooseViewTab from './ChooseViewTab';

const ChooseView = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`${url}/rooms`);
        setRooms(data);
      } catch {
        (error) => console.log(error);
      }
    };
    getData();
  }, []);

  const mountainView = rooms.filter((room) =>
    room.facilities.includes('Mountain view'),
  );

  const forestView = rooms.filter((room) =>
    room.facilities.includes('Forest view'),
  );

  const arcticView = rooms.filter((room) =>
    room.facilities.includes('Arctic view'),
  );

  return (
    <section className='pb-16 md:pb-32'>
      <div className='px-5 text-center'>
        <h2 className='font-ooh-baby text-6xl font-bold leading-none md:text-[100px]'>
          Choose Your Favorite View
        </h2>
        <p className='mx-auto mt-4 max-w-4xl text-sm md:text-xl'>
          Get verities of different beautiful view of your liking, So you can
          have your dream holiday.
        </p>
      </div>

      <div className='mx-auto mt-12 max-w-7xl px-5'>
        <Tabs>
          <TabList>
            <Tab>Mountain view</Tab>
            <Tab>Forest view</Tab>
            <Tab>Arctic view</Tab>
          </TabList>

          <TabPanel>
            <ChooseViewTab rooms={mountainView} />
          </TabPanel>
          <TabPanel>
            <ChooseViewTab rooms={forestView} />
          </TabPanel>
          <TabPanel>
            <ChooseViewTab rooms={arcticView} />
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ChooseView;
