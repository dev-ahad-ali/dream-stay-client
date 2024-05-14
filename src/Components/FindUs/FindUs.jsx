import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const FindUs = () => {
  return (
    <section className='grid grid-cols-2 items-center gap-8 pt-32'>
      <div>
        <MapContainer
          className='min-h-[500px]'
          center={[46.497222, 9.837778]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[46.497222, 9.837778]}>
            <Popup>Dream Stay</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className='text-center'>
        <h2 className=' font-ooh-baby text-[120px] leading-none'>Find Us</h2>
        <p className=' font-ooh-baby text-[40px] leading-none'>At :</p>
        <address className='text-lg font-medium italic text-black'>
          Dream Stay Via Serlas 27,
          <br />
          7500 St. Moritz, Switzerland
        </address>
        <p className='mx-auto mt-6 max-w-[500px] text-center'>
          Discover a world of luxury and relaxation with our carefully curated
          hotel offers, designed to enhance your stay and create lasting
          memories. Whether you’re planning a romantic getaway, a family
          vacation, or a business trip, we have the perfect offer to suit your
          needs and elevate your experience.
        </p>
      </div>
    </section>
  );
};

export default FindUs;
