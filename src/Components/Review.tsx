import styles from "../styles/Detail.module.css";
import { dataType, reviewType } from "../Constants/type";

function DrawReview(data : dataType) {
  return (
    <div className={styles.reviewWrapper}>
      {data.reviews?.map((reivew: reviewType, i)=>(
        
        <div key={i} className={styles.reviews}>
          <div className={styles.profile}>
            <img className={styles.profilePhoto} src={reivew.profile_photo_url} />
            <div style={{width: '100%'}} className={styles.author}>{reivew.author_name}</div>
          </div>
          <div style={{width: '100%'}} className={styles.rating}>{drawReviewStar(reivew.rating)}</div>
          <div style={{width: '100%'}} className={styles.time}>{reivew.relative_time_description}</div>
          <div style={{width: '100%'}} className={styles.text}>{reivew.text}</div>
        </div>
        
      ))}
    </div>
  )
}

function drawReviewStar(rate : number) {
  let star = ''
  for(let i = 0; i < rate; i++) {
    star += '★'
  }
  for(let i = 0; i < 5-rate; i++) {
    star += '☆'
  }
  return (
    star
  )
}

export default DrawReview