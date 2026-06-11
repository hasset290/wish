import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

export async function uploadImage(file, path) {
  if (!file) throw new Error("No file selected");
  const imageRef = ref(storage, path);
  await uploadBytes(imageRef, file, {
    contentType: file.type || "image/jpeg"
  });
  const imageUrl = await getDownloadURL(imageRef);
  return { imageUrl, storagePath: path };
}

export async function deleteImage(storagePath) {
  if (!storagePath) return;
  await deleteObject(ref(storage, storagePath));
}
