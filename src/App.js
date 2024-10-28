import React, { useState } from 'react';
import EventList from './components/EventList';
import EventModal from './components/EventModal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import local images
import concertImage from './assets/concert.jpg';
import artExhibitionImage from './assets/art-exhibition.jpg';
import foodFestivalImage from './assets/food-festival.jpg';
import techConferenceImage from './assets/tech-conference.jpg';
import yogaRetreatImage from './assets/yoga-retreat.jpg';
import farmersMarketImage from './assets/farmers-market.jpg';
import cleanupImage from './assets/cleanup.jpg';
import bookFairImage from './assets/book-fair.jpg';
import movieNightImage from './assets/movie-night.jpg';
import charityRunImage from './assets/charity-run.jpg';
import scienceFairImage from './assets/science-fair.jpg';
import musicFestivalImage from './assets/music-festival.jpg';
import photographyWorkshopImage from './assets/photography-workshop.jpg';
import cookingClassImage from './assets/cooking-class.jpg';
import dancePartyImage from './assets/dance-party.jpg';
import techTalkImage from './assets/tech-talk.jpg';

// Mock data for events (15 events)
const eventsData = [
  { id: 1, title: 'Concert in the Park', description: 'Join us for a night of music under the stars!', date: '2024-10-30', image: concertImage },
  { id: 2, title: 'Art Exhibition', description: 'Explore the latest works from local artists.', date: '2024-11-05', image: artExhibitionImage },
  { id: 3, title: 'Food Festival', description: 'Taste dishes from around the world at our annual food festival.', date: '2024-11-12', image: foodFestivalImage },
  { id: 4, title: 'Tech Conference', description: 'Connect with tech enthusiasts and innovators at this year’s conference.', date: '2024-11-20', image: techConferenceImage },
  { id: 5, title: 'Yoga Retreat', description: 'Relax and rejuvenate with a weekend yoga retreat.', date: '2024-11-25', image: yogaRetreatImage },
  { id: 6, title: 'Local Farmers Market', description: 'Shop fresh produce and handmade goods every Saturday.', date: '2024-11-02', image: farmersMarketImage },
  { id: 7, title: 'Community Clean-Up', description: 'Join us in making our neighborhood a cleaner place.', date: '2024-10-31', image: cleanupImage },
  { id: 8, title: 'Book Fair', description: 'Discover new reads at our annual book fair.', date: '2024-11-15', image: bookFairImage },
  { id: 9, title: 'Outdoor Movie Night', description: 'Enjoy a classic film under the stars with friends and family.', date: '2024-11-10', image: movieNightImage },
  { id: 10, title: 'Charity Run', description: 'Run for a cause! Join our charity run to support local charities.', date: '2024-11-30', image: charityRunImage },
  { id: 11, title: 'Science Fair', description: 'Explore exciting projects and experiments from local students.', date: '2024-11-20', image: scienceFairImage },
  { id: 12, title: 'Music Festival', description: 'Celebrate music with performances from top artists.', date: '2024-12-05', image: musicFestivalImage },
  { id: 13, title: 'Photography Workshop', description: 'Improve your photography skills with hands-on sessions.', date: '2024-12-12', image: photographyWorkshopImage },
  { id: 14, title: 'Cooking Class', description: 'Learn to cook delicious meals in a fun environment.', date: '2024-12-15', image: cookingClassImage },
  { id: 15, title: 'Dance Party', description: 'Join us for a night of dancing and fun!', date: '2024-12-20', image: dancePartyImage },
];

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const filteredEvents = eventsData.filter((event) =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <div className="container text-center">
        <h1 className="mt-4">EventSpot Lite</h1>
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="form-control mt-3 mb-4"
        />
         
        <EventList events={filteredEvents} onEventClick={handleEventClick} />
        {selectedEvent && (
          <EventModal event={selectedEvent} onClose={handleCloseModal} />
        )}
      </div>
    </div>
  );
}

export default App;
