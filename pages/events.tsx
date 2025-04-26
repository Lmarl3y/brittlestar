import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Event } from '../lib/db';
import EventCard from '../components/EventCard';

const EventsPage = () => {
  const [loading, setLoading] = useState(true);
  const [todayEvents, setTodayEvents] = useState<Event[]>([]);
  const [weekEvents, setWeekEvents] = useState<Event[]>([]);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch today's events
        const todayRes = await fetch('/api/events?type=today');
        const todayData = await todayRes.json();
        setTodayEvents(todayData.events);

        // Fetch this week's events
        const weekRes = await fetch('/api/events?type=week');
        const weekData = await weekRes.json();
        setWeekEvents(weekData.events);

        // Fetch upcoming events
        const upcomingRes = await fetch('/api/events?type=upcoming');
        const upcomingData = await upcomingRes.json();
        setUpcomingEvents(upcomingData.events);

        // Fetch past events
        const pastRes = await fetch('/api/events?type=past');
        const pastData = await pastRes.json();
        setPastEvents(pastData.events);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <Head>
        <title>Events | Brittlestar Wine Bar & Coffee House</title>
        <meta name="description" content="Check out upcoming events at Brittlestar Wine Bar & Coffee House in Morecambe. Live music, tastings, and more." />
      </Head>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="bg-wine-dark text-white py-16 md:py-24">
          <div className="container-custom text-center">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Events at Brittlestar
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl mx-auto opacity-90"
            >
              Join us for exciting events, from live music to wine tastings, there's always something happening at Brittlestar.
            </motion.p>
          </div>
        </section>

        {loading ? (
          <div className="container-custom py-20 text-center">
            <div className="spinner-border text-wine-red" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {/* Today's Events */}
            {todayEvents.length > 0 && (
              <section className="py-12 bg-cream">
                <div className="container-custom">
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-wine-red mb-2">Happening Today</h2>
                    <div className="w-24 h-1 bg-wine-red mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {todayEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* This Week's Events */}
            {weekEvents.length > 0 && (
              <section className="py-12 bg-white">
                <div className="container-custom">
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-wine-red mb-2">This Week</h2>
                    <div className="w-24 h-1 bg-wine-red mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {weekEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Upcoming Events */}
            {upcomingEvents.length > 0 && (
              <section className="py-12 bg-gray-50">
                <div className="container-custom">
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-wine-red mb-2">Upcoming Events</h2>
                    <div className="w-24 h-1 bg-wine-red mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingEvents.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Past Events */}
            {pastEvents.length > 0 && (
              <section className="py-12 bg-white">
                <div className="container-custom">
                  <div className="mb-8 text-center">
                    <h2 className="text-3xl font-bold text-wine-red mb-2">Past Events</h2>
                    <div className="w-24 h-1 bg-wine-red mx-auto"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {pastEvents.slice(0, 6).map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>

                  {pastEvents.length > 6 && (
                    <div className="text-center mt-8">
                      <button className="btn bg-wine-red text-white hover:bg-wine-dark">
                        Load More Past Events
                      </button>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* No Events Message */}
            {!loading && todayEvents.length === 0 && weekEvents.length === 0 && upcomingEvents.length === 0 && (
              <section className="py-20 bg-gray-50">
                <div className="container-custom text-center">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">No Upcoming Events</h2>
                  <p className="text-gray-600 mb-8">
                    Follow us on social media to stay updated about our latest events!
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href="https://facebook.com/brittlestarwinebar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wine-red hover:text-wine-dark"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://instagram.com/brittlestarwinebar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-wine-red hover:text-wine-dark"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default EventsPage; 