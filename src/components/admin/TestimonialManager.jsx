'use client';

import { useState } from 'react';
import { HiPlus, HiPencil, HiTrash, HiXMark, HiStar } from 'react-icons/hi2';

export default function TestimonialManager({ testimonials, onRefresh }) {
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    text: '',
    author: '',
    role: '',
    rating: 5,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch('/api/admin/testimonials', {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingId ? { id: editingId, ...formData } : formData),
      });
      if (response.ok) {
        resetForm();
        onRefresh();
      }
    } catch (err) {
      console.error('Error saving testimonial:', err);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this testimonial?')) return;
    try {
      await fetch('/api/admin/testimonials', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      onRefresh();
    } catch (err) {
      console.error('Error deleting testimonial:', err);
    }
  }

  function resetForm() {
    setFormData({ text: '', author: '', role: '', rating: 5 });
    setIsCreating(false);
    setEditingId(null);
  }

  function startEdit(testimonial) {
    setFormData({
      text: testimonial.text,
      author: testimonial.author,
      role: testimonial.role,
      rating: testimonial.rating || 5,
    });
    setEditingId(testimonial.id);
    setIsCreating(true);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-dark-900">Testimonials ({testimonials.length})</h2>
        <button onClick={() => setIsCreating(true)} className="btn-primary text-sm">
          <HiPlus className="w-4 h-4" />
          Add Testimonial
        </button>
      </div>

      {isCreating && (
        <div className="bg-white rounded-xl p-6 border border-dark-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-dark-900">
              {editingId ? 'Edit Testimonial' : 'New Testimonial'}
            </h3>
            <button onClick={resetForm} className="p-1 hover:bg-dark-50 rounded">
              <HiXMark className="w-5 h-5 text-dark-500" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">Testimonial *</label>
              <textarea
                required
                rows={4}
                value={formData.text}
                onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
                placeholder="What the client said..."
              />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark-900 mb-1">Author *</label>
                <input
                  type="text"
                  required
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-900 mb-1">Role *</label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="CEO, Company Name"
                  className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">Rating</label>
              <select
                value={formData.rating}
                onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) || 5 })}
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
              >
                {[1, 2, 3, 4, 5].map(n => (
                  <option key={n} value={n}>{n} Star{n > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
            <div className="flex gap-2">
              <button type="submit" className="btn-primary text-sm">
                {editingId ? 'Update' : 'Create'}
              </button>
              <button type="button" onClick={resetForm} className="btn-outline text-sm">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-xl p-5 border border-dark-100 relative"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
                <HiStar key={i} className="w-4 h-4 text-accent-gold" />
              ))}
            </div>
            <p className="text-dark-700 text-sm mb-4 line-clamp-3">&ldquo;{testimonial.text}&rdquo;</p>
            <div className="mb-2">
              <p className="font-semibold text-dark-900 text-sm">{testimonial.author}</p>
              <p className="text-dark-500 text-xs">{testimonial.role}</p>
            </div>
            <div className="flex gap-2 mt-3">
              <button
                onClick={() => startEdit(testimonial)}
                className="p-1.5 hover:bg-dark-50 rounded text-dark-600 text-xs"
              >
                <HiPencil className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleDelete(testimonial.id)}
                className="p-1.5 hover:bg-red-50 rounded text-red-600 text-xs"
              >
                <HiTrash className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
