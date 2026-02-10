'use client';

import { useState } from 'react';
import { HiPlus, HiPencil, HiTrash, HiXMark } from 'react-icons/hi2';

export default function TeamManager({ team, onRefresh }) {
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    skills: '',
    order: 0,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const skillsArray = formData.skills.split(',').map(s => s.trim()).filter(Boolean);
    const data = { ...formData, skills: skillsArray };

    try {
      const response = await fetch('/api/admin/team', {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingId ? { id: editingId, ...data } : data),
      });
      if (response.ok) {
        resetForm();
        onRefresh();
      }
    } catch (err) {
      console.error('Error saving team member:', err);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this team member?')) return;
    try {
      await fetch('/api/admin/team', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      onRefresh();
    } catch (err) {
      console.error('Error deleting team member:', err);
    }
  }

  function resetForm() {
    setFormData({ name: '', role: '', bio: '', skills: '', order: 0 });
    setIsCreating(false);
    setEditingId(null);
  }

  function startEdit(member) {
    setFormData({
      name: member.name,
      role: member.role,
      bio: member.bio,
      skills: member.skills.join(', '),
      order: member.order || 0,
    });
    setEditingId(member.id);
    setIsCreating(true);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-dark-900">Team Members ({team.length})</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="btn-primary text-sm"
        >
          <HiPlus className="w-4 h-4" />
          Add Member
        </button>
      </div>

      {isCreating && (
        <div className="bg-white rounded-xl p-6 border border-dark-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-dark-900">
              {editingId ? 'Edit Member' : 'New Member'}
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
                <label className="block text-sm font-medium text-dark-900 mb-1">Role *</label>
                <input
                  type="text"
                  required
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">Bio *</label>
              <textarea
                required
                rows={3}
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">
                Skills (comma-separated) *
              </label>
              <input
                type="text"
                required
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                placeholder="React, Node.js, TypeScript"
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
        {team.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-xl p-5 border border-dark-100 flex items-start justify-between"
          >
            <div className="flex-1">
              <h3 className="font-semibold text-dark-900">{member.name}</h3>
              <p className="text-brand-600 text-sm mb-2">{member.role}</p>
              <p className="text-dark-600 text-sm mb-2">{member.bio}</p>
              <div className="flex flex-wrap gap-2">
                {member.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 bg-dark-50 text-dark-600 text-xs rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => startEdit(member)}
                className="p-2 hover:bg-dark-50 rounded text-dark-600"
              >
                <HiPencil className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(member.id)}
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
