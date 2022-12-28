import React, {useCallback, useMemo, useState} from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import './App.module.css';
import {Button, Row, Col, Container, Nav} from 'react-bootstrap';
import axios from 'axios';
import { useRef, useEffect } from "react"
import styles from './App.module.css';
import { Layout } from './Components/Layout';
import Navbar from './Components/Navbar';
function App() {
  return (
    <div className='bg'>
      <Navbar />
    </div>
  )
}

export default App;