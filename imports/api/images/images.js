import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';

export const Images = new FilesCollection({
  collectionName: 'Images',
  allowClientCode: true, // Disallow remove files from Client
  onBeforeUpload(file) {
    // Allow upload files under 10MB, and only in png/jpg/jpeg formats
    if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
      return true;
    }
    return "Merci d'uploader une image en .png, .jpg ou .jpeg et de taille inférieure à 10MB";
  }
});