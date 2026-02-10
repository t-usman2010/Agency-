'use client';

import { useState } from 'react';
import { HiPlus, HiPencil, HiTrash, HiXMark } from 'react-icons/hi2';

export default function PricingManager({ packages, onRefresh }) {
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    period: '/month',
    description: '',
    features: '',
    popular: false,
    order: 0,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const featuresArray = formData.features.split('\n').map(f => f.trim()).filter(Boolean);
    const data = { ...formData, features: featuresArray };

    try {
      const response = await fetch('/api/admin/pricing', {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingId ? { id: editingId, ...data } : data),
      });
      if (response.ok) {
        resetForm();
        onRefresh();
      }
    } catch (err) {
      console.error('Error saving pricing package:', err);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this pricing package?')) return;
    try {
      await fetch('/api/admin/pricing', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      onRefresh();
    } catch (err) {
      console.error('Error deleting pricing package:', err);
    }
  }

  function resetForm() {
    setFormData({
      name: '',
      price: '',
      period: '/month',
      description: '',
      features: '',
      popular: false,
      order: 0,
    });
    setIsCreating(false);
    setEditingId(null);
  }

  function startEdit(pkg) {
    setFormData({
      name: pkg.name,
      price: pkg.price,
      period: pkg.period || '/month',
      description: pkg.description,
      features: pkg.features.join('\n'),
      popular: pkg.popular || false,
      order: pkg.order || 0,
    });
    setEditingId(pkg.id);
    setIsCreating(true);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-dark-900">Pricing Packages ({packages.length})</h2>
        <button onClick={() => setIsCreating(true)} className="btn-primary text-sm">
          <HiPlus className="w-4 h-4" />
          Add Package
        </button>
      </div>

      {isCreating && (
        <div className="bg-white rounded-xl p-6 border border-dark-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-dark-900">
              {editingId ? 'Edit Package' : 'New Package'}
            </h3>
            <button onClick={resetForm} className="p-1 hover:bg-dark-50 rounded">
              <HiXMark className="w-5 h-5 text-dark-500" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark-900 mb-1">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-900 mb-1">Price *</label>
                <input
                  type="text"
                  required
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  placeholder="$999"
                  className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark-900 mb-1">Period</label>
                <input
                  type="text"
                  value={formData.period}
                  onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                  placeholder="/month or /project"
                  className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
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
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">Description *</label>
              <textarea
                required
                rows={2}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">
                Features (one per line) *
              </label>
              <textarea
                required
                rows={6}
                value={formData.features}
                onChange={(e) => setFormData({ ...formData, features: e.target.value })}
                placeholder="Up to 5 pages&#10;Responsive design&#10;Basic SEO"
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm font-mono"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="popular"
                checked={formData.popular}
                onChange={(e) => setFormData({ ...formData, popular: e.target.checked })}
                className="w-4 h-4 text-brand-600 rounded"
              />
              <label htmlFor="popular" className="text-sm text-dark-900">
                Popular (featured badge)
              </label>
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

      <div className="grid sm:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-white rounded-xl p-5 border ${
              pkg.popular ? 'border-brand-400 ring-2 ring-brand-100' : 'border-dark-100'
            } relative`}
          >
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-brand-600 text-white text-xs rounded-full">
                Popular
              </span>
            )}
            <h3 className="font-semibold text-dark-900 mb-1">{pkg.name}</h3>
            <div className="mb-2">
              <span className="text-3xl font-bold text-dark-900">{pkg.price}</span>
              <span className="text-dark-500 text-sm">{pkg.period}</span>
            </div>
            <p className="text-dark-600 text-sm mb-4">{pkg.description}</p>
            <ul className="space-y-1 mb-4">
              {pkg.features?.slice(0, 3).map((feature, idx) => (
                <li key={idx} className="text-dark-600 text-xs">✓ {feature}</li>
              ))}
              {pkg.features?.length > 3 && (
                <li className="text-dark-400 text-xs">+ {pkg.features.length - 3} more</li>
              )}
            </ul>
            <div className="flex gap-2">
              <button
                onClick={() => startEdit(pkg)}
                className="p-1.5 hover:bg-dark-50 rounded text-dark-600"
              >
                <HiPencil className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleDelete(pkg.id)}
                className="p-1.5 hover:bg-red-50 rounded text-red-600"
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
