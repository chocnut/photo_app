import styles from "../../../styles/Home.module.css";

import { PhotoCard } from "../PhotoCard";
import { Photo } from "../../types";

type Props = {
  photos: Photo[];
};

const PhotoList = ({ photos }: Props) => {
  return (
    <div className={styles.gallery}>
      {photos.length > 0 ? (
        photos?.map((photo: Photo) => (
          <PhotoCard key={photo.id} photo={photo} />
        ))
      ) : (
        <span className={styles.noResult}>No Photos Found!</span>
      )}
    </div>
  );
};

export default PhotoList;
