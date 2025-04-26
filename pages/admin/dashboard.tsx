import React, { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { FaCalendarAlt, FaCalendarCheck, FaCalendarPlus } from 'react-icons/fa';
import Link from 'next/link';
import { Event } from '../../lib/db';
import { ReactNode } from 'react';

// Stats card component
interface StatCardProps {
  title: string;
  value: number;
  icon: ReactNode;
  bgColor: string;
}

const StatCard = ({ title, value, icon, bgColor }: StatCardProps) => (
  <div className={`${bgColor} rounded-lg shadow-md p-6`}>
    <div className="flex items-center">
      <div className="p-3 rounded-full bg-white bg-opacity-30 text-white mr-4">
        {icon}
      </div>
      <div>
        <p className="text-white text-sm uppercase font-medium">{title}</p>
        <p className="text-white text-2xl font-semibold">{value}</p>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalEvents: 0,
    upcomingEvents: 0,
    todayEvents: 0
  });
  const [loading, setLoading] = useState(true);
  const [recentEvents, setRecentEvents] = useState<Event[]>([]);

  useEffect(() => {
    // Fetch event stats
    const fetchStats = async () => {
      try {
        // Fetch all events
        const allRes = await fetch('/api/events');
        const allData = await allRes.json();
        
        // Fetch upcoming events
        const upcomingRes = await fetch('/api/events?type=upcoming');
        const upcomingData = await upcomingRes.json();
        
        // Fetch today's events
        const todayRes = await fetch('/api/events?type=today');
        const todayData = await todayRes.json();
        
        setStats({
          totalEvents: allData.events.length,
          upcomingEvents: upcomingData.events.length,
          todayEvents: todayData.events.length
        });
        
        // Set recent events (limit to 5)
        setRecentEvents(allData.events.slice(0, 5));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stats:', error);
        setLoading(false);
      }
    };
    
    fetchStats();
  }, []);

  return (
    <AdminLayout title="Dashboard">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="spinner-border text-wine-red" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {/* Stats cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard
              title="Total Events"
              value={stats.totalEvents}
              icon={<FaCalendarAlt size={24} />}
              bgColor="bg-wine-red"
            />
            <StatCard
              title="Upcoming Events"
              value={stats.upcomingEvents}
              icon={<FaCalendarCheck size={24} />}
              bgColor="bg-green-600"
            />
            <StatCard
              title="Today's Events"
              value={stats.todayEvents}
              icon={<FaCalendarPlus size={24} />}
              bgColor="bg-blue-600"
            />
          </div>
          
          {/* Quick actions */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/admin/events/add"
                className="inline-flex items-center px-4 py-2 bg-wine-red text-white rounded-md hover:bg-wine-dark"
              >
                <FaCalendarPlus className="mr-2" />
                Add New Event
              </Link>
              <Link
                href="/admin/events"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
              >
                <FaCalendarAlt className="mr-2" />
                Manage Events
              </Link>
            </div>
          </div>
          
          {/* Recent events */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-medium text-gray-900">Recent Events</h2>
            </div>
            <div className="divide-y divide-gray-200">
              {recentEvents.length > 0 ? (
                recentEvents.map((event) => (
                  <div key={event.id} className="px-6 py-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                        <p className="text-sm text-gray-500">
                          {new Date(event.date).toLocaleDateString()} at {event.time}
                        </p>
                        <p className="text-sm text-gray-600 mt-1">{event.location}</p>
                      </div>
                      <Link
                        href={`/admin/events/edit/${event.id}`}
                        className="px-3 py-1 bg-wine-red text-white text-sm rounded hover:bg-wine-dark"
                      >
                        Edit
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="px-6 py-4 text-center text-gray-500">
                  No events found. Add some events to get started.
                </div>
              )}
            </div>
            {recentEvents.length > 0 && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <Link
                  href="/admin/events"
                  className="text-wine-red hover:text-wine-dark font-medium"
                >
                  View All Events →
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </AdminLayout>
  );
};

export default Dashboard; 