import styles from "../../../styles/Home.module.css";
import Image from "next/image";

import { Photo } from "../../../types";

type Props = {
  photo: Photo;
};

const PhotoCard = ({ photo }: Props) => {
  return (
    <div className={styles.galleryItem}>
      <a href={photo.url} target="_blank" rel="noreferrer">
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
      </a>
    </div>
  );
};

export default PhotoCard;
