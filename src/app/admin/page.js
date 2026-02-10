'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuth } from '@/lib/auth-context';
import { getLeads, updateLeadStatus, deleteLead } from '@/lib/firestore';
import TeamManager from '@/components/admin/TeamManager';
import TestimonialManager from '@/components/admin/TestimonialManager';
import ServiceManager from '@/components/admin/ServiceManager';
import ProjectManager from '@/components/admin/ProjectManager';
import PricingManager from '@/components/admin/PricingManager';
import {
  HiOutlineInbox,
  HiOutlineDocumentText,
  HiOutlineFolderOpen,
  HiArrowRightOnRectangle,
  HiEnvelope,
  HiUsers,
  HiSquares2X2,
  HiStar,
  HiCurrencyDollar,
  HiTrash,
} from 'react-icons/hi2';

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [leads, setLeads] = useState([]);
  const [team, setTeam] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const [activeTab, setActiveTab] = useState('leads');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetchAllData();
    }
  }, [user]);

  async function fetchAllData() {
    setLoadingData(true);
    try {
      const [leadsData, teamData, servicesData, projectsData, testimonialsData, pricingData] =
        await Promise.all([
          fetch('/api/admin/leads').then((r) => r.ok ? r.json() : []).catch(() => []),
          fetch('/api/admin/team').then((r) => r.ok ? r.json() : []).catch(() => []),
          fetch('/api/admin/services').then((r) => r.ok ? r.json() : []).catch(() => []),
          fetch('/api/admin/projects').then((r) => r.ok ? r.json() : []).catch(() => []),
          fetch('/api/admin/testimonials').then((r) => r.ok ? r.json() : []).catch(() => []),
          fetch('/api/admin/pricing').then((r) => r.ok ? r.json() : []).catch(() => []),
        ]);
      setLeads(Array.isArray(leadsData) ? leadsData : []);
      setTeam(Array.isArray(teamData) ? teamData : []);
      setServices(Array.isArray(servicesData) ? servicesData : []);
      setProjects(Array.isArray(projectsData) ? projectsData : []);
      setTestimonials(Array.isArray(testimonialsData) ? testimonialsData : []);
      setPricing(Array.isArray(pricingData) ? pricingData : []);
    } catch (err) {
      console.error('Error fetching data:', err);
    } finally {
      setLoadingData(false);
    }
  }

  async function handleStatusChange(id, newStatus) {
    try {
      await updateLeadStatus(id, newStatus);
      setLeads((prev) =>
        prev.map((lead) => (lead.id === id ? { ...lead, status: newStatus } : lead))
      );
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  }

  async function handleDeleteLead(id) {
    if (!confirm('Delete this lead?')) return;
    try {
      await deleteLead(id);
      fetchAllData();
    } catch (err) {
      console.error('Error deleting lead:', err);
    }
  }

  async function handleSignOut() {
    await signOut(auth);
    router.push('/admin/login');
  }

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark-50">
        <div className="w-8 h-8 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Admin Header */}
      <div className="bg-white border-b border-dark-100 px-4 sm:px-6 lg:px-8 py-4">
        <div className="container-max flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-dark-900">Admin Dashboard</h1>
            <p className="text-dark-500 text-sm">{user.email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-dark-600 hover:text-dark-900 hover:bg-dark-50 transition-colors"
          >
            <HiArrowRightOnRectangle className="w-5 h-5" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-dark-100 px-4 sm:px-6 lg:px-8">
        <div className="container-max flex gap-1 overflow-x-auto">
          {[
            { id: 'leads', label: 'Leads', icon: HiOutlineInbox },
            { id: 'team', label: 'Team', icon: HiUsers },
            { id: 'services', label: 'Services', icon: HiSquares2X2 },
            { id: 'projects', label: 'Portfolio', icon: HiOutlineFolderOpen },
            { id: 'testimonials', label: 'Testimonials', icon: HiStar },
            { id: 'pricing', label: 'Pricing', icon: HiCurrencyDollar },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`inline-flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-brand-600 text-brand-600'
                  : 'border-transparent text-dark-500 hover:text-dark-900'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container-max px-4 sm:px-6 lg:px-8 py-8">
        {loadingData ? (
          <div className="flex justify-center py-12">
            <div className="w-6 h-6 border-3 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
          </div>
        ) : (
          <>
            {activeTab === 'leads' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-dark-900">
                    Contact Leads ({leads.length})
                  </h2>
                </div>

                {leads.length === 0 ? (
                  <div className="bg-white rounded-2xl p-12 border border-dark-100 text-center">
                    <HiEnvelope className="w-12 h-12 text-dark-300 mx-auto mb-4" />
                    <p className="text-dark-500">No leads yet.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {leads.map((lead) => (
                      <div
                        key={lead.id}
                        className="bg-white rounded-xl p-5 sm:p-6 border border-dark-100 hover:shadow-md transition-shadow"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-semibold text-dark-900">{lead.name}</h3>
                              <span
                                className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                                  lead.status === 'new'
                                    ? 'bg-blue-50 text-blue-700'
                                    : lead.status === 'contacted'
                                    ? 'bg-yellow-50 text-yellow-700'
                                    : 'bg-green-50 text-green-700'
                                }`}
                              >
                                {lead.status}
                              </span>
                            </div>
                            <p className="text-dark-500 text-sm mb-1">{lead.email}</p>
                            {lead.company && <p className="text-dark-500 text-sm mb-1">{lead.company}</p>}
                            <p className="text-dark-700 text-sm">{lead.message}</p>
                          </div>
                          <div className="flex gap-2 shrink-0">
                            {['new', 'contacted', 'closed'].map((s) => (
                              <button
                                key={s}
                                onClick={() => handleStatusChange(lead.id, s)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                                  lead.status === s
                                    ? 'bg-brand-600 text-white'
                                    : 'bg-dark-50 text-dark-600 hover:bg-dark-100'
                                }`}
                              >
                                {s}
                              </button>
                            ))}
                            <button
                              onClick={() => handleDeleteLead(lead.id)}
                              className="p-2 hover:bg-red-50 rounded text-red-600"
                            >
                              <HiTrash className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'team' && <TeamManager team={team} onRefresh={fetchAllData} />}

            {activeTab === 'services' && (
              <ServiceManager services={services} onRefresh={fetchAllData} />
            )}

            {activeTab === 'projects' && (
              <ProjectManager projects={projects} onRefresh={fetchAllData} />
            )}

            {activeTab === 'testimonials' && (
              <TestimonialManager testimonials={testimonials} onRefresh={fetchAllData} />
            )}

            {activeTab === 'pricing' && (
              <PricingManager packages={pricing} onRefresh={fetchAllData} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
