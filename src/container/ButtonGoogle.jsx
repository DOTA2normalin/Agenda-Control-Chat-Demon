import React, { Component } from "react";
import { app } from "../firebase/index.js";
import "firebase/auth";
import firebase from "firebase";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Links from '../Components/Links';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
// Añadir navegacion
class ButtonGoogle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() {
    app.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({ user: user });
      }
      else{
        this.setState({user : null});
      }
    });
  }
  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();
    app
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        console.log(`${result.user.email} ha iniciado sesion`);
      })
      .catch((error) => 
      console.error(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    app
      .auth()
      .signOut()
      .then((result) => {
        console.log(`${result.user.email} ha salido`);
      })
      .catch((error) => 
      console.error(`Error: ${error.code}: ${error.message}`));
  }

  renderLoginButton() {
    if (this.state.user) {
      return (
        <div>
          <Navbar bg="dark">
              <Navbar.Brand > Inicio sesion con Google </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto mt-4 mb-4"></Nav>
              <Form  inline>
                <img 
                    width='40'
                    className='mr-5'
                    src={this.state.user.photoURL}
                    alt=''
                />
                <div className="flex">
                  <p className='mr-5'>{this.state.user.email}</p>
                  <p className='mr-5'>{this.state.user.displayName}</p>
                </div>
                <Button
                    className='mr-5'
                    onClick={this.handleLogout}>Salir
                </Button>

            </Form>
            </Navbar.Collapse>
          </Navbar>
          <Links/>
        </div>
      );
    } else {
      return (
        <Button onClick={this.handleAuth} className="App-btn">
          Iniciar sesion con Google
        </Button>
      );
    }
  }
  render() {
    return (
      <Container className="App">
        <p className="App-Intro">{this.renderLoginButton()}</p>
      </Container>
    );
  }
}

export default ButtonGoogle;
