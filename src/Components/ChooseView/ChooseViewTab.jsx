import RoomCard from '../Card/RoomCard';

const ChooseViewTab = ({ rooms }) => {
  return (
    <section>
      <div className='mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </section>
  );
};

export default ChooseViewTab;
