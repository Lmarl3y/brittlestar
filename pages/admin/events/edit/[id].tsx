import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import AdminLayout from '../../../../components/admin/AdminLayout';
import { Event } from '../../../../lib/db';
import Image from 'next/image';
import { format } from 'date-fns';

const EditEvent = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [event, setEvent] = useState<Event>({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    image_url: '',
    is_featured: false
  });

  useEffect(() => {
    if (!router.isReady) return;

    const fetchEvent = async () => {
      const token = localStorage.getItem('adminToken');
      if (!token) {
        router.push('/admin/login');
        return;
      }

      if (!id) return;

      try {
        const res = await fetch(`/api/events/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!res.ok) {
          if (res.status === 401) {
            localStorage.removeItem('adminToken');
            router.push('/admin/login');
            return;
          }
          throw new Error('Event not found');
        }
        
        const data = await res.json();
        setEvent(data.event);
        if (data.event.image_url) {
          setImagePreview(data.event.image_url);
        }
        setLoading(false);
      } catch (error) {
        setError('Failed to load event');
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id, router.isReady, router]);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);

    // Upload image
    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch('/api/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });
      
      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem('adminToken');
          router.push('/admin/login');
          return;
        }
        throw new Error('Failed to upload image');
      }
      
      const data = await res.json();
      setEvent(prev => ({ ...prev, image_url: data.url }));
    } catch (error) {
      setError('Failed to upload image');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    try {
      const token = localStorage.getItem('adminToken');
      const res = await fetch(`/api/events/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(event),
      });

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem('adminToken');
          router.push('/admin/login');
          return;
        }
        throw new Error('Failed to update event');
      }

      router.push('/admin/events');
    } catch (error) {
      setError('Failed to update event');
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout title="Edit Event">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-wine-red"></div>
        </div>
      </AdminLayout>
    );
  }

  if (error) {
    return (
      <AdminLayout title="Edit Event">
        <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4">
          {error}
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Edit Event">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="md:flex md:items-center md:justify-between mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Edit Event</h1>
          <button
            onClick={() => router.push('/admin/events')}
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Back to Events
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              required
              value={event.title}
              onChange={(e) => setEvent({ ...event, title: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-wine-red focus:border-wine-red"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              rows={4}
              required
              value={event.description}
              onChange={(e) => setEvent({ ...event, description: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-wine-red focus:border-wine-red"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Date
              </label>
              <input
                type="date"
                id="date"
                required
                value={event.date}
                onChange={(e) => setEvent({ ...event, date: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-wine-red focus:border-wine-red"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                Time
              </label>
              <input
                type="time"
                id="time"
                required
                value={event.time}
                onChange={(e) => setEvent({ ...event, time: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-wine-red focus:border-wine-red"
              />
            </div>
          </div>

          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              value={event.location}
              onChange={(e) => setEvent({ ...event, location: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-wine-red focus:border-wine-red"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Event Image</label>
            <div className="mt-2 flex items-center space-x-4">
              {imagePreview && (
                <div className="relative w-32 h-32">
                  <Image
                    src={imagePreview}
                    alt="Event preview"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              )}
              <label className="cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50">
                {imagePreview ? 'Change Image' : 'Upload Image'}
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="is_featured"
              checked={event.is_featured}
              onChange={(e) => setEvent({ ...event, is_featured: e.target.checked })}
              className="h-4 w-4 text-wine-red focus:ring-wine-red border-gray-300 rounded"
            />
            <label htmlFor="is_featured" className="ml-2 block text-sm text-gray-900">
              Featured Event
            </label>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={() => router.push('/admin/events')}
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-wine-red hover:bg-wine-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-wine-red"
            >
              {saving ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
};

export default EditEvent; 