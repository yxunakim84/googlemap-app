import { useDispatch, useSelector} from "react-redux";
import styles from "../styles/Edit.module.css";
import {Button, ListGroup, Form, InputGroup, Overlay, Alert} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { dataType } from "../Constants/type";
import { EditName, EditWebsite, EditAddress, EditContact, EditWheelchair, EditRate, EditLocation } from "../store";


function Edit() {
  let result = useSelector((state?):any => state);
  let data : dataType = result.data;
  let [name, setName] = useState(data.name);
  let [website, setWebsite] = useState(data.website);
  let [address, setAddress] = useState(data.formatted_address);
  let [contact, setContact] = useState(data.formatted_phone_number);
  let [wheelchair, setWheelchair] = useState(data.wheelchair_accessible_entrance === true ? 'O' : 'X');
  let [rate, setRate] = useState(data.rating?.toString());
  let [location, setLocation] = useState([data.geometry.location.lat?.toString(), data.geometry.location.lng?.toString()]);
  let navigate = useNavigate();
  const [show, setShow] = useState(false);
  const target = useRef(null);
  let dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      {
        show === true ?
        <div className={styles.alertWrapper}>
          <Alert show={show} variant="success" className={styles.alert}>
            <span className={styles.alertText}>수정되었습니다!</span>
            <Button onClick={() => setShow(false)}>
              Close
            </Button>
        </Alert>
        </div>
        : ""
      }
      <div className={styles.contents}>
          <div className={styles.title}>정보 수정</div>
          <img className={styles.back} src="/back.png" onClick={()=>{navigate('/detail')}}/>      
      <ListGroup className={styles.list} style={{width: '90%'}}>
          <ListGroup.Item>📌 이름</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={name}
              onChange={(e:any)=>{setName(e.target.value)}}
              />
            
            <Button
              ref={target}
              onClick={()=>{dispatch(EditName(name)); setShow(true);}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>

          <ListGroup.Item>💻 웹사이트</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={website}
              onChange={(e:any)=>{setWebsite(e.target.value)}}
              />
            <Button
              onClick={()=>{dispatch(EditWebsite(website)); setShow(true);}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>

          <ListGroup.Item>📍 주소</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={address}
              onChange={(e:any)=>{setAddress(e.target.value)}}
              />
            <Button 
              onClick={()=>{dispatch(EditAddress(address)); setShow(true);}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>

          <ListGroup.Item>📞 연락처</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={contact}
              onChange={(e:any)=>{setContact(e.target.value)}}
              />
            <Button
              onClick={()=>{dispatch(EditContact(contact)); setShow(true);}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>

          <ListGroup.Item>👨‍🦽 배리어프리</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={wheelchair}
              onChange={(e:any)=>{setWheelchair(e.target.value)}}
              />
            <Button
              onClick={()=>{wheelchair === 'O' ? dispatch(EditWheelchair(true)) : dispatch(EditWheelchair(false)); setShow(true);}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>

          <ListGroup.Item>💫 평점</ListGroup.Item>
          <InputGroup>
            <Form.Control
              value={rate}
              onChange={(e:any)=>{setRate(e.target.value)}}
              />
            <Button
              onClick={()=>{dispatch(EditRate(Number(rate))); setShow(true);}}
              variant="outline-secondary" id="button-addon2">
              edit
            </Button>
          </InputGroup>            

          <ListGroup.Item>🔍 위도 / 경도</ListGroup.Item>
          <InputGroup>
            <Form.Control
              style={{borderBottomLeftRadius: '0.375rem'}}
              value={`${location[0]} / ${location[1]}`}
              onChange={(e:any)=>{setLocation(getLocation(e.target.value)); setShow(true);}}
              />
            <Button 
              onClick={()=>{dispatch(EditLocation([Number(location[0]), Number(location[1])])); setShow(true);}}
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