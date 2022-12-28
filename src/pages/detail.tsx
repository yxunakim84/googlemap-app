import { useDispatch, useSelector} from "react-redux";
import styles from "../styles/Detail.module.css";
import {Button, ListGroup} from 'react-bootstrap';

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
    <div className={styles.wrapper} style={{position: 'relative'}}>
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
      </div> 
    </div>
  )

}

export default Detail