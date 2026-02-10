'use client';

import { useState } from 'react';
import { HiPlus, HiPencil, HiTrash, HiXMark } from 'react-icons/hi2';

export default function ProjectManager({ projects, onRefresh }) {
  const [isCreating, setIsCreating] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    category: '',
    description: '',
    challenge: '',
    solution: '',
    results: '',
    technologies: '',
    image: '',
    order: 0,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const technologiesArray = formData.technologies.split(',').map(t => t.trim()).filter(Boolean);
    const resultsArray = formData.results.split('\n').map(r => r.trim()).filter(Boolean);
    const data = {
      ...formData,
      technologies: technologiesArray,
      results: resultsArray,
    };

    try {
      const response = await fetch('/api/admin/projects', {
        method: editingId ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingId ? { id: editingId, ...data } : data),
      });
      if (response.ok) {
        resetForm();
        onRefresh();
      }
    } catch (err) {
      console.error('Error saving project:', err);
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this project?')) return;
    try {
      await fetch('/api/admin/projects', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      onRefresh();
    } catch (err) {
      console.error('Error deleting project:', err);
    }
  }

  function resetForm() {
    setFormData({
      title: '',
      slug: '',
      category: '',
      description: '',
      challenge: '',
      solution: '',
      results: '',
      technologies: '',
      image: '',
      order: 0,
    });
    setIsCreating(false);
    setEditingId(null);
  }

  function startEdit(project) {
    setFormData({
      title: project.title,
      slug: project.slug,
      category: project.category,
      description: project.description,
      challenge: project.challenge || '',
      solution: project.solution || '',
      results: project.results?.join('\n') || '',
      technologies: project.technologies?.join(', ') || '',
      image: project.image || '',
      order: project.order || 0,
    });
    setEditingId(project.id);
    setIsCreating(true);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-dark-900">Portfolio Projects ({projects.length})</h2>
        <button onClick={() => setIsCreating(true)} className="btn-primary text-sm">
          <HiPlus className="w-4 h-4" />
          Add Project
        </button>
      </div>

      {isCreating && (
        <div className="bg-white rounded-xl p-6 border border-dark-200 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-dark-900">
              {editingId ? 'Edit Project' : 'New Project'}
            </h3>
            <button onClick={resetForm} className="p-1 hover:bg-dark-50 rounded">
              <HiXMark className="w-5 h-5 text-dark-500" />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
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
                <label className="block text-sm font-medium text-dark-900 mb-1">Slug *</label>
                <input
                  type="text"
                  required
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
                  placeholder="my-project-slug"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-dark-900 mb-1">Category *</label>
                <input
                  type="text"
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
                  placeholder="Web Design, Mobile App, etc."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-dark-900 mb-1">Image URL</label>
                <input
                  type="url"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
                  placeholder="https://images.unsplash.com/..."
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
              <label className="block text-sm font-medium text-dark-900 mb-1">Challenge</label>
              <textarea
                rows={3}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">Solution</label>
              <textarea
                rows={3}
                value={formData.solution}
                onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">
                Results (one per line)
              </label>
              <textarea
                rows={3}
                value={formData.results}
                onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                placeholder="50% increase in conversions&#10;10,000+ downloads in first month"
                className="w-full px-3 py-2 rounded-lg border border-dark-200 text-sm font-mono"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-dark-900 mb-1">
                Technologies (comma-separated)
              </label>
              <input
                type="text"
                value={formData.technologies}
                onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
                placeholder="React, Node.js, MongoDB"
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

      <div className="grid sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl p-5 border border-dark-100"
          >
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
            )}
            <span className="inline-block px-2 py-1 bg-brand-50 text-brand-600 text-xs rounded mb-2">
              {project.category}
            </span>
            <h3 className="font-semibold text-dark-900">{project.title}</h3>
            <p className="text-dark-600 text-sm mb-3 line-clamp-2">{project.description}</p>
            <div className="flex gap-2 mb-3">
              {project.technologies?.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 bg-dark-50 text-dark-600 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => startEdit(project)}
                className="p-2 hover:bg-dark-50 rounded text-dark-600"
              >
                <HiPencil className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDelete(project.id)}
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
