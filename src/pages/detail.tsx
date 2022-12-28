import { useDispatch, useSelector} from "react-redux";
import styles from "../styles/Detail.module.css";
import {Button, ListGroup} from 'react-bootstrap';

interface reviewType {
  author_name: string,
  profile_photo_url: string,
  rating: number,
  text: string,
  relative_time_description: string,
}
interface dataType {
  name: string,
  reviews: string[],
  photos: photosType[],
  formatted_address: string,
  formatted_phone_number: string,
  website: string,
  rating: number,
  geometry: {
    location: {
      lat: number,
      lng: number,
    }
  },
  wheelchair_accessible_entrance?: boolean,
  
}
interface photosType {
  photo_reference: string,
}

function Detail() {
  let result = useSelector((state?):any => state);
  console.log(result);
  console.log('result', result.data.data);
  let data = result.data.data
  console.log(data.name);
  return (
    <div className={styles.wrapper}>
       <div className={styles.contents}>
        <span className={styles.name}>{data.name}</span>
        <hr />
        <div className={styles.detailWrapper}>
        <Button
          className={styles.button}
          variant="outline-secondary">
          정보수정
        </Button>
        <div className={styles.detail}>
          <ListGroup className={styles.list} style={{width: '100%'}}>
            <ListGroup.Item style={{width: '100%'}}>💻 웹사이트</ListGroup.Item>
            <ListGroup.Item style={{width: '100%'}}id={styles.inform}>{data.website}</ListGroup.Item>
            <ListGroup.Item style={{width: '100%'}}>📍 주소</ListGroup.Item>
            <ListGroup.Item style={{width: '100%'}} id={styles.inform}>{data.formatted_address}</ListGroup.Item>
            <ListGroup.Item style={{width: '100%'}}>📞 연락처</ListGroup.Item>
            <ListGroup.Item style={{width: '100%'}} id={styles.inform}>{data.formatted_phone_number}</ListGroup.Item>
            <ListGroup.Item style={{width: '100%'}}>👨‍🦽 배리어프리</ListGroup.Item>
            <ListGroup.Item style={{width: '100%'}} id={styles.inform}>{data.wheelchair_accessible_entrance === true ? <span>O</span> : <span>X</span>}</ListGroup.Item>
            <ListGroup.Item style={{width: '100%'}}>💫 평점</ListGroup.Item>
            <ListGroup.Item style={{width: '100%'}} id={styles.inform}>{data.rating}</ListGroup.Item>
            <ListGroup.Item style={{width: '100%'}}>🔍 위도 / 경도</ListGroup.Item>
            <ListGroup.Item style={{width: '100%'}} id={styles.inform}>{data.geometry.location.lat} / {data.geometry.location.lng}</ListGroup.Item>
          </ListGroup>
          </div>
        </div>
        
        <div className={styles.reviewWrapper}>
          {data.reviews.map((reivew: reviewType)=>(
            
            <div className={styles.reviews}>
              <div className={styles.profile}>
                <img className={styles.profilePhoto} src={reivew.profile_photo_url} />
                <div style={{width: '100%'}} className={styles.author}>{reivew.author_name}</div>
              </div>
              <div style={{width: '100%'}} className={styles.rating}>{drawReview(reivew.rating)}</div>
              <div style={{width: '100%'}} className={styles.time}>{reivew.relative_time_description}</div>
              <div style={{width: '100%'}} className={styles.text}>{reivew.text}</div>
            </div>
            
          ))}
        </div>
        <div className={styles.photos}>

        </div>
        <div style={{height: '2rem'}}></div>
      </div> 
    </div>
  )

}

function drawReview(rate : number) {
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

export default Detail