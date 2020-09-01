import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';

function Header(){
    return(
        <Container>
            <Navbar bg="light">

                <Navbar.Brand>Story book</Navbar.Brand>
                <Link to="/"> book of Рецептов</Link>
            </Navbar>
        </Container>
    )
};
export default Header;