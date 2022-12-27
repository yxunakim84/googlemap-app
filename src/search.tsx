import React, {useCallback} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.module.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import axios from 'axios';
import { useRef, useEffect } from "react"
import { GoogleMap, useLoadScript, useJsApiLoader } from '@react-google-maps/api';


function Search() {
  const {isLoaded} = useLoadScript({
    googleMapsApiKey: 'AIzaSyA7uIJhOTUODaL2FW7MBDqQzoG043xKnSk',
  });
  if(!isLoaded) return <div>Loading...</div>;
  return <Map />
}

function Map() {
  return <GoogleMap zoom={10} center={{lat: 44, lng: -80}} mapContainerStyle={{ height: '200px' }}></GoogleMap>
}

export default Search;