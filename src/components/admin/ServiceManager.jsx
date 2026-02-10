'use client';

import { useState } from 'react';
import { HiPlus, HiPencil, HiTrash, HiXMark } from 'react-icons/hi2';

export default function ServiceManager({ services, onRefresh }) {
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    features: '',
    icon: 'HiOutlineSquare3Stack3D',
    order: 0,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const featuresArray = formData.features.split('\n').map(f => f.trim()).filter(Boolean);
    const data = { ...formData, features: featuresArray };

    try {
      const response = await fetch('/api/admin/services', {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingId ? { id: editingId, ...data } : data),
      });
      if (response.ok) {
        resetForm();
        onRefresh();
      }
    } catch (err) {
      console.error('Error saving service:', err);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this service?')) return;
    try {
      await fetch('/api/admin/services', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      onRefresh();
    } catch (err) {
      console.error('Error deleting service:', err);
    }
  }

  function resetForm() {
    setFormData({ title: '', description: '', features: '', icon: 'HiOutlineSquare3Stack3D', order: 0 });
    setIsCreating(false);
    setEditingId(null);
  }

  function startEdit(service) {
    setFormData({
      title: service.title,
      description: service.description,
      features: service.features.join('\n'),
      icon: service.icon || 'HiOutlineSquare3Stack3D',
      order: service.order || 0,
    });
    setEditingId(service.id);
    setIsCreating(true);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-dark-900">Services ({services.length})</h2>
        <button onClick={() => setIsCreating(true)} className="btn-primary text-sm">
          <HiPlus className="w-4 h-4" />
          Add Service
        </button>
      </div>

      {isCreating && (
        <div className="bg-white rounded-xl p-6 border border-dark-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-dark-900">
              {editingId ? 'Edit Service' : 'New Service'}
            </h3>
            <button onClick={resetForm} className="p-1 hover:bg-dark-50 rounded">
              <HiXMark className="w-5 h-5 text-dark-500" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">Title *</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">Description *</label>
              <textarea
                required
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">Icon</label>
              <select
                value={formData.icon}
                onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
              >
                <option value="HiOutlineCodeBracket">Code Bracket</option>
                <option value="HiOutlineRocketLaunch">Rocket Launch</option>
                <option value="HiOutlinePaintBrush">Paint Brush</option>
                <option value="HiOutlineDevicePhoneMobile">Mobile Device</option>
                <option value="HiOutlineMagnifyingGlass">Magnifying Glass</option>
                <option value="HiOutlineWrenchScrewdriver">Wrench</option>
                <option value="HiOutlineSquare3Stack3D">Stack</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">
                Features (one per line) *
              </label>
              <textarea
                required
                rows={5}
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm font-mono"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">Order</label>
              <input
                type="number"
                value={formData.order}
                onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
              />
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

      <div className="space-y-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white rounded-xl p-5 border border-dark-100 flex items-start justify-between"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-dark-900">{service.title}</h3>
              <p className="text-dark-600 text-sm mb-3">{service.description}</p>
              <ul className="space-y-1">
                {service.features?.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="text-dark-500 text-xs">✓ {feature}</li>
                ))}
                {service.features?.length > 3 && (
                  <li className="text-dark-400 text-xs">+ {service.features.length - 3} more</li>
                )}
              </ul>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => startEdit(service)}
                className="p-2 hover:bg-dark-50 rounded text-dark-600"
              >
                <HiPencil className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(service.id)}
                className="p-2 hover:bg-red-50 rounded text-red-600"
              >
                <HiTrash className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
