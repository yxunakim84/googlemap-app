import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate, Route, Routes } from 'react-router-dom';
import Search from '../pages/search';
import Detail from '../pages/detail';
import Home from '../pages/home';
import Edit from '../pages/edit';

function ColorSchemesExample() {
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{position: 'absolute', top: '0', zIndex: '10', width: '375px'}}>
        <Container>
          <Navbar.Brand onClick={() => navigate('/')}>Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/search')}>Search</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail')}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/detail' element={<Detail />}/>
        <Route path='/edit' element={<Edit />}/>
      </Routes>
    </>
  );
}

export default ColorSchemesExample;