import { adminDb } from './firebase-admin';
import { FieldValue } from 'firebase-admin/firestore';

// Helper to convert Firestore Timestamps to serializable format
function serializeDoc(doc) {
  const data = doc.data();
  const serialized = { id: doc.id };
  for (const [key, value] of Object.entries(data)) {
    if (value && typeof value.toDate === 'function') {
      serialized[key] = value.toDate().toISOString();
    } else {
      serialized[key] = value;
    }
  }
  return serialized;
}

// ─── Contact / Leads ───────────────────────────────────────
export async function submitContactForm(data) {
  const docRef = await adminDb.collection('leads').add({
    ...data,
    status: 'new',
    createdAt: FieldValue.serverTimestamp(),
  });
  return docRef.id;
}

export async function getLeads() {
  try {
    const snapshot = await adminDb.collection('leads').orderBy('createdAt', 'desc').get();
    return snapshot.docs.map(serializeDoc);
  } catch (error) {
    console.error('Error fetching leads:', error);
    try {
      const snapshot = await adminDb.collection('leads').get();
      return snapshot.docs.map(serializeDoc);
    } catch (err) {
      console.error('Error fetching leads without order:', err);
      return [];
    }
  }
}

export async function updateLeadStatus(id, status) {
  await adminDb.collection('leads').doc(id).update({ status });
}

export async function deleteLead(id) {
  await adminDb.collection('leads').doc(id).delete();
}

// ─── Blog Posts ────────────────────────────────────────────
export async function getBlogPosts(count) {
  let ref = adminDb.collection('posts').orderBy('publishedAt', 'desc');
  if (count) ref = ref.limit(count);
  const snapshot = await ref.get();
  return snapshot.docs.map(serializeDoc);
}

export async function getBlogPostBySlug(slug) {
  const snapshot = await adminDb.collection('posts').where('slug', '==', slug).limit(1).get();
  if (snapshot.empty) return null;
  return serializeDoc(snapshot.docs[0]);
}

export async function createBlogPost(data) {
  const docRef = await adminDb.collection('posts').add({
    ...data,
    publishedAt: FieldValue.serverTimestamp(),
    createdAt: FieldValue.serverTimestamp(),
  });
  return docRef.id;
}

export async function updateBlogPost(id, data) {
  await adminDb.collection('posts').doc(id).update({ ...data, updatedAt: FieldValue.serverTimestamp() });
}

export async function deleteBlogPost(id) {
  await adminDb.collection('posts').doc(id).delete();
}

// ─── Portfolio Projects ────────────────────────────────────
export async function getPortfolioProjects() {
  try {
    const snapshot = await adminDb.collection('projects').orderBy('order', 'asc').get();
    return snapshot.docs.map(serializeDoc);
  } catch (error) {
    console.warn('Error fetching projects with order:', error.message);
    try {
      const snapshot = await adminDb.collection('projects').get();
      return snapshot.docs.map(serializeDoc);
    } catch (err) {
      return [];
    }
  }
}

export async function getProjectBySlug(slug) {
  const snapshot = await adminDb.collection('projects').where('slug', '==', slug).limit(1).get();
  if (snapshot.empty) return null;
  return serializeDoc(snapshot.docs[0]);
}

export async function createProject(data) {
  const docRef = await adminDb.collection('projects').add({
    ...data,
    createdAt: FieldValue.serverTimestamp(),
  });
  return docRef.id;
}

export async function updateProject(id, data) {
  await adminDb.collection('projects').doc(id).update(data);
}

export async function deleteProject(id) {
  await adminDb.collection('projects').doc(id).delete();
}

// ─── Team Members ──────────────────────────────────────────
export async function getTeamMembers() {
  try {
    const snapshot = await adminDb.collection('team').orderBy('order', 'asc').get();
    return snapshot.docs.map(serializeDoc);
  } catch (error) {
    console.error('Error fetching team:', error);
    try {
      const snapshot = await adminDb.collection('team').get();
      return snapshot.docs.map(serializeDoc);
    } catch (err) {
      return [];
    }
  }
}

export async function createTeamMember(data) {
  const docRef = await adminDb.collection('team').add({
    ...data,
    createdAt: FieldValue.serverTimestamp(),
  });
  return docRef.id;
}

export async function updateTeamMember(id, data) {
  await adminDb.collection('team').doc(id).update(data);
}

export async function deleteTeamMember(id) {
  await adminDb.collection('team').doc(id).delete();
}

// ─── Services ──────────────────────────────────────────────
export async function getServices() {
  try {
    const snapshot = await adminDb.collection('services').orderBy('order', 'asc').get();
    return snapshot.docs.map(serializeDoc);
  } catch (error) {
    console.warn('Error fetching services with order:', error.message);
    try {
      const snapshot = await adminDb.collection('services').get();
      return snapshot.docs.map(serializeDoc);
    } catch (err) {
      return [];
    }
  }
}

export async function createService(data) {
  const docRef = await adminDb.collection('services').add({
    ...data,
    createdAt: FieldValue.serverTimestamp(),
  });
  return docRef.id;
}

export async function updateService(id, data) {
  await adminDb.collection('services').doc(id).update(data);
}

export async function deleteService(id) {
  await adminDb.collection('services').doc(id).delete();
}

// ─── Testimonials ──────────────────────────────────────────
export async function getTestimonials() {
  try {
    const snapshot = await adminDb.collection('testimonials').orderBy('createdAt', 'desc').get();
    return snapshot.docs.map(serializeDoc);
  } catch (error) {
    console.warn('Error fetching testimonials with order:', error.message);
    try {
      const snapshot = await adminDb.collection('testimonials').get();
      return snapshot.docs.map(serializeDoc);
    } catch (err) {
      return [];
    }
  }
}

export async function createTestimonial(data) {
  const docRef = await adminDb.collection('testimonials').add({
    ...data,
    createdAt: FieldValue.serverTimestamp(),
  });
  return docRef.id;
}

export async function updateTestimonial(id, data) {
  await adminDb.collection('testimonials').doc(id).update(data);
}

export async function deleteTestimonial(id) {
  await adminDb.collection('testimonials').doc(id).delete();
}

// ─── Pricing Packages ──────────────────────────────────────
export async function getPricingPackages() {
  try {
    const snapshot = await adminDb.collection('pricing').orderBy('order', 'asc').get();
    return snapshot.docs.map(serializeDoc);
  } catch (error) {
    console.warn('Error fetching pricing with order:', error.message);
    try {
      const snapshot = await adminDb.collection('pricing').get();
      return snapshot.docs.map(serializeDoc);
    } catch (err) {
      return [];
    }
  }
}

export async function createPricingPackage(data) {
  const docRef = await adminDb.collection('pricing').add({
    ...data,
    createdAt: FieldValue.serverTimestamp(),
  });
  return docRef.id;
}

export async function updatePricingPackage(id, data) {
  await adminDb.collection('pricing').doc(id).update(data);
}

export async function deletePricingPackage(id) {
  await adminDb.collection('pricing').doc(id).delete();
}

// ─── Settings (Agency Info, etc.) ──────────────────────────
export async function getSettings() {
  const snapshot = await adminDb.collection('settings').get();
  const settings = {};
  snapshot.docs.forEach(d => {
    settings[d.id] = d.data().value;
  });
  return settings;
}

export async function updateSetting(key, value) {
  await adminDb.collection('settings').doc(key).update({ value, updatedAt: FieldValue.serverTimestamp() });
}

export async function createSetting(key, value) {
  await adminDb.collection('settings').add({ key, value, createdAt: FieldValue.serverTimestamp() });
}
