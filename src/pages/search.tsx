import styles from '../styles/Search.module.css';
import {useState} from 'react';
import {Button, Form, InputGroup} from 'react-bootstrap';
import axios from 'axios';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { loadData } from '../store';
import { useNavigate } from 'react-router-dom';
import { placeInforms } from '../Constants/type';

function Search() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [inform, setInform] = useState<placeInforms>();
  const [place, setPlace] = useState('');
  const [placeId, setPlaceId] = useState('');
  const [search, setSearch] = useState(false);
  const [count, setCount] = useState(0);
  const [noData, setNoData] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [next, setNext] = useState(0);
  
  useEffect(() => {
    if(count === 0) {
      return;
    }
    else {
      axios.get(`/maps/api/place/textsearch/json?query=${place}&key=${API_KEY}`)
      // axios.get(`https://maps.googleapis.com/maps/api/place/details/json?fields=/json?query=${place}&key=${API_KEY}`)
      .then((res) => { console.log(place, placeId); setPlaceId(res.data.results[0].place_id); setNext((prev)=>(prev+1))})
      .catch((err) => {
        console.log(err);
        setNoData(true);
        setSearch(false);
      });
      
    }
  }, [count]);

  useEffect(() => {
    if(placeId === '') {
      return
    }
    else {
      setNoData(false);
      axios.get('/maps'+`/api/place/details/json?fields=name%2Ctypes%2Crating%2Cformatted_phone_number%2Cformatted_address%2Cphoto%2Cwebsite%2Creviews%2Cwheelchair_accessible_entrance%2Cgeometry&place_id=${placeId}&key=${API_KEY}`)
      // axios.get(`https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Ctypes%2Crating%2Cformatted_phone_number%2Cformatted_address%2Cphoto%2Cwebsite%2Creviews%2Cwheelchair_accessible_entrance%2Cgeometry&place_id=${placeId}&key=${API_KEY}`)
      .then((res) => {console.log(res); setSearch(true); setInform(res.data.result)})
      .catch((err) => {
        setNoData(true);
        console.log('에러');
        console.log(err);
      });
    }
  }, [next]);


  return (
    <div className={styles.wrapper}>
      <div className={styles.searchBar}>
        <InputGroup className={styles.input}>
        <Form.Control
          onChange={(e : any) => {setPlace(e.target.value)}}
          placeholder="공간을 검색해주세요 !"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button
          variant="outline-secondary" 
          className={styles.button}
          onClick={() => {
            setSearch(false);
            setCount((prev) => (prev+1));
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/search.png`} alt='' className={styles.searchImg} />
        </Button>
        </InputGroup>
      </div>
      
      <div className={styles.result}>
        <div className={styles.informBox}>
        
        {search === false ?
          <>
            <span className={styles.notice}>{noData === true ? <div>NoData</div> : <div>searching...</div>}</span>
            <img src={`${process.env.PUBLIC_URL}/dog.png`} alt='' className={styles.dogImg}/>
          </>
          : 
          <div className={styles.cardBox}
            onClick={()=>{
              dispatch(loadData(inform));
              navigate('/detail');
            }}
          >
            <span className={styles.title}>{inform?.name}</span>
            <div className={styles.contentBox}>
              <span className={styles.address}>
                <img src={`${process.env.PUBLIC_URL}/spot.png`} />
                {inform?.formatted_address}
              </span>
              <span className={styles.website}>
                <img src={`${process.env.PUBLIC_URL}/website.png`} />
                {inform?.website}
              </span>
              <span className={styles.contact}>
                <img src={`${process.env.PUBLIC_URL}/contact.png` }/>
                {inform?.formatted_phone_number}
              </span>
              
            </div>
            <div className={styles.imgWrapper}>
              {inform?.photos !== undefined ? <img className={styles.placeImg} src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=500&photo_reference=${inform?.photos[0].photo_reference}&key=${API_KEY}`}/>
              : <img className={styles.dogImg} src={`${process.env.PUBLIC_URL}/dog.png`}/>
              }
            </div>
          </div>
        } 
        </div>
      </div>
    </div>
  )
}



export default Search