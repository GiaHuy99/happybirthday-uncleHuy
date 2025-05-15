const Timeline = () => {
  const timelineEvents = [
    {
      time: "6:00 PM",
      title: "Guest Arrival",
      description: "Welcome reception with refreshments"
    },
    {
      time: "6:30 PM",
      title: "Grand Entrance",
      description: "Isabella makes her first appearance as a quinceañera"
    },
    {
      time: "7:00 PM",
      title: "Father-Daughter Dance",
      description: "A special moment between Isabella and her father"
    },
    {
      time: "7:30 PM",
      title: "Dinner Service",
      description: "Elegant three-course meal"
    },
    {
      time: "8:30 PM",
      title: "Changing of Shoes Ceremony",
      description: "Traditional ceremony symbolizing the transition to womanhood"
    },
    {
      time: "9:00 PM",
      title: "Waltz Performance",
      description: "Isabella and her court perform a choreographed waltz"
    },
    {
      time: "10:00 PM",
      title: "Cake Cutting",
      description: "Celebratory toast and cutting of the quinceañera cake"
    },
    {
      time: "10:30 PM - 12:00 AM",
      title: "Dance Party",
      description: "Open dance floor with DJ and special performances"
    }
  ];

  return (
    <section id="timeline" className="section bg-rose-50 relative overflow-hidden">
      <h2 className="section-title" data-aos="fade-up">Event Timeline</h2>
      
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-gray-600 mb-12" data-aos="fade-up" data-aos-delay="200">
          A schedule of the celebration to help you plan your evening.
        </p>
        
        <div className="timeline-container">
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className="timeline-item"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={200 + (index * 100)}
            >
              <div className="timeline-item-dot"></div>
              <div className="timeline-item-content">
                <h3 className="font-display text-xl text-rose-700">{event.title}</h3>
                <span className="text-sm font-medium text-rose-500 block mb-2">{event.time}</span>
                <p className="text-gray-600">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;