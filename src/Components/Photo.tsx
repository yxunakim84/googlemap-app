import styles from "../styles/Detail.module.css";
import { dataType } from "../Constants/type";


function drawPhotos(data : dataType) {

  return (
    <div className={styles.photos}>
      <div className={styles.photoList}>
        {data.photos?.map((photo) => (
          <img className={styles.placeImg} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${photo.photo_reference}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`}/>
        ))
        }
      </div>
    </div>
  )
}

export default drawPhotos