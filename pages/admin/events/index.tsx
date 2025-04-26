import React, { useEffect, useState } from 'react';
import AdminLayout from '../../../components/admin/AdminLayout';
import Link from 'next/link';
import { FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import { Event } from '../../../lib/db';

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  useEffect(() => {
    // Fetch all events
    const fetchEvents = async () => {
      try {
        const res = await fetch('/api/events');
        const data = await res.json();
        setEvents(data.events);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };
    
    fetchEvents();
  }, []);

  // Filter events based on search term
  const filteredEvents = events.filter((event) => 
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort events by date (soonest first)
  const sortedEvents = [...filteredEvents].sort((a, b) => {
    const dateA = new Date(a.date + 'T' + a.time);
    const dateB = new Date(b.date + 'T' + b.time);
    return dateA.getTime() - dateB.getTime();
  });

  // Handle event deletion
  const deleteEvent = async (id: number) => {
    try {
      // Get token from localStorage
      const token = localStorage.getItem('adminToken');
      
      const res = await fetch(`/api/events/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (res.ok) {
        // Remove event from state
        setEvents(events.filter(event => event.id !== id));
        setDeleteConfirm(null);
      } else {
        alert('Failed to delete event');
      }
    } catch (error) {
      console.error('Error deleting event:', error);
      alert('Error deleting event');
    }
  };

  return (
    <AdminLayout title="Manage Events">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="relative mb-4 md:mb-0 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search events..."
            className="pl-10 py-2 px-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-wine-red focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Link
          href="/admin/events/add"
          className="inline-flex items-center px-4 py-2 bg-wine-red text-white rounded-md hover:bg-wine-dark"
        >
          <FaPlus className="mr-2" />
          Add New Event
        </Link>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="spinner-border text-wine-red" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : sortedEvents.length > 0 ? (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sortedEvents.map((event) => (
                  <tr key={event.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {event.image_url && (
                          <div className="flex-shrink-0 h-10 w-10 mr-3">
                            <img
                              className="h-10 w-10 rounded-full object-cover"
                              src={event.image_url}
                              alt={event.title}
                            />
                          </div>
                        )}
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {event.title}
                          </div>
                          {event.is_featured && (
                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(event.date).toLocaleDateString()}
                      </div>
                      <div className="text-sm text-gray-500">{event.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{event.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <Link
                          href={`/admin/events/edit/${event.id}`}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <FaEdit size={18} />
                        </Link>
                        
                        {deleteConfirm === event.id ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-xs text-red-600">Confirm?</span>
                            <button
                              onClick={() => deleteEvent(event.id as number)}
                              className="text-red-600 hover:text-red-900"
                            >
                              Yes
                            </button>
                            <button
                              onClick={() => setDeleteConfirm(null)}
                              className="text-gray-600 hover:text-gray-900"
                            >
                              No
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteConfirm(event.id as number)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FaTrash size={18} />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
          <p className="text-gray-500 mb-4">No events found.</p>
          <Link
            href="/admin/events/add"
            className="inline-flex items-center px-4 py-2 bg-wine-red text-white rounded-md hover:bg-wine-dark"
          >
            <FaPlus className="mr-2" />
            Add Your First Event
          </Link>
        </div>
      )}
    </AdminLayout>
  );
};

export default Events; 