import { useDispatch, useSelector} from "react-redux";
import styles from "../styles/Detail.module.css";
import {Button, ListGroup, ButtonGroup} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { reviewType, dataType, photosType } from "../Constants/type";
import drawReview from "../Components/Review";
import drawPhotos from "../Components/Photo";

function Detail() {
  let result = useSelector((state?):any => state);
  // console.log(result);
  // console.log('result', result.data.data);
  let data : dataType = result.data.data;
  // console.log(data?.photos);
  let navigate = useNavigate();
  let [review, setReview] = useState(true);
  let [photo, setPhoto] = useState(false);
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
            <Button variant="secondary"
              onClick={() => {setPhoto(false); setReview(true);}}
              style={review === true ? {opacity: '0.95'} : {opacity: '0.7'}}
            >reviews</Button>
            <Button variant="secondary"
              onClick={() => {setReview(false); setPhoto(true);}}
              style={photo === true ? {opacity: '0.95'} : {opacity: '0.7'}}
            >photos</Button>
          </ButtonGroup>
          
          {
            review === true ? drawReview(data) : drawPhotos(data)
          }
        </div> 
      }
    </div>
  )

}

export default Detail