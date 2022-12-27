import React, {useCallback, useMemo, useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import styles from '../styles/Home.module.css';

function Home() {

  return (
    <>
      {/* <input onChange={(e) => {setPlace(e.target.value)}}></input>
      <button onClick={() => {setSearch(true)}}>검색</button> */}
        <div className={styles.wrapper}>
          <img className={styles.circleimg} src='/circle.png' />      
          <span className={styles.text1}>나만의 공간을 찾아서,</span>
          <span className={styles.text2}>Search Place</span>
          <img className={styles.bgimg} src='/image.png'></img>
        </div>
    </>
  )
}

export default Home;