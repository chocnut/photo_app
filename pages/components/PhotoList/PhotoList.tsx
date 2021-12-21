import styles from "../../../styles/Home.module.css";
import Image from "next/image";
import { Photo } from "../../../types";

type Props = {
  photos: Photo[];
};
const PhotoList = ({ photos }: Props) => {
  return (
    <div className={styles.gallery}>
      {photos?.map((photo: Photo) => (
        <div key={photo.id} className={styles.galleryItem}>
          <Image
            className={styles.galleryImage}
            src={photo.src.portrait}
            height={500}
            width={500}
            alt={photo.alt}
          />
          <div className={styles.galleryItemInfo}>
            <ul>
              <li
                data-testid="photographer-name"
                className={styles.galleryItemPhotographer}
              >
                {photo.photographer}
              </li>
              <li
                data-testid="photographer-url"
                className={styles.galleryItemPhotographerUrl}
              >
                {photo.photographer_url}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
