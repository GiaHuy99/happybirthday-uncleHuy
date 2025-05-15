import { MapPin, Calendar, Clock, Gift } from 'lucide-react';

const EventDetails = () => {
  return (
    <section id="details" className="section">
      <h2 className="section-title" data-aos="fade-up">Event Details</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="rounded-lg overflow-hidden shadow-lg" data-aos="fade-right" data-aos-delay="200">
          <img 
            src="https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Venue" 
            className="w-full h-64 object-cover"
          />
          <div className="bg-white p-6">
            <h3 className="font-display text-2xl text-rose-600 mb-4">Grand Celebration Hall</h3>
            <p className="mb-4">
              A beautiful venue with elegant decor, perfect for celebrating this special occasion.
              The hall features a spacious dance floor, elegant lighting, and a magical atmosphere.
            </p>
            <div className="flex items-start space-x-2">
              <MapPin className="text-rose-500 mt-1 flex-shrink-0" size={18} />
              <p>123 Celebration Lane, Crystal Springs, FL 12345</p>
            </div>
          </div>
        </div>
        
        <div data-aos="fade-left" data-aos-delay="300">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover-lift">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-rose-100 p-3 rounded-full">
                <Calendar className="text-rose-600" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl text-gray-800">Date</h3>
                <p className="text-gray-600">Saturday, June 15, 2025</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6 hover-lift">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-rose-100 p-3 rounded-full">
                <Clock className="text-rose-600" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl text-gray-800">Time</h3>
                <p className="text-gray-600">6:00 PM - 12:00 AM</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover-lift">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-rose-100 p-3 rounded-full">
                <Gift className="text-rose-600" size={24} />
              </div>
              <div>
                <h3 className="font-display text-xl text-gray-800">Dress Code</h3>
                <p className="text-gray-600">Semi-formal / Cocktail Attire</p>
              </div>
            </div>
            <p className="text-gray-600 pt-2 border-t border-gray-100">
              Ladies: Cocktail dresses in pastel or jewel tones<br />
              Gentlemen: Dress shirt with tie, dress pants, optional jacket
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;