import React from 'react';
// import Button from 'react-bootstrap/Button';
import Header from './components/Header/Header';
import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Menu from "./components/Menu/Menu"
// import PageDetail from './Page/PageDetail/PageDatail';
import CssModulePage from './Page/CssModulePage/CssModulePage';
import Routes from './Page/Routes';


function App() {
  return (
    <div >
      <Header />
      <Container>
        <Row>
          <Col lg={2}><Menu /></Col>
          <Col lg={10}> 
          <Routes />
            {/* <PageDetail /> */}
            {/* <CssModulePage /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
