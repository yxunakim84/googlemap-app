import { useDispatch, useSelector} from "react-redux";
import styles from "../styles/Detail.module.css";
import {Button, ListGroup, ButtonGroup} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

interface reviewType {
  author_name: string,
  profile_photo_url: string,
  rating: number,
  text: string,
  relative_time_description: string,
}
interface dataType {
  name: string,
  reviews: reviewType[],
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
  types: string[],
  wheelchair_accessible_entrance?: boolean,
  
}
interface photosType {
  photo_reference: string,
}

function Detail() {
  let result = useSelector((state?):any => state);
  console.log(result);
  console.log('result', result.data.data);
  let data : dataType = result.data.data
  console.log(data?.photos);
  let navigate = useNavigate();
  return (
    <div className={styles.wrapper}>
      {result.data.data === '' 
      ? 
        <div className={styles.alertContents}>
          <div>장소를 먼저 검색해주세요 !</div>
          <Button 
            className={styles.button}
            variant="outline-secondary" 
            onClick={() => navigate('/search')}>
              장소검색하러 가기
          </Button>
          <img className={styles.dog2} src="/dog2.png" />
        </div>
      :
      
       <div className={styles.contents}>
        <span className={styles.name}>{data.name}
        </span>
        <div className={styles.type}>{data.types[0]}</div>
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
            <ListGroup.Item style={{width: '100%'}} id={styles.inform}
              onClick={()=>{ window.open(`${data.website}`)}}
            >
              {data.website}
            </ListGroup.Item>
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
        <ButtonGroup aria-label="Basic example" className={styles.buttonGroup}>
          <Button variant="secondary">reviews</Button>
          <Button variant="secondary">photos</Button>
        </ButtonGroup>
        <div className={styles.reviewWrapper}>
          {data.reviews?.map((reivew: reviewType)=>(
            
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
          <div className={styles.photoList}>
            {data.photos?.map((photo) => (
              <img className={styles.placeImg} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${photo.photo_reference}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`}/>
            ))
            }
          </div>
        </div>
        
      </div> 
  }
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