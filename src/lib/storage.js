import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase';

export async function uploadFile(file, path) {
  const storageRef = ref(storage, path);
  const snapshot = await uploadBytes(storageRef, file);
  const url = await getDownloadURL(snapshot.ref);
  return url;
}

export async function uploadImage(file, folder = 'images') {
  const filename = `${folder}/${Date.now()}-${file.name}`;
  return uploadFile(file, filename);
}
