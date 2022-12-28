import { useDispatch, useSelector} from "react-redux";
import styles from "../styles/Edit.module.css";
import {Button, ListGroup, Form, InputGroup} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { reviewType, dataType, photosType } from "../Constants/type";
import drawReview from "../Components/Review";
import drawPhotos from "../Components/Photo";
// import { loadData } from "../store";
import { loadData, EditName, EditWebsite, EditAddress, EditContact, EditWheelchair, EditRate, EditLocation } from "../store";

function Edit() {
  let result = useSelector((state?):any => state);
  let data : dataType = result.data;
  let [name, setName] = useState(data.name);
  let [website, setWebsite] = useState(data.website);
  let [address, setAddress] = useState(data.formatted_address);
  let [contact, setContact] = useState(data.formatted_phone_number);
  let [wheelchair, setWheelchair] = useState(data.wheelchair_accessible_entrance === true ? 'O' : 'X');
  let [rate, setRate] = useState(data.rating.toString());
  let [location, setLocation] = useState([data.geometry.location.lat.toString(), data.geometry.location.lng.toString()]);
  let dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.contents}>
        <div className={styles.title}>정보 수정</div>
      <ListGroup className={styles.list} style={{width: '90%'}}>
          <ListGroup.Item>📌 이름</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              />
            <Button
              onClick={()=>{dispatch(EditName(name))}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>

          <ListGroup.Item>💻 웹사이트</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={website}
              onChange={(e)=>{setWebsite(e.target.value)}}
              />
            <Button
              onClick={()=>{dispatch(EditWebsite(website))}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>

          <ListGroup.Item>📍 주소</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={address}
              onChange={(e)=>{setAddress(e.target.value)}}
              />
            <Button 
              onClick={()=>{dispatch(EditAddress(address))}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>

          <ListGroup.Item>📞 연락처</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={contact}
              onChange={(e)=>{setContact(e.target.value)}}
              />
            <Button
              onClick={()=>{dispatch(EditContact(contact))}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>

          <ListGroup.Item>👨‍🦽 배리어프리</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={wheelchair}
              onChange={(e)=>{setWheelchair(e.target.value)}}
              />
            <Button
              onClick={()=>{wheelchair === 'O' ? dispatch(EditWheelchair(true)) : dispatch(EditWheelchair(false))}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>

          <ListGroup.Item>💫 평점</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={rate}
              onChange={(e)=>{setRate(e.target.value)}}
              />
            <Button
              onClick={()=>{dispatch(EditRate(Number(rate)))}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>            

          <ListGroup.Item>🔍 위도 / 경도</ListGroup.Item>
          <InputGroup>
            <Form.Control
              style={{borderBottomLeftRadius: '0.375rem'}}
              value={`${location[0]} / ${location[1]}`}
              onChange={(e)=>{setLocation(getLocation(e.target.value))}}
              />
            <Button 
              onClick={()=>{dispatch(EditLocation([Number(location[0]), Number(location[1])]))}}
              style={{borderBottomRightRadius: '0.375rem'}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>
      </ListGroup>
      </div>
    </div>
  )
}

function getLocation(location : string) : string[] {
  const result = location.split('/');
  var reg = /\s/g;
  let lat = result[0];
  let lng = result[1];
  if(reg.test(lat)) {
    lat = lat.replace(reg, "");
  }
  if(reg.test(lng)) {
    lng = lng.replace(reg, "");
  }
  
  return [lat, lng];
  
}

export default Edit