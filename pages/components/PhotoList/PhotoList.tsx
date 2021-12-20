import styles from "../../../styles/Home.module.css";
import Image from "next/image";

const PhotoList = ({ photos }) => {
  return (
    <div className={styles.gallery}>
      {photos?.map((photo) => (
        <div key={photo.id} className={styles.galleryItem}>
          <Image
            className={styles.galleryImage}
            src={photo.src.portrait}
            height={500}
            width={500}
            alt="Photo Card"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoList;
