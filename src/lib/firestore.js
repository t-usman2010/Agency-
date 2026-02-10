import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  orderBy,
  limit,
  where,
  serverTimestamp,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from './firebase';

function ensureDb() {
  if (!db) throw new Error('Firebase is not configured. Please add your Firebase credentials to .env.local');
  return db;
}

// ─── Contact / Leads ───────────────────────────────────────
export async function submitContactForm(data) {
  const docRef = await addDoc(collection(ensureDb(), 'leads'), {
    ...data,
    status: 'new',
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getLeads() {
  try {
    const q = query(collection(ensureDb(), 'leads'), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
  } catch (error) {
    console.error('Error fetching leads:', error);
    // If orderBy fails (no index), try without ordering
    try {
      const snapshot = await getDocs(collection(ensureDb(), 'leads'));
      return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
    } catch (err) {
      console.error('Error fetching leads without order:', err);
      return [];
    }
  }
}

export async function updateLeadStatus(id, status) {
  await updateDoc(doc(ensureDb(), 'leads', id), { status });
}

export async function deleteLead(id) {
  await deleteDoc(doc(ensureDb(), 'leads', id));
}

// ─── Blog Posts ────────────────────────────────────────────
export async function getBlogPosts(count) {
  let q = query(collection(ensureDb(), 'posts'), orderBy('publishedAt', 'desc'));
  if (count) q = query(q, limit(count));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getBlogPostBySlug(slug) {
  const q = query(collection(ensureDb(), 'posts'), where('slug', '==', slug), limit(1));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
}

export async function createBlogPost(data) {
  const docRef = await addDoc(collection(ensureDb(), 'posts'), {
    ...data,
    publishedAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateBlogPost(id, data) {
  await updateDoc(doc(ensureDb(), 'posts', id), { ...data, updatedAt: serverTimestamp() });
}

export async function deleteBlogPost(id) {
  await deleteDoc(doc(ensureDb(), 'posts', id));
}

// ─── Portfolio Projects ────────────────────────────────────
export async function getPortfolioProjects() {
  const q = query(collection(ensureDb(), 'projects'), orderBy('order', 'asc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getProjectBySlug(slug) {
  const q = query(collection(ensureDb(), 'projects'), where('slug', '==', slug), limit(1));
  const snapshot = await getDocs(q);
  if (snapshot.empty) return null;
  return { id: snapshot.docs[0].id, ...snapshot.docs[0].data() };
}

export async function createProject(data) {
  const docRef = await addDoc(collection(ensureDb(), 'projects'), {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function updateProject(id, data) {
  await updateDoc(doc(ensureDb(), 'projects', id), data);
}

export async function deleteProject(id) {
  await deleteDoc(doc(ensureDb(), 'projects', id));
}
