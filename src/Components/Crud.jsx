import React from 'react';
import { Container } from 'react-bootstrap';

const Crud=()=>{
   return(
      <Container>
         <div className="text-center mt-5 mb-5">
            <h1>Aplicacion de Contactos Publicas</h1>
         </div>
         <div className="jumbotron"> 
            <h3>¿Para que hizo?</h3>
            <h4 className="text-dark">
               Esta aplicacion se hizo con el motivo de permitir a las personas que puedan registrar o guardar contactos de sus amigos, familias, etc.
               Pero a su vez tiene que tener una cuenta en esta aplicacion para asi poder visualizar los contactos, estos contactos son visuales para 
               todos los usuarios, ya que son publicas. 
            </h4>
            <h4 className="text-dark">
               Ademas estos contactos pueden ser eliminados y a su pueden ser editados. Este aplicacion es parecida a Google ya que Google te permite 
               almacenar una gran cantidad de contactos, pero Google te permite muchas cosas no solo almacenar si no que podemos contactarnos. <br/>
               A difirencia de Google o otras aplicaciones que puedan almacenar contactos esta Aplicacion de Contactos Publicas, como su nombre lo 
               indica son publicas ya que todos los usuarios que tenga una cuenta pueden visualizar los contactos ya sea el email, nombr o telefono.<br/>
               No obstante, ademas de eso podemos registranos con nuestra cuenta de Google y Facebook.
            </h4>
         </div>
      </Container>
   )
}

export default Crud;