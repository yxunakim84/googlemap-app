import styles from '../styles/Search.module.css';
import React, {useCallback, useMemo, useState} from 'react';
import {Button, Form, InputGroup, Container, Nav} from 'react-bootstrap';
import axios from 'axios';
import { useRef, useEffect } from "react";

interface placeInforms {
  place_id: string,
  name: string,
  photos: string[],
  formatted_address: string,
}


function Search() {
  let [inform, setInform] = useState<placeInforms>();
  // let [inform, setInform] = useState<placeInforms>();
  let [place, setPlace] = useState('');
  let [search, setSearch] = useState(false);
  // console.log(search);
  // if(search === true) {
  //   axios.get('/maps'+`/api/place/textsearch/json?query=${place}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`)
  //   .then((res) => {console.log(res.data.results); setInform(res.data.results)})
  //   .catch(() => {
  //     console.log('실패');
  //   })
  // }
  

  useEffect(() => {
    setSearch(false);
  }, [])
  

  useEffect(() => {
    // const fetchData = async() => {
      axios.get('/maps'+`/api/place/textsearch/json?query=${place}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`)
      .then((res) => {setInform(res.data.results[0])})
      .catch(() => {
        console.log('실패');
      });
    // }
    // fetchData();
    console.log(inform);
    // console.log(inform.name);
  }, [search]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
      {/* <input onChange={(e) => {setPlace(e.target.value)}}></input>
      <button onClick={() => {setSearch(true)}}>검색</button> */}
        <InputGroup className={styles.input}>
        <Form.Control
          onClick={() => {setSearch(false)}}
          onChange={(e) => {setPlace(e.target.value)}}
          placeholder="공간을 검색해주세요 !"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          variant="outline-secondary" 
          className={styles.button}
          onClick={() => {setSearch(true)}}
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
              <div className={styles.contentBox}>
                <span className={styles.address}>
                  <img src='/spot.png' />
                  {inform?.formatted_address}
                </span>
                <span className={styles.website}>
                  <img src='/website.png' />
                  대충 웹사이트
                </span>
                <span className={styles.contact}>
                  <img src='/contact.png' />
                  대충 전번
                </span>
              </div>
              <div className={styles.imgWrapper}>
                <img className={styles.placeImg} src='/dog.png' />
              </div>
            </div>
        } 
        </div>
      </div>
    </div>
  )
}



export default Search