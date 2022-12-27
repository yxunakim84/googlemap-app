import React, {useCallback, useMemo, useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.module.css';
// import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import axios from 'axios';
import { useRef, useEffect } from "react"
import styles from './App.module.css';
import { Layout } from './Components/Layout';
import Navbar from './Components/Navbar';
function App() {

  // let [inform, setInform] = useState('');
  // let [place, setPlace] = useState('');
  // let [search, setSearch] = useState(false);
  // if(search === true) {
  //   axios.get('/maps'+`/api/place/textsearch/json?query=${place}&key=AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk`)
  //   .then((res) => {console.log(res.data.results); setInform(res.data.results); setSearch(false)})
  //   .catch(() => {
  //     console.log('실패');
  //   })
  // }
  
  return (
    <div className='bg'>
      <Navbar />
      {/* <input onChange={(e) => {setPlace(e.target.value)}}></input>
      <button onClick={() => {setSearch(true)}}>검색</button> */}
        {/* <div className={styles.wrapper}>
          <img className={styles.circleimg} src='/circle.png' />      
          <span className={styles.text1}>나만의 공간을 찾아서,</span>
          <span className={styles.text2}>Search Place</span>
          <img className={styles.bgimg} src='/image.png'></img>
        </div> */}
    </div>
  )
}

export default App;