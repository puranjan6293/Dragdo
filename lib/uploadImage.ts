import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile(
    "64fd9412cd6ec590f312",
    ID.unique(),
    file
  );
  return fileUploaded;
};
export default uploadImage;
