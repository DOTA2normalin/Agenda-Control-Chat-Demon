import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import 'firebase/auth';
import {useFirebaseApp,useUser} from "reactfire";
import { useForm } from "react-hook-form";
import Links from "./Links";
import {Image} from 'react-bootstrap';
import '../estilos/Login.css'
import { Link } from "react-router-dom";
import inicio from '../img/inicio.png'

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const firebase = useFirebaseApp();
  const usuario = useUser();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = async (data, e) => {
    console.log(data);
    await setEmail(data.email);
    await setPassword(data.password);
    await firebase.auth().signInWithEmailAndPassword(data.email,data.password).then(()=>{
    })
    .catch  (()=>{
      alert("This account is not registered... please register");
    })

    e.target.reset();
  };

  const logout = async() => {
    await firebase.auth().signOut();
    alert("you want to get out of the account?");

  };

  return(
    <Container className="wrapper">
    <div className="logout">
        {usuario  && 
          <div className="sesion">
            <p style={{
              marginTop: '20px',
              marginLeft:'58px',
              fontFamily: 'Arial',

            }}> Bienvenido  Usuario: {usuario.email}</p>
            
            <p></p>
            <Button className="btn btn-outline-warning" 
            onClick={logout} >Cerrar Sesión</Button>
            <Links/>
          </div>
        }
    </div>    
        {!usuario && 
          <Col>
            <Form className="form-wrapper" aria-controls="responsive"
             onSubmit={handleSubmit(onSubmit)}>
               <Image src={inicio}
              className="inicio"></Image>
              <Form.Label className="title">Inicio de sesion</Form.Label>
              
              <Form.Group className="input-div">
                <Form.Group>
                  <Form.Label className="label" htmlFor="email">Email</Form.Label>
                  <Form.Control
                    className="email-login"
                    type="email"
                    name="email"
                    placeholder="email@unsa.edu.pe"
                    ref={register({
                      required: {
                        value: true,
                        pattern: /^[a-z]+@[a-z]+(?:\.[a-z]+)*$/,
                        message: "Ingrese su email por favor",
                      },
                    })}
                  />
                  <p className="error">{errors.email?.message}</p>
                </Form.Group>
              </Form.Group>

              <Form.Group className="input-div">
                <Form.Group>
                  <Form.Label className="label"htmlFor="password">Password</Form.Label>
                  <Form.Control
                    className="password-login"
                    type="password"
                    name="password"
                    placeholder="password"
                    ref={register({
                      required: {
                        value: true,
                        message: "Ingrese su contraseña por favor",
                      },
                    })}

                  />
                  <p className="error">{errors.password?.message}</p>
                </Form.Group>
              </Form.Group>
              <Form.Group>
                  <Button type="submit" className="ingresar">Ingresar</Button>
              </Form.Group>
            </Form>
          </Col>
        }  
    </Container> 
  );
};

export default Login;
