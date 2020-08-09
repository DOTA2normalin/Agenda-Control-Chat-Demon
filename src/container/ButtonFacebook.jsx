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
class ButtonFacebook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFacebook: null,
    };
    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }
  componentWillMount() {
    app.auth().onAuthStateChanged((userFacebook) => {
      this.setState({ userFacebook });
    });
  }
  handleAuth() {
    let pr = new firebase.auth.FacebookAuthProvider();
    pr.addScope('public_profile')
    app
      .auth()
      .signInWithPopup(pr)
      .then(function(result) {
        alert(`${result.userFacebook.email} ha iniciado sesion`);
      }).catch((error) => 
      console.log(`Error ${error.code}: ${error.message}`));

  }

  handleLogout() {
    app
      .auth()
      .signOut()
      .then(() => {
        console.log("ha salido");
      })
      .catch(() => console.log("error al salir"));
  }

  renderLoginButton() {
    if (this.state.userFacebook) {
      return (
        <div>
          <Navbar bg="dark">
              <Navbar.Brand > Inicio sesion con Facebook </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav" >
              <Nav className="mr-auto mt-4 mb-4"></Nav>
              <Form  inline>
                <img 
                    width='40'
                    className='mr-5'
                    src={this.state.userFacebook.photoURL}
                    alt=''
                />
                <div className="flex">
                  <p className='mr-5'>{this.state.userFacebook.email}</p>
                  <p className='mr-5'>{this.state.userFacebook.displayName}</p>
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
          Iniciar sesion con Facebook
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

export default ButtonFacebook;
