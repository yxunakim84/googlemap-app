import styles from '../styles/Search.module.css';
import React, {useCallback, useMemo, useState} from 'react';
import {Button, Form, InputGroup, Container, Nav} from 'react-bootstrap';
import axios from 'axios';
import { useRef, useEffect } from "react";

interface placeInforms {
  name: string,
  reviews: string[],
  photos: photosType[],
  formatted_address: string,
  formatted_phone_number: string,
  website: string,
  rating: number,
}

interface photosType {
  photo_reference: string,
}

function Search() {
  let [inform, setInform] = useState<placeInforms>();
  // let [inform, setInform] = useState<placeInforms>();
  let [place, setPlace] = useState('');
  let [placeId, setPlaceId] = useState('');
  let [search, setSearch] = useState(false);
  let [count, setCount] = useState(0);

  // const fetchData = () => {
  //   console.log('clicked');
  //   // setPlace(''); setInform(undefined);
  //   axios.get('/maps'+`/api/place/textsearch/json?query=${place}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`)
  //     .then((res) => {setPlaceId(res.data.results[0].place_id); console.log(placeId)})
  //     .catch(() => {
  //       console.log('실패');
  //     });
      
  //     axios.get('/maps'+`/api/place/details/json?fields=name%2Crating%2Cformatted_phone_number%2Cformatted_address%2Cphoto%2Cwebsite%2Creviews&place_id=${placeId}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`)
  //     .then((res) => {console.log(res.data.result.photos); setInform(res.data.result)})
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

    
  useEffect(() => {
      console.log('렌더');
      console.log(place);
      console.log(placeId);
      
      //placeId 가 업뎃이 바로 안됨 placeId 가 바뀌기 전에 다음 request 가 진행되어 업뎃이 안되는거였음
      axios.get('/maps'+`/api/place/textsearch/json?query=${place}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`)
      .then((res) => {setPlaceId(res.data.results[0].place_id);})
      .catch(() => {
        console.log('실패');
      });
      
      
      // axios.get('/maps'+`/api/place/details/json?fields=name%2Crating%2Cformatted_phone_number%2Cformatted_address%2Cphoto%2Cwebsite%2Creviews&place_id=${placeId}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`)
      // .then((res) => {console.log(res.data.result.photos); setInform(res.data.result)})
      // .catch((err) => {
      //   console.log(err);
      // });
      
    
      // axios.get('/maps'+`/api/place/photo?maxwidth=400&photo_reference=${inform?.photos[0].photo_reference}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`)
      // .then((res) => {console.log(res)})
      // console.log(inform);
  }, [count]);

  useEffect(() => {
    axios.get('/maps'+`/api/place/details/json?fields=name%2Crating%2Cformatted_phone_number%2Cformatted_address%2Cphoto%2Cwebsite%2Creviews&place_id=${placeId}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`)
    .then((res) => {console.log(res.data.result.photos); setInform(res.data.result)})
    .catch((err) => {
      console.log(err);
    });
  }, [placeId]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
        <InputGroup className={styles.input}>
        <Form.Control
          // onClick={() => {setSearch(false)}}
          onChange={(e) => {setPlace(e.target.value); console.log(place, e.target.value)}}
          placeholder="공간을 검색해주세요 !"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          variant="outline-secondary" 
          className={styles.button}
          onClick={() => {
            setSearch(true);
            setCount((prev) => (prev+1))
            // setCount((prev)=>(prev+1)); console.log(place) 
          }}
        >
          <img src='/search.png' className={styles.searchImg} />
        </Button>
        </InputGroup>
      </div>
      <div className={styles.result}>
        <div className={styles.informBox}>
        {search === false ?
        <>
          <span className={styles.notice}>searching...</span>
          <img src='/dog.png' className={styles.dogImg}/>
        </>
          : 
          <div className={styles.cardBox}>
              <span className={styles.title}>{inform?.name}</span>
              {/* <div className={styles.item}> */}
              <div className={styles.contentBox}>
                <span className={styles.address}>
                  <img src='/spot.png' />
                  {inform?.formatted_address}
                </span>
              {/* </div> */}
              {/* <div className={styles.item}> */}
                <span className={styles.website}>
                  <img src='/website.png' />
                  {inform?.website}
                </span>
                {/* </div>
                <div className={styles.item}> */}
                <span className={styles.contact}>
                  <img src='/contact.png' />
                  {inform?.formatted_phone_number}
                </span>
                {/* </div> */}
              </div>
              <div className={styles.imgWrapper}>
                <img className={styles.placeImg} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${inform?.photos[0].photo_reference}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`}/>
                {/* <img className={styles.placeImg} src={'/dog.png'}/> */}
              </div>
            </div>
        } 
        </div>
      </div>
    </div>
  )
}



export default Search