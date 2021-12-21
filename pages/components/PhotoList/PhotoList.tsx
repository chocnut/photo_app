import styles from "../../../styles/Home.module.css";
import { PhotoCard } from "../PhotoCard";
import { Photo } from "../../../types";

type Props = {
  photos: Photo[];
};

const PhotoList = ({ photos }: Props) => {
  return (
    <div className={styles.gallery}>
      {photos?.map((photo: Photo) => (
        <PhotoCard key={photo.id} photo={photo} />
      ))}
    </div>
  );
};

export default PhotoList;
