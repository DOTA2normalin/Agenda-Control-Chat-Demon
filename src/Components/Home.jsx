import React from 'react'
import { Container, Row , Col} from 'react-bootstrap';
import {Image} from 'react-bootstrap';
import logo from '../img/agenda.jpg';
import '../estilos/Home.css';

const Home=()=>{
   return(
      <Container>
         <label  className="logo" >Bienvenido a la Agenda de control</label>
         <Row >
            <Col xs={6} md={4}>
               <Image src={logo} 
               className="img-logo"/>
            </Col>
         </Row>
      </Container>
   )
}
export default Home;